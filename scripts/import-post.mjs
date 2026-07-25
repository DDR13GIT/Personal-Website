#!/usr/bin/env node
//
// import-post.mjs — Import an Obsidian note into src/content/blog as an MDX post.
//
// Copies images referenced via Obsidian wiki-embeds (![[image.png]]) from the
// note's folder into public/images/blog/<slug>/, rewrites those embeds to
// standard markdown image links pointing at the copied files, strips a
// leading H1 (it becomes the frontmatter title — the blog post page renders
// its own <h1>), and writes the result to src/content/blog/<slug>.mdx.
//
// Usage:
//   node scripts/import-post.mjs <path-to-note.md> --tag "PostgreSQL" --excerpt "One-line summary." [--date 2026-07-25] [--slug custom-slug]
//
// Caveat: MDX treats bare { } and < outside code fences as JSX/expressions.
// If the build fails after import, look for a stray bracket or angle
// bracket in prose (outside ``` code blocks) and escape or rephrase it.

import fs from "fs";
import path from "path";

function parseArgs(argv) {
  const args = { _: [] };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith("--")) {
      const key = a.slice(2);
      const value = argv[i + 1] && !argv[i + 1].startsWith("--") ? argv[++i] : true;
      args[key] = value;
    } else {
      args._.push(a);
    }
  }
  return args;
}

function slugify(input) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function humanizeFilename(filename) {
  const base = filename.replace(/\.[^.]+$/, "");
  return base.replace(/[-_]+/g, " ").trim();
}

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const notePath = args._[0];

  if (!notePath) {
    console.error("Usage: node scripts/import-post.mjs <path-to-note.md> --tag \"...\" --excerpt \"...\" [--date YYYY-MM-DD] [--slug custom-slug]");
    process.exit(1);
  }
  if (!args.tag || !args.excerpt) {
    console.error("Missing required flags: --tag and --excerpt are both required (no placeholder content on public pages).");
    process.exit(1);
  }

  const resolvedNotePath = path.resolve(notePath);
  if (!fs.existsSync(resolvedNotePath)) {
    console.error(`Note not found: ${resolvedNotePath}`);
    process.exit(1);
  }

  const noteDir = path.dirname(resolvedNotePath);
  const raw = fs.readFileSync(resolvedNotePath, "utf-8");
  const lines = raw.split(/\r?\n/);

  // Pull the leading H1 as the title, then drop it from the body.
  let title = null;
  let bodyStartIdx = 0;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line === "") continue;
    const h1 = line.match(/^#\s+(.+)$/);
    if (h1) {
      title = h1[1].trim();
      bodyStartIdx = i + 1;
    }
    break;
  }
  if (!title) {
    title = humanizeFilename(path.basename(resolvedNotePath));
  }

  const slug = args.slug ? slugify(args.slug) : slugify(title);
  const date = args.date || todayISO();
  const imagesDir = path.join(process.cwd(), "public", "images", "blog", slug);

  let body = lines.slice(bodyStartIdx).join("\n").trim();

  // Rewrite Obsidian wiki-embeds: ![[image.png]] or ![[image.png|400]]
  const embedPattern = /!\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/g;
  const copiedImages = [];
  const missingImages = [];

  body = body.replace(embedPattern, (match, rawName) => {
    const filename = rawName.trim();
    const sourcePath = path.join(noteDir, filename);
    const destName = slugify(humanizeFilename(filename)) + path.extname(filename).toLowerCase();

    if (!fs.existsSync(sourcePath)) {
      missingImages.push(filename);
      return match; // leave untouched so it's easy to grep for later
    }

    fs.mkdirSync(imagesDir, { recursive: true });
    fs.copyFileSync(sourcePath, path.join(imagesDir, destName));
    copiedImages.push(destName);

    const alt = humanizeFilename(filename);
    return `![${alt}](/images/blog/${slug}/${destName})`;
  });

  const frontmatter = [
    "---",
    `title: "${title.replace(/"/g, '\\"')}"`,
    `date: "${date}"`,
    `excerpt: "${String(args.excerpt).replace(/"/g, '\\"')}"`,
    `tag: "${args.tag}"`,
    "---",
    "",
    "",
  ].join("\n");

  const outPath = path.join(process.cwd(), "src", "content", "blog", `${slug}.mdx`);
  if (fs.existsSync(outPath) && !args.force) {
    console.error(`${outPath} already exists. Pass --force to overwrite.`);
    process.exit(1);
  }

  fs.writeFileSync(outPath, frontmatter + body + "\n");

  console.log(`Wrote ${path.relative(process.cwd(), outPath)}`);
  if (copiedImages.length) {
    console.log(`Copied ${copiedImages.length} image(s) to ${path.relative(process.cwd(), imagesDir)}/`);
  }
  if (missingImages.length) {
    console.warn(`Could not find ${missingImages.length} referenced image(s) next to the note, left as-is: ${missingImages.join(", ")}`);
  }
  console.log("Review the post, then run `npm run check` before committing.");
}

main();
