export interface WorkExperience {
  company: string;
  roles: Array<{
    title: string;
    startDate: string;
    endDate: string;
  }>;
  duration: string;
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
    duration: "2 years 1 month",
    location: "Dhaka, Bangladesh",
    description:
      "Designed RESTful APIs for identity verification, built WebRTC infrastructure for in-app calling, automated end-to-end testing for ride-hailing and food delivery services, and led database schema optimization for mission-critical systems.",
  },
  {
    company: "Nexxvali",
    roles: [
      { title: "Data Analyst Instructor", startDate: "Jul 2024", endDate: "Mar 2025" },
      { title: "SQA (Test Automation) Instructor", startDate: "Mar 2024", endDate: "Jul 2024" },
      { title: "Java Instructor", startDate: "Jul 2022", endDate: "Mar 2024" },
    ],
    duration: "2 years 9 months",
    location: "Remote, USA",
    description:
      "Designed comprehensive curricula and trained 200+ consultants in Java, test automation, and data analysis. Delivered hands-on sessions on Selenium, Cucumber BDD, API testing, and cloud data ecosystems.",
  },
];

export function WorkExperienceSection() {
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
        {experiences.map((exp, idx) => (
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
              <div
                style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: "10px",
                  fontWeight: 400,
                  color: "var(--c-muted)",
                  lineHeight: "1.4",
                }}
              >
                {exp.duration}
              </div>
            </div>

            {/* Spine */}
            <div style={{ position: "relative" }}>
              {idx !== experiences.length - 1 && (
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
        ))}
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
