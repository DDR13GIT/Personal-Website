export type ProjectIconName =
  | "cat"
  | "heart"
  | "quill"
  | "signal"
  | "scale"
  | "stethoscope"
  | "shield"
  | "graduation-cap"
  | "paper-plane"
  | "ticket"
  | "dino";

export interface Project {
  slug: string;
  title: string;
  category: "ideas" | "academic";
  icon: ProjectIconName;
  story: string;
  stack: string[];
  githubUrl: string;
  liveUrl?: string;
  year: string;
}

export const CATEGORY_LABELS: Record<Project["category"], string> = {
  ideas: "Ideas I Have Tinkered With",
  academic: "Academic Projects",
};

// Comment out any object below (block-select + Cmd+/ or wrap in /* */) to
// hide that project from the site. Nothing else needs to change.
const projects: Project[] = [
  {
    slug: "coompanion",
    title: "Coompanion",
    category: "ideas",
    icon: "cat",
    story:
      "My cat, Mini, sits on my desk while I code, so I put her on the desktop too. Coompanion is a macOS companion built in Swift that reacts, wanders, and reminds me to take a breath between builds. I'm slowly wiring in AI agent behavior so she can respond to what's actually happening on screen, not just look cute doing it.",
    stack: ["Swift", "macOS", "AppKit"],
    githubUrl: "https://github.com/DDR13GIT/coompanion",
    year: "2026",
  },

  {
    slug: "cutush",
    title: "Cutush",
    category: "ideas",
    icon: "heart",
    story:
      "Most compatibility quizzes feel like a personality test or a dating-app gimmick, so I built one that just asks what people actually want to know. Cutush runs 40 questions across eight dimensions and hands back an anonymous code — no accounts, no login, just two people comparing notes honestly.",
    stack: ["Next.js", "TypeScript"],
    githubUrl: "https://github.com/DDR13GIT/cutush",
    year: "2025",
  },

  {
    slug: "marginalia-summarizer",
    title: "Marginalia Summarizer",
    category: "ideas",
    icon: "quill",
    story:
      "I kept skimming articles and forgetting them ten minutes later, so I built a Chrome extension that won't let me scroll past a passage until I've summarized it in my own words — a margin-note technique borrowed from Jeffrey Kaplan. Everything runs locally: no accounts, no server, no build step, just something to slow me down on purpose.",
    stack: ["JavaScript", "Chrome Extension"],
    githubUrl: "https://github.com/DDR13GIT/marginalia-summarizer",
    year: "2026",
  },

  {
    slug: "signaling-server",
    title: "WebRTC Signaling Server",
    category: "ideas",
    icon: "signal",
    story:
      "At Pathao I build real-time WebRTC infrastructure for a living, and I wanted to actually understand the signaling handshake instead of trusting the library to do it for me. So I wrote a signaling server from scratch in Go over raw WebSockets — offer, answer, ICE candidates, the whole exchange, no framework hiding the hard part.",
    stack: ["Go", "WebSocket"],
    githubUrl: "https://github.com/DDR13GIT/signaling-server",
    year: "2024",
  },

  {
    slug: "ni-act-rag",
    title: "NI Act RAG",
    category: "ideas",
    icon: "scale",
    story:
      "Retrieval-Augmented Generation gets talked about constantly, so I wanted to see what actually breaks when you point it at something dense and unforgiving — Bangladesh's National ICT Act. It's a humble project: chunking, embedding, retrieval, generation, nothing exotic. But working through a real legal text taught me more about RAG's failure modes than any tutorial did.",
    stack: ["Python", "RAG", "LLM"],
    githubUrl: "https://github.com/DDR13GIT/ni-act-rag",
    year: "2026",
  },

  {
    slug: "docdocbd",
    title: "DocDocBD",
    category: "ideas",
    icon: "stethoscope",
    story:
      'Finding the right doctor in Bangladesh usually means scrolling a directory organized by specialty names most patients don\'t know. DocDocBD lets you describe symptoms in plain language and matches you to the right specialist instead, using natural language processing to bridge the gap between "my stomach hurts" and "gastroenterologist."',
    stack: ["TypeScript", "NLP"],
    githubUrl: "https://github.com/DDR13GIT/DocDocBD",
    year: "2025",
  },

  {
    slug: "ben-misog",
    title: "Ben-Misog",
    category: "academic",
    icon: "shield",
    story:
      "During my undergrad at AUST, a classmate and I built Ben-Misog — a benchmark dataset of misogynistic comments in Bengali, along with baseline models to detect them. NLP research in a low-resource language like Bangla means doing a lot of the annotation and evaluation groundwork yourself, and this dataset became the basis of a co-authored research paper I'm still proud of.",
    stack: ["NLP", "Bangla", "Research"],
    githubUrl: "https://github.com/DDR13GIT/Ben-Misog",
    year: "2023",
  },

  {
    slug: "integrated-university-management-system",
    title: "Integrated University Management System",
    category: "academic",
    icon: "graduation-cap",
    story:
      "For a database systems course, I built a full university management system in Java and JavaFX — student records, admin controls, the works — backed by a properly normalized schema instead of the flat-file shortcuts most student projects take. It's picked up a few stars from other students who clearly needed the same reference I did.",
    stack: ["Java", "JavaFX", "SQL"],
    githubUrl:
      "https://github.com/DDR13GIT/Integrated_University_Management_System-Project",
    year: "2021",
  },

  {
    slug: "airrush-game",
    title: "AirRush",
    category: "academic",
    icon: "paper-plane",
    story:
      "Our computer graphics course used a bare-bones custom OpenGL wrapper called iGraphics, and instead of building the minimum required demo, I built AirRush — a full desktop flying game with collision detection and scoring, all rendered through that same framework. There's something satisfying about making a real game work with nothing but raw draw calls.",
    stack: ["C++", "OpenGL"],
    githubUrl: "https://github.com/DDR13GIT/AirRush_Game",
    year: "2022",
  },

  {
    slug: "stadium-seat-management-system",
    title: "Stadium Seat Management System",
    category: "academic",
    icon: "ticket",
    story:
      "A distributed systems assignment asked us to design around real constraints — concurrent writes, partial failures, no single source of truth — so I built a stadium ticketing system on a distributed database to make those constraints concrete. Watching two requests race for the same seat and seeing the system resolve it correctly was the whole point.",
    stack: ["Distributed Systems", "MSSQL"],
    githubUrl: "https://github.com/DDR13GIT/Stadium-Seat-Management-System",
    year: "2023",
  },

  {
    slug: "3d-dinosaur-run",
    title: "3D Dinosaur Run",
    category: "academic",
    icon: "dino",
    story:
      "I wanted to understand 3D rendering without hiding behind a game engine, so I wrote a browser-based endless runner — a dinosaur game, but in three dimensions — with the vector math, world generation, and player physics all written by hand in plain JavaScript. No Three.js, no shortcuts, just math.js and world.js doing the actual work.",
    stack: ["JavaScript", "3D Math"],
    githubUrl: "https://github.com/DDR13GIT/3D-Dinosaur-Run",
    year: "2023",
  },
];

export interface ProjectGroup {
  category: Project["category"];
  label: string;
  projects: Project[];
}

export function getProjectsByCategory(): ProjectGroup[] {
  const order: Project["category"][] = ["ideas", "academic"];

  return order
    .map((category) => ({
      category,
      label: CATEGORY_LABELS[category],
      projects: projects.filter((project) => project.category === category),
    }))
    .filter((group) => group.projects.length > 0);
}
