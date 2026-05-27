import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "About | Debopriya Deb Roy",
};

export default function AboutPage() {
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
            About Debopriya
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
            Welcome to my corner of the internet.
          </p>

          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "29.12px",
              color: "var(--c-secondary)",
              margin: "0 0 24px",
            }}
          >
            I&apos;m a software engineer and technical educator based in Dhaka, Bangladesh. I thrive
            at the intersection of building reliable systems and teaching others how to do the same.
            My background spans backend development, test automation, and data analysis — and I
            genuinely enjoy{" "}
            <Link href="/blog" className="inline-link">
              writing
            </Link>{" "}
            about what I learn along the way.
          </p>

          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "29.12px",
              color: "var(--c-secondary)",
              margin: "0 0 24px",
            }}
          >
            Currently I&apos;m a Software Engineer at{" "}
            <a
              href="https://pathao.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-link"
            >
              Pathao
            </a>
            , Bangladesh&apos;s leading super app. I work on mission-critical backend systems —
            designing RESTful APIs for identity verification, building real-time WebRTC
            infrastructure, and creating automation tooling that makes the whole team faster.
          </p>

          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "29.12px",
              color: "var(--c-secondary)",
              margin: "0 0 24px",
            }}
          >
            Alongside that, I&apos;ve spent nearly three years teaching at{" "}
            <a
              href="https://nexxvali.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-link"
            >
              Nexxvali
            </a>{" "}
            — covering Java, test automation with Selenium and Appium, API testing, and data
            analysis with SQL, Python, and Power BI. I&apos;ve trained over 200 consultants and
            designed full curricula from scratch.
          </p>

          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "29.12px",
              color: "var(--c-secondary)",
              margin: "0 0 24px",
            }}
          >
            I studied Computer Science and Engineering at{" "}
            <a
              href="https://aust.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-link"
            >
              Ahsanullah University of Science and Technology
            </a>
            , where I also co-authored a research paper on misogyny detection in Bangla text. Outside
            of engineering, I compose music — which turns out to sharpen problem-solving in ways that
            are hard to explain but very real.
          </p>

          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "29.12px",
              color: "var(--c-secondary)",
              margin: "0 0 32px",
            }}
          >
            If you want to get in touch, I&apos;m most responsive over{" "}
            <a
              href="mailto:ddroy13@gmail.com"
              className="inline-link"
            >
              email
            </a>{" "}
            and{" "}
            <a
              href="https://www.linkedin.com/in/debopriyadebroy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-link"
            >
              LinkedIn
            </a>
            .
          </p>

          {/* User manual card */}
          <div
            style={{
              backgroundColor: "var(--c-card-alt)",
              border: "1px solid var(--c-divider)",
              padding: "20px 24px 24px",
              marginBottom: "56px",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-lora), serif",
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: "26.4px",
                color: "var(--c-text)",
                marginBottom: "8px",
              }}
            >
              User manual
            </div>
            <div
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "15px",
                fontWeight: 400,
                lineHeight: "24.75px",
                color: "var(--c-secondary)",
                marginBottom: "16px",
              }}
            >
              A playbook on how I think, work, and collaborate — my strengths, blind spots, and the
              principles I try to{" "}
              <Link href="/manual" className="inline-link">
                operate by
              </Link>
              .
            </div>
            <a
              href="/manual"
              className="arrow-link"
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "15px",
                fontWeight: 400,
                lineHeight: "24.75px",
                color: "var(--c-link)",
                textDecoration: "none",
              }}
            >
              More about me →
            </a>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
