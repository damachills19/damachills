import RevealText from "@/components/RevealText";
import Reveal from "@/components/Reveal";
import { SERVICE_GROUPS } from "@/data/content";

export default function Services() {
  return (
    <section className="relative py-28 md:py-36 px-6 md:px-14">
      <span className="text-xs tracking-[0.3em] text-white/50">Our Services</span>
      <RevealText
        as="h2"
        lines={["Integrated Construction", "Solutions, End to End"]}
        className="font-display text-[8vw] md:text-[3.6vw] leading-[1.05] tracking-tight mt-3 mb-16 max-w-4xl"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
        {SERVICE_GROUPS.map((group, i) => (
          <Reveal key={group.title} delay={(i % 3) * 0.18} className="bg-ink/60">
            <div className="p-8 md:p-10 h-full flex flex-col">
              <span className="text-xs text-white/50 mb-4">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-2xl mb-5">{group.title}</h3>
              <ul className="space-y-2 mt-auto">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm font-light text-white/70 border-t border-white/10 pt-2"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
