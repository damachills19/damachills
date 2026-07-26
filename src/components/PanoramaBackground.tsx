"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PanoramaBackground({
  src,
  alt,
  overlay = "dark",
  direction = "right",
}: {
  src: string;
  alt: string;
  overlay?: "dark" | "darker" | "light";
  direction?: "left" | "right";
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = imgRef.current;
    const container = containerRef.current;
    if (!el || !container) return;

    const xFrom = direction === "right" ? "-4%" : "4%";
    const xTo = direction === "right" ? "4%" : "-4%";

    const ambient = gsap.fromTo(
      el,
      { xPercent: parseFloat(xFrom), scale: 1.18 },
      {
        xPercent: parseFloat(xTo),
        scale: 1.28,
        duration: 26,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      }
    );

    const parallax = gsap.to(el, {
      yPercent: 12,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      ambient.kill();
      parallax.kill();
    };
  }, [direction]);

  const overlayClass =
    overlay === "darker"
      ? "bg-black/65"
      : overlay === "light"
      ? "bg-white/40"
      : "bg-black/40";

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <div ref={imgRef} className="absolute inset-0 will-change-transform">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className={`absolute inset-0 ${overlayClass}`} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
    </div>
  );
}
