"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Loader({ onDone }: { onDone?: () => void }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    const counter = { value: 0 };

    const tl = gsap.timeline({
      onComplete: () => {
        document.documentElement.style.overflow = "";
        setHidden(true);
        ScrollTrigger.refresh();
        onDone?.();
      },
    });

    tl.to(counter, {
      value: 100,
      duration: 1.8,
      ease: "power2.inOut",
      onUpdate: () => {
        if (countRef.current) {
          countRef.current.textContent = String(Math.floor(counter.value));
        }
        if (barRef.current) {
          barRef.current.style.transform = `scaleX(${counter.value / 100})`;
        }
      },
    })
      .to(".loader-logo", { opacity: 1, duration: 0.4 }, 0)
      .to(rootRef.current, {
        yPercent: -100,
        duration: 0.9,
        ease: "power4.inOut",
        delay: 0.15,
      });

    return () => {
      tl.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (hidden) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink text-paper"
    >
      <div className="loader-logo opacity-0 mb-10">
        <Image
          src="/logo-header.png"
          alt="DAMAC HILLS"
          width={220}
          height={85}
          className="invert w-56 h-auto"
          priority
        />
      </div>
      <div className="w-56 h-px bg-white/20 relative overflow-hidden">
        <div
          ref={barRef}
          className="absolute inset-0 bg-paper origin-left"
          style={{ transform: "scaleX(0)" }}
        />
      </div>
      <div className="mt-4 text-xs tracking-[0.3em] uppercase font-light">
        <span ref={countRef}>0</span>%
      </div>
    </div>
  );
}
