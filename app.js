(() => {
  const root = document.documentElement;
  const themeButtons = [...document.querySelectorAll("[data-theme-toggle]")];

  function activeTheme() {
    return root.dataset.theme === "dark" ? "dark" : "light";
  }

  function updateThemeButtons() {
    const dark = activeTheme() === "dark";
    themeButtons.forEach((button) => {
      button.textContent = dark ? "◑ Light" : "◐ Dark";
      button.setAttribute("aria-label", dark ? "Use light theme" : "Use dark theme");
    });
  }

  themeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const next = activeTheme() === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      localStorage.setItem("pe-theme", next);
      updateThemeButtons();
    });
  });

  updateThemeButtons();

  const projectMedia = {
    catch: {
      src: "assets/projects/catch.webp",
      alt: "Onshape view of the CATCH cam, roller, and joint assembly",
      fit: "cover",
      position: "center"
    },
    solderbuddy: {
      src: "assets/projects/solderbuddy.webp",
      alt: "SolderBuddy robot arm beside soldering tools",
      fit: "cover",
      position: "center"
    },
    evolora: {
      src: "assets/projects/evolora.webp",
      alt: "EvoLoRA terminal interface during a representative training run",
      fit: "cover",
      position: "center"
    },
    blindspot: {
      src: "assets/projects/blindspot.webp",
      alt: "Blind Spot phone mockup showing the rider hazard map",
      fit: "contain",
      position: "center"
    },
    familiarai: {
      src: "assets/projects/familiarai.webp",
      alt: "FamiliarAI caregiver application landing screen",
      fit: "cover",
      position: "center"
    },
    motionrig: {
      src: "assets/projects/motion-rig.webp",
      alt: "Wooden dual-motor sim-racing motion rig under construction",
      fit: "cover",
      position: "center"
    },
    translator: {
      src: "assets/projects/motion-translator.webp",
      alt: "2DOF motion-rig translator calibration and control interface",
      fit: "contain",
      position: "center top"
    },
    ffbwheel: {
      src: "assets/projects/ffb-wheel.webp",
      alt: "DIY force-feedback steering wheel hardware and wiring",
      fit: "cover",
      position: "center"
    },
    controlcenter: {
      src: "assets/projects/wheel-control-center.webp",
      alt: "BTS7960 force-feedback wheel Control Center dashboard",
      fit: "cover",
      position: "left top"
    },
    ffbtester: {
      src: "assets/projects/ffb-tester.webp",
      alt: "EMC force-feedback tester desktop application",
      fit: "cover",
      position: "center"
    },
    arm3dof: {
      src: "assets/projects/arm-3dof.webp",
      alt: "Isometric CAD render of the 3-DOF desktop robot arm",
      fit: "contain",
      position: "center"
    },
    hand: {
      src: "assets/projects/robotic-hand.webp",
      alt: "CAD model of the tendon-driven robotic hand",
      fit: "cover",
      position: "center"
    },
    kineticcam: {
      src: "assets/projects/kinetic-cam.webp",
      alt: "CAD render of the Kinetic Cam mechanical camera head",
      fit: "contain",
      position: "center"
    },
    chessboard: {
      src: "assets/projects/ai-chess-board.webp",
      alt: "CAD render of the automated AI chess board",
      fit: "contain",
      position: "center"
    },
    cyberpad: {
      src: "assets/projects/cyberpad.webp",
      alt: "Completed CyberPad RP2040 macropad hardware",
      fit: "cover",
      position: "center"
    },
    pedal: {
      src: "assets/projects/sim-pedal.webp",
      alt: "DIY sim-racing pedal sensor mechanism",
      fit: "cover",
      position: "center"
    },
    chassis: {
      src: "assets/projects/wooden-sim-racing-chassis.webp",
      alt: "Completed wooden sim-racing chassis with wheel, pedals, and seat",
      fit: "cover",
      position: "center"
    },
    frc: {
      src: "assets/projects/frc-2854.webp",
      alt: "Onshape isometric view of the FRC 2854 competition robot",
      fit: "cover",
      position: "center"
    },
    ftc: {
      src: "assets/projects/ftc-dragons.webp",
      alt: "FTC Evergreen Dragons robot with mechanism callouts",
      fit: "contain",
      position: "center"
    }
  };

  function schematicMarkup(index, label) {
    const variant = index % 5;
    const diagrams = [
      `<g fill="none" stroke="currentColor" stroke-width="1.25">
        <circle cx="128" cy="78" r="38"/><circle cx="128" cy="78" r="8"/>
        <path d="M38 125h58l18-34h28l18 34h62"/><path d="M40 42h40m96 0h40"/>
        <path d="M80 34v16m96-16v16M50 140v18m156-18v18"/>
      </g>`,
      `<g fill="none" stroke="currentColor" stroke-width="1.25">
        <path d="M40 132V62h42l20 18h56l20-18h38v70"/><path d="M28 132h200"/>
        <circle cx="82" cy="112" r="18"/><circle cx="174" cy="112" r="18"/>
        <path d="M82 94V62m92 32V62M62 44h132"/>
      </g>`,
      `<g fill="none" stroke="currentColor" stroke-width="1.25">
        <rect x="52" y="42" width="152" height="96"/><path d="M52 74h152M92 42v96m72-96v96"/>
        <circle cx="92" cy="74" r="20"/><path d="M28 150h200M36 143v14m184-14v14"/>
      </g>`,
      `<g fill="none" stroke="currentColor" stroke-width="1.25">
        <path d="M34 126c40-72 72-72 106 0 23-52 49-52 82 0"/>
        <path d="M34 126h188M72 92v34m68-54v54m44-28v28"/>
        <circle cx="72" cy="92" r="7"/><circle cx="140" cy="72" r="7"/><circle cx="184" cy="98" r="7"/>
      </g>`,
      `<g fill="none" stroke="currentColor" stroke-width="1.25">
        <path d="M42 134h172M58 134V78h34l18-26h38l18 26h32v56"/>
        <path d="M92 78h74M110 52v82m38-82v82"/>
        <circle cx="58" cy="134" r="6"/><circle cx="198" cy="134" r="6"/>
      </g>`
    ];

    return `<span class="project-card__index">FIG. ${String(index + 1).padStart(2, "0")}</span>
      <svg class="schematic-svg" viewBox="0 0 256 172" aria-hidden="true">
        <g opacity=".16" stroke="currentColor" stroke-width=".6">
          <path d="M0 28h256M0 56h256M0 84h256M0 112h256M0 140h256"/>
          <path d="M28 0v172M56 0v172M84 0v172M112 0v172M140 0v172M168 0v172M196 0v172M224 0v172"/>
        </g>
        ${diagrams[variant]}
      </svg>
      <span class="blueprint-label" style="position:absolute;left:14px;bottom:11px">${label}</span>`;
  }

  function visualMarkup(project, index) {
    const media = projectMedia[project.slug];
    if (!media) return schematicMarkup(index, project.category);
    return `<img src="${media.src}" alt="${media.alt}" loading="lazy" decoding="async" style="object-fit:${media.fit};object-position:${media.position}">
      <span class="project-card__index">FIG. ${String(index + 1).padStart(2, "0")}</span>
      <span class="blueprint-label project-visual-label">${project.category}</span>`;
  }

  const rail = document.querySelector("[data-project-rail]");
  const dialog = document.querySelector("[data-project-dialog]");
  const projects = window.portfolioProjects || [];

  if (rail && projects.length) {
    const cards = projects.map((project, index) => {
      const button = document.createElement("button");
      button.className = "project-card";
      button.type = "button";
      button.dataset.projectIndex = String(index);
      button.setAttribute("aria-label", `Open details for ${project.title}`);
      const hasMedia = Boolean(projectMedia[project.slug]);
      button.innerHTML = `
        <span class="figure-plate${hasMedia ? " project-image-plate" : ""}">${visualMarkup(project, index)}</span>
        <span class="project-card__copy">
          <span class="meta">${project.meta}</span>
          <span role="heading" aria-level="2" style="display:block;font-size:19px;font-weight:600;margin-top:7px;line-height:1.2">${project.title}</span>
          <span style="display:block;color:var(--muted);font-size:13px;line-height:1.55;margin-top:7px">${project.one}</span>
        </span>`;
      button.addEventListener("click", () => openProject(index));
      return button;
    });
    rail.append(...cards);

    let direction = 1;
    let pauseUntil = Date.now() + 2200;
    let hovered = false;
    const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

    rail.addEventListener("mouseenter", () => { hovered = true; });
    rail.addEventListener("mouseleave", () => { hovered = false; pauseUntil = Date.now() + 1200; });
    rail.addEventListener("pointerdown", () => { pauseUntil = Date.now() + 3000; });
    rail.addEventListener("wheel", (event) => {
      if (innerWidth <= 820) return;
      event.preventDefault();
      rail.scrollLeft += event.deltaY + event.deltaX;
      pauseUntil = Date.now() + 1800;
    }, { passive: false });

    function drift() {
      if (!reduceMotion && innerWidth > 820 && !hovered && !dialog?.open && Date.now() > pauseUntil) {
        rail.scrollLeft += 0.45 * direction;
        if (rail.scrollLeft >= rail.scrollWidth - rail.clientWidth - 1) direction = -1;
        if (rail.scrollLeft <= 0) direction = 1;
      }
      requestAnimationFrame(drift);
    }

    requestAnimationFrame(drift);
  }

  function openProject(index) {
    if (!dialog) return;
    const project = projects[index];
    dialog.querySelector("[data-dialog-meta]").textContent = project.meta;
    dialog.querySelector("[data-dialog-title]").textContent = project.title;
    dialog.querySelector("[data-dialog-description]").textContent = Array.isArray(project.description)
      ? project.description.join("\n\n")
      : project.description;
    dialog.querySelector("[data-dialog-tech]").textContent = project.tech;
    const dialogFigure = dialog.querySelector("[data-dialog-figure]");
    dialogFigure.classList.toggle("project-image-plate", Boolean(projectMedia[project.slug]));
    dialogFigure.innerHTML = visualMarkup(project, index);
    const link = dialog.querySelector("[data-dialog-link]");
    if (project.github) {
      link.href = project.github;
      link.hidden = false;
    } else {
      link.hidden = true;
      link.removeAttribute("href");
    }
    const demoLink = dialog.querySelector("[data-dialog-demo]");
    if (project.demo) {
      demoLink.href = project.demo;
      demoLink.hidden = false;
    } else {
      demoLink.hidden = true;
      demoLink.removeAttribute("href");
    }
    document.body.classList.add("modal-open");
    dialog.showModal();
  }

  if (dialog) {
    const closeButton = dialog.querySelector("[data-dialog-close]");
    const close = () => {
      dialog.close();
      document.body.classList.remove("modal-open");
    };
    closeButton.addEventListener("click", close);
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) close();
    });
    dialog.addEventListener("close", () => document.body.classList.remove("modal-open"));
  }
})();
