"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MoonIcon, SunIcon } from "./icons";
import { useTheme } from "./ThemeProvider";

export function Navbar() {
  const pathname = usePathname();
  const { theme, toggle } = useTheme();

  function linkColor(href: string) {
    if (href === "/blog" && pathname.startsWith("/blog")) return "var(--c-link)";
    if (href === "/projects" && pathname === "/projects") return "var(--c-link)";
    if (href === "/about" && pathname === "/about") return "var(--c-link)";
    return "var(--c-muted)";
  }

  return (
    <header>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "780px",
          margin: "0 auto",
          padding: "48px 36px 36px",
        }}
        className="main-nav"
      >
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-lora), serif",
            fontSize: "19px",
            fontWeight: 600,
            letterSpacing: "-0.38px",
            color: "var(--c-text)",
          }}
        >
          Debopriya Deb Roy
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <Link
            href="/blog"
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: "12px",
              fontWeight: 400,
              textTransform: "uppercase",
              letterSpacing: "1.2px",
              color: linkColor("/blog"),
            }}
          >
            Writing
          </Link>
          <Link
            href="/projects"
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: "12px",
              fontWeight: 400,
              textTransform: "uppercase",
              letterSpacing: "1.2px",
              color: linkColor("/projects"),
            }}
          >
            Projects
          </Link>
          <Link
            href="/about"
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: "12px",
              fontWeight: 400,
              textTransform: "uppercase",
              letterSpacing: "1.2px",
              color: linkColor("/about"),
            }}
          >
            About
          </Link>
          <button
            onClick={toggle}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="theme-toggle"
          style={{
              width: "15px",
              height: "15px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--c-muted)",
              padding: 0,
            }}
          >
            {theme === "dark" ? (
              <SunIcon width={15} height={15} />
            ) : (
              <MoonIcon width={15} height={15} />
            )}
          </button>
        </div>
      </nav>

      <style>{`
        .main-nav a {
          position: relative;
          transition: color 200ms var(--ease-out-expo);
        }
        .main-nav a::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 1px;
          background: currentColor;
          transform: scaleX(0);
          transform-origin: right center;
          transition: transform 220ms var(--ease-out-expo);
        }
        @media (hover: hover) and (pointer: fine) {
          .main-nav a:hover {
            color: var(--c-text) !important;
          }
          .main-nav a:hover::after {
            transform: scaleX(1);
            transform-origin: left center;
          }
          .theme-toggle:hover {
            color: var(--c-text) !important;
            transform: rotate(15deg);
          }
        }
        .theme-toggle {
          transition: color 180ms var(--ease-out-expo), transform 220ms var(--ease-out-expo);
        }
        @media (max-width: 767px) {
          .main-nav {
            margin: 0 !important;
            padding: 28px 24px 20px !important;
          }
        }
      `}</style>
    </header>
  );
}
