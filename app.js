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
      aspect: "3 / 4",
      cardShape: "portrait",
      cardMaxHeight: 300,
      fit: "cover",
      position: "center"
    },
    evolora: {
      src: "assets/projects/evolora.webp",
      alt: "EvoLoRA terminal interface showing its training agent, LoRA settings, examples, and metrics",
      aspect: "8 / 3",
      cardAspect: "946 / 600",
      fit: "cover",
      position: "center",
      detailAspect: "16 / 9",
      detailItems: [
        {
          src: "assets/projects/evolora.webp",
          alt: "EvoLoRA terminal interface showing its training agent, LoRA settings, examples, and metrics",
          caption: "EvoLoRA training interface"
        },
        {
          src: "assets/projects/evolora-team-removedbg.png",
          alt: "Three members of the EvoLoRA hackathon team",
          caption: "EvoLoRA team at the AI Engineer World’s Fair Hackathon"
        }
      ]
    },
    blindspot: {
      src: "assets/projects/blindspot.webp",
      alt: "Blind Spot phone mockup showing the rider hazard map",
      aspect: "4 / 3",
      cardAspect: "9 / 16",
      cardShape: "portrait",
      fit: "cover",
      position: "center"
    },
    familiarai: {
      src: "assets/projects/familiarai.webp",
      alt: "FamiliarAI caregiver application landing screen",
      aspect: "320 / 149",
      fit: "cover",
      position: "center"
    },
    motionrig: {
      kind: "gallery",
      aspect: "16 / 9",
      items: [
        {
          src: "assets/projects/motion-rig.webp",
          alt: "Wooden dual-motor sim-racing motion rig under construction"
        },
        {
          src: "assets/projects/wooden-sim-racing-chassis.webp",
          alt: "Completed wooden sim-racing chassis with wheel, pedals, and seat"
        }
      ],
      detailItems: [
        {
          src: "assets/projects/motion-rig.webp",
          alt: "Wooden dual-motor sim-racing motion rig under construction",
          caption: "Dual-motor cable-driven motion platform"
        },
        {
          src: "assets/projects/wooden-sim-racing-chassis.webp",
          alt: "Completed wooden sim-racing chassis with wheel, pedals, and seat",
          caption: "Wooden chassis with the wheel, pedals, and seat installed"
        },
        {
          src: "assets/projects/motion-translator.webp",
          alt: "2DOF motion-control interface showing pitch, roll, calibration, and PID values",
          caption: "Motion translator used to tune pitch, roll, and motor response"
        }
      ]
    },
    ffbwheel: {
      src: "assets/projects/ffb-wheelbase-removedbg.png",
      alt: "Isolated force-feedback steering wheelbase with motors, drivers, and wiring",
      aspect: "4 / 3",
      fit: "contain",
      position: "center",
      transform: "translateX(-7%) scale(1.12)",
      detailItems: [
        {
          src: "assets/projects/ffb-wheelbase-removedbg.png",
          alt: "Isolated force-feedback steering wheelbase with motors, drivers, and wiring",
          caption: "Assembled force-feedback wheelbase"
        },
        {
          src: "wheelbase3.jpg",
          alt: "Close front view of the DIY wheelbase electronics and motor drivers",
          caption: "Wheelbase electronics and motor drivers"
        },
        {
          src: "wheelbase1.jpg",
          alt: "Top view inside the DIY force-feedback wheelbase",
          caption: "Internal wiring and controller layout"
        },
        {
          src: "wheelbase2.jpg",
          alt: "Side view inside the DIY force-feedback wheelbase",
          caption: "Wheelbase frame and internal assembly"
        },
        {
          src: "assets/projects/ffb-wheel.webp",
          alt: "Early DIY force-feedback steering wheel prototype",
          caption: "Early steering-wheel prototype"
        },
        {
          src: "assets/projects/ffb-tester.webp",
          alt: "Force-feedback tester interface with manual controls and safety stop",
          caption: "Force-feedback testing interface"
        },
        {
          src: "assets/projects/wheel-control-center.webp",
          alt: "Wheel Control Center dashboard for calibration, firmware, and telemetry",
          caption: "Wheel calibration and control dashboard"
        }
      ]
    },
    arm3dof: {
      kind: "model",
      src: "assets/projects/3dofarm.glb?v=20260804-2",
      aspect: "4 / 3",
      alt: "Interactive 3D model of the 3-DOF desktop robot arm",
      cardSrc: "assets/projects/3dof-arm-removebg.png?v=20260804-2",
      cardAlt: "Accurate STEP-derived render of the 3-DOF desktop robot arm",
      cardAspect: "634 / 800",
      cardFit: "contain",
      cardPosition: "center",
      cardShape: "portrait",
      cardMaxHeight: 300
    },
    hand: {
      src: "assets/projects/robotic-hand.webp",
      alt: "CAD model of the tendon-driven robotic hand",
      aspect: "849 / 620",
      fit: "cover",
      position: "center"
    },
    kineticcam: {
      src: "assets/projects/kinetic-cam-removebg.png?v=20260804-1",
      alt: "Isolated CAD render of the Kinetic Cam mechanical camera head",
      aspect: "365 / 640",
      cardShape: "portrait",
      cardMaxHeight: 300,
      fit: "contain",
      position: "center",
      detailAspect: "4 / 3",
      detailItems: [
        {
          src: "assets/projects/kinetic-cam-removebg.png?v=20260804-1",
          alt: "Isolated CAD render of the Kinetic Cam mechanical camera head",
          caption: "Isolated full Kinetic Cam assembly"
        },
        {
          src: "assets/projects/kinetic-cam.webp",
          alt: "Original CAD render of the Kinetic Cam body and moving camera head",
          caption: "Original CAD assembly view"
        }
      ]
    },
    chessboard: {
      src: "assets/projects/ai-chess-board.webp",
      alt: "CAD render of the automated AI chess board",
      aspect: "967 / 742",
      fit: "contain",
      position: "center"
    },
    cyberpad: {
      src: "assets/projects/cyberpad.webp",
      alt: "Completed CyberPad RP2040 macropad hardware",
      aspect: "849 / 620",
      fit: "cover",
      position: "center"
    },
    pedal: {
      src: "assets/projects/sim-pedals-removedbg.png",
      alt: "Isolated DIY sim-racing throttle and brake pedal assembly",
      aspect: "3 / 4",
      fit: "contain",
      position: "center",
      transform: "translate(3%, -2%) scale(1.4)",
      detailAspect: "4 / 3",
      detailItems: [
        {
          src: "assets/projects/sim-pedals-removedbg.png",
          alt: "Isolated DIY sim-racing throttle and brake pedal assembly",
          caption: "Complete throttle and brake assembly"
        },
        {
          src: "pedals.jpg",
          alt: "Full-resolution photo of the DIY sim-racing pedals",
          caption: "Pedal mechanisms, sensors, and wooden base"
        },
        {
          src: "assets/projects/sim-pedal.webp",
          alt: "Early spring-loaded sim-racing pedal prototype",
          caption: "Early spring-loaded pedal prototype"
        }
      ]
    },
    frc: {
      src: "assets/projects/frc-2854-cad.webp?v=20260803-1",
      alt: "CAD render of the FRC 2854 competition robot",
      aspect: "893 / 661",
      fit: "contain",
      position: "center",
      transform: "none",
      detailItems: [
        {
          src: "assets/projects/frc-2854-cad.webp?v=20260803-1",
          alt: "CAD render of the complete FRC 2854 competition robot",
          caption: "Full competition-robot CAD render"
        },
        {
          src: "assets/projects/frc-2854-cad-source.png",
          alt: "Original full-resolution CAD render of the complete FRC 2854 robot",
          caption: "Original full-resolution CAD export"
        },
        {
          src: "assets/projects/frc-2854.webp",
          alt: "Onshape view of an earlier FRC 2854 robot configuration",
          caption: "Earlier robot configuration in Onshape"
        },
        {
          src: "assets/projects/frc-2854-removedbg.png",
          alt: "Onshape view of another FRC 2854 robot design angle",
          caption: "Additional robot design view"
        }
      ]
    },
    ftc: {
      src: "assets/projects/ftc-dragons.webp",
      alt: "FTC Evergreen Dragons robot with mechanism callouts",
      aspect: "490 / 633",
      cardShape: "portrait",
      cardMaxHeight: 300,
      fit: "contain",
      position: "center"
    }
  };

  function mediaAspect(media, context = "card") {
    if (context === "card" && media?.cardAspect) return media.cardAspect;
    if (context === "dialog" && media?.detailAspect) return media.detailAspect;
    return media?.aspect || "16 / 9";
  }

  function mediaRatio(media, context = "card") {
    const [width, height] = mediaAspect(media, context).split("/").map(Number);
    return width > 0 && height > 0 ? width / height : 16 / 9;
  }

  function fitVisualPlate(plate) {
    const ratio = Number.parseFloat(plate.dataset.mediaRatio) || 16 / 9;
    const dialogHost = plate.closest(".project-dialog");
    const cardHost = plate.closest(".project-card");
    const hostWidth = Math.max(0, (dialogHost || cardHost)?.clientWidth - 2);
    const defaultMaxHeight = dialogHost
      ? Math.min(innerHeight * 0.6, innerWidth <= 560 ? 520 : 560)
      : Math.min(innerHeight * 0.52, 360);
    const cardMaxHeight = Number.parseFloat(plate.dataset.cardMaxHeight);
    const maxHeight = !dialogHost && Number.isFinite(cardMaxHeight)
      ? Math.min(defaultMaxHeight, cardMaxHeight)
      : defaultMaxHeight;
    const width = dialogHost ? hostWidth : Math.min(hostWidth, maxHeight * ratio);
    const height = Math.min(width / ratio, maxHeight);
    plate.style.setProperty("--media-box-width", `${width.toFixed(2)}px`);
    plate.style.setProperty("--media-box-height", `${height.toFixed(2)}px`);
  }

  function syncVisualPlates() {
    document.querySelectorAll(".figure-plate[data-media-ratio]").forEach(fitVisualPlate);
  }

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
    const cameraOrbit = interactive ? "35deg 68deg 108%" : "35deg 68deg 96%";

    return `<model-viewer class="project-model${interactive ? " project-model--interactive" : " project-model--preview"}"
        src="${media.src}"
        alt="${media.alt}"
        ${controls}
        ${interactive || reduceMotion ? "" : "auto-rotate"}
        auto-rotate-delay="900"
        rotation-per-second="7deg"
        camera-orbit="${cameraOrbit}"
        camera-target="0m -0.025m 0m"
        min-camera-orbit="auto auto 45%"
        max-camera-orbit="auto auto 220%"
        field-of-view="28deg"
        environment-image="neutral"
        shadow-intensity="1"
        shadow-softness="0.7"
        exposure="0.65"
        tone-mapping="commerce"
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

  function escapeMarkup(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  function detailGalleryMarkup(project, items) {
    const slides = items.map((item, itemIndex) => `<figure class="project-gallery__slide" data-gallery-slide aria-hidden="${itemIndex === 0 ? "false" : "true"}">
      <img src="${escapeMarkup(item.src)}" alt="${escapeMarkup(item.alt)}" loading="${itemIndex === 0 ? "eager" : "lazy"}" decoding="async" draggable="false" style="object-fit:${escapeMarkup(item.fit || "contain")}">
      <figcaption>${escapeMarkup(item.caption || item.alt)}</figcaption>
    </figure>`).join("");
    const dots = items.map((item, itemIndex) => `<button type="button" data-gallery-dot="${itemIndex}" aria-label="Show image ${itemIndex + 1}: ${escapeMarkup(item.caption || item.alt)}" aria-current="${itemIndex === 0 ? "true" : "false"}"></button>`).join("");

    return `<div class="project-gallery" data-project-gallery tabindex="0" aria-label="${escapeMarkup(project.title)} image gallery">
      <div class="project-gallery__track" data-gallery-track>${slides}</div>
      <div class="project-gallery__controls">
        <button type="button" data-gallery-prev aria-label="Previous project image">←</button>
        <span data-gallery-count>01 / ${String(items.length).padStart(2, "0")}</span>
        <button type="button" data-gallery-next aria-label="Next project image">→</button>
      </div>
      <div class="project-gallery__dots" aria-label="Choose a project image">${dots}</div>
    </div>`;
  }

  function setupProjectGallery(container) {
    const gallery = container.querySelector("[data-project-gallery]");
    if (!gallery) return;
    const track = gallery.querySelector("[data-gallery-track]");
    const slides = [...gallery.querySelectorAll("[data-gallery-slide]")];
    const dots = [...gallery.querySelectorAll("[data-gallery-dot]")];
    const counter = gallery.querySelector("[data-gallery-count]");
    let current = 0;
    let pointerStart = null;

    const show = (nextIndex) => {
      current = (nextIndex + slides.length) % slides.length;
      track.style.transform = `translateX(${-100 * current}%)`;
      slides.forEach((slide, slideIndex) => slide.setAttribute("aria-hidden", slideIndex === current ? "false" : "true"));
      dots.forEach((dot, dotIndex) => dot.setAttribute("aria-current", dotIndex === current ? "true" : "false"));
      counter.textContent = `${String(current + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
    };

    gallery.querySelector("[data-gallery-prev]").addEventListener("click", () => show(current - 1));
    gallery.querySelector("[data-gallery-next]").addEventListener("click", () => show(current + 1));
    dots.forEach((dot, dotIndex) => dot.addEventListener("click", () => show(dotIndex)));
    gallery.addEventListener("keydown", (event) => {
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
      event.preventDefault();
      show(current + (event.key === "ArrowRight" ? 1 : -1));
    });
    gallery.addEventListener("pointerdown", (event) => { pointerStart = event.clientX; });
    gallery.addEventListener("pointerup", (event) => {
      if (pointerStart === null) return;
      const distance = event.clientX - pointerStart;
      pointerStart = null;
      if (Math.abs(distance) > 42) show(current + (distance < 0 ? 1 : -1));
    });
    gallery.addEventListener("pointercancel", () => { pointerStart = null; });
  }

  function visualMarkup(project, index, context = "card") {
    const media = projectMedia[project.slug];
    if (!media) return schematicMarkup(index, project.category);
    if (context === "dialog" && media.detailItems?.length > 1) {
      return detailGalleryMarkup(project, media.detailItems);
    }
    if (media.kind === "model") {
      if (context !== "card" || !media.cardSrc) return modelMarkup(project, index, media, context);
      return `<img src="${media.cardSrc}" alt="${media.cardAlt || media.alt}" loading="lazy" decoding="async" draggable="false" style="object-fit:${media.cardFit || "contain"};object-position:${media.cardPosition || "center"}">
        <span class="project-card__index">FIG. ${String(index + 1).padStart(2, "0")}</span>
        <span class="blueprint-label project-visual-label">3D arm render</span>`;
    }
    if (media.kind === "gallery") {
      return `<span class="project-image-duo">
        ${media.items.map((item) => `<img src="${item.src}" alt="${item.alt}" loading="lazy" decoding="async" draggable="false">`).join("")}
      </span>
      <span class="project-card__index">FIG. ${String(index + 1).padStart(2, "0")}</span>
      <span class="blueprint-label project-visual-label">Chassis + motion platform</span>`;
    }
    const fit = context === "dialog" ? "contain" : media.fit;
    const transform = context === "dialog" ? "" : media.transform;
    return `<img src="${media.src}" alt="${media.alt}" loading="lazy" decoding="async" draggable="false" style="object-fit:${fit};object-position:${media.position}${transform ? `;transform:${transform}` : ""}">
      <span class="project-card__index">FIG. ${String(index + 1).padStart(2, "0")}</span>
      <span class="blueprint-label project-visual-label">${project.category}</span>`;
  }

  const rail = document.querySelector("[data-project-rail]");
  const dialog = document.querySelector("[data-project-dialog]");
  const previousProjects = document.querySelector("[data-project-prev]");
  const nextProjects = document.querySelector("[data-project-next]");
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
      if (media?.cardShape === "portrait") card.classList.add("project-card--portrait");
      const hasMedia = Boolean(media);
      const hasModel = media?.kind === "model" && !media?.cardSrc;
      card.innerHTML = `
        <span class="figure-plate${hasMedia ? " project-image-plate" : ""}${hasModel ? " project-model-plate" : ""}" data-media-ratio="${mediaRatio(media)}" data-card-max-height="${media?.cardMaxHeight || ""}" style="--media-aspect:${mediaAspect(media)}">${visualMarkup(project, index)}</span>
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
    requestAnimationFrame(syncVisualPlates);

    let direction = 1;
    let pauseUntil = Date.now() + 2200;
    let hovered = false;
    rail.addEventListener("mouseenter", () => { hovered = true; });
    rail.addEventListener("mouseleave", () => { hovered = false; pauseUntil = Date.now() + 1200; });

    function moveProjects(distance, smooth = false) {
      rail.scrollBy({ left: distance, behavior: smooth ? "smooth" : "auto" });
      pauseUntil = Date.now() + 2200;
    }

    function moveToAdjacentCard(direction) {
      const inset = Number.parseFloat(getComputedStyle(rail).paddingLeft) || 0;
      const offsets = cards.map((card) => Math.max(0, card.offsetLeft - inset));
      const current = rail.scrollLeft;
      const target = direction > 0
        ? offsets.find((offset) => offset > current + 4) ?? rail.scrollWidth
        : offsets.slice().reverse().find((offset) => offset < current - 4) ?? 0;
      rail.scrollTo({ left: target, behavior: "smooth" });
      pauseUntil = Date.now() + 2200;
    }

    previousProjects?.addEventListener("click", () => moveToAdjacentCard(-1));
    nextProjects?.addEventListener("click", () => moveToAdjacentCard(1));

    rail.addEventListener("keydown", (event) => {
      if (innerWidth <= 820) return;
      if (event.key === "ArrowLeft") moveToAdjacentCard(-1);
      else if (event.key === "ArrowRight") moveToAdjacentCard(1);
      else if (event.key === "Home") rail.scrollTo({ left: 0, behavior: "smooth" });
      else if (event.key === "End") rail.scrollTo({ left: rail.scrollWidth, behavior: "smooth" });
      else return;
      event.preventDefault();
      pauseUntil = Date.now() + 2200;
    });

    window.addEventListener("wheel", (event) => {
      if (innerWidth <= 820 || dialog?.open || event.ctrlKey) return;
      const rawDelta = Math.abs(event.deltaX) >= Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
      if (!rawDelta) return;
      const unit = event.deltaMode === 1
        ? 24
        : event.deltaMode === 2
          ? rail.clientWidth
          : 1;
      event.preventDefault();
      moveProjects(rawDelta * unit);
    }, { passive: false });

    let activePointer = null;
    let dragStartX = 0;
    let dragStartScroll = 0;
    let dragged = false;
    const dragThreshold = 10;

    rail.addEventListener("pointerdown", (event) => {
      if (innerWidth <= 820 || event.button !== 0) return;
      activePointer = event.pointerId;
      dragStartX = event.clientX;
      dragStartScroll = rail.scrollLeft;
      dragged = false;
      pauseUntil = Date.now() + 3000;
    });

    rail.addEventListener("pointermove", (event) => {
      if (event.pointerId !== activePointer) return;
      const distance = event.clientX - dragStartX;
      if (!dragged && Math.abs(distance) <= dragThreshold) return;
      if (!dragged) {
        dragged = true;
        rail.setPointerCapture?.(event.pointerId);
        rail.classList.add("is-dragging");
      }
      rail.scrollLeft = dragStartScroll - distance;
    });

    const finishDrag = (event) => {
      if (event.pointerId !== activePointer) return;
      ignoreCardClick = dragged;
      if (dragged && rail.hasPointerCapture?.(event.pointerId)) {
        rail.releasePointerCapture?.(event.pointerId);
      }
      activePointer = null;
      rail.classList.remove("is-dragging");
      pauseUntil = Date.now() + 1800;
      setTimeout(() => { ignoreCardClick = false; }, 0);
    };

    window.addEventListener("pointerup", finishDrag);
    window.addEventListener("pointercancel", finishDrag);

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
    const partsSection = dialog.querySelector("[data-dialog-parts]");
    const partsList = dialog.querySelector("[data-dialog-parts-list]");
    const parts = Array.isArray(project.parts) ? project.parts : [];
    partsSection.hidden = parts.length === 0;
    dialog.querySelector("[data-dialog-parts-title]").textContent = project.partsTitle || "Parts used";
    partsList.replaceChildren(...parts.map((part) => {
      const item = document.createElement("li");
      const name = document.createElement("strong");
      const explanation = document.createElement("span");
      name.textContent = part.name;
      explanation.textContent = part.use;
      item.append(name, explanation);
      return item;
    }));
    dialog.querySelector("[data-dialog-tech]").textContent = project.tech;
    const dialogFigure = dialog.querySelector("[data-dialog-figure]");
    const media = projectMedia[project.slug];
    dialogFigure.classList.toggle("project-image-plate", Boolean(media));
    dialogFigure.classList.toggle("project-model-plate", media?.kind === "model");
    dialogFigure.style.setProperty("--media-aspect", mediaAspect(media, "dialog"));
    dialogFigure.dataset.mediaRatio = String(mediaRatio(media, "dialog"));
    dialogFigure.innerHTML = visualMarkup(project, index, "dialog");
    setupProjectGallery(dialogFigure);
    const model = dialogFigure.querySelector("model-viewer");
    const reset = dialogFigure.querySelector("[data-model-reset]");
    if (model && reset) {
      reset.addEventListener("click", () => {
        model.setAttribute("camera-orbit", "35deg 68deg 108%");
        model.setAttribute("camera-target", "0m -0.025m 0m");
        model.setAttribute("field-of-view", "28deg");
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
    requestAnimationFrame(syncVisualPlates);
  }

  let resizeFrame = 0;
  window.addEventListener("resize", () => {
    cancelAnimationFrame(resizeFrame);
    resizeFrame = requestAnimationFrame(syncVisualPlates);
  });

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
