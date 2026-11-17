export const SITE = {
  name: "Ahqaf Ali",
  handle: "AhqafCoder",
  role: "Full-Stack Developer & R&D Engineer",
  email: "ahqafaliofficial@gmail.com",
  location: "Bareilly, India",
  coords: "28.36°N / 79.43°E",
  site: "https://www.ahqafali.dev",
};

export const NAV_LINKS = [
  { id: "about", label: "ABOUT" },
  { id: "work", label: "WORK" },
  { id: "log", label: "LOG" },
  { id: "stack", label: "STACK" },
  { id: "contact", label: "CONTACT" },
] as const;

export const STATS = [
  { value: 15, suffix: "+", label: "PROJECTS SHIPPED" },
  { value: 800, suffix: "+", label: "OPEN-SOURCE CONTRIBUTIONS" },
  { value: 3, suffix: "", label: "HACKATHONS WON" },
  { value: 2, suffix: "", label: "COMMUNITIES BUILT" },
];

export type FeaturedProject = {
  index: string;
  name: string;
  blurb: string;
  tags: string[];
  year: string;
  badge?: string;
  live?: string;
  code?: string;
};

export const FEATURED: FeaturedProject[] = [
  {
    index: "01",
    name: "SIH AquaSense",
    blurb:
      "Smart India Hackathon-winning water quality monitoring software. Autonomous navigation with hyperspectral data capture, real-time processing and cloud analysis.",
    tags: ["IOT", "REAL-TIME", "AUTONOMOUS", "CLOUD"],
    year: "2025",
    badge: "SIH 2025 WINNER",
  },
  {
    index: "02",
    name: "AI Crop Recommendation",
    blurb:
      "Intelligent farming system — 95% recommendation accuracy, 90% disease detection, 87.5% fertilizer optimization and 92.3% profit prediction.",
    tags: ["ML", "TENSORFLOW", "PYTHON", "REACT"],
    year: "2025",
  },
  {
    index: "03",
    name: "OpenGeek Platform",
    blurb:
      "Secure full-stack community platform for a developer community — industry-grade UI, scalable backend, shipped to production.",
    tags: ["FULL-STACK", "AUTH", "DEPLOYED"],
    year: "2025",
    live: "https://community.opengeek.in/",
    code: "https://github.com/AhqafCoder/OPENGEEK",
  },
  {
    index: "04",
    name: "InvertisPrep",
    blurb:
      "Gamified EdTech platform for previous-year questions and notes. Built for Inverthon 2025 — and won it.",
    tags: ["EDTECH", "GAMIFIED", "LIVE"],
    year: "2025",
    live: "https://www.invertisprep.in/",
    code: "https://github.com/AhqafCoder/InvertisPrep",
  },
];

export type Slot = {
  name: string;
  icon: string;
  rarity: "COMMON" | "UNCOMMON" | "RARE" | "EPIC" | "LEGENDARY" | "WIP";
  lore: string[];
  href?: string;
  external?: boolean;
};

export const RARITY_COLOR: Record<Slot["rarity"], string> = {
  COMMON: "text-bone",
  UNCOMMON: "text-ore",
  RARE: "text-[#55ffff]",
  EPIC: "text-spell",
  LEGENDARY: "text-[#ffaa00]",
  WIP: "text-lava",
};

export const SLOTS: Slot[] = [
  {
    name: "VTOL Drone",
    icon: "drone",
    rarity: "LEGENDARY",
    lore: ["Hybrid VTOL. Autonomous flight,", "AI-based navigation. In the lab,", "not on the shelf — yet."],
    href: "#contact",
  },
  {
    name: "EZ Code",
    icon: "cmd",
    rarity: "COMMON",
    lore: ["EdTech coding + DSA challenge", "platform. Ship it, break it, fix it."],
    href: "https://ezcode-xi.vercel.app/",
    external: true,
  },
  {
    name: "CWEB",
    icon: "redstone",
    rarity: "UNCOMMON",
    lore: ["Lightweight HTTP server framework", "in C. Because sometimes you", "just write the server."],
    href: "https://cweb-7pbz.onrender.com",
    external: true,
  },
  {
    name: "DocSmart",
    icon: "chest",
    rarity: "COMMON",
    lore: ["Document management system", "built for scalable retrieval."],
    href: "https://github.com/AhqafCoder/DocSmart",
    external: true,
  },
  {
    name: "Hostel HMS",
    icon: "bed",
    rarity: "WIP",
    lore: ["Role-based full-stack hostel", "operations system. Crafting", "in progress."],
    href: "https://github.com/AhqafCoder/HMS",
    external: true,
  },
  {
    name: "Showers Healing",
    icon: "apple",
    rarity: "UNCOMMON",
    lore: ["Paid international client build", "(London). Full UI/UX + deploy,", "end to end."],
    href: "https://showershealing.com/",
    external: true,
  },
  {
    name: "IndiPixel",
    icon: "grass",
    rarity: "RARE",
    lore: ["Gaming community site for a", "Minecraft ecosystem. It started", "with a server, obviously."],
    href: "https://www.indipixel.online",
    external: true,
  },
  {
    name: "WA CRM Auto",
    icon: "note",
    rarity: "UNCOMMON",
    lore: ["WhatsApp API + HubSpot wired", "together with n8n. Sales team", "hasn't touched a spreadsheet since."],
  },
  {
    name: "This Site",
    icon: "portal",
    rarity: "EPIC",
    lore: ["You're looking at it. Next.js,", "Tailwind, Lenis and an", "irresponsible number of secrets."],
    href: "#top",
  },
];

