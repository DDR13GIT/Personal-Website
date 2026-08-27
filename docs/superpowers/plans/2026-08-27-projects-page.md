# Projects Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the placeholder `/projects` page with a curated, storytelling showcase of 11 public GitHub repos grouped into "Ideas I Love to Explore" and "Academic Projects", each with a first-person story and a link to the code.

**Architecture:** A static, hand-authored data module (`src/lib/projects.ts`) feeds a server-rendered list component (`src/components/ProjectsList.tsx`), rendered from the existing `src/app/projects/page.tsx` route. No client state, no API calls at request time — visibility is controlled by commenting object literals in/out of the data array.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript strict, inline styles + CSS variables (existing convention), GSAP-driven `RevealGroup`/`Reveal` for scroll animation (existing components), Node's built-in `node:test` runner for the data-layer test.

## Global Constraints

- TypeScript strict mode, no `any` (per `AGENTS.md`).
- 2-space indentation, named exports, camelCase utilities / PascalCase components (per `AGENTS.md`).
- Follow existing inline-style conventions — do not introduce a new styling system for this page (per `AGENTS.md`).
- Mobile-first responsive behavior must be preserved (per `AGENTS.md`).
- `npm run check` (lint + typecheck + build) must pass before this is done.
- Data must be static/curated — no GitHub API calls at build or request time (per spec `docs/superpowers/specs/2026-08-27-projects-page-design.md`).
- Every project entry must be a self-contained object literal in the array so it can be hidden by commenting the block out (per spec).

---

## Task 1: Project data layer

**Files:**
- Create: `src/lib/projects.ts`
- Test: `test/projects-data.test.mjs`

**Interfaces:**
- Produces: `Project` interface (`slug`, `title`, `category: "ideas" | "academic"`, `story`, `stack: string[]`, `githubUrl`, `liveUrl?`, `year`), `CATEGORY_LABELS: Record<Project["category"], string>`, `ProjectGroup` interface (`category`, `label`, `projects: Project[]`), `getProjectsByCategory(): ProjectGroup[]`. Task 2 consumes `getProjectsByCategory()` and both interfaces.

- [ ] **Step 1: Write the failing test**

Create `test/projects-data.test.mjs`:

```js
import assert from "node:assert/strict";
import { test } from "node:test";
import { getProjectsByCategory } from "../src/lib/projects.ts";

test("groups projects into ideas and academic categories in that order", () => {
  const groups = getProjectsByCategory();

  assert.equal(groups.length, 2);
  assert.equal(groups[0].category, "ideas");
  assert.equal(groups[0].label, "Ideas I Love to Explore");
  assert.equal(groups[1].category, "academic");
  assert.equal(groups[1].label, "Academic Projects");
});

test("every project has the fields a card needs to render", () => {
  const groups = getProjectsByCategory();
  const allProjects = groups.flatMap((g) => g.projects);

  assert.ok(allProjects.length > 0);

  for (const project of allProjects) {
    assert.ok(project.slug, `missing slug on ${project.title}`);
    assert.ok(project.title, `missing title on ${project.slug}`);
    assert.ok(project.story.length > 0, `missing story on ${project.slug}`);
    assert.ok(project.stack.length > 0, `missing stack on ${project.slug}`);
    assert.match(
      project.githubUrl,
      /^https:\/\/github\.com\/DDR13GIT\//,
      `githubUrl should point at a DDR13GIT repo for ${project.slug}`
    );
    assert.match(project.year, /^\d{4}$/, `year should be 4 digits for ${project.slug}`);
  }
});

test("slugs are unique", () => {
  const groups = getProjectsByCategory();
  const slugs = groups.flatMap((g) => g.projects.map((p) => p.slug));
  assert.equal(new Set(slugs).size, slugs.length);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --experimental-strip-types --test test/projects-data.test.mjs`
Expected: FAIL — `src/lib/projects.ts` does not exist yet (`ERR_MODULE_NOT_FOUND`).

- [ ] **Step 3: Write the implementation**

Create `src/lib/projects.ts`:

```ts
export interface Project {
  slug: string;
  title: string;
  category: "ideas" | "academic";
  story: string;
  stack: string[];
  githubUrl: string;
  liveUrl?: string;
  year: string;
}

export const CATEGORY_LABELS: Record<Project["category"], string> = {
  ideas: "Ideas I Love to Explore",
  academic: "Academic Projects",
};

// Comment out any object below (block-select + Cmd+/ or wrap in /* */) to
// hide that project from the site. Nothing else needs to change.
const projects: Project[] = [
  {
    slug: "coompanion",
    title: "Coompanion",
    category: "ideas",
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
    story:
      "Most compatibility quizzes feel like a personality test or a dating-app gimmick, so I built one that just asks what people actually want to know. Cutush runs 40 questions across eight dimensions and hands back an anonymous code — no accounts, no login, just two people comparing notes honestly.",
    stack: ["Next.js", "TypeScript"],
    githubUrl: "https://github.com/DDR13GIT/cutush",
    liveUrl: "https://cutush.vercel.app",
    year: "2025",
  },

  {
    slug: "marginalia-summarizer",
    title: "Marginalia Summarizer",
    category: "ideas",
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
    story:
      "Finding the right doctor in Bangladesh usually means scrolling a directory organized by specialty names most patients don't know. DocDocBD lets you describe symptoms in plain language and matches you to the right specialist instead, using natural language processing to bridge the gap between \"my stomach hurts\" and \"gastroenterologist.\"",
    stack: ["TypeScript", "NLP"],
    githubUrl: "https://github.com/DDR13GIT/DocDocBD",
    year: "2025",
  },

  {
    slug: "ben-misog",
    title: "Ben-Misog",
    category: "academic",
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
```

- [ ] **Step 4: Run test to verify it passes**

Run: `node --experimental-strip-types --test test/projects-data.test.mjs`
Expected: PASS, `# tests 3`, `# pass 3`, `# fail 0`.

- [ ] **Step 5: Commit**

```bash
git add src/lib/projects.ts test/projects-data.test.mjs
git commit -m "feat: add curated projects data with storytelling copy"
```

---

## Task 2: Projects list component

**Files:**
- Create: `src/components/ProjectsList.tsx`

**Interfaces:**
- Consumes: `ProjectGroup`, `Project` from `@/lib/projects` (Task 1).
- Produces: `ProjectsList({ groups }: { groups: ProjectGroup[] })` — default-less named export, consumed by Task 3.

- [ ] **Step 1: Write the component**

Create `src/components/ProjectsList.tsx`:

```tsx
import type { ProjectGroup } from "@/lib/projects";
import { RevealGroup } from "./RevealGroup";

export function ProjectsList({ groups }: { groups: ProjectGroup[] }) {
  return (
    <>
      {groups.map((group) => (
        <section key={group.category} style={{ marginBottom: "48px" }}>
          <h2
            style={{
              fontFamily: "var(--font-lora), serif",
              fontSize: "22px",
              fontWeight: 600,
              color: "var(--c-text)",
              borderBottom: "1px solid var(--c-border)",
              paddingBottom: "14px",
              marginBottom: "8px",
            }}
          >
            {group.label}
          </h2>

          <RevealGroup selector="article">
            <div style={{ display: "flex", flexDirection: "column" }}>
              {group.projects.map((project) => (
                <article
                  key={project.slug}
                  style={{
                    padding: "24px 0",
                    borderBottom: "1px solid var(--c-border)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      gap: "16px",
                      marginBottom: "8px",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-lora), serif",
                        fontSize: "17px",
                        fontWeight: 600,
                        lineHeight: "22.1px",
                        color: "var(--c-text)",
                      }}
                    >
                      {project.title}
                    </h3>
                    <span
                      style={{
                        fontFamily: "var(--font-dm-mono), monospace",
                        fontSize: "11px",
                        fontWeight: 400,
                        letterSpacing: "0.22px",
                        color: "var(--c-muted)",
                        whiteSpace: "nowrap",
                        flexShrink: 0,
                      }}
                    >
                      {project.year}
                    </span>
                  </div>

                  <p
                    style={{
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: "14px",
                      fontWeight: 400,
                      lineHeight: "23.8px",
                      color: "var(--c-secondary)",
                      marginBottom: "14px",
                    }}
                  >
                    {project.story}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "5px",
                      marginBottom: "14px",
                    }}
                  >
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          fontFamily: "var(--font-dm-mono), monospace",
                          fontSize: "10px",
                          fontWeight: 400,
                          textTransform: "uppercase",
                          letterSpacing: "0.6px",
                          color: "var(--c-muted)",
                          border: "1px solid var(--c-border)",
                          padding: "4px 8px",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: "flex", gap: "20px" }}>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="arrow-link"
                      style={{
                        fontFamily: "var(--font-dm-sans), sans-serif",
                        fontSize: "11px",
                        fontWeight: 400,
                        textTransform: "uppercase",
                        letterSpacing: "0.77px",
                        color: "var(--c-secondary)",
                      }}
                    >
                      View code →
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="arrow-link"
                        style={{
                          fontFamily: "var(--font-dm-sans), sans-serif",
                          fontSize: "11px",
                          fontWeight: 400,
                          textTransform: "uppercase",
                          letterSpacing: "0.77px",
                          color: "var(--c-secondary)",
                        }}
                      >
                        Live →
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </RevealGroup>
        </section>
      ))}
    </>
  );
}
```

