"use client";

import RevealText from "@/components/RevealText";
import Reveal from "@/components/Reveal";
import ScrollCue from "@/components/ScrollCue";
import ParallaxVideo from "@/components/ParallaxVideo";
import { EXCELLENCE_PILLARS, CONSTRUCTION_PROCESS } from "@/data/content";

export default function Excellence() {
  return (
    <section
      id="excellence"
      className="relative min-h-screen py-28 md:py-0 md:flex md:flex-col md:justify-center overflow-hidden bg-ink text-paper snap-start"
    >
      <ParallaxVideo src="/videos/excellence.mp4" className="absolute inset-0" />
      <div className="absolute inset-0 bg-ink/70" />

      <div className="absolute top-24 left-6 md:left-14 z-10 text-xs tracking-[0.3em] uppercase font-light">
        Excellence
        <span className="block mt-2 w-10 h-px bg-current" />
      </div>

      <div className="relative z-10 px-6 md:px-14">
        <RevealText
          as="h2"
          lines={["Precision, Safety", "& Sustainable Innovation"]}
          className="font-display text-[8vw] md:text-[3.8vw] leading-[1.05] tracking-tight max-w-4xl mb-16"
        />

        <div className="grid md:grid-cols-2 gap-10 mb-20">
          {EXCELLENCE_PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.22}>
              <div className="border-t border-white/20 pt-5">
                <h3 className="font-display text-xl md:text-2xl mb-3">{p.title}</h3>
                <p className="text-sm font-light text-white/70 leading-relaxed max-w-md">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <span className="text-xs tracking-[0.3em] text-white/50">
            Construction Process
          </span>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-4 mt-5">
            {CONSTRUCTION_PROCESS.map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <span className="text-sm md:text-base font-light tracking-wide">
                  {step}
                </span>
                {i < CONSTRUCTION_PROCESS.length - 1 && (
                  <span className="text-white/30">→</span>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <ScrollCue label="SCROLL DOWN TO DISCOVER" />
    </section>
  );
}
