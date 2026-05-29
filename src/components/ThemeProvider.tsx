"use client";

import { createContext, useContext, useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const ThemeContext = createContext<Theme>("light");

// The active theme lives on <html data-theme>. It is set — and toggled — by the
// parse-time bootstrap script in the root layout, so it works before React
// hydrates. React just reflects it: useSyncExternalStore subscribes to a
// MutationObserver on the attribute, so the UI re-renders whenever the theme
// changes, no matter who changed it. getServerSnapshot keeps SSR/hydration
// consistent (no mismatch); the real value is read right after hydration.
function subscribe(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

function getSnapshot(): Theme {
  return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
}

function getServerSnapshot(): Theme {
  return "light";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
