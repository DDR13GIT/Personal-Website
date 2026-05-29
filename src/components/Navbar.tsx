"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MoonIcon, SunIcon } from "./icons";
import { useTheme } from "./ThemeProvider";

export function Navbar() {
  const pathname = usePathname();
  const theme = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

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

        {/* Desktop nav */}
        <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "24px" }}>
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
            type="button"
            data-theme-toggle
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
              touchAction: "manipulation",
            }}
          >
            {theme === "dark" ? (
              <SunIcon width={15} height={15} />
            ) : (
              <MoonIcon width={15} height={15} />
            )}
          </button>
        </div>

        {/* Mobile: hamburger + theme toggle */}
        <div className="mobile-controls" style={{ display: "none", alignItems: "center", gap: "4px" }}>
          <button
            type="button"
            data-theme-toggle
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="theme-toggle"
            style={{
              width: "44px",
              height: "44px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--c-muted)",
              padding: 0,
              touchAction: "manipulation",
            }}
          >
            {theme === "dark" ? (
              <SunIcon width={15} height={15} />
            ) : (
              <MoonIcon width={15} height={15} />
            )}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="hamburger"
            style={{
              width: "44px",
              height: "44px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              color: "var(--c-text)",
              padding: 0,
              touchAction: "manipulation",
            }}
          >
            <span style={{ width: "20px", height: "2px", background: "currentColor" }} />
            <span style={{ width: "20px", height: "2px", background: "currentColor" }} />
            <span style={{ width: "20px", height: "2px", background: "currentColor" }} />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="mobile-menu" style={{ display: "none" }}>
          <Link
            href="/blog"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "block",
              padding: "16px 24px",
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: "12px",
              fontWeight: 400,
              textTransform: "uppercase",
              letterSpacing: "1.2px",
              color: linkColor("/blog"),
              borderBottom: "1px solid var(--c-divider)",
            }}
          >
            Writing
          </Link>
          <Link
            href="/projects"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "block",
              padding: "16px 24px",
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: "12px",
              fontWeight: 400,
              textTransform: "uppercase",
              letterSpacing: "1.2px",
              color: linkColor("/projects"),
              borderBottom: "1px solid var(--c-divider)",
            }}
          >
            Projects
          </Link>
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "block",
              padding: "16px 24px",
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
        </div>
      )}

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
            padding: 20px 24px !important;
          }
          .desktop-nav {
            display: none !important;
          }
          .mobile-controls {
            display: flex !important;
          }
          .mobile-menu {
            display: block !important;
            background: var(--c-bg);
            border-top: 1px solid var(--c-border);
            border-bottom: 1px solid var(--c-border);
            padding: 0;
          }
        }
      `}</style>
    </header>
  );
}