export type ExperienceEntry = {
  period: string;
  current?: boolean;
  role: string;
  org: string;
  detail: string;
};

export const EXPERIENCE: ExperienceEntry[] = [
  {
    period: "2026.02 → NOW",
    current: true,
    role: "Full Stack Developer",
    org: "EduSphere Technologies",
    detail: "Early-stage startup. Building and scaling product in a fast, execution-first environment.",
  },
  {
    period: "2025.10 → NOW",
    current: true,
    role: "Tech Associate",
    org: "Invertis Incubation Center",
    detail: "Real-world product development, scalable production systems, startup-style team collaboration.",
  },
  {
    period: "2025.06 → 2025.09",
    role: "Developer",
    org: "OpenGeek Tech Community",
    detail: "Built the secure full-stack community platform — shipped live at community.opengeek.in.",
  },
  {
    period: "2025.04 → 2025.07",
    role: "Product Developer",
    org: "InvertisPrep (Inverthon 2025)",
    detail: "Student platform for PYQs and notes with gamified learning. Inverthon winner.",
  },
  {
    period: "2024.09 → 2025.01",
    role: "Active Member",
    org: "Abhiruchi I-TECH Club",
    detail: "Technical event management and hands-on team projects.",
  },
  {
    period: "2024.04 → 2024.06",
    role: "Server Ops",
    org: "Java Game Dev · Singapore Cloud",
    detail: "Multiplayer arcade server setup, uptime management and technical support on Singapore hosting.",
  },
  {
    period: "2023 → 2024",
    role: "Discord Community Manager",
    org: "IndiPixel",
    detail: "Managed a 400+ member community — moderation, engagement, retention.",
  },
];

export const HOTBAR = [
  { ab: "TS", name: "TypeScript", cat: "LANGUAGE", c: "#3178c6" },
  { ab: "NX", name: "Next.js", cat: "FRAMEWORK", c: "#ece9e2" },
  { ab: "ND", name: "Node.js", cat: "RUNTIME", c: "#68a063" },
  { ab: "PY", name: "Python", cat: "LANGUAGE", c: "#f5d90a" },
  { ab: "PG", name: "PostgreSQL", cat: "DATABASE", c: "#4aa3df" },
  { ab: "DK", name: "Docker", cat: "CONTAINER", c: "#2496ed" },
  { ab: "GC", name: "Google Cloud", cat: "CLOUD", c: "#f2a71b" },
  { ab: "N8", name: "n8n", cat: "AUTOMATION", c: "#ff4d2e" },
  { ab: "RS", name: "Rust", cat: "LANGUAGE", c: "#f97316" },
];

export const STACK_GROUPS = [
  {
    title: "LANGUAGES",
    items: "TypeScript · JavaScript · Python · Java · C / C++ · Rust · SQL",
  },
  {
    title: "FRONTEND",
    items: "React · Next.js · Tailwind CSS · Framer Motion · Responsive + UI/UX implementation",
  },
  {
    title: "BACKEND & DATA",
    items: "Node.js · Express · REST · GraphQL · PostgreSQL · MySQL · MongoDB · Supabase · Firebase · Prisma · Drizzle",
  },
  {
    title: "AI & AUTOMATION",
    items: "LLM integration · AI workflows · ML model integration · n8n automations · Prompt engineering",
  },
  {
    title: "CLOUD & OPS",
    items: "GCP · Vercel · Docker · Linux / VPS · Nginx · CI/CD · SSH · DNS & domain management",
  },
  {
    title: "SECURITY",
    items: "OAuth 2.0 · Clerk · JWT · Firebase Auth",
  },
];

export type Advancement = { icon: string; name: string; desc: string; won?: boolean };

export const ADVANCEMENTS: Advancement[] = [
  { icon: "trophy", name: "Smart India Hackathon", desc: "2025 winner — AquaSense water-quality software", won: true },
  { icon: "trophy", name: "Inverthon 2025", desc: "Winner — built InvertisPrep, live and in use", won: true },
  { icon: "medal", name: "Techathon 2024", desc: "Winner — early proof the streak wasn't luck", won: true },
  { icon: "mic", name: "TEDx InvertisU", desc: "Co-host + web team", won: true },
  { icon: "globe", name: "GDG New Delhi", desc: "Google Developer Group member" },
  { icon: "flask", name: "INSPIRE Bootcamp", desc: "Organizing committee, science bootcamp 2025" },
];

export const SOCIALS = [
  { label: "GITHUB", href: "https://github.com/AhqafCoder" },
  { label: "LINKEDIN", href: "https://linkedin.com/in/ahqafali" },
  { label: "INSTAGRAM", href: "https://instagram.com/ahqafali0403" },
  { label: "DISCORD", href: "https://discord.com/users/ahqafcoder" },
  { label: "TELEGRAM", href: "https://t.me/ahqafali" },
];
