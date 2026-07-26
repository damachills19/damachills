import FullBleedSection from "@/components/FullBleedSection";
import RevealText from "@/components/RevealText";
import Reveal from "@/components/Reveal";
import { CORE_VALUES } from "@/data/content";

export default function About() {
  return (
    <div id="about">
      <FullBleedSection
        id="about-statement"
        eyebrow="Who We Are"
        scrollLabel="SCROLL DOWN TO DISCOVER"
      >
        <RevealText
          as="h2"
          lines={[
            "DAMAC HILLS IS A LEADING",
            "CONSTRUCTION AND ENGINEERING",
            "COMPANY HEADQUARTERED IN",
            "RIYADH, KINGDOM OF SAUDI ARABIA.",
          ]}
          className="font-display text-[7vw] md:text-[3.4vw] leading-[1.15] tracking-tight max-w-5xl"
        />
        <Reveal delay={0.3}>
          <p className="mt-8 max-w-xl text-sm md:text-base font-light text-white/80 leading-relaxed">
            We specialize in delivering integrated construction solutions covering
            planning, engineering, project management, and execution across
            residential, commercial, industrial, and infrastructure sectors. Our
            multidisciplinary team combines technical expertise with innovative
            thinking to ensure every project is delivered safely, efficiently, and
            on schedule.
          </p>
        </Reveal>
      </FullBleedSection>

      <section className="relative py-28 md:py-36 px-6 md:px-14">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 mb-24">
          <div>
            <span className="text-xs tracking-[0.3em] text-white/50">Our Story</span>
            <RevealText
              as="h3"
              lines={["Every landmark", "begins with a vision."]}
              className="font-display text-3xl md:text-4xl mt-3 mb-6"
            />
            <Reveal>
              <p className="text-sm md:text-base font-light text-white/80 leading-relaxed max-w-md">
                Damac Hills was founded with the ambition of becoming one of Saudi
                Arabia&apos;s most trusted engineering and construction companies.
                Through dedication, continuous improvement, and a client-first
                approach, we have successfully expanded our capabilities across
                multiple sectors while maintaining uncompromising quality standards.
                Today, we proudly contribute to the Kingdom&apos;s ambitious
                development initiatives through innovative engineering solutions.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-10">
            <Reveal>
              <div className="border-t border-white/15 pt-6">
                <span className="text-xs tracking-[0.3em] text-white/50">Vision</span>
                <p className="font-display text-xl md:text-2xl mt-3 leading-snug">
                  To become one of the Middle East&apos;s most respected engineering
                  and construction companies by delivering exceptional projects that
                  inspire communities and support sustainable development.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="border-t border-white/15 pt-6">
                <span className="text-xs tracking-[0.3em] text-white/50">Mission</span>
                <p className="font-display text-xl md:text-2xl mt-3 leading-snug">
                  To provide innovative, safe, and high-quality engineering and
                  construction solutions while creating long-term value for our
                  clients, employees, and society.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="border-t border-white/15 pt-10">
          <span className="text-xs tracking-[0.3em] text-white/50">Core Values</span>
          <div className="flex flex-wrap gap-x-10 gap-y-4 mt-6">
            {CORE_VALUES.map((v, i) => (
              <Reveal key={v} delay={i * 0.12}>
                <span className="text-lg md:text-xl font-display text-white/85">
                  {v}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