- [ ] **Step 2: Verify types**

Run: `npm run typecheck`
Expected: no errors referencing `ProjectsList.tsx`.

- [ ] **Step 3: Commit**

```bash
git add src/components/ProjectsList.tsx
git commit -m "feat: add ProjectsList timeline component"
```

---

## Task 3: Wire up the projects page

**Files:**
- Modify: `src/app/projects/page.tsx` (full file, currently the "Work in progress." placeholder)

**Interfaces:**
- Consumes: `getProjectsByCategory` from `@/lib/projects` (Task 1), `ProjectsList` from `@/components/ProjectsList` (Task 2).

- [ ] **Step 1: Replace the page**

Replace the full contents of `src/app/projects/page.tsx`:

```tsx
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { ProjectsList } from "@/components/ProjectsList";
import { getProjectsByCategory } from "@/lib/projects";

export const metadata = {
  title: "Projects | Debopriya Deb Roy",
};

export default function ProjectsPage() {
  const groups = getProjectsByCategory();

  return (
    <>
      <Navbar />
      <div
        style={{
          maxWidth: "780px",
          margin: "0 auto",
          padding: "36px 36px 0",
        }}
      >
        <main>
          <Reveal>
          <h1
            style={{
              fontFamily: "var(--font-lora), serif",
              fontSize: "36px",
              fontWeight: 600,
              letterSpacing: "-0.72px",
              lineHeight: "43.2px",
              color: "var(--c-text)",
              margin: "0 0 8px",
            }}
          >
            Projects
          </h1>

          <p
            style={{
              fontFamily: "var(--font-lora), serif",
              fontSize: "15px",
              fontWeight: 400,
              fontStyle: "italic",
              lineHeight: "21.75px",
              color: "var(--c-secondary)",
              margin: "0 0 28px",
            }}
          >
            Things I've built, broken, and learned from.
          </p>
          </Reveal>

          <ProjectsList groups={groups} />
        </main>

        <Footer />
      </div>
    </>
  );
}
```

- [ ] **Step 2: Run the full check**

Run: `npm run check`
Expected: lint, typecheck, and build all pass with no errors.

- [ ] **Step 3: Commit**

```bash
git add src/app/projects/page.tsx
git commit -m "feat: render curated project stories on the projects page"
```

---

## Task 4: Manual verification

**Files:** none (verification only)

- [ ] **Step 1: Run the data test suite once more for the whole test directory**

Run: `node --experimental-strip-types --test test/`
Expected: `test/projects-data.test.mjs` passes (pre-existing `test/posts-data.test.mjs` failures, if any, are out of scope for this plan).

- [ ] **Step 2: Start the dev server and view the page**

Run: `npm run dev`, open `http://localhost:3000/projects`.
Verify:
- Both "Ideas I Love to Explore" and "Academic Projects" sections render with their 6 and 5 entries respectively.
- Every "View code →" link opens the correct `https://github.com/DDR13GIT/<repo>` URL in a new tab.
- The "Live →" link appears only on the Cutush card and opens `https://cutush.vercel.app`.
- Scroll-reveal animation fires as you scroll down the list (cards fade/slide in).
- Toggle light/dark theme (existing `ThemeProvider` control in `Navbar`) and confirm both look correct.
- Resize to a mobile viewport and confirm no horizontal overflow and text wraps sensibly.

- [ ] **Step 3: Verify the comment-out mechanism end to end**

In `src/lib/projects.ts`, wrap one project object (e.g. the `cutush` entry) in `/* ... */`, save, and confirm in the browser that:
- The card disappears from "Ideas I Love to Explore" (now 5 entries).
- Nothing else on the page changes or errors.

Then remove the `/* */` to restore it, save, and confirm the card reappears. Do not commit this exploratory edit.

- [ ] **Step 4: Final commit if anything was fixed during verification**

If manual verification surfaces a fix, commit it with a message describing what was wrong and how it was fixed. If nothing needed fixing, no commit is needed for this task.
