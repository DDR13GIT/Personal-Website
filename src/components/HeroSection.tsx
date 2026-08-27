import Image from "next/image";
import { EmailIcon, LinkedInIcon, GitHubIcon } from "./icons";
import { Reveal } from "./Reveal";

export function HeroSection() {
  return (
    <>
      {/* Mobile photo (centered above text) */}
      <Reveal className="photo-wrap-mobile" delay={0.05}>
      <div style={{ position: "relative", marginBottom: "24px" }}>
        {/* Shadow behind card */}
        <div
          style={{
            position: "absolute",
            top: "4px",
            left: "50%",
            transform: "translateX(-50%) rotate(-2deg)",
            zIndex: 1,
            width: "106px",
            height: "156.9px",
            background: "var(--c-shadow-bg)",
          }}
        />
        {/* Tape */}
        <div
          style={{
            position: "absolute",
            top: "-5px",
            left: "50%",
            transform: "translateX(-50%) translateX(-14px) rotate(-1deg)",
            zIndex: 3,
            width: "28px",
            height: "9px",
            background: "var(--c-tape)",
          }}
        />
        {/* Polaroid card */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            width: "120px",
            background: "var(--c-card)",
            padding: "5px 5px 18px",
            boxShadow: "var(--c-shadow-card)",
            transform: "rotate(-2deg)",
            margin: "0 auto",
          }}
        >
          <Image
            src="/images/debopriya/my_pic.webp"
            alt="Debopriya Deb Roy"
            width={110}
            height={132}
            style={{ display: "block", width: "110px", height: "132px", objectFit: "cover" }}
          />
          <div
            style={{
              fontFamily: "var(--font-lora), serif",
              fontSize: "9px",
              fontStyle: "italic",
              color: "var(--c-muted)",
              textAlign: "center",
              paddingTop: "4px",
              width: "110px",
            }}
          >
            Dhaka
          </div>
        </div>
      </div>
      </Reveal>

      <div
        className="hero-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "432px 220px",
          gap: "56px",
          alignItems: "center",
          marginBottom: "80px",
        }}
      >
        {/* Left: copy */}
        <Reveal className="hero-copy">
          <h1
            style={{
              fontFamily: "var(--font-lora), serif",
              fontSize: "38px",
              fontWeight: 600,
              letterSpacing: "-0.95px",
              lineHeight: "43.7px",
              color: "var(--c-text)",
              margin: "0 0 16px",
            }}
          >
             <span style={{ fontFamily: "Belmonte Ballpoint Cursive" }}>Hey, I&apos;m Debopriya</span>. <br></br>I build things, break things, and write about it.
          </h1>

          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "15px",
              fontWeight: 400,
              lineHeight: "25.8px",
              color: "var(--c-secondary)",
              margin: "15px 0 20px",
            }}
          >
            Currently building backend infrastructure at{" "}
            <a
              href="https://pathao.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-link"
            >
              Pathao
            </a>
            , Bangladesh&apos;s leading super app — working on identity verification, real-time
            features, and developer tooling. I also teach data analysis and test automation
            engineering at{" "}
            <a
              href="https://nexxvali.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-link"
            >
              Nexxvali
            </a>
            .
          </p>

          <nav
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <a
              href="mailto:ddroy13@gmail.com"
              className="hero-social-link"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                color: "var(--c-muted)",
                fontSize: "10px",
                fontWeight: 400,
                fontFamily: "var(--font-dm-mono), monospace",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              <EmailIcon width={16} height={16} />
              <span>Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/debopriyadebroy"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                color: "var(--c-muted)",
                fontSize: "10px",
                fontWeight: 400,
                fontFamily: "var(--font-dm-mono), monospace",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              <LinkedInIcon width={17} height={17} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/DDR13GIT"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                color: "var(--c-muted)",
                fontSize: "10px",
                fontWeight: 400,
                fontFamily: "var(--font-dm-mono), monospace",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              <GitHubIcon width={16} height={16} />
              <span>GitHub</span>
            </a>
          </nav>
        </Reveal>

        {/* Right: polaroid photo */}
        <Reveal className="photo-wrap" delay={0.1}>
        <div style={{ position: "relative" }}>
          {/* Shadow behind card */}
          <div
            style={{
              position: "absolute",
              top: "8px",
              left: 0,
              zIndex: 1,
              width: "212px",
              height: "313.797px",
              background: "var(--c-shadow-bg)",
              transform: "rotate(-2deg)",
            }}
          />
          {/* Tape */}
          <div
            style={{
              position: "absolute",
              top: "-10px",
              left: "81px",
              zIndex: 3,
              width: "56px",
              height: "18px",
              background: "var(--c-tape)",
              transform: "rotate(-1deg)",
            }}
          />
          {/* Polaroid card */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              width: "220px",
              background: "var(--c-card)",
              padding: "10px 10px 36px",
              boxShadow: "var(--c-shadow-card)",
              transform: "rotate(-2deg)",
            }}
          >
            <Image
              src="/images/debopriya/my_pic.webp"
              alt="Debopriya Deb Roy"
              width={200}
              height={240}
              style={{ display: "block", width: "200px", height: "240px", objectFit: "cover" }}
            />
            <div
              style={{
                fontFamily: "var(--font-lora), serif",
                fontSize: "12px",
                fontStyle: "italic",
                color: "var(--c-muted)",
                textAlign: "center",
                paddingTop: "8px",
                width: "200px",
              }}
            >
              Dhaka, Bangladesh
            </div>
          </div>
        </div>
        </Reveal>
      </div>

      <style>{`
        .hero-social-link {
          transition: color 180ms var(--ease-out-expo), transform 200ms var(--ease-out-expo);
        }
        @media (hover: hover) and (pointer: fine) {
          .hero-social-link:hover {
            color: var(--c-text) !important;
            transform: translateX(2px);
          }
        }
        @media (max-width: 767px) {
          .photo-wrap-mobile {
            display: block !important;
          }
          .hero-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 20px !important;
            margin-bottom: 56px !important;
          }
          .photo-wrap {
            display: none !important;
          }
        }
        @media (min-width: 768px) {
          .photo-wrap-mobile {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
