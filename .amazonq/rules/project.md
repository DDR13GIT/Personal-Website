<!-- AUTO-GENERATED from AGENTS.md — do not edit directly.
     Run `bash scripts/sync-agent-rules.sh` to regenerate. -->

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Personal Website

## What This Is
Debopriya Deb Roy's personal website and MDX blog. The app is a small, content-focused Next.js site with a homepage, writing index, individual MDX posts, an about page, and a manual page.

## Tech Stack
- **Framework:** Next.js 16 (App Router, React 19, TypeScript strict)
- **Content:** MDX files in `src/content/blog`
- **Styling:** Tailwind CSS v4 plus CSS variables in `src/app/globals.css`
- **Images:** Next Image for local public assets
- **Deployment:** Vercel-compatible Next.js standalone output

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run lint` — ESLint check
- `npm run typecheck` — TypeScript check
- `npm run check` — Run lint + typecheck + build

## Code Style
- TypeScript strict mode, no `any`
- Named exports, PascalCase components, camelCase utilities
- Prefer existing inline style conventions unless doing a broader styling pass
- 2-space indentation
- Responsive: mobile-first behavior must be preserved

## Content Rules
- Blog posts live in `src/content/blog/*.mdx`
- Frontmatter drives post metadata and dynamic filters
- Use real content only; do not add placeholders to public pages
- Keep the homepage recent-writing section sourced from `getRecentPosts(3)`
- Keep blog filters sourced from `getAllTags()`

## Project Structure
```
src/
  app/              # Next.js routes
  components/       # React components
  content/blog/     # MDX posts
  lib/posts.ts      # Blog metadata helpers
public/
  images/           # Local images
  seo/              # Favicons and SEO images
test/
  posts-data.test.mjs
```

## Important Notes
- After editing `AGENTS.md`, run `bash scripts/sync-agent-rules.sh` to regenerate platform-specific instruction files.
- Do not commit generated folders such as `.next/`, `node_modules/`, or local OS metadata.
