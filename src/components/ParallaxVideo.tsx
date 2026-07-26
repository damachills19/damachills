"use client";

import { useEffect, useRef } from "react";
import BoomerangVideo from "./BoomerangVideo";

export default function ParallaxVideo({
  src,
  className = "",
}: {
  src: string;
  className?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0, scroll: 0 });
  const current = useRef({ x: 0, y: 0, scroll: 0 });

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const video = wrap.querySelector("video") as HTMLVideoElement | null;
    if (!video) return;

    const onMouseMove = (e: MouseEvent) => {
      target.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      target.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const onScroll = () => {
      const rect = wrap.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      target.current.scroll = (rect.top + rect.height / 2 - vh / 2) / vh;
    };

    let rafId = 0;
    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * 0.06;
      current.current.y += (target.current.y - current.current.y) * 0.06;
      current.current.scroll += (target.current.scroll - current.current.scroll) * 0.08;

      const tiltX = current.current.y * -5;
      const tiltY = current.current.x * 5;
      const panX = current.current.x * 14;
      const panY = current.current.scroll * -50 + current.current.y * 10;
      const scale = 1.12 + Math.min(Math.abs(current.current.scroll) * 0.06, 0.08);

      video.style.transform = `scale(${scale}) translate(${panX}px, ${panY}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;

      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className={className}
      style={{ perspective: "1200px", overflow: "hidden" }}
    >
      <BoomerangVideo
        src={src}
        className="w-full h-full object-cover will-change-transform"
      />
    </div>
  );
}
