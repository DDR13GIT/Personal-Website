"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import type { PostMeta } from "@/lib/posts";

interface MonthGroup {
  month: string;
  year: string;
  posts: PostMeta[];
}

export function BlogTimeline({ posts, filters }: { posts: PostMeta[]; filters: string[] }) {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const monthGroups = useMemo<MonthGroup[]>(() => {
    const filtered =
      activeFilter === "ALL"
        ? posts
        : posts.filter((post) => post.tags.includes(activeFilter));

    const map = new Map<string, MonthGroup>();
    for (const post of filtered) {
      const key = `${post.month}-${post.year}`;
      if (!map.has(key)) {
        map.set(key, { month: post.month, year: post.year, posts: [] });
      }
      map.get(key)!.posts.push(post);
    }
    return Array.from(map.values());
  }, [posts, activeFilter]);

  return (
    <>
      {/* Filter buttons */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "6px",
          marginBottom: "36px",
        }}
      >
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className="filter-btn"
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: "10px",
              fontWeight: 400,
              textTransform: "uppercase",
              letterSpacing: "0.6px",
              padding: "5px 11px",
              border:
                activeFilter === f
                  ? "1px solid var(--c-text)"
                  : "1px solid var(--c-border)",
              borderRadius: "2px",
              backgroundColor: activeFilter === f ? "var(--c-text)" : "transparent",
              color: activeFilter === f ? "var(--c-bg)" : "var(--c-muted)",
              cursor: "pointer",
              lineHeight: "1",
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {monthGroups.length === 0 && (
          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "14px",
              color: "var(--c-muted)",
              padding: "20px 0",
            }}
          >
            No posts in this category yet.
          </p>
        )}
        {monthGroups.map((group) => (
          <div
            key={`${group.month}-${group.year}`}
            style={{
              display: "grid",
              gridTemplateColumns: "68px 36px 1fr",
              position: "relative",
            }}
          >
            {/* Month label */}
            <div style={{ paddingTop: "20px" }}>
              <div
                style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: "10px",
                  fontWeight: 400,
                  textTransform: "uppercase",
                  letterSpacing: "0.6px",
                  color: "var(--c-muted)",
                  lineHeight: "1.4",
                }}
              >
                {group.month}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: "10px",
                  fontWeight: 400,
                  color: "var(--c-border)",
                  lineHeight: "1.4",
                }}
              >
                {group.year}
              </div>
            </div>

            {/* Spine */}
            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  left: "17px",
                  width: "1px",
                  backgroundColor: "var(--c-border)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "26px",
                  left: "14px",
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  backgroundColor: "var(--c-text)",
                }}
              />
            </div>

            {/* Posts */}
            <div>
              {group.posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  style={{
                    display: "block",
                    padding: "20px 0 18px",
                    borderBottom: "1px solid var(--c-border)",
                    textDecoration: "none",
                    color: "var(--c-text)",
                  }}
                >
                  <div
                    className="timeline-post-title"
                    style={{
                      fontFamily: "var(--font-lora), serif",
                      fontSize: "17px",
                      fontWeight: 600,
                      lineHeight: "22.1px",
                      color: "var(--c-text)",
                      marginBottom: "5px",
                    }}
                  >
                    {post.title}
                  </div>
                  {post.excerpt && (
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
                  )}
                  {post.tags.length > 0 && (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            display: "inline-block",
                            marginTop: "12px",
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
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .filter-btn {
          transition:
            background-color 160ms var(--ease-out-expo),
            color 160ms var(--ease-out-expo),
            border-color 160ms var(--ease-out-expo),
            transform 120ms var(--ease-out-expo);
        }
        .filter-btn:active {
          transform: scale(0.97);
        }
        .timeline-post-title {
          transition: color 180ms var(--ease-out-expo);
        }
        @media (hover: hover) and (pointer: fine) {
          a:hover .timeline-post-title {
            color: var(--c-link) !important;
          }
        }
      `}</style>
    </>
  );
}
