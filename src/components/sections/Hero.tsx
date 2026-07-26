"use client";

import RevealText from "@/components/RevealText";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden text-paper">
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-14">
        <RevealText
          as="p"
          lines={["Premium Corporate Profile 2026"]}
          className="text-xs tracking-[0.35em] uppercase font-light mb-8"
        />

        <RevealText
          as="h1"
          lines={["DAMAC HILLS"]}
          className="font-display text-[14vw] md:text-[8vw] leading-[0.95] tracking-tight"
          delay={0.2}
        />

        <RevealText
          as="p"
          lines={["Building Excellence.", "Creating Sustainable Landmarks."]}
          className="text-lg md:text-2xl font-light mt-6 max-w-xl"
          stagger={0.25}
          delay={0.5}
        />

        <RevealText
          as="p"
          lines={[
            "Residential · Commercial · Infrastructure · Engineering · Construction Management",
            "Riyadh, Saudi Arabia",
          ]}
          className="text-xs md:text-sm tracking-[0.2em] uppercase font-light text-white/70 max-w-xl mt-8"
          stagger={0.2}
          delay={1}
        />
      </div>

      <div className="absolute bottom-8 left-0 right-0 z-10 flex items-center justify-between px-6 md:px-14 text-paper">
        <span className="text-[11px] tracking-[0.3em] font-light">
          SCROLL DOWN TO DISCOVER
        </span>
        <span className="w-9 h-9 rounded-full border border-current flex items-center justify-center animate-bounce">
          <span className="block w-2 h-2 border-b border-r border-current rotate-45 -translate-y-0.5" />
        </span>
      </div>
    </section>
  );
}
