import type { ProjectGroup } from "@/lib/projects";
import { GitHubIcon } from "./icons";
import { RevealGroup } from "./RevealGroup";

export function ProjectsList({ groups }: { groups: ProjectGroup[] }) {
  return (
    <>
      {groups.map((group, index) => (
        <section
          key={group.category}
          style={{
            marginTop: index === 0 ? 0 : "72px",
            marginBottom: "48px",
          }}
        >
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
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-title-link"
                    style={{ display: "block", textDecoration: "none" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "baseline",
                        gap: "16px",
                        marginBottom: "6px",
                      }}
                    >
                      <h3
                        className="project-title"
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

                    <span
                      className="project-code-link"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        fontFamily: "var(--font-dm-sans), sans-serif",
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "var(--c-link)",
                        marginBottom: "12px",
                      }}
                    >
                      <GitHubIcon width={13} height={13} />
                      View code
                    </span>
                  </a>

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
                      marginBottom: project.liveUrl ? "14px" : 0,
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
                </article>
              ))}
            </div>
          </RevealGroup>
        </section>
      ))}

      <style>{`
        .project-title {
          transition: color 160ms var(--ease-out-expo);
        }
        .project-code-link {
          text-decoration: underline;
          text-decoration-color: transparent;
          text-underline-offset: 3px;
          transition: text-decoration-color 160ms var(--ease-out-expo);
        }
        @media (hover: hover) and (pointer: fine) {
          .project-title-link:hover .project-title {
            color: var(--c-link) !important;
          }
          .project-title-link:hover .project-code-link {
            text-decoration-color: var(--c-link);
          }
        }
      `}</style>
    </>
  );
}
