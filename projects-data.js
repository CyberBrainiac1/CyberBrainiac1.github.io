window.portfolioProjects = [
  {
    slug: "catch",
    title: "CATCH",
    meta: "COMING SOON",
    category: "In development",
    one: "Coming soon… I’m still working on it.",
    description: ["Coming soon… I’m still working on it."],
    tech: "",
    github: ""
  },
  {
    slug: "solderbuddy",
    title: "SolderBuddy",
    meta: "AMD × HACK CLUB ROBOTICS HACKATHON · THREE-PERSON TEAM · PHYSICAL AI · 2025",
    category: "Collaborative robotics",
    one: "Teaching one robot arm to hand over soldering tools.",
    description: [
      "Soldering requires concentration, but repeatedly stopping to search for tools interrupts precise work. SolderBuddy is a physical AI collaborator that uses one SO101 robot arm and an AMD AI PC to identify, retrieve, and hand tools to a person while they continue soldering.",
      "As part of a three-person team, I focused on the system’s perception, training data, and human interface. I helped establish a three-camera vision pipeline and collect approximately 480 teleoperated demonstration episodes for imitation learning. We trained ACT and compared it with approaches including pi0.5 and SmolVLA to explore real-time tool pickup and handoff.",
      "I also designed a dedicated tool-request controller around a Seeed XIAO RP2040 and an OLED display. Instead of navigating a computer interface, the user could request a tool from a simple physical control placed near the work area.",
      "The project taught me that physical AI depends on much more than selecting a model. Camera placement, demonstration quality, robot consistency, mechanical setup, and the human interface all affect whether a trained behavior works outside a controlled software environment."
    ],
    tech: "Python · LeRobot · ACT · imitation learning · multi-camera computer vision · SO101 robot arm · RP2040 · embedded firmware",
    github: "https://github.com/CyberBrainiac1/SolderBuddy"
  },
  {
    slug: "evolora",
    title: "EvoLoRA",
    meta: "AI ENGINEER WORLD’S FAIR HACKATHON · FINALIST · TOP 6 OF 69 · JUNE 2026",
    category: "Hackathon finalist",
    one: "Building a bounded agent that plans, trains, judges, and improves task-specific small language models.",
    description: [
      "Getting accepted into Cerebral Valley’s 2026 AI Engineer World’s Fair Hackathon was exciting, but entering a room full of AI engineers, founders, and experienced builders was intimidating. I was the youngest participant at a mostly adult hackathon and did not know what to expect.",
      "Before the event, I met Vaibhav Satishkumar, another Bay Area high school student, through the hackathon Discord. We teamed up and used an Excalidraw whiteboard to map ideas the day before the event. Vaibhav was especially good at generating alternatives and finding a better direction when an idea did not work.",
      "Our project became EvoLoRA: an auditable, bounded agent that turns a plain-language goal into a LoRA fine-tuning experiment for a small language model. The aim is to make smaller models more capable at focused tasks while keeping them faster, cheaper, and easier to deploy than large general-purpose models.",
      "A MiniMax agent creates goal-specific evaluations and synthetic training data, then selects LoRA hyperparameters from bounded choices. Python validates each step, locks and SHA-256 hashes the benchmark so it cannot silently change, and controls the training loop. Unsloth trains the selected model on a remote GPU; an LLM hosted on DigitalOcean judges its responses, and a retrain advisor helps decide whether another iteration is worthwhile. EvoLoRA preserves run history in MongoDB Atlas and keeps the best adapter for later inference.",
      "Vaibhav focused on the GPU-side Unsloth training and inference system. I built the MiniMax planning agent, tool-calling workflow, orchestration, evaluation and training-data pipeline, remote GPU integration, terminal interface, and the connections between each part of the system. Right before the opening ceremony, we met Akshay Langhani; I was impressed by how quickly he learned unfamiliar tools and adapted as the project changed.",
      "The environment was different from the high school hackathons I had attended. Teams planned architecture on whiteboards and worked through rapid cycles: test an idea, learn from what failed, and build the next version. The views of the Bay and the surrounding architecture made the day even more memorable.",
      "EvoLoRA finished in the top six out of 69 teams. I also had the chance to meet and talk with Renan Serrano, Ramis Hasanli, and many other builders whose work I enjoyed learning about.",
      "The event felt intimidating at first, but once I started talking to people and building, I became comfortable and genuinely enjoyed being there. My biggest takeaway was that sometimes you have to run directly toward the things you are unsure of. That is how you discover what you are capable of."
    ],
    tech: "Python · MiniMax M2.7 · LoRA · Unsloth · DigitalOcean Llama 3.3 70B · tool-calling · Textual TUI · MongoDB Atlas · Paramiko SSH/SFTP · locked SHA-256 evaluations",
    github: "https://github.com/Visual-Studio-Coder/EvoLoRA",
    demo: "https://www.youtube.com/watch?v=4lz4LjBrG7I"
  },
  {
    slug: "blindspot",
    title: "Blind Spot",
    meta: "MILPITAS HACKS 3 · WINNER · 223 PARTICIPANTS · JUNE 2026",
    category: "Bike safety",
    one: "Turning a bike rider’s near miss into useful route data.",
    description: [
      "Many dangerous moments experienced by cyclists disappear as soon as the ride ends. Blind Spot was designed to capture those moments and turn them into information that could make future routes safer.",
      "The system combined a bike-mounted hazard-capture device with a phone experience. When something dangerous occurred, the rider could preserve what happened, where it happened, and how safe the route felt. Those reports could then be displayed on a map instead of remaining isolated memories.",
      "I built an interactive phone demo covering the complete ride flow: viewing a hazard map, starting a live recording, capturing an incident, reviewing the ride, and examining a rider profile. The goal was to make the product understandable through a working interaction rather than relying only on slides.",
      "The main challenge was connecting a hardware concept, location data, and a clear user workflow within a hackathon timeline. Blind Spot won Milpitas Hacks 3 against a field of 223 participants."
    ],
    tech: "Bike-mounted sensing concept · mobile interface design · hazard mapping · GitHub Pages · iOS and Swift concepts",
    github: "https://github.com/CyberBrainiac1/blindspot"
  },
  {
    slug: "familiarai",
    title: "FamiliarAI",
    meta: "BISV HACKS 2026 · WINNER · 138 PARTICIPANTS · THREE-PERSON TEAM · MARCH 2026",
    category: "Assistive AI",
    one: "Using familiar faces to support dementia care.",
    description: [
      "People living with dementia may have difficulty recognizing the people around them, while caregivers need a simple way to understand those interactions. FamiliarAI explored whether camera-based face recognition could help organize familiar-person information in one caregiver dashboard.",
      "As part of a three-person team, I helped develop a camera-based system that recognized faces and presented the information through a TypeScript dashboard. The project combined a technical recognition pipeline with an interface intended to make the output understandable to a caregiver.",
      "The project was an early prototype, not a clinical product. Its purpose was to demonstrate how recognition technology and interface design could be combined around a specific human need.",
      "FamiliarAI won BISV Hacks 2026 in a field of 138 participants."
    ],
    tech: "TypeScript · camera-based face recognition · dashboard development",
    github: "https://github.com/CyberBrainiac1/FamiliarAI"
  },
  {
    slug: "motionrig",
    title: "Sim Racing Motion Rig",
    meta: "PERSONAL MECHATRONICS PROJECT · HARDWARE IN DEVELOPMENT · 2026–PRESENT",
    category: "Motion platform",
    one: "Turning game telemetry into physical movement.",
    description: [
      "I wanted to understand the complete system behind a motion simulator: not only the moving platform, but also the geometry, motor control, telemetry, calibration, and safety behavior that make the motion believable.",
      "The rig uses two independently controlled motors and a cable-and-spool mechanism. Each motor pulls one side of a wooden platform, allowing coordinated pitch and roll movement. The motors only pull; they never drive the platform in reverse. The rider’s weight returns the platform, reducing the number of active directions the motor system must control.",
      "I designed the mechanical layout around motor placement, cable routing, attachment geometry, travel limits, sensor feedback, and service access. The structure also had to remain stable under a moving rider while keeping the actuation system reachable for adjustment.",
      "The rig is still under construction. The current work focuses on finishing the physical system, integrating position feedback, validating travel limits, and tuning the controller under load."
    ],
    tech: "Woodworking · dual-motor cable actuation · spool design · motor drivers · sensor feedback · mechanical safety · Assetto Corsa and BeamNG telemetry",
    github: ""
  },
  {
    slug: "translator",
    title: "2DOF Motion Rig Translator",
    meta: "PERSONAL SOFTWARE AND CONTROLS PROJECT · 2026–PRESENT",
    category: "Telemetry control",
    one: "The control layer between telemetry and motors.",
    description: [
      "The motion rig needed a reliable way to translate racing-game telemetry into safe motor commands. I built a control pipeline that takes FlyPT Mover data over UDP, processes it in a Python and PyQt5 application, sends commands over USB serial to a Seeed XIAO, and controls the motors through a Sabertooth driver.",
      "The translator implements the rig’s kinematics, a tunable PID loop, calibration procedures, motion limits, and safety logic. I also built automated tests covering the system’s geometry, calibration behavior, and rules that prevent unsafe reverse-driving.",
      "The geometry used during development includes a 55 mm spool diameter, a 266 mm pivot-to-attachment distance, and approximately ±30 degrees of pitch and roll travel. One working PID starting point was Kp 2.0, Ki 0.05, and Kd 0.1, although final values still depend on the completed physical rig.",
      "This project separated motion planning from low-level motor control, making it possible to test the mathematics and safety rules before putting a person on the platform."
    ],
    tech: "Python · PyQt5 · UDP · serial communication · PID control · kinematics · Seeed XIAO · Sabertooth motor driver · automated testing",
    github: "https://github.com/CyberBrainiac1/poseTranslatorCyberRig"
  },
  {
    slug: "ffbwheel",
    title: "DIY Force-Feedback Steering Wheel",
    meta: "PERSONAL MECHATRONICS PROJECT · FEBRUARY 2026–PRESENT",
    category: "Sim-racing hardware",
    one: "Building real steering torque from raw components.",
    description: [
      "I built a force-feedback steering wheel to use with BeamNG and Assetto Corsa instead of treating sim racing as a purely digital project. The system combines brushed DC motors, a belt and gear drivetrain, an encoder, motor drivers, pedals, and an Arduino Leonardo acting as a USB game controller.",
      "One version uses two geared motors driving a shared shaft so their torque adds together. The mechanical system had to transmit useful force while avoiding excessive play, flex, heat, and belt slip.",
      "The most difficult problems appeared in the feedback loop. At different points, a physical 180-degree rotation was reported as approximately 379 degrees and later as only 21 degrees. Fixing this required tracing encoder CPR, quadrature decoding, gear reduction, and which shaft the encoder was actually measuring. I also worked through reversed pedal inputs, incorrect axis assignments, calibration behavior, motor-driver temperature, and inconsistent wheel feel.",
      "Those failures became the most valuable part of the project. They forced me to treat the wheel as one integrated electromechanical system instead of debugging the firmware, encoder, drivetrain, and game settings separately."
    ],
    tech: "Arduino Leonardo · BTS7960 · quadrature encoder · USB HID · brushed DC motors · belt drive · gear drive · woodworking · calibration",
    github: ""
  },
  {
    slug: "controlcenter",
    title: "BTS7960 Wheel Control Center",
    meta: "PERSONAL SOFTWARE PROJECT · C# · WPF · EMBEDDED HARDWARE",
    category: "Hardware tooling",
    one: "Making DIY force feedback easier to configure and recover.",
    description: [
      "The force-feedback wheel needed more than firmware. Wiring mistakes, calibration errors, driver settings, and failed firmware updates could make the hardware difficult to configure or recover.",
      "I extended an open-source Arduino force-feedback firmware originally developed by Milos Rankovic and created a Windows WPF Control Center around it. The application includes a guided setup process, wiring validation, calibration, live telemetry, hardware tests, and firmware-management tools.",
      "I also added a phone dashboard accessible over the local network and a local Ollama assistant panel. Firmware flashing was designed with reset and rollback options so a failed update would not leave the system unusable.",
      "This project taught me how much engineering happens around the main control algorithm. A usable hardware system also needs diagnostics, safe testing, configuration management, and recovery paths."
    ],
    tech: "C# · WPF · .NET 8 · Arduino Leonardo · BTS7960 · firmware flashing · telemetry · Ollama",
    github: "https://github.com/CyberBrainiac1/BTS7960LeonardoFirmware-ControlCenter"
  },
  {
    slug: "ffbtester",
    title: "EMC Force-Feedback Tester",
    meta: "PERSONAL TEST-TOOL PROJECT · C# · HID FORCE FEEDBACK",
    category: "Bench testing",
    one: "Testing motor forces without entering a race.",
    description: [
      "Testing a force-feedback wheel only inside a racing game makes it difficult to isolate problems. I built the EMC Force-Feedback Tester to command known effects directly and observe how the wheel hardware responds on the workbench.",
      "The application includes adjustable force strength and multiple test modes, including constant force, pulses, and oscillation. Keyboard controls make it possible to trigger tests while watching the mechanism, and an always-visible emergency stop provides a quick way to cut the commanded effect.",
      "The tester helped separate hardware and firmware behavior from game configuration. If an effect behaved incorrectly in the tester, I knew the problem was inside the wheel system rather than the racing game."
    ],
    tech: "C# · .NET · DirectInput · HID force feedback · hardware diagnostics",
    github: "https://github.com/CyberBrainiac1/FFBWheelCustomFirmware"
  },
  {
    slug: "compactarm",
    title: "Compact Robot Arm",
    meta: "PERSONAL ROBOTICS PROJECT · OCTOBER 2025–PRESENT",
    category: "Low-cost robotics",
    one: "Moving a low-cost arm from manual control toward autonomy.",
    description: [
      "I built a compact robot arm using low-cost servo motors, a Raspberry Pi 4B, and an Adafruit servo HAT. The goal was to package the mechanical structure, electronics, and multi-servo control into a small platform that I could continue developing instead of treating it as a one-time demonstration.",
      "The first stage focused on mechanical assembly and reliable joint control. I am now extending the arm into Isaac Sim so I can explore simulation-driven control, reinforcement learning, and autonomous behavior without risking the physical mechanism during every experiment.",
      "The project gives me a platform for studying the gap between a commanded joint angle and what a low-cost physical arm actually does under backlash, flex, load, and servo limitations."
    ],
    tech: "Raspberry Pi 4B · Adafruit servo HAT · servo control · CAD · 3D printing · Isaac Sim",
    github: ""
  },
  {
    slug: "arm3dof",
    title: "3-DOF Desktop Robot Arm",
    meta: "PERSONAL ROBOTICS PROJECT · 2026",
    category: "Generative CAD",
    one: "Connecting hardware, simulation, and generative CAD.",
    description: [
      "This project explores three representations of the same robot arm: a physical mechanism, a MuJoCo simulation, and a generative CAD model.",
      "The arm uses pivot, shoulder, and elbow joints driven by goBILDA 5203 motors. I designed it to communicate with a REV Expansion Hub from a PC without requiring the complete FTC SDK, making the system useful outside a competition robot.",
      "In MuJoCo, the user can drag any link and read the resulting joint angles. This creates a direct way to experiment with poses and eventually transfer them to the hardware. I also created a CadQuery model and SolidWorks conversion scripts so dimensions and geometry could be generated programmatically.",
      "The project is still a development platform rather than a finished autonomous arm. Its main value is connecting mechanical design, simulation, and control around one consistent joint layout."
    ],
    tech: "goBILDA 5203 motors · REV Expansion Hub · MuJoCo · CadQuery · SolidWorks · PC control",
    github: "https://github.com/CyberBrainiac1/3dof-robot-arm"
  },
  {
    slug: "hand",
    title: "Robotic Hand",
    meta: "PERSONAL ROBOTICS PROJECT",
    category: "Tendon mechanisms",
    one: "Learning tendon actuation through printed fingers.",
    description: [
      "Human fingers do not rotate around a single rigid motor shaft. I built this project to explore a tendon-based approach in which strings pull through a series of printed joints to create a smooth curling motion.",
      "Each finger is driven by an MG90S micro servo that pulls a routed tendon. A Raspberry Pi 4B and 16-channel PWM HAT control the six servos, separating high-level control from the electrical timing required by each actuator.",
      "The main mechanical challenge is routing and tensioning the tendons so the fingers move predictably without excessive friction or slack. The design also has to package several actuators without making the hand too large or difficult to maintain.",
      "The project gave me hands-on experience with underactuated mechanisms, multi-servo control, tendon routing, CAD, and the differences between modeling a joint and making it move reliably."
    ],
    tech: "Raspberry Pi 4B · PWM servo HAT · MG90S servos · tendon actuation · CAD · 3D printing",
    github: "https://github.com/CyberBrainiac1/RoboticHand"
  },
  {
    slug: "kineticcam",
    title: "Kinetic Cam",
    meta: "PERSONAL MECHATRONICS PROJECT",
    category: "Camera mechanism",
    one: "Packaging a moving camera into a compact CAD-first system.",
    description: [
      "Kinetic Cam is a compact camera head designed around a clear packaging decision: keep the control electronics protected in the body while placing the camera and motion hardware in a servo-driven upper assembly.",
      "I developed the project as a complete Onshape assembly before separating the linkage, yoke, body, and servo housing into manufacturable parts. The upper mechanism uses an IMU from the MPU-6050 family to provide motion information, while the lower structure creates space for the electronics and custom PCB.",
      "The project focused less on adding as many axes as possible and more on producing an assembly whose mechanical and electronic parts had intentional locations. Designing the complete system in CAD allowed me to check clearances and service access before fabrication."
    ],
    tech: "Onshape · FreeCAD · servo mechanisms · GY-521/MPU-6050 IMU · custom PCB design · STEP modeling",
    github: "https://github.com/CyberBrainiac1/kinetic-cam"
  },
  {
    slug: "chessboard",
    title: "AI Chess Board",
    meta: "PERSONAL CAD AND AUTOMATION PROJECT",
    category: "Hidden gantry",
    one: "Hiding the robot so the board remains the experience.",
    description: [
      "Many automated chess boards place visible mechanisms above the playing surface. I wanted the board to look and function like a normal chess set while hiding the movement system underneath.",
      "My design uses an under-board gantry carrying an electromagnet. Magnetic pieces can be pulled from square to square while the visible surface remains clear. The X-axis uses a belt drive and pancake stepper motor to keep the mechanism compact.",
      "The main CAD challenge was fitting the motion hardware beneath an 8×8 board while maintaining enough travel to reach every square. The gantry also needed to move pieces without colliding with neighboring pieces or exposing the mechanism above the surface.",
      "The current project is a CAD prototype. It demonstrates the mechanical architecture but should not be presented as a completed autonomous chess system."
    ],
    tech: "CAD · belt drives · pancake stepper motor · electromagnet · gantry design",
    github: "https://github.com/CyberBrainiac1/ai-chess-board"
  },
  {
    slug: "esp32",
    title: "ESP32 Wi-Fi and Bluetooth Servo Controller",
    meta: "PERSONAL EMBEDDED-SYSTEMS PROJECT",
    category: "Connected control",
    one: "One device, two wireless control paths.",
    description: [
      "I built an ESP32 controller that can operate a servo through either Wi-Fi or Bluetooth Low Energy. The board creates its own wireless hotspot, so it does not depend on an existing network, while BLE provides a second connection option.",
      "A companion web application includes an automatic connection flow and can be installed on an iPhone like an app. Commands can be sent through a REST endpoint or a BLE GATT service, with the ESP32 generating the servo PWM signal on GPIO 18.",
      "The project brought networking, embedded firmware, browser interfaces, and physical actuation into one small system. It also gave me experience designing around multiple connection methods instead of assuming one network environment."
    ],
    tech: "ESP32 · Wi-Fi access point · Bluetooth Low Energy · REST API · BLE GATT · web application · servo PWM",
    github: "https://github.com/CyberBrainiac1/Esp32control1"
  },
  {
    slug: "cyberpad",
    title: "CyberPad and DailyPad",
    meta: "PERSONAL EMBEDDED-HARDWARE PROJECT",
    category: "Input device",
    one: "Iterating a custom controller around my real workflow.",
    description: [
      "CyberPad began as a custom macropad built around a Seeed XIAO RP2040, hot-swappable mechanical switches, RGB LEDs, and a 3D-printed enclosure. The goal was to create a physical controller for shortcuts I actually use instead of reproducing a generic keyboard layout.",
      "I designed the PCB and case using Onshape and FreeCAD, then wrote the firmware with CircuitPython and KMK. The controls were programmed to open frequently used websites and tools directly.",
      "After using the first version, I developed DailyPad as a second iteration. The project became less about making a macropad once and more about refining the hardware and shortcut layout around everyday use."
    ],
    tech: "Seeed XIAO RP2040 · custom PCB · CircuitPython · KMK · hot-swappable switches · RGB LEDs · Onshape · FreeCAD · 3D printing",
    github: "https://github.com/CyberBrainiac1/CyberPad"
  },
  {
    slug: "pedal",
    title: "Sim Racing Pedal System",
    meta: "PERSONAL ELECTRONICS PROJECT",
    category: "Independent sensing",
    one: "Separating pedal sensing from wheel control.",
    description: [
      "I designed the pedal system as an independent input module instead of making it dependent on the force-feedback controller. This made it easier to test pedal sensing, calibration, and axis mapping without involving the wheel’s motor-control loop.",
      "Development included correcting reversed inputs, testing automatic calibration, assigning the throttle and brake to the expected game-controller axes, and debugging a brake input that registered in software but was not accepted correctly by Assetto Corsa.",
      "Separating the pedals from the wheel reduced the number of variables involved in each test and made future sensor upgrades easier."
    ],
    tech: "Arduino input mapping · USB HID · pedal sensing · switch inputs · calibration",
    github: ""
  },
  {
    slug: "chassis",
    title: "Wooden Sim Racing Chassis",
    meta: "PERSONAL FABRICATION PROJECT",
    category: "Rig fabrication",
    one: "Building a complete rig with basic tools.",
    description: [
      "The steering wheel and pedals needed a structure that could resist steering torque and keep the controls in a repeatable position. I built the chassis primarily from standard 2×4 lumber using basic tools.",
      "The frame had to support the wheel, pedals, seat, electronics, and future motion hardware while remaining practical to modify. Because the project developed over time, I designed the structure around accessible mounting surfaces rather than permanently enclosing components.",
      "This part of the project taught me that mechanical support structures affect the performance of the electronics mounted to them. Flex in the frame can change the apparent wheel response, pedal feel, and motion-system geometry."
    ],
    tech: "Woodworking · 2×4 construction · drilling · mechanical mounting · iterative fabrication",
    github: ""
  },
  {
    slug: "frc",
    title: "FRC 2854 — The Prototypes",
    meta: "FIRST ROBOTICS COMPETITION · MECHANICAL MEMBER · NOVEMBER 2025–PRESENT",
    category: "Mechanical member",
    one: "Rapid mechanical iteration under competition pressure.",
    description: [
      "An FRC robot has to survive repeated impacts, short repair windows, and constant changes between matches. My work on FRC Team 2854, The Prototypes, has focused on mechanical design, testing, troubleshooting, and keeping the robot operational when reliability matters most.",
      "I research previous FRC games and study how high-performing teams solved similar scoring challenges. I use those patterns to contribute mechanism ideas instead of treating every game as a completely new problem. I have also worked on robot assembly, shooter components, intake alignment, spindexer issues, hopper sag, drivebase assembly, wiring, and repeated testing.",
      "During Sunset Showdown, I worked permanently in the pits to help prepare the robot for each match. After the shooter and transfer structure bent, another student and I had roughly 30 minutes to diagnose and repair it. We found the shifted plate, worked with a mentor to move it back into position, and restored the scoring mechanism before returning to competition.",
      "Outside the robot itself, I managed 3D-printing work, adjusted slicer settings for stronger parts, tracked batteries, helped repair bumpers, and checked that required tools were available. These tasks were not visually dramatic, but they directly affected whether the team could compete reliably."
    ],
    tech: "Mechanical troubleshooting · CAD review · Onshape · 3D printing · PETG · assembly · pit operations · system testing",
    github: ""
  },
  {
    slug: "ftc",
    title: "FTC 23425 — Evergreen Dragons",
    meta: "FIRST TECH CHALLENGE TEAM 23425 · DESIGN ENGINEER · SEPTEMBER 2023–PRESENT",
    category: "Design engineer",
    one: "Designing for repeatable, sensor-guided scoring.",
    description: [
      "A competition robot does not succeed because it scores once. It succeeds when its mechanisms and autonomous systems can repeat the same action across an entire event.",
      "As a design engineer for the Evergreen Dragons, I worked on the mechanical design and packaging of a robot built around repeatable scoring. The system combined a Limelight camera and AprilTag localization with a flywheel, powered intake, transfer stage, and driver-facing status indicator.",
      "My work focused on turning the scoring sequence into a connected mechanical system. The intake had to receive the game piece, the transfer had to move it without jamming, and the flywheel had to launch it consistently. These mechanisms also had to fit alongside cameras, wiring, structure, and other robot subsystems.",
      "I supported the team’s sensor-driven autonomous development through repeated testing with AprilTags, Road Runner, and dead-wheel odometry. Rather than treating autonomous performance as a single programming task, we tested the complete chain from localization to physical scoring.",
      "The team received the NorCal FTC Control Award in January 2026 for its use of sensors and software to improve robot performance."
    ],
    tech: "Onshape · mechanical packaging · Limelight · AprilTags · Road Runner · odometry · flywheel design · intake and transfer mechanisms",
    github: ""
  },
  {
    slug: "fll",
    title: "FLL Evergreen Dragons",
    meta: "FIRST LEGO LEAGUE · SEPTEMBER 2022–SEPTEMBER 2023",
    category: "FIRST foundation",
    one: "Learning to improve a robot one run at a time.",
    description: [
      "FLL was my introduction to competitive robotics. I learned that a robot’s first design rarely works exactly as expected and that consistent improvement comes from observing failures, changing one part of the system, and running the mission again.",
      "The experience gave me an early foundation in mechanism design, programming, teamwork, competition strategy, and iterative testing. Those lessons carried directly into my later FTC, FRC, and independent projects."
    ],
    tech: "LEGO robotics · programming · mechanism design · teamwork",
    github: ""
  }
];
