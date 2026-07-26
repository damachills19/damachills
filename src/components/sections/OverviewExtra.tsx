import Link from "next/link";
import RevealText from "@/components/RevealText";
import Reveal from "@/components/Reveal";

const QUICK_FACTS = [
  { label: "Founded", value: "2010" },
  { label: "Headquarters", value: "Riyadh, KSA" },
  { label: "Core Sectors", value: "Residential · Commercial · Infrastructure" },
];

export default function OverviewExtra() {
  return (
    <section className="relative text-paper py-28 md:py-40 px-6 md:px-14">
      <RevealText
        as="p"
        lines={[
          "A construction and engineering partner",
          "built for the Kingdom's next chapter.",
        ]}
        className="font-display text-2xl md:text-4xl leading-snug max-w-3xl"
        stagger={0.25}
      />

      <div className="grid sm:grid-cols-3 gap-10 mt-16 max-w-4xl">
        {QUICK_FACTS.map((fact, i) => (
          <Reveal key={fact.label} delay={i * 0.18}>
            <div className="border-t border-white/15 pt-5">
              <span className="text-xs tracking-[0.3em] text-white/50 uppercase">
                {fact.label}
              </span>
              <p className="font-display text-lg md:text-xl mt-2">
                {fact.value}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.4}>
        <Link
          href="/about"
          data-cursor-grow
          className="inline-flex items-center gap-3 mt-20 text-xs tracking-[0.3em] uppercase font-light border-b border-white/30 pb-2 hover:border-white transition-colors"
        >
          Discover Our Story
          <span>→</span>
        </Link>
      </Reveal>
    </section>
  );
}
