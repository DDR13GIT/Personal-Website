import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BlogTimeline } from "@/components/BlogTimeline";
import { getAllPosts, getAllTags } from "@/lib/posts";
import { MediumIcon } from "@/components/icons";

export default function BlogPage() {
  const posts = getAllPosts();
  const filters = getAllTags();

  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "780px",
          minHeight: "calc(100vh - 107px)",
          margin: "0 auto",
          padding: "36px 36px 0",
        }}
      >
        <main style={{ flex: 1 }}>
          <div style={{ marginBottom: "0" }}>
            <h1
              style={{
                fontFamily: "var(--font-lora), serif",
                fontSize: "36px",
                fontWeight: 600,
                letterSpacing: "-0.72px",
                lineHeight: "43.2px",
                color: "var(--c-text)",
                margin: "0 0 6px",
              }}
            >
              Writing
            </h1>
            <p
              style={{
                fontFamily: "var(--font-lora), serif",
                fontSize: "15px",
                fontStyle: "italic",
                lineHeight: "21.75px",
                color: "var(--c-secondary)",
                margin: "0 0 28px",
              }}
            >
              Musings on backend engineering, systems design, and whatever else is on my mind.
            </p>
          </div>

          {/* Medium section */}
          <div
            style={{
              backgroundColor: "var(--c-card-alt)",
              border: "1px solid var(--c-divider)",
              padding: "20px 24px 24px",
              marginBottom: "40px",
              borderRadius: "4px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "12px",
              }}
            >
              <MediumIcon width={20} height={20} style={{ color: "var(--c-text)" }} />
              <h3
                style={{
                  fontFamily: "var(--font-lora), serif",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "var(--c-text)",
                  margin: 0,
                }}
              >
                Also on Medium
              </h3>
            </div>
            <p
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "15px",
                fontWeight: 400,
                lineHeight: "24.75px",
                color: "var(--c-secondary)",
                margin: 0,
              }}
            >
              I also publish longer-form pieces and technical deep dives on Medium. If you enjoy this
              content, feel free to check out my{" "}
              <a
                href="https://medium.com/@ddroy13"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-link"
              >
                Medium profile
              </a>
              .
            </p>
          </div>

          <BlogTimeline posts={posts} filters={filters} />

          <div style={{ marginBottom: "56px" }} />
        </main>

        <Footer />
      </div>
    </>
  );
}
