import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BlogTimeline } from "@/components/BlogTimeline";
import { getAllPosts, getAllTags } from "@/lib/posts";

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

          <BlogTimeline posts={posts} filters={filters} />

          <div style={{ marginBottom: "56px" }} />
        </main>

        <Footer />
      </div>
    </>
  );
}
