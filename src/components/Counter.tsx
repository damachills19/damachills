"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const match = value.match(/[\d.]+/);
    const numeric = match ? parseFloat(match[0]) : 0;
    const prefix = value.slice(0, match?.index ?? 0);
    const suffix = value.slice((match?.index ?? 0) + (match?.[0].length ?? 0));

    const counter = { n: 0 };
    const anim = gsap.to(counter, {
      n: numeric,
      duration: 1.8,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 85%" },
      onUpdate: () => {
        el.textContent = `${prefix}${Math.floor(counter.n)}${suffix}`;
      },
    });

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, [value]);

  return <span ref={ref}>0</span>;
}
