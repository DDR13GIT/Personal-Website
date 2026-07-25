import Link from "next/link";
import { getRecentPosts } from "@/lib/posts";
import { RevealGroup } from "./RevealGroup";

export function PostsSection() {
  const posts = getRecentPosts(3);

  return (
    <div style={{ marginBottom: "56px" }}>
      {/* Section header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          borderBottom: "1px solid var(--c-border)",
          paddingBottom: "16px",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-lora), serif",
            fontSize: "19px",
            fontWeight: 600,
            color: "var(--c-text)",
          }}
        >
          Recent writing
        </h2>
        <Link
          href="/blog"
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
          All posts →
        </Link>
      </div>

      {/* Post list */}
      <RevealGroup selector="li">
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="b-card"
              style={{
                display: "block",
                padding: "20px 0",
                borderBottom: "1px solid var(--c-border)",
                textDecoration: "none",
                color: "var(--c-text)",
              }}
            >
              {/* Top row: title + date */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  gap: "24px",
                  marginBottom: "5px",
                }}
              >
                <div
                  className="post-card-title"
                  style={{
                    fontFamily: "var(--font-lora), serif",
                    fontSize: "17px",
                    fontWeight: 600,
                    lineHeight: "22.1px",
                    color: "var(--c-text)",
                  }}
                >
                  {post.title}
                </div>
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
                  {`${post.month.charAt(0)}${post.month.slice(1).toLowerCase()} ${post.year}`}
                </span>
              </div>

              {/* Excerpt */}
              <div
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "13px",
                  fontWeight: 400,
                  lineHeight: "20.8px",
                  color: "var(--c-secondary)",
                }}
              >
                {post.excerpt}
              </div>

              {/* Tags */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "5px",
                  marginTop: "10px",
                }}
              >
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: "10px",
                      fontWeight: 400,
                      textTransform: "uppercase",
                      letterSpacing: "0.6px",
                      color: "var(--c-muted)",
                      border: "1px solid var(--c-border)",
                      padding: "4px 8px",
                      display: "block",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          </li>
        ))}
      </ul>
      </RevealGroup>
    </div>
  );
}
