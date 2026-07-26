"use client";

import { createElement, useEffect, useRef, useState } from "react";

export default function RevealText({
  lines,
  className = "",
  as = "h2",
  stagger = 0.22,
  delay = 0,
  immediate = false,
}: {
  lines: string[];
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
  stagger?: number;
  delay?: number;
  immediate?: boolean;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (immediate) {
      const t = setTimeout(() => setActive(true), delay * 1000);
      return () => clearTimeout(t);
    }

    const root = rootRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(root);
    return () => observer.disconnect();
  }, [immediate, delay]);

  return (
    <div ref={rootRef}>
      {lines.map((line, i) =>
        createElement(
          as,
          { key: i, className: `reveal-mask ${className}` },
          <span
            style={{
              transform: active ? "translateY(0)" : "translateY(110%)",
              transitionProperty: "transform",
              transitionDuration: "1.4s",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              transitionDelay: `${delay + i * stagger}s`,
            }}
          >
            {line}
          </span>
        )
      )}
    </div>
  );
}
