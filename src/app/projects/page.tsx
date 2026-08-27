import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { ProjectsList } from "@/components/ProjectsList";
import { getProjectsByCategory } from "@/lib/projects";

export const metadata = {
  title: "Projects | Debopriya Deb Roy",
};

export default function ProjectsPage() {
  const groups = getProjectsByCategory();

  return (
    <>
      <Navbar />
      <div
        style={{
          maxWidth: "780px",
          margin: "0 auto",
          padding: "36px 36px 0",
        }}
      >
        <main>
          <Reveal>
          <h1
            style={{
              fontFamily: "var(--font-lora), serif",
              fontSize: "36px",
              fontWeight: 600,
              letterSpacing: "-0.72px",
              lineHeight: "43.2px",
              color: "var(--c-text)",
              margin: "0 0 8px",
            }}
          >
            Projects
          </h1>

          <p
            style={{
              fontFamily: "var(--font-lora), serif",
              fontSize: "15px",
              fontWeight: 400,
              fontStyle: "italic",
              lineHeight: "21.75px",
              color: "var(--c-secondary)",
              margin: "0 0 28px",
            }}
          >
            Things I&apos;ve built, broken, and learned from.
          </p>
          </Reveal>

          <ProjectsList groups={groups} />
        </main>

        <Footer />
      </div>
    </>
  );
}
