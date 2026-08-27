# Projects Page — Design Spec

Date: 2026-08-27
Status: Approved

## Goal

Replace the placeholder `/projects` page ("Work in progress.") with a real, curated showcase of GitHub repos owned by `DDR13GIT`, grouped into two categories, each project told as a short first-person story rather than a spec sheet. A recruiter or visitor should be able to read the story and click straight through to the code.

## Non-goals

- No live GitHub API fetching at request/build time. Data is a hand-curated static list — repo metadata was fetched once during design, but content is authored, not generated.
- No filtering UI (unlike the blog timeline). Two categories, ~11 items — a static grouped list is enough.
- No project detail sub-pages. Each entry links out to its GitHub repo (and, where one exists, a live demo).

## Data model — `src/lib/projects.ts`

```ts
export interface Project {
  slug: string;
  title: string;
  category: "ideas" | "academic";
  story: string;      // 2-4 sentences, first person, ends implying "go look"
  stack: string[];
  githubUrl: string;
  liveUrl?: string;
  year: string;        // display year (repo creation year)
}

export const CATEGORY_LABELS: Record<Project["category"], string> = {
  ideas: "Ideas I Love to Explore",
  academic: "Academic Projects",
};

const projects: Project[] = [
  { slug: "coompanion", ... },

  { slug: "cutush", ... },

  // ...one object per project, blank line between entries
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
      projects: projects.filter((p) => p.category === category),
    }))
    .filter((group) => group.projects.length > 0);
}
```

**Comment-out mechanism**: each project is a single self-contained object literal, one per array entry, separated by a blank line. To hide a project from the site, select its object block in an editor and toggle comment (`Cmd+/` / `Ctrl+/`), or wrap it in `/* ... */`. No `visible` flag, no build step — commenting the block out is enough, since `getProjectsByCategory()` just filters whatever remains in the array. Groups with zero remaining projects are dropped automatically so an empty category never renders.

## Curated project list

**Ideas I Love to Explore** (order below):
1. `coompanion` — macOS desktop cat companion, Swift, AI agent integration planned
2. `cutush` — anonymous relationship-compatibility quiz, live at cutush.vercel.app
3. `marginalia-summarizer` — Chrome extension enforcing margin-note active reading
4. `signaling-server` — Go WebSocket signaling server, self-study tied to WebRTC work at Pathao
5. `ni-act-rag` — RAG system over legal text, self-study
6. `DocDocBD` — NLP-based doctor finder for Bangladesh, symptoms in natural language

**Academic Projects** (order below):
1. `Ben-Misog` — Bangla misogyny-detection benchmark dataset, co-authored research paper (referenced already on the About page)
2. `Integrated_University_Management_System-Project` — JavaFX-powered university DBMS, 4 GitHub stars
3. `AirRush_Game` — desktop game built on the custom OpenGL framework `iGraphics`, CSE coursework
4. `Stadium-Seat-Management-System` — stadium ticketing system over a distributed database
5. `3D-Dinosaur-Run` — 3D endless-runner in the browser, hand-rolled vector math (`math.js`, `world.js`), no game engine

All 11 are public repos so the GitHub link resolves for any visitor. Private repos (`TapCounter`, `dotfiles`, `riddlercore`, etc.) and pure practice/lab-exercise repos with no narrative were excluded from the shortlist during brainstorming.

## Component — `src/components/ProjectsList.tsx`

Server component (no interactivity, so no `"use client"`), rendered from `src/app/projects/page.tsx`. Visual pattern reused from `BlogTimeline.tsx`'s spine-timeline (left vertical line + dot per entry), adapted:

- One `<section>` per category. Category label rendered as a heading (serif, sized between the page `h1` and a post title — matching the existing type scale) instead of the blog timeline's month/year column, since category names are long ("Ideas I Love to Explore") and don't fit a narrow fixed column.
- Within a category: the existing spine + dot column, then a card per project containing:
  - Title (serif, same weight/size as `timeline-post-title`)
  - Story paragraph (`--font-dm-sans`, same size/color as blog excerpt)
  - Stack tag chips (same chip style as blog tags — border, mono font, uppercase)
  - "View code →" using the existing `.arrow-link` class, pointing at `githubUrl`, `target="_blank" rel="noopener noreferrer"`
  - If `liveUrl` present, a second small link "Live →" next to it, same treatment
- Whole thing wrapped in `RevealGroup` (already used on About/Blog) for the site's scroll-reveal animation, consistent with the rest of the site.

## Page — `src/app/projects/page.tsx`

Same header pattern as the current placeholder (`Reveal`-wrapped `h1` "Projects" + italic serif subtitle). Subtitle rewritten from "Work in progress." to something that sets expectation, e.g. "Things I've built, broken, and learned from." Renders `<ProjectsList groups={getProjectsByCategory()} />` below the header, inside the existing `Footer`.

## Story voice

First person, matching the About page: specific technical detail over feature lists, understated humor, and — where genuine — a line tying the project back to real motivation (e.g. `signaling-server` ↔ the WebRTC infra work at Pathao mentioned in About; `Ben-Misog` ↔ the co-authored research paper already mentioned in About). Each story is 2-4 sentences and ends on a note that invites clicking through to the code rather than summarizing it away.

## Testing / verification

- `npm run check` (lint + typecheck + build) must pass.
- Manually verify in the browser: both category sections render, all 11 GitHub links open the correct repo, live-demo links (`cutush`) work, scroll-reveal animation fires, light/dark theme both look correct, mobile viewport doesn't overflow.
- Verify commenting out one project entry in `projects.ts` removes it from the rendered page without touching anything else (proves the comment-out mechanism actually works end to end).
