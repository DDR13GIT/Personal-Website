import type { ProjectGroup } from "@/lib/projects";
import { RevealGroup } from "./RevealGroup";

export function ProjectsList({ groups }: { groups: ProjectGroup[] }) {
  return (
    <>
      {groups.map((group) => (
        <section key={group.category} style={{ marginBottom: "48px" }}>
          <h2
            style={{
              fontFamily: "var(--font-lora), serif",
              fontSize: "22px",
              fontWeight: 600,
              color: "var(--c-text)",
              borderBottom: "1px solid var(--c-border)",
              paddingBottom: "14px",
              marginBottom: "8px",
            }}
          >
            {group.label}
          </h2>

          <RevealGroup selector="article">
            <div style={{ display: "flex", flexDirection: "column" }}>
              {group.projects.map((project) => (
                <article
                  key={project.slug}
                  style={{
                    padding: "24px 0",
                    borderBottom: "1px solid var(--c-border)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      gap: "16px",
                      marginBottom: "8px",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-lora), serif",
                        fontSize: "17px",
                        fontWeight: 600,
                        lineHeight: "22.1px",
                        color: "var(--c-text)",
                      }}
                    >
                      {project.title}
                    </h3>
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
                      {project.year}
                    </span>
                  </div>

                  <p
                    style={{
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: "14px",
                      fontWeight: 400,
                      lineHeight: "23.8px",
                      color: "var(--c-secondary)",
                      marginBottom: "14px",
                    }}
                  >
                    {project.story}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "5px",
                      marginBottom: "14px",
                    }}
                  >
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          fontFamily: "var(--font-dm-mono), monospace",
                          fontSize: "10px",
                          fontWeight: 400,
                          textTransform: "uppercase",
                          letterSpacing: "0.6px",
                          color: "var(--c-muted)",
                          border: "1px solid var(--c-border)",
                          padding: "4px 8px",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: "flex", gap: "20px" }}>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
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
                      View code →
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
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
                        Live →
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </RevealGroup>
        </section>
      ))}
    </>
  );
}
