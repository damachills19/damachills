"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollCue({
  label = "SCROLL DOWN TO DISCOVER",
  tone = "light",
}: {
  label?: string;
  tone?: "light" | "dark";
}) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const anim = gsap.fromTo(
      el,
      { yPercent: 130, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: el.closest("section"), start: "top 60%" },
      }
    );
    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, []);

  const color = tone === "light" ? "text-paper" : "text-ink";

  return (
    <div
      ref={rootRef}
      className={`absolute bottom-8 left-0 right-0 z-10 flex items-center justify-between px-6 md:px-14 ${color}`}
    >
      <span className="text-[11px] tracking-[0.3em] font-light">{label}</span>
      <span className="w-9 h-9 rounded-full border border-current flex items-center justify-center animate-bounce">
        <span className="block w-2 h-2 border-b border-r border-current rotate-45 -translate-y-0.5" />
      </span>
    </div>
  );
}
