"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Cursor() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap || window.matchMedia("(pointer: coarse)").matches) return;

    const xTo = gsap.quickTo(wrap, "x", { duration: 0.45, ease: "power3.out" });
    const yTo = gsap.quickTo(wrap, "y", { duration: 0.45, ease: "power3.out" });

    const move = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const grow = () => gsap.to(ringRef.current, { scale: 2.4, duration: 0.35, ease: "power3.out" });
    const shrink = () => gsap.to(ringRef.current, { scale: 1, duration: 0.35, ease: "power3.out" });

    window.addEventListener("mousemove", move);

    const attach = () => {
      document.querySelectorAll("a, button, [data-cursor-grow]").forEach((el) => {
        el.addEventListener("mouseenter", grow);
        el.addEventListener("mouseleave", shrink);
      });
    };
    attach();
    const observer = new MutationObserver(attach);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", move);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="fixed top-0 left-0 z-[200] pointer-events-none -translate-x-1/2 -translate-y-1/2 hidden md:block"
    >
      <div
        ref={ringRef}
        className="w-12 h-12 rounded-full border border-current flex items-center justify-center gap-1.5 mix-blend-difference text-white"
      >
        <span className="w-[3px] h-[3px] rounded-full bg-current" />
        <span className="w-[3px] h-[3px] rounded-full bg-current" />
      </div>
    </div>
  );
}
