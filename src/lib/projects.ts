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
      "I got the idea from the Windows XP Clipper Character — I thought, why not make something like that for macOS? That's why I took my own approach to bringing my pet cat, Mini, onto my Mac. Now that we have access to different kinds of LLMs and AI agents, I thought, why not mix the two concepts and bring the power of an LLM into this idea to make something cool to interact with? That's why I made Coompanion.",
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
      "Meeting new people and dating around often comes with struggles we all face. Getting to know someone from scratch and figuring out your similarities and differences is the first thing that comes to mind, and it can be a bit tiring. After the initial interest, there's always a need to know someone better — figuring out which quirks match. Keeping that problem in mind, I made this project.",
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
      'A few days back I saw a YouTube video called "How to Retain Whatever You Have Read." In that video I learned a technique called progressive summarization. I tried it while reading some articles and books and found it a genuinely effective idea, so I thought, why not make it a Chrome extension so other people can benefit from it too?',
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
      "It's a learning-plus-exploration project for me. At Pathao, while we were building an in-app call feature, we needed to understand the signaling handshake, so I wrote a signaling server from scratch in Go over raw WebSockets — offer, answer, ICE candidates, the whole exchange.",
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
      "This is the first project I explored to learn RAG and how it works. My father is an advocate, so I thought, why not pick the legal domain so I can build something useful for him too? This is a project where I built a whole RAG pipeline that works well, with good accuracy, for a small portion of law sections from Bangladesh.",
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
      "During my undergrad at AUST, a classmate and I built Ben-Misog — a benchmark dataset of misogynistic comments in Bengali, along with baseline models to detect them.",
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
      "For a database systems course, I built a full university management system in Java and JavaFX — student records, admin controls, the works — backed by a properly normalized schema.",
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
      "Our computer graphics course used a bare-bones custom OpenGL wrapper called iGraphics. For that, I built AirRush — a full desktop flying game with collision detection and scoring, all rendered through that same framework.",
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
