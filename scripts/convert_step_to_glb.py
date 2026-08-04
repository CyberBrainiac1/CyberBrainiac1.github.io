"""Convert the portfolio's 3-DOF arm STEP assembly into a web-ready GLB.

The XCAF importer is used instead of CadQuery's geometry-only importer so the
part and face colors authored in the STEP assembly survive the conversion.
"""

from __future__ import annotations

import argparse
import tempfile
from pathlib import Path

import numpy as np
import trimesh
from OCP.BRepMesh import BRepMesh_IncrementalMesh
from OCP.Message import Message_ProgressRange
from OCP.RWGltf import RWGltf_CafWriter
from OCP.STEPCAFControl import STEPCAFControl_Reader
from OCP.TColStd import TColStd_IndexedDataMapOfStringString
from OCP.TCollection import TCollection_AsciiString, TCollection_ExtendedString
from OCP.TDataStd import TDataStd_Name
from OCP.TDF import TDF_LabelSequence
from OCP.TDocStd import TDocStd_Document
from OCP.XCAFApp import XCAFApp_Application
from OCP.XCAFDoc import XCAFDoc_DocumentTool, XCAFDoc_ShapeTool


# This is a detached bearing race in the source assembly, more than 300 mm
# away from the arm. It is not one of the two installed flange bearings.
HIDDEN_TOP_LEVEL_COMPONENTS = {"outer race"}


def label_name(label) -> str:
    name = TDataStd_Name()
    if label.FindAttribute(TDataStd_Name.GetID_s(), name):
        return name.Get().ToExtString()
    return ""


def load_xcaf_document(source: Path) -> TDocStd_Document:
    application = XCAFApp_Application.GetApplication_s()
    document = TDocStd_Document(TCollection_ExtendedString("MDTV-XCAF"))
    application.NewDocument(TCollection_ExtendedString("MDTV-XCAF"), document)

    reader = STEPCAFControl_Reader()
    reader.SetColorMode(True)
    reader.SetNameMode(True)
    reader.SetLayerMode(True)
    status = reader.ReadFile(str(source))
    if not str(status).endswith("RetDone") or not reader.Transfer(document):
        raise RuntimeError(f"Could not import {source} as an XCAF STEP document")
    return document


def remove_hidden_components(document: TDocStd_Document) -> list[str]:
    shape_tool = XCAFDoc_DocumentTool.ShapeTool_s(document.Main())
    roots = TDF_LabelSequence()
    shape_tool.GetFreeShapes(roots)
    removed: list[str] = []

    for root_index in range(1, roots.Length() + 1):
        components = TDF_LabelSequence()
        if not XCAFDoc_ShapeTool.GetComponents_s(
            roots.Value(root_index), components, False
        ):
            continue

        for component_index in range(1, components.Length() + 1):
            component = components.Value(component_index)
            name = label_name(component)
            if name in HIDDEN_TOP_LEVEL_COMPONENTS:
                shape_tool.RemoveComponent(component)
                removed.append(name)

    return removed


def export_colored_glb(
    document: TDocStd_Document,
    destination: Path,
    tolerance: float,
    angular_tolerance: float,
) -> None:
    shape_tool = XCAFDoc_DocumentTool.ShapeTool_s(document.Main())
    shape = shape_tool.GetOneShape()
    mesher = BRepMesh_IncrementalMesh(
        shape, tolerance, False, angular_tolerance, True
    )
    mesher.Perform()
    if not mesher.IsDone():
        raise RuntimeError("Open Cascade did not finish triangulating the STEP assembly")

    with tempfile.TemporaryDirectory(prefix="portfolio-arm-glb-") as temp_dir:
        raw_glb = Path(temp_dir) / "arm-colored.glb"
        writer = RWGltf_CafWriter(TCollection_AsciiString(str(raw_glb)), True)
        writer.SetParallel(True)
        # Merge faces sharing a material. This keeps all authored colors while
        # avoiding thousands of tiny browser meshes.
        writer.SetMergeFaces(True)
        if not writer.Perform(
            document,
            TColStd_IndexedDataMapOfStringString(),
            Message_ProgressRange(),
        ):
            raise RuntimeError("Open Cascade could not export the colored GLB")

        scene = trimesh.load(raw_glb, force="scene", process=False)
        if not scene.geometry:
            raise RuntimeError("The colored GLB contains no geometry")

        # Open Cascade already converts STEP millimetres to glTF metres. Center
        # the assembly, then rotate its authored Z-up orientation to glTF Y-up.
        center = scene.bounds.mean(axis=0)
        translate = trimesh.transformations.translation_matrix(-center)
        rotate = trimesh.transformations.rotation_matrix(
            np.deg2rad(-90.0), [1.0, 0.0, 0.0]
        )
        scene.apply_transform(rotate @ translate)

        destination.parent.mkdir(parents=True, exist_ok=True)
        destination.write_bytes(
            trimesh.exchange.gltf.export_glb(scene, include_normals=True)
        )

        triangle_count = sum(len(mesh.faces) for mesh in scene.geometry.values())
        material_colors = {
            tuple(mesh.visual.material.baseColorFactor)
            for mesh in scene.geometry.values()
            if getattr(mesh.visual, "material", None) is not None
            and getattr(mesh.visual.material, "baseColorFactor", None) is not None
        }
        print(f"meshes={len(scene.geometry)}")
        print(f"materials={len(material_colors)}")
        print(f"triangles={triangle_count}")


def convert(
    source: Path,
    destination: Path,
    tolerance: float,
    angular_tolerance: float,
    target_ratio: float,
) -> None:
    if target_ratio < 0.999:
        raise ValueError(
            "Mesh decimation is disabled because it tears the arm's thin plates"
        )

    document = load_xcaf_document(source)
    removed = remove_hidden_components(document)
    expected = sorted(HIDDEN_TOP_LEVEL_COMPONENTS)
    if sorted(removed) != expected:
        raise RuntimeError(
            f"Expected to hide {expected}, but removed {sorted(removed)}"
        )

    export_colored_glb(document, destination, tolerance, angular_tolerance)
    print(f"hidden_components={','.join(removed)}")
    print(f"bytes={destination.stat().st_size}")
    print(f"output={destination}")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("source", type=Path)
    parser.add_argument("destination", type=Path)
    parser.add_argument("--tolerance", type=float, default=0.8)
    parser.add_argument("--angular-tolerance", type=float, default=0.28)
    parser.add_argument("--target-ratio", type=float, default=1.0)
    args = parser.parse_args()
    convert(
        args.source.resolve(),
        args.destination.resolve(),
        args.tolerance,
        args.angular_tolerance,
        args.target_ratio,
    )


if __name__ == "__main__":
    main()
