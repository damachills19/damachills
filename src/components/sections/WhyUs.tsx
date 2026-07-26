import FullBleedSection from "@/components/FullBleedSection";
import RevealText from "@/components/RevealText";
import Reveal from "@/components/Reveal";
import { WHY_CHOOSE_US } from "@/data/content";

export default function WhyUs() {
  return (
    <FullBleedSection
      id="why-us"
      eyebrow="Why Choose Damac Hills"
      scrollLabel="SCROLL DOWN TO DISCOVER"
    >
      <RevealText
        as="h2"
        lines={["A Trusted Partner", "In Construction & Engineering"]}
        className="font-display text-[8vw] md:text-[4vw] leading-[1.05] tracking-tight max-w-4xl mb-14"
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6 max-w-5xl">
        {WHY_CHOOSE_US.map((item, i) => (
          <Reveal key={item} delay={i * 0.12}>
            <div className="flex items-center gap-3 border-b border-white/20 pb-4">
              <span className="text-sm">✓</span>
              <span className="text-sm md:text-base font-light">{item}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </FullBleedSection>
  );
}
