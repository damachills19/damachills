"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { lenisInstance } from "./SmoothScroll";

export default function RouteTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);
  const isFirst = useRef(true);

  useEffect(() => {
    lenisInstance?.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);

    const el = ref.current;
    if (!el) return;

    if (isFirst.current) {
      isFirst.current = false;
      return;
    }

    gsap.fromTo(
      el,
      { opacity: 0, y: 32 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }
    );
  }, [pathname]);

  return (
    <main key={pathname} ref={ref}>
      {children}
    </main>
  );
}
