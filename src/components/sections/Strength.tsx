import FullBleedSection from "@/components/FullBleedSection";
import RevealText from "@/components/RevealText";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import { KEY_STATISTICS, CORPORATE_RESPONSIBILITY } from "@/data/content";

export default function Strength() {
  return (
    <div id="strength">
      <FullBleedSection id="strength-stats" eyebrow="Company Strength">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14 max-w-5xl">
          {KEY_STATISTICS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.16}>
              <div className="border-t border-white/25 pt-5">
                <div className="font-display text-4xl md:text-5xl">
                  <Counter value={stat.value} />
                </div>
                <p className="text-xs tracking-[0.2em] uppercase font-light mt-3 text-white/70">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </FullBleedSection>

      <section className="relative py-28 md:py-36 px-6 md:px-14">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <div>
            <span className="text-xs tracking-[0.3em] text-white/50">
              Corporate Responsibility
            </span>
            <ul className="mt-6 space-y-3">
              {CORPORATE_RESPONSIBILITY.map((item, i) => (
                <Reveal key={item} delay={i * 0.16}>
                  <li className="text-sm md:text-base font-light border-t border-white/10 pt-3">
                    {item}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-14">
            <Reveal>
              <div className="border-t border-white/15 pt-6">
                <span className="text-xs tracking-[0.3em] text-white/50">
                  Saudi Vision 2030
                </span>
                <RevealText
                  as="p"
                  lines={[
                    "Damac Hills proudly supports the Kingdom's Vision 2030 by",
                    "delivering sustainable infrastructure, creating employment",
                    "opportunities, adopting modern technologies, and contributing",
                    "to national economic diversification.",
                  ]}
                  className="font-display text-xl md:text-2xl leading-snug mt-3"
                />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="border-t border-white/15 pt-6">
                <span className="text-xs tracking-[0.3em] text-white/50">
                  Future Vision
                </span>
                <p className="font-display text-xl md:text-2xl leading-snug mt-3">
                  Our ambition is to become a regional leader in engineering,
                  construction, and sustainable development while expanding our
                  portfolio across the GCC.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
