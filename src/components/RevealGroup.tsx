"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface RevealGroupProps {
  children: React.ReactNode;
  /** CSS selector (relative to the wrapper) picking the items to animate individually. */
  selector: string;
  className?: string;
}

/** Fades and slides each matched child in as it scrolls into view, staggering items that arrive together. */
export function RevealGroup({ children, selector, className }: RevealGroupProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const items = gsap.utils.toArray<HTMLElement>(selector, container);
    if (items.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.set(items, { opacity: 0, y: 24 });
      ScrollTrigger.batch(items, {
        start: "top 85%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.08,
          }),
      });
    }, ref);

    return () => ctx.revert();
  }, [selector]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
