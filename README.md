# Personal Website

The source for Debopriya Deb Roy's personal website, built with Next.js 16, React 19, TypeScript, Tailwind CSS v4, and MDX.

## Features

- Personal homepage with profile, writing links, and social links
- MDX-powered blog posts in `src/content/blog`
- Dynamic blog tag filters generated from post frontmatter
- Recent writing section sourced from the latest blog posts
- Light and dark theme support

## Commands

```bash
npm run dev
npm run lint
npm run typecheck
npm run build
npm run check
```

## Content

Add blog posts as `.mdx` files in `src/content/blog`. Each post should include frontmatter like:

```md
---
title: "Post title"
date: "2026-05-22"
excerpt: "Short summary."
tag: "PostgreSQL"
---
```

The blog page derives filter buttons from post tags automatically, and the homepage shows the latest three posts.

## Publishing a post written in Obsidian

If you write in Obsidian with the image in the same folder as the note, use the import script instead of copying things by hand.

1. Finish your note in Obsidian as usual. First line should be a `# Title` heading, images embedded the normal Obsidian way (`![[my-image.png]]`).
2. Run the import script from the project root:
   ```bash
   npm run import-post -- "/path/to/Your Note.md" --tag "PostgreSQL" --excerpt "One-line summary of the post."
   ```
   - `--tag` and `--excerpt` are required — pick the tag that matches your existing blog tags (or a new one), and write a one-sentence excerpt for the post list.
   - Optional flags: `--date "2026-07-25"` (defaults to today), `--slug custom-slug` (defaults to a slugified title), `--force` (overwrite if the post already exists).
3. The script will:
   - Create `src/content/blog/<slug>.mdx` with frontmatter filled in and the title stripped from the body (the page renders its own heading).
   - Copy every embedded image into `public/images/blog/<slug>/` and rewrite the embeds to point at the copied files.
   - Print a warning if it can't find an image next to the note — fix the path and re-run with `--force`.
4. Sanity check before publishing:
   ```bash
   npm run check
   ```
   If it fails, look for a stray `{`, `}`, or `<` in your prose outside a code block — MDX treats those as code, not text, so they need to be inside backticks or a fenced code block.
5. Preview locally with `npm run dev`, then commit and push when it looks right.

**Note:** the script only handles Obsidian's `![[image.png]]` embed style, not standard `![alt](image.png)` markdown links (those already work as-is, no import needed).
