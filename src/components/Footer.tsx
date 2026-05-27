import Link from "next/link";
import { EmailIcon, LinkedInIcon, GitHubIcon } from "./icons";

export function Footer() {
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "28px 0",
        marginTop: "56px",
        borderTop: "1px solid var(--c-border)",
      }}
    >
      {/* Copyright */}
      <Link
        href="/"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "baseline",
          gap: "6px",
          fontFamily: "var(--font-dm-mono), monospace",
          fontSize: "10px",
          fontWeight: 400,
          textTransform: "uppercase",
          letterSpacing: "1px",
          color: "var(--c-muted)",
          textDecoration: "none",
        }}
      >
        <span>© 2024–2026</span>
        <span>Debopriya Deb Roy</span>
      </Link>

      {/* Right side */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        {/* Nav links */}
        <nav style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Link
            href="/blog"
            className="footer-nav-link"
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: "10px",
              fontWeight: 400,
              textTransform: "uppercase",
              letterSpacing: "1px",
              color: "var(--c-muted)",
            }}
          >
            Writing
          </Link>
          <Link
            href="/projects"
            className="footer-nav-link"
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: "10px",
              fontWeight: 400,
              textTransform: "uppercase",
              letterSpacing: "1px",
              color: "var(--c-muted)",
            }}
          >
            Projects
          </Link>
          <Link
            href="/about"
            className="footer-nav-link"
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: "10px",
              fontWeight: 400,
              textTransform: "uppercase",
              letterSpacing: "1px",
              color: "var(--c-muted)",
            }}
          >
            About
          </Link>
        </nav>

        {/* Divider */}
        <div
          style={{
            width: "1px",
            height: "14px",
            background: "var(--c-divider)",
          }}
        />

        {/* Social icons */}
        <nav style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <a
            href="mailto:ddroy13@gmail.com"
            className="footer-icon"
            style={{ color: "var(--c-muted)", display: "flex" }}
            aria-label="Email"
          >
            <EmailIcon width={18} height={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/debopriyadebroy"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
            style={{ color: "var(--c-muted)", display: "flex" }}
            aria-label="LinkedIn"
          >
            <LinkedInIcon width={18} height={18} />
          </a>
          <a
            href="https://github.com/DDR13GIT"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
            style={{ color: "var(--c-muted)", display: "flex" }}
            aria-label="GitHub"
          >
            <GitHubIcon width={18} height={18} />
          </a>
        </nav>
      </div>
    </footer>
  );
}
