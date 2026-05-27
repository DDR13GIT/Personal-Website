import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getPostSlugs } from "@/lib/posts";

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const fullPath = path.join(
    process.cwd(),
    `src/content/blog/${slug}.mdx`
  );
  const raw = fs.readFileSync(fullPath, "utf-8");
  const { data } = matter(raw);
  return {
    title: (data.title as string) ?? slug,
    description: (data.excerpt as string) ?? "",
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  const fullPath = path.join(
    process.cwd(),
    `src/content/blog/${slug}.mdx`
  );
  const raw = fs.readFileSync(fullPath, "utf-8");
  const { data } = matter(raw);

  const { default: Post } = (await import(
    `@/content/blog/${slug}.mdx`
  )) as { default: React.ComponentType };

  const date = data.date as string | undefined;
  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <>
      <Navbar />
      <div
        style={{ maxWidth: "780px", margin: "0 auto", padding: "36px 36px 0" }}
      >
        <main>
          <article>
            {/* Back link */}
            <Link
              href="/blog"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.6px",
                color: "var(--c-muted)",
                textDecoration: "none",
                marginBottom: "32px",
              }}
            >
              ← Writing
            </Link>

            {/* Post header */}
            <header style={{ marginBottom: "40px" }}>
              {data.tag && (
                <span
                  style={{
                    display: "inline-block",
                    marginBottom: "14px",
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: "10px",
                    fontWeight: 400,
                    textTransform: "uppercase",
                    letterSpacing: "0.6px",
                    color: "var(--c-secondary)",
                    border: "1px solid var(--c-divider)",
                    padding: "3px 9px",
                  }}
                >
                  {(data.tag as string).toUpperCase()}
                </span>
              )}
              <h1
                style={{
                  fontFamily: "var(--font-lora), serif",
                  fontSize: "32px",
                  fontWeight: 600,
                  letterSpacing: "-0.64px",
                  lineHeight: "1.25",
                  color: "var(--c-text)",
                  margin: "0 0 12px",
                }}
              >
                {data.title as string}
              </h1>
              {formattedDate && (
                <time
                  dateTime={date}
                  style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: "11px",
                    color: "var(--c-muted)",
                    letterSpacing: "0.3px",
                  }}
                >
                  {formattedDate}
                </time>
              )}
            </header>

            {/* Post body */}
            <div className="mdx-prose">
              <Post />
            </div>
          </article>

          <div style={{ height: "1px", backgroundColor: "var(--c-border)", margin: "48px 0 40px" }} />
        </main>

        <Footer />
      </div>

      <style>{`
        .mdx-prose > * + * {
          margin-top: 0;
        }
        /* rehype-pretty-code figure */
        .mdx-prose figure[data-rehype-pretty-code-figure] {
          margin-bottom: 24px;
        }
        .mdx-prose figure[data-rehype-pretty-code-figure] pre {
          padding: 18px 20px;
          border-radius: 6px;
          overflow-x: auto;
          font-family: var(--font-dm-mono), monospace;
          font-size: 13px;
          line-height: 1.65;
        }
        .mdx-prose figure[data-rehype-pretty-code-figure] [data-line] {
          padding: 0 2px;
        }
        /* KaTeX display math */
        .mdx-prose .katex-display {
          margin: 28px 0;
          overflow-x: auto;
        }
        /* Inline code that isn't inside a pre block */
        .mdx-prose :not(pre) > code {
          font-family: var(--font-dm-mono), monospace;
          font-size: 12.5px;
          background-color: var(--c-code-bg);
          color: var(--c-text);
          padding: 1px 5px;
          border-radius: 3px;
        }
      `}</style>
    </>
  );
}
