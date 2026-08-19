/**
 * PROJECT DATA SOURCE
 * Categories: "game", "graphic"
 */
const PROJECTS_DATA = [
  {
    id: "pcg-grass",
    category: "game",
    title: "PCG Grass - Procedurally Generated Grass",
    year: "May 2026",
    platforms: ["Unity", "Mixed Reality"],
    summary: "A modular procedural-grass system for lightweight standalone VR and AR devices.",
    details:
      "Developed configurable grass placement with adjustable density and distribution in Unity and C#. Optimized vegetation generation for improved rendering performance and reusable integration across environments.",
    image: "image/project_image.png",
    credits: "Unity, C#, URP, Meta MR Kit, GPU Instancing, Mixed Reality, YouTube Tutorial",
  },
  {
    id: "pcg-lighting",
    category: "game",
    title: "PCG Lighting - Procedurally Generated Lighting",
    year: "May 2026",
    platforms: ["Unity", "Mixed Reality"],
    summary: "A modular procedural-lighting system for lightweight standalone VR and AR devices.",
    details:
      "Developed a modular procedural lightning generation system in Unity using C#, featuring configurable frequency, length, branching, and intensity, optimized for low rendering and computational overhead on standalone VR, AR, and MR devices.",
    image: "image/PCG_Lightning.gif",
    credits: "Unity, C#, URP, Meta MR Kit, GPU Instancing, Mixed Reality , YouTube Tutorial",
  },
  {
    id: "run-red-line",
    category: "game",
    title: "RunRedLine - Android Game",
    year: "Jun 2026 - Aug 2026",
    platforms: ["Android"],
    summary: "An endless driving game with procedural environments, vehicle physics, progression, and performance-focused systems.",
    details:
      "Built deterministic procedural chunks, object pooling, score and currency systems, car unlocking, rewarded-ad revive mechanics, UI animations, audio, spatial SFX, and optimized runtime architecture.",
    image: "image/Run_redline.gif",
    credits: "Unity, C#, Object Pooling, Procedural Generation, GPU Instancing, Spatial Audio, Git",
  },
  {
    id: "plinko",
    category: "game",
    title: "Plinko - Android Game",
    year: "",
    platforms: ["Android"],
    summary: "A Cocos Creator Plinko game with custom path animation and performance-focused ball movement.",
    details:
      "Built ball movement with TypeScript and Bezier curves, created accurate positioning without a physics engine, and implemented object pooling, scoring, rewards, and win-calculation logic.",
    image: "image/Plinko.gif",
    credits: "Cocos Creator, TypeScript, Bezier Curves, Object Pooling, Custom Path Animation",
  },
  {
    id: "2048",
    category: "game",
    title: "2048 - Web Game",
    year: "",
    platforms: ["Web Game"],
    summary: "A web-based 2048 game created with help from a YouTube tutorial",
    details: "Built the game using Unity C# following a YouTube tutorial for the core mechanics and layout.",
    image: "image/2048.gif",
    demo_url: "https://yandomith.github.io/2048/",

    credits: "Unity , C#, YouTube Tutorial",
  },
  {
    id: "cps-rocket",
    category: "game",
    title: "CPS Rocket ",
    year: "",
    platforms: ["Web Game"],
    summary: "Developed a fast-paced 3-second click challenge game in Unity with custom-drawn assets",
    details:
      "Developed a fast-paced click-per-second game in Unity using custom-drawn assets, where players rapidly click within a 3-second timer to increase their click count, with the final score determining how high the rocket launches.",
    image: "image/CPS_Rocket.gif",
    demo_url: "https://yandomith.github.io/RocketCpsCounter/",
    credits: "Unity, C#, URP , Photoshop, ",
  },
  {
    id: "endless-runner",
    category: "game",
    title: "Endless Runner",
    year: "",
    platforms: ["PC"],
    summary: "A first-person endless runner with gameplay mechanics, player controls, and optimized systems.",
    details: "Developed a Unity and C# endless runner with performance and scalability in mind, including UI and gameplay interactions.",
    image: "image/project_image.png",
    credits: "Unity, C#, URP",
  },
  {
    id: "past-graphic-designs",
    category: "graphic",
    title: "Past Graphic Design Collection",
    year: "",
    platforms: ["Social Media", "Branding", "Ecommerce"],
    summary: "A curated collection of branding, social media creatives, product retouching, and marketing visuals.",
    details: "Produced diverse design deliverables across freelance and agency contexts, including brand identities, post creatives, product edits, and campaign visuals.",
    image: "image/project_image.png",
    demo_url: "https://drive.google.com/drive/folders/1AS1sOHdwL9RZx-wSycDrMNu2dM4TKTr?usp=drive_link",
    credits: "Graphic designer",
  },
];

