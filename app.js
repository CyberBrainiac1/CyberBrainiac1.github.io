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

  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

  const projectMedia = {
    solderbuddy: {
      src: "assets/projects/solderbuddy.webp",
      alt: "SolderBuddy robot arm beside soldering tools",
      fit: "cover",
      position: "center"
    },
    evolora: {
      src: "assets/projects/evolora-team-removedbg.png",
      alt: "EvoLoRA team at the 2026 AI Engineer World’s Fair Hackathon",
      fit: "contain",
      position: "center",
      transform: "translateX(10%) scale(1.18)"
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
      src: "assets/projects/ffb-wheelbase-removedbg.png",
      alt: "Isolated force-feedback steering wheelbase with motors, drivers, and wiring",
      fit: "contain",
      position: "center",
      transform: "translateX(-7%) scale(1.12)"
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
      kind: "model",
      src: "assets/projects/3dofarm.glb?v=20260802-1",
      alt: "Interactive 3D model of the 3-DOF desktop robot arm"
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
      position: "center",
      transform: "translateX(-16.5%)"
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
      src: "assets/projects/sim-pedals-removedbg.png",
      alt: "Isolated DIY sim-racing throttle and brake pedal assembly",
      fit: "contain",
      position: "center",
      transform: "translate(3%, -2%) scale(1.4)"
    },
    chassis: {
      src: "assets/projects/wooden-sim-racing-chassis.webp",
      alt: "Completed wooden sim-racing chassis with wheel, pedals, and seat",
      fit: "cover",
      position: "center"
    },
    frc: {
      src: "assets/projects/frc-2854-removedbg.png",
      alt: "Isolated front view of the FRC 2854 competition robot",
      fit: "contain",
      position: "center",
      transform: "translateX(-7%) scale(1.28)"
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

  function modelMarkup(project, index, media, context) {
    const interactive = context === "dialog";
    const controls = interactive ? "camera-controls" : "";
    const loading = interactive ? "eager" : "lazy";
    const cameraOrbit = interactive ? "35deg 68deg 105%" : "35deg 68deg 100%";

    return `<model-viewer class="project-model${interactive ? " project-model--interactive" : " project-model--preview"}"
        src="${media.src}"
        alt="${media.alt}"
        ${controls}
        ${reduceMotion ? "" : "auto-rotate"}
        auto-rotate-delay="900"
        rotation-per-second="12deg"
        camera-orbit="${cameraOrbit}"
        min-camera-orbit="auto auto 60%"
        max-camera-orbit="auto auto 240%"
        field-of-view="32deg"
        shadow-intensity="0.75"
        shadow-softness="0.85"
        exposure="0.95"
        tone-mapping="neutral"
        interaction-prompt="none"
        touch-action="pan-y"
        loading="${loading}"
        ${interactive ? "" : "tabindex=\"-1\""}>
        <span class="project-model__fallback">3D preview unavailable</span>
      </model-viewer>
      <span class="project-card__index">FIG. ${String(index + 1).padStart(2, "0")}</span>
      <span class="blueprint-label project-visual-label">${interactive ? "Drag to orbit · scroll to zoom" : "Interactive CAD model"}</span>
      ${interactive ? `<button class="model-reset" type="button" data-model-reset aria-label="Reset 3D model view">
        <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M13.2 5.3A5.5 5.5 0 1 0 13 11M13.2 5.3V1.8m0 3.5H9.7"/></svg>
        Reset view
      </button>` : ""}`;
  }

  function visualMarkup(project, index, context = "card") {
    const media = projectMedia[project.slug];
    if (!media) return schematicMarkup(index, project.category);
    if (media.kind === "model") return modelMarkup(project, index, media, context);
    return `<img src="${media.src}" alt="${media.alt}" loading="lazy" decoding="async" draggable="false" style="object-fit:${media.fit};object-position:${media.position}${media.transform ? `;transform:${media.transform}` : ""}">
      <span class="project-card__index">FIG. ${String(index + 1).padStart(2, "0")}</span>
      <span class="blueprint-label project-visual-label">${project.category}</span>`;
  }

  const rail = document.querySelector("[data-project-rail]");
  const dialog = document.querySelector("[data-project-dialog]");
  const projects = window.portfolioProjects || [];

  if (rail && projects.length) {
    let ignoreCardClick = false;
    const cards = projects.map((project, index) => {
      const card = document.createElement(project.statusOnly ? "article" : "button");
      card.className = `project-card${project.statusOnly ? " project-card--status-only" : ""}`;
      card.dataset.projectIndex = String(index);
      if (project.statusOnly) {
        card.setAttribute("aria-label", `${project.title} — ${project.one}`);
        card.innerHTML = `
          <span class="project-card__copy">
            <span role="heading" aria-level="2" class="project-card__title">${project.title}</span>
            <span class="project-card__status">${project.one}</span>
          </span>`;
        return card;
      }
      card.type = "button";
      card.setAttribute("aria-label", `Open details for ${project.title}`);
      const media = projectMedia[project.slug];
      const hasMedia = Boolean(media);
      const hasModel = media?.kind === "model";
      card.innerHTML = `
        <span class="figure-plate${hasMedia ? " project-image-plate" : ""}${hasModel ? " project-model-plate" : ""}">${visualMarkup(project, index)}</span>
        <span class="project-card__copy">
          <span class="meta">${project.meta}</span>
          <span role="heading" aria-level="2" class="project-card__title">${project.title}</span>
          <span style="display:block;color:var(--muted);font-size:13px;line-height:1.55;margin-top:7px">${project.one}</span>
        </span>`;
      card.addEventListener("click", () => {
        if (!ignoreCardClick) openProject(index);
      });
      return card;
    });
    rail.append(...cards);

    let direction = 1;
    let pauseUntil = Date.now() + 2200;
    let hovered = false;
    rail.addEventListener("mouseenter", () => { hovered = true; });
    rail.addEventListener("mouseleave", () => { hovered = false; pauseUntil = Date.now() + 1200; });
    rail.addEventListener("wheel", (event) => {
      if (innerWidth <= 820) return;
      const delta = Math.abs(event.deltaX) >= Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
      if (!delta) return;
      event.preventDefault();
      rail.scrollLeft += delta;
      pauseUntil = Date.now() + 1800;
    }, { passive: false });

    let activePointer = null;
    let dragStartX = 0;
    let dragStartScroll = 0;
    let dragged = false;

    rail.addEventListener("pointerdown", (event) => {
      if (innerWidth <= 820 || event.button !== 0) return;
      activePointer = event.pointerId;
      dragStartX = event.clientX;
      dragStartScroll = rail.scrollLeft;
      dragged = false;
      rail.setPointerCapture?.(event.pointerId);
      rail.classList.add("is-dragging");
      pauseUntil = Date.now() + 3000;
    });

    rail.addEventListener("pointermove", (event) => {
      if (event.pointerId !== activePointer) return;
      const distance = event.clientX - dragStartX;
      if (Math.abs(distance) > 5) dragged = true;
      rail.scrollLeft = dragStartScroll - distance;
    });

    const finishDrag = (event) => {
      if (event.pointerId !== activePointer) return;
      ignoreCardClick = dragged;
      activePointer = null;
      rail.classList.remove("is-dragging");
      pauseUntil = Date.now() + 1800;
      setTimeout(() => { ignoreCardClick = false; }, 0);
    };

    rail.addEventListener("pointerup", finishDrag);
    rail.addEventListener("pointercancel", finishDrag);

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
    const media = projectMedia[project.slug];
    dialogFigure.classList.toggle("project-image-plate", Boolean(media));
    dialogFigure.classList.toggle("project-model-plate", media?.kind === "model");
    dialogFigure.innerHTML = visualMarkup(project, index, "dialog");
    const model = dialogFigure.querySelector("model-viewer");
    const reset = dialogFigure.querySelector("[data-model-reset]");
    if (model && reset) {
      reset.addEventListener("click", () => {
        model.setAttribute("camera-orbit", "35deg 68deg 105%");
        model.setAttribute("camera-target", "auto auto auto");
        model.setAttribute("field-of-view", "32deg");
        model.resetTurntableRotation?.(0);
        model.focus();
      });
    }
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
