"use client";

import { useSyncExternalStore } from "react";

export interface WorkExperience {
  company: string;
  roles: Array<{
    title: string;
    startDate: string;
    endDate: string;
  }>;
  location: string;
  description: string;
}

const experiences: WorkExperience[] = [
  {
    company: "Pathao",
    roles: [
      { title: "Software Engineer 1", startDate: "Jan 2025", endDate: "Present" },
      { title: "Associate Software Engineer", startDate: "May 2024", endDate: "Jan 2025" },
    ],
    location: "Dhaka, Bangladesh",
    description:
      "Build and optimize mission-critical backend services in Go and Java. Designed RESTful APIs for National ID and driver-license verification backed by PostgreSQL, engineered WebRTC infrastructure (TURN server and auth) for in-app calling, and shipped dynamic image-resizing for thumbnails. Drove App-Pilot, a web-based automation platform with real-time, concurrent end-to-end test execution across ride-hailing and Pathao Food flows — including payment paths — built on a refactored Python/Behave BDD framework.",
  },
  {
    company: "Nexxvali",
    roles: [
      { title: "Data Analyst Instructor", startDate: "Jul 2024", endDate: "Mar 2025" },
      { title: "SQA (Test Automation) Instructor", startDate: "Mar 2024", endDate: "Jul 2024" },
      { title: "Java Instructor", startDate: "Jul 2022", endDate: "Mar 2024" },
    ],
    location: "Remote, USA",
    description:
      "Designed and delivered hands-on technical curricula spanning Java, test automation, and data analysis. Trained 200+ consultants into job-ready QA engineers across Selenium WebDriver, TestNG, Maven, Cucumber BDD, and REST Assured, then led a multi-stage data track covering advanced SQL, Python with Pandas/NumPy, Power BI, and Azure data engineering — culminating in mentored capstone projects.",
  },
];

// LinkedIn-style inclusive month count: both the start and end months count.
function parseMonthYear(value: string): Date | null {
  if (value.trim().toLowerCase() === "present") return null;
  const parsed = new Date(`${value} 1`);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function computeDuration(roles: WorkExperience["roles"], now: Date): string {
  const starts: number[] = [];
  const ends: number[] = [];

  for (const role of roles) {
    const start = parseMonthYear(role.startDate);
    if (start) starts.push(start.getTime());
    const end = role.endDate.trim().toLowerCase() === "present" ? now : parseMonthYear(role.endDate);
    if (end) ends.push(end.getTime());
  }

  if (starts.length === 0 || ends.length === 0) return "";

  const start = new Date(Math.min(...starts));
  const end = new Date(Math.max(...ends));

  const months =
    (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth()) + 1;
  if (months <= 0) return "";

  const years = Math.floor(months / 12);
  const remMonths = months % 12;
  const parts: string[] = [];
  if (years > 0) parts.push(`${years} year${years > 1 ? "s" : ""}`);
  if (remMonths > 0) parts.push(`${remMonths} month${remMonths > 1 ? "s" : ""}`);
  return parts.join(" ");
}

function computeDurations(now: Date): string[] {
  return experiences.map((exp) => computeDuration(exp.roles, now));
}

// Snapshots feed useSyncExternalStore, which requires a stable reference for
// the same logical value. Cache by year-month so the array identity only
// changes when the duration could actually change (a new month).
const serverDurations = computeDurations(new Date());
let clientCache: { key: string; value: string[] } | null = null;

function getClientDurations(): string[] {
  const now = new Date();
  const key = `${now.getFullYear()}-${now.getMonth()}`;
  if (!clientCache || clientCache.key !== key) {
    clientCache = { key, value: computeDurations(now) };
  }
  return clientCache.value;
}

const noopSubscribe = () => () => {};

export function WorkExperienceSection() {
  // Recomputed on every client render against the live clock, so the count
  // never goes stale between deployments; SSR uses the build-time snapshot.
  const durations = useSyncExternalStore(noopSubscribe, getClientDurations, () => serverDurations);

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
          marginBottom: "24px",
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
          Work experience
        </h2>
      </div>

      {/* Timeline */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {experiences.map((exp, idx) => {
          const isFirst = idx === 0;
          const isLast = idx === experiences.length - 1;
          return (
            <div
              key={exp.company}
              className="work-exp-row"
              style={{
                display: "grid",
                gridTemplateColumns: "120px 36px 1fr",
                position: "relative",
                gap: 0,
              }}
            >
              {/* Company and duration */}
              <div style={{ paddingTop: "12px" }}>
                <div
                  style={{
                    fontFamily: "var(--font-lora), serif",
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "var(--c-text)",
                    marginBottom: "4px",
                  }}
                >
                  {exp.company}
                </div>
                {durations[idx] && (
                  <div
                    style={{
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: "10px",
                      fontWeight: 400,
                      color: "var(--c-muted)",
                      lineHeight: "1.4",
                    }}
                  >
                    {durations[idx]}
                  </div>
                )}
              </div>

              {/* Spine — two segments that meet at the dot so the rail is continuous */}
              <div style={{ position: "relative" }}>
                {!isFirst && (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      height: "23px",
                      left: "17px",
                      width: "1px",
                      backgroundColor: "var(--c-border)",
                    }}
                  />
                )}
                {!isLast && (
                  <div
                    style={{
                      position: "absolute",
                      top: "23px",
                      bottom: 0,
                      left: "17px",
                      width: "1px",
                      backgroundColor: "var(--c-border)",
                    }}
                  />
                )}
                <div
                  style={{
                    position: "absolute",
                    top: "20px",
                    left: "14px",
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    backgroundColor: "var(--c-text)",
                  }}
                />
              </div>

              {/* Experience details */}
              <div style={{ paddingTop: "12px", paddingBottom: "24px" }}>
                {/* Roles */}
                <div style={{ marginBottom: "12px" }}>
                  {exp.roles.map((role, i) => (
                    <div key={i} style={{ marginBottom: i < exp.roles.length - 1 ? "6px" : 0 }}>
                      <span
                        style={{
                          fontFamily: "var(--font-lora), serif",
                          fontSize: "14px",
                          fontWeight: 600,
                          color: "var(--c-text)",
                        }}
                      >
                        {role.title}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-dm-mono), monospace",
                          fontSize: "11px",
                          color: "var(--c-muted)",
                          marginLeft: "8px",
                        }}
                      >
                        {role.startDate} – {role.endDate}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Location and description */}
                <div
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: "13px",
                    lineHeight: "20.8px",
                    color: "var(--c-secondary)",
                  }}
                >
                  <div style={{ marginBottom: "8px", fontStyle: "italic", color: "var(--c-muted)" }}>
                    {exp.location}
                  </div>
                  <div>{exp.description}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        @media (max-width: 767px) {
          .work-exp-row {
            grid-template-columns: 90px 28px 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
