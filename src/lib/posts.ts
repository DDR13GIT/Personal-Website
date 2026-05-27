import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  month: string;
  year: string;
  tag: string;
  tags: string[];
  excerpt: string;
}

const CONTENT_DIR = path.join(process.cwd(), "src/content/blog");

function normalizeTags(data: Record<string, unknown>): string[] {
  const frontmatterTags = data.tags;
  const frontmatterTag = data.tag;
  const tags = Array.isArray(frontmatterTags) ? frontmatterTags : [frontmatterTag];

  return tags
    .filter((tag): tag is string => typeof tag === "string" && tag.trim().length > 0)
    .map((tag) => tag.trim().toUpperCase());
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const files = fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx"));

  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(CONTENT_DIR, filename), "utf-8");
      const { data } = matter(raw);
      const date = (data.date as string) ?? "";
      const d = date ? new Date(date) : new Date();
      const tags = normalizeTags(data);

      return {
        slug,
        title: (data.title as string) ?? slug,
        date,
        month: d
          .toLocaleString("en-US", { month: "short" })
          .toUpperCase(),
        year: String(d.getFullYear()),
        tag: tags[0] ?? "",
        tags,
        excerpt: (data.excerpt as string) ?? "",
      };
    })
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export function getAllTags(): string[] {
  const tags = new Set<string>();

  for (const post of getAllPosts()) {
    for (const tag of post.tags) {
      tags.add(tag);
    }
  }

  return ["ALL", ...tags];
}

export function getRecentPosts(limit: number): PostMeta[] {
  return getAllPosts().slice(0, limit);
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}
