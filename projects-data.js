window.portfolioProjects = [
  {
    slug: "catch",
    title: "CATCH",
    meta: "",
    category: "",
    one: "In progress",
    description: [],
    tech: "",
    github: "",
    statusOnly: true
  },
  {
    slug: "solderbuddy",
    title: "SolderBuddy",
    meta: "AMD × HACK CLUB ROBOTICS HACKATHON · THREE-PERSON TEAM · PHYSICAL AI · 2025",
    category: "Collaborative robotics",
    one: "A robot arm that hands you tools while you solder.",
    description: [
      "When you are soldering, stopping to look for a tool can break your focus. Our three-person team built SolderBuddy so one SO101 robot arm could find a tool, pick it up, and hand it to you.",
      "I worked on the robot’s vision, training data, and controls. We used three cameras and recorded about 480 examples of a person guiding the arm. Those examples helped us train and compare AI models for picking up and handing over tools.",
      "I also built a small tool-request controller with a Seeed XIAO RP2040 and an OLED screen. It let the user ask for a tool without opening a computer menu.",
      "The biggest lesson was that a robot is more than its AI model. Camera angles, good training examples, reliable hardware, and a simple user interface all matter."
    ],
    tech: "Python · LeRobot · ACT · imitation learning · multi-camera computer vision · SO101 robot arm · RP2040 · embedded firmware",
    github: "https://github.com/CyberBrainiac1/SolderBuddy"
  },
  {
    slug: "evolora",
    title: "EvoLoRA",
    meta: "AI ENGINEER WORLD’S FAIR HACKATHON · FINALIST · TOP 6 OF 69 · JUNE 2026",
    category: "Hackathon finalist",
    one: "Helping small AI models get better at one specific job.",
    description: [
      "Getting into Cerebral Valley’s 2026 AI Engineer World’s Fair Hackathon was exciting and a little scary. I was the youngest person there. Most of the room was filled with adult AI engineers, founders, and builders with real-world experience.",
      "I met Vaibhav Satishkumar, another Bay Area high school student, through the event’s Discord. The day before the hackathon, we used an Excalidraw whiteboard to plan ideas. Vaibhav was great at finding a new direction whenever an idea did not work.",
      "We built EvoLoRA, an agent that fine-tunes small language models for a specific task. You describe the job in plain language, and EvoLoRA creates training examples, chooses safe LoRA settings, trains the model, and checks whether the new version is actually better.",
      "A MiniMax agent plans the experiment. Python checks every step and locks the evaluation so the test cannot quietly change. Unsloth trains the model on a remote GPU, an LLM on DigitalOcean judges the answers, and MongoDB Atlas saves each run. The system keeps the best adapter for later use.",
      "Vaibhav built the GPU-side Unsloth training and inference system. I built the MiniMax agent, orchestration, evaluations, training-data pipeline, remote GPU connection, terminal interface, and the links between each part. Just before the opening ceremony, we met Akshay Langhani. I was impressed by how quickly he learned new tools and adapted as the project changed.",
      "This hackathon felt different from the high school events I had attended. Teams planned on whiteboards, tested ideas quickly, learned from failures, and kept building. The views of the Bay also made the day memorable.",
      "EvoLoRA finished in the top six out of 69 teams. I also met Renan Serrano, Ramis Hasanli, and many other interesting builders.",
      "At first I felt out of place. Once I started talking to people and working, I became comfortable and had a great time. My biggest lesson was to run toward the things that make you unsure. That is often how you find out what you can do."
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
      "Cyclists often remember a close call, but the useful details disappear after the ride. Blind Spot was our idea for saving those moments and using them to make future routes safer.",
      "The concept combines a bike-mounted device with a phone app. A rider can save what happened, where it happened, and how safe the route felt. The app then places those reports on a map.",
      "I built an interactive phone demo for the full ride: viewing the map, starting a recording, saving an incident, and reviewing the trip. Blind Spot won Milpitas Hacks 3 in a field of 223 participants."
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
      "People with dementia may have trouble recognizing someone they know. FamiliarAI explored whether a camera and a simple dashboard could help caregivers organize information about familiar people.",
      "Our three-person team built a face-recognition prototype and a TypeScript dashboard that made its results easy to understand.",
      "This was an early demo, not a medical product. FamiliarAI won BISV Hacks 2026 in a field of 138 participants."
    ],
    tech: "TypeScript · camera-based face recognition · dashboard development",
    github: "https://github.com/CyberBrainiac1/FamiliarAI"
  },
  {
    slug: "motionrig",
    title: "Sim Racing Motion Rig & Wooden Chassis",
    meta: "PERSONAL MECHATRONICS + FABRICATION PROJECT · HARDWARE IN DEVELOPMENT · 2026–PRESENT",
    category: "Motion rig fabrication",
    one: "Building the wooden rig and making it move from game telemetry.",
    description: [
      "My steering wheel and pedals needed a strong frame that would not move under force. I built the chassis from standard 2×4 lumber with basic tools.",
      "The frame supports the wheel, pedals, seat, electronics, and motion hardware. I kept the mounting areas open so I could change parts as the project grew.",
      "I then began turning the chassis into a motion simulator. Two motors pull cables wrapped around spools. Each cable lifts one side of a wooden platform to create pitch and roll, while the rider’s weight brings it back down.",
      "Building the frame and motion system together showed me how much flex affects steering feel, pedal feel, and motion geometry. It also pushed me to think about motor control, game data, calibration, and safety limits as one system.",
      "The rig is still being built. I am now finishing the hardware, adding position sensors, checking the travel limits, and tuning the controller with weight on the platform."
    ],
    tech: "Woodworking · 2×4 construction · mechanical mounting · dual-motor cable actuation · spool design · motor drivers · sensor feedback · mechanical safety · Assetto Corsa and BeamNG telemetry",
    github: ""
  },
  {
    slug: "ffbwheel",
    title: "DIY Force-Feedback Steering Wheel",
    meta: "PERSONAL MECHATRONICS PROJECT · FEBRUARY 2026–PRESENT",
    category: "Sim-racing hardware",
    one: "Building real steering torque from raw components.",
    description: [
      "I built my own force-feedback steering wheel for BeamNG and Assetto Corsa. It combines DC motors, belts and gears, an encoder, motor drivers, pedals, and an Arduino Leonardo that acts like a USB game controller.",
      "One version uses two geared motors on the same shaft so their force adds together. I had to reduce looseness, frame flex, heat, and belt slip while still making the wheel feel strong.",
      "The hardest bugs came from the steering feedback. A real 180-degree turn was sometimes reported as 379 degrees and later as only 21 degrees. I traced the encoder settings, gear ratio, and sensor location to find the errors. I also fixed reversed pedals, wrong controller axes, calibration problems, and overheated motor drivers.",
      "Those failures taught me to treat the wheel as one complete system. The firmware, sensor, drivetrain, frame, and game settings all affect how it feels."
    ],
    tech: "Arduino Leonardo · BTS7960 · quadrature encoder · USB HID · brushed DC motors · belt drive · gear drive · woodworking · calibration",
    github: ""
  },
  {
    slug: "arm3dof",
    title: "3-DOF Desktop Robot Arm",
    meta: "PERSONAL ROBOTICS PROJECT · 2026",
    category: "Generative CAD",
    one: "One robot arm built in hardware, simulation, and code-made CAD.",
    description: [
      "I built the same three-joint robot arm in three forms: real hardware, a MuJoCo simulation, and a CAD model generated with code.",
      "The base, shoulder, and elbow use goBILDA 5203 motors. A PC talks directly to a REV Expansion Hub, so I can use the arm without running the full FTC software system.",
      "In the simulation, you can drag any arm link and see the joint angles change. I also wrote CadQuery and SolidWorks tools that generate the arm’s geometry from dimensions.",
      "This is still a development platform, not a finished autonomous robot. It gives me one place to connect mechanical design, simulation, and motor control."
    ],
    tech: "goBILDA 5203 motors · REV Expansion Hub · MuJoCo · CadQuery · SolidWorks · PC control",
    github: "https://github.com/CyberBrainiac1/3dof-robot-arm"
  },
  {
    slug: "hand",
    title: "Robotic Hand",
    meta: "PERSONAL ROBOTICS PROJECT",
    category: "Tendon mechanisms",
    one: "A printed robot hand that curls its fingers with strings.",
    description: [
      "I built a printed robot hand that curls its fingers by pulling strings, much like tendons in a human hand.",
      "An MG90S servo pulls each finger. A Raspberry Pi 4B and a 16-channel servo board control all six motors.",
      "The hard part was routing and tightening the strings so the fingers moved smoothly without too much friction or slack. I also had to fit several servos into a hand that was still easy to repair.",
      "This project taught me about tendon-driven mechanisms, multi-servo control, CAD, and the gap between a joint that looks right on screen and one that moves reliably in real life."
    ],
    tech: "Raspberry Pi 4B · PWM servo HAT · MG90S servos · tendon actuation · CAD · 3D printing",
    github: "https://github.com/CyberBrainiac1/RoboticHand"
  },
  {
    slug: "kineticcam",
    title: "Kinetic Cam",
    meta: "PERSONAL MECHATRONICS PROJECT",
    category: "Camera mechanism",
    one: "A compact moving camera designed as one complete assembly.",
    description: [
      "Kinetic Cam is a small moving camera head. The main electronics stay protected in the body, while the camera and servos sit in the upper section.",
      "I first designed the complete assembly in Onshape. Then I split the linkage, yoke, body, and servo housing into parts that could be made. An MPU-6050-family motion sensor tracks movement, and the lower body has room for a custom circuit board.",
      "Designing everything together helped me check clearances, wiring space, and repair access before building it."
    ],
    tech: "Onshape · FreeCAD · servo mechanisms · GY-521/MPU-6050 IMU · custom PCB design · STEP modeling",
    github: "https://github.com/CyberBrainiac1/kinetic-cam"
  },
  {
    slug: "chessboard",
    title: "AI Chess Board",
    meta: "PERSONAL CAD AND AUTOMATION PROJECT",
    category: "Hidden gantry",
    one: "A chess board that hides its moving parts underneath.",
    description: [
      "I wanted an automated chess board that still looked like a normal chess set. The moving parts are hidden below the playing surface.",
      "A small gantry carries an electromagnet under the board. It pulls magnetic pieces from one square to another. A belt and flat stepper motor keep the mechanism compact.",
      "The main CAD challenge was fitting enough movement under an 8×8 board while avoiding nearby pieces.",
      "This project is currently a CAD prototype, not a finished autonomous chess board."
    ],
    tech: "CAD · belt drives · pancake stepper motor · electromagnet · gantry design",
    github: "https://github.com/CyberBrainiac1/ai-chess-board"
  },
  {
    slug: "cyberpad",
    title: "CyberPad and DailyPad",
    meta: "PERSONAL EMBEDDED-HARDWARE PROJECT",
    category: "Input device",
    one: "A custom shortcut pad built around the tools I use every day.",
    description: [
      "CyberPad is a small keyboard for the shortcuts I actually use. It has a Seeed XIAO RP2040, replaceable mechanical switches, RGB lights, and a 3D-printed case.",
      "I designed the circuit board and case in Onshape and FreeCAD, then wrote the firmware with CircuitPython and KMK. Each button can open a website or tool directly.",
      "After using the first version, I built DailyPad as a second try. That let me improve the hardware and button layout based on everyday use."
    ],
    tech: "Seeed XIAO RP2040 · custom PCB · CircuitPython · KMK · hot-swappable switches · RGB LEDs · Onshape · FreeCAD · 3D printing",
    github: "https://github.com/CyberBrainiac1/CyberPad"
  },
  {
    slug: "pedal",
    title: "Sim Racing Pedal System",
    meta: "PERSONAL ELECTRONICS PROJECT",
    category: "Independent sensing",
    one: "A separate USB pedal system for easier testing and upgrades.",
    description: [
      "I made the pedals their own USB controller instead of connecting them through the force-feedback wheel. This made the sensors and calibration much easier to test.",
      "I fixed reversed inputs, automatic calibration, and incorrect throttle and brake axes. I also tracked down a brake signal that appeared in software but was not working correctly in Assetto Corsa.",
      "Keeping the pedals separate gave me fewer things to debug at once and made future sensor upgrades easier."
    ],
    tech: "Arduino input mapping · USB HID · pedal sensing · switch inputs · calibration",
    github: ""
  },
  {
    slug: "frc",
    title: "FRC 2854 — The Prototypes",
    meta: "FIRST ROBOTICS COMPETITION · MECHANICAL MEMBER · NOVEMBER 2025–PRESENT",
    category: "Mechanical member",
    one: "Building and repairing an FRC robot under competition pressure.",
    description: [
      "An FRC robot takes hard hits and often has only a few minutes for repairs. On Team 2854, The Prototypes, I work on mechanical design, testing, repairs, and keeping the robot ready for its next match.",
      "I study older FRC games and learn how strong teams solved similar problems. I have worked on the drivebase, shooter, intake, spindexer, hopper, wiring, assembly, and testing.",
      "At Sunset Showdown, I stayed in the pits to prepare the robot for each match. When the shooter and transfer frame bent, another student and I had about 30 minutes to find the problem. With help from a mentor, we moved the shifted plate back and got the scoring system working again.",
      "I also managed 3D prints, changed settings to make parts stronger, tracked batteries, repaired bumpers, and kept tools ready. These small jobs helped the team compete reliably."
    ],
    tech: "Mechanical troubleshooting · CAD review · Onshape · 3D printing · PETG · assembly · pit operations · system testing",
    github: ""
  },
  {
    slug: "ftc",
    title: "FTC 23425 — Evergreen Dragons",
    meta: "FIRST TECH CHALLENGE TEAM 23425 · DESIGN ENGINEER · SEPTEMBER 2023–PRESENT",
    category: "Design engineer",
    one: "Designing a competition robot that can score again and again.",
    description: [
      "A competition robot has to score more than once. It needs to repeat the same movement through a full event.",
      "As a design engineer for the Evergreen Dragons, I helped fit the robot’s scoring system into one reliable package. It used a Limelight camera and AprilTags to find its position, plus a powered intake, transfer system, flywheel, and driver status light.",
      "I worked on how the pieces moved through the robot. The intake had to collect them, the transfer had to avoid jams, and the flywheel had to launch them consistently. Everything also had to fit around the frame, cameras, and wiring.",
      "We tested the full autonomous system using AprilTags, Road Runner, and tracking wheels. The team received the NorCal FTC Control Award in January 2026 for its use of sensors and software."
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
      "FLL was my introduction to competitive robotics. I learned that the first design rarely works exactly as planned. The best way forward is to watch what fails, change one thing, and run the mission again.",
      "It gave me an early start in mechanisms, programming, teamwork, strategy, and testing. I still use those lessons in FTC, FRC, and my own projects."
    ],
    tech: "LEGO robotics · programming · mechanism design · teamwork",
    github: ""
  }
];
