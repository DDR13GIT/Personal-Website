import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Manual | Debopriya Deb Roy",
};

interface SectionItem {
  text: string;
  href?: string;
}

interface Section {
  heading: string;
  items: SectionItem[];
  type: string;
}

const sections: Section[] = [
  {
    heading: "Overview",
    items: [
      {
        text: "Backend engineer by day, educator by night. I build scalable systems at Pathao and teach data analysis and test automation at Nexxvali. My work sits at the intersection of reliable infrastructure and transferring knowledge to others.",
      },
      {
        text: "CS graduate from Ahsanullah University of Science and Technology, co-author of a research paper on misogyny detection in Bangla text, and occasional music composer. These things are more connected than they sound.",
      },
    ],
    type: "list",
  },
  {
    heading: "Strengths",
    items: [
      {
        text: "Breadth across the stack. I'm comfortable moving between backend development, test automation, data analysis, and teaching. My best work tends to happen where these overlap.",
      },
      {
        text: "Automation-first thinking. When I see a manual process, I immediately think about how to eliminate it. This applies to code, testing, deployments, and workflows.",
      },
      {
        text: "Teaching what I build. I've trained 200+ engineers and can take complex technical concepts and make them learnable. This makes me a better engineer — if you can't teach it clearly, you don't understand it well enough.",
      },
      {
        text: "Moving fast without breaking things. Speed compounds. I put heavy emphasis on iterating quickly while maintaining quality through solid testing practices.",
      },
    ],
    type: "list",
  },
  {
    heading: "Weaknesses",
    items: [
      {
        text: "Overextending. I get excited by a lot of things and spread myself too thin sometimes. If you see me taking on too much at once, tell me to focus.",
      },
      {
        text: "Context dependency. I need a holistic view to contribute meaningfully. When I don't have enough background on why something is being built, I struggle to make good decisions about how to build it.",
      },
      {
        text: "Perfectionism under pressure. I hold a high bar for output quality, which can slow me down when shipping speed matters more than polish. Working on calibrating this better.",
      },
    ],
    type: "list",
  },
  {
    heading: "Principles for Thinking",
    items: [
      {
        text: "Start from first principles. Question the assumptions. Just because something worked before or is the default doesn't mean it's the right call now.",
      },
      {
        text: "Writing is where clear thinking happens. Writing forces fuzzy ideas to sharpen. If you can't write it down clearly, you probably don't understand it well enough yet.",
      },
      {
        text: "Diverge before converging. Explore the space fully before committing. The best solutions often come from options you almost didn't consider.",
      },
      {
        text: "Separate signal from noise. Most information is noise. The skill is knowing what matters and ignoring the rest.",
      },
      {
        text: "Invert. Think about what could go wrong, what the opposite looks like, and what you'd need to believe for the other side to be right.",
      },
    ],
    type: "list",
  },
  {
    heading: "Principles for Working",
    items: [
      {
        text: "Bias towards action. Getting started is the best way to begin making progress and start learning. Avoid unchecked inaction.",
      },
      {
        text: "Document as you go. Good documentation isn't a tax on engineering work — it's part of the work. Future-you and your teammates will be grateful.",
      },
      {
        text: "Test at the right level. Unit tests, integration tests, and end-to-end tests each have their place. Knowing which level to test at matters as much as writing the tests.",
      },
      {
        text: "Attention to detail. The small things matter. Quality shows up in the details, and it's usually worth the extra effort to get them right.",
      },
      {
        text: "Feedback is a gift. Give it directly and receive it openly. The team gets better when everyone is honest with each other.",
      },
    ],
    type: "list",
  },
  {
    heading: "More Quirks",
    items: [
      {
        text: "Systems thinker. I naturally want to understand how all the pieces fit together. Sometimes I'll zoom out to make sure we're solving the right problem before diving into code.",
      },
      {
        text: "Music and code. I compose music outside of work. It's taught me a lot about structure, iteration, and the difference between technically correct and actually good.",
      },
      {
        text: "High bar. I can be hard on myself and the work. If I think we're not doing our best, I'll say so. It's never personal — I just care about the outcome.",
      },
      {
        text: "Async preferred. I do my best thinking in writing. I'd rather have a well-structured async thread than a meandering real-time meeting.",
      },
    ],
    type: "list",
  },
  {
    heading: "Favorite Quotes",
    items: [
      {
        text: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma, which is living with the results of other people's thinking. — Steve Jobs",
      },
      {
        text: "The most important skill a programmer can have is knowing when to step away from the keyboard. — unknown",
      },
      {
        text: "First, solve the problem. Then, write the code. — John Johnson",
      },
    ],
    type: "blockquote",
  },
];

export default function ManualPage() {
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
            User Manual
          </h1>

          <p
            style={{
              fontFamily: "var(--font-lora), serif",
              fontSize: "15px",
              fontWeight: 400,
              fontStyle: "italic",
              lineHeight: "21.75px",
              color: "var(--c-secondary)",
              margin: "0 0 40px",
            }}
          >
            This is a playbook on everything Debopriya. It captures how I think, work, and operate
            in a collaborative environment.
          </p>

          {sections.map((section, idx) => (
            <section key={section.heading} style={{ marginBottom: "0" }}>
              <h2
                style={{
                  fontFamily: "var(--font-lora), serif",
                  fontSize: "22px",
                  fontWeight: 600,
                  letterSpacing: "-0.22px",
                  lineHeight: "28.6px",
                  color: "var(--c-text)",
                  margin: idx === 0 ? "0 0 11px" : "52.8px 0 11px",
                }}
              >
                {section.heading}
              </h2>

              {section.type === "blockquote" ? (
                <div>
                  {section.items.map((item, i) => (
                    <blockquote
                      key={i}
                      style={{
                        fontFamily: "var(--font-lora), serif",
                        fontSize: "15px",
                        fontWeight: 400,
                        fontStyle: "italic",
                        lineHeight: "24.75px",
                        color: "var(--c-secondary)",
                        padding: "7.5px 20px 7.5px 18px",
                        margin: "0 0 20px",
                        borderLeft: "2px solid var(--c-link)",
                        backgroundColor: "var(--c-card-alt)",
                      }}
                    >
                      {item.text}
                    </blockquote>
                  ))}
                </div>
              ) : (
                <ul style={{ paddingLeft: "19.2px", margin: 0 }}>
                  {section.items.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        fontFamily: "var(--font-dm-sans), sans-serif",
                        fontSize: "16px",
                        fontWeight: 400,
                        lineHeight: "29.12px",
                        color: "var(--c-secondary)",
                        marginBottom: "10px",
                      }}
                    >
                      {item.href ? (
                        <>
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "var(--c-link)" }}
                          >
                            {item.text.split(".")[0]}.
                          </a>
                          {item.text.slice(item.text.indexOf(".") + 1)}
                        </>
                      ) : (
                        item.text
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <div style={{ marginBottom: "56px" }} />
        </main>

        <Footer />
      </div>
    </>
  );
}
