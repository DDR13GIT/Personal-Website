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
