"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { gsap } from "gsap";
import { NAV_ITEMS } from "@/data/nav";

const ParticleField = dynamic(() => import("@/components/ParticleField"), {
  ssr: false,
});

export default function MenuOverlay({
  open,
  active,
  onClose,
  onNavigate,
}: {
  open: boolean;
  active: string;
  onClose: () => void;
  onNavigate: (id: string) => void;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const items = itemsRef.current?.querySelectorAll("li");
    if (!root) return;

    if (open) {
      root.style.pointerEvents = "auto";
      gsap.to(root, { clipPath: "inset(0% 0% 0% 0%)", duration: 0.8, ease: "power4.inOut" });
      gsap.fromTo(
        items ?? [],
        { yPercent: 100, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.7, stagger: 0.06, delay: 0.3, ease: "power4.out" }
      );
    } else {
      gsap.to(root, {
        clipPath: "inset(0% 0% 100% 0%)",
        duration: 0.6,
        ease: "power4.inOut",
        onComplete: () => {
          if (root) root.style.pointerEvents = "none";
        },
      });
    }
  }, [open]);

  return (
    <div
      ref={rootRef}
      style={{ clipPath: "inset(0% 0% 100% 0%)" }}
      className="fixed inset-0 z-40 bg-ink text-paper pointer-events-none overflow-hidden"
    >
      <ParticleField />
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-14">
        <div ref={itemsRef}>
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.id} className="overflow-hidden border-b border-white/15">
                <button
                  onClick={() => onNavigate(item.id)}
                  data-cursor-grow
                  className={`group flex items-center gap-4 w-full text-left py-3 md:py-4 transition-colors duration-300 ${
                    active === item.id ? "text-paper" : "text-white/45 hover:text-paper"
                  }`}
                >
                  <span
                    className={`text-lg transition-all duration-300 ${
                      active === item.id
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                    }`}
                  >
                    →
                  </span>
                  <span
                    className={`text-2xl md:text-4xl font-display transition-transform duration-300 group-hover:translate-x-2 ${
                      active === item.id ? "translate-x-2" : ""
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="absolute bottom-10 left-6 right-6 md:left-14 md:right-14 flex flex-wrap items-center justify-between gap-4 text-xs tracking-[0.2em] uppercase text-white/50">
          <span>Riyadh, Kingdom of Saudi Arabia</span>
          <div className="flex gap-6">
            <span>info@damachills.sa</span>
          </div>
        </div>
      </div>

      <button
        onClick={onClose}
        data-cursor-grow
        className="absolute top-6 right-6 md:right-14 z-20 text-xs tracking-[0.25em] uppercase"
      >
        Close
      </button>
    </div>
  );
}
