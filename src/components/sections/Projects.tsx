import FullBleedSection from "@/components/FullBleedSection";
import RevealText from "@/components/RevealText";
import Reveal from "@/components/Reveal";
import { INDUSTRIES_SERVED } from "@/data/content";

const PROFILE_ITEMS = [
  {
    title: "Location & Client",
    body: "Where the project was built and who it was delivered for.",
  },
  {
    title: "Scope of Work",
    body: "The full range of construction and engineering services provided.",
  },
  {
    title: "Project Timeline",
    body: "Key milestones from groundbreaking through handover.",
  },
  {
    title: "Key Achievements",
    body: "Notable outcomes in quality, safety, and delivery performance.",
  },
  {
    title: "Technical Highlights",
    body: "Engineering methods, materials, and technologies applied on site.",
  },
  {
    title: "Photo Documentation",
    body: "Visual records of progress and the completed development.",
  },
];

export default function Projects() {
  return (
    <>
      <FullBleedSection
        id="projects"
        eyebrow="Portfolio"
        scrollLabel="SCROLL DOWN TO DISCOVER"
      >
        <RevealText
          as="h2"
          lines={["Featured Projects", "Across the Kingdom"]}
          className="font-display text-[8vw] md:text-[3.8vw] leading-[1.05] tracking-tight max-w-4xl mb-10"
        />

        <Reveal>
          <p className="max-w-xl text-sm md:text-base font-light text-white/80 leading-relaxed mb-14">
            Each Damac Hills project is delivered with a dedicated profile
            covering location, client, scope, timeline, key achievements, and
            technical highlights — spanning the industries below.
          </p>
        </Reveal>

        <div className="flex flex-wrap gap-x-10 gap-y-5 max-w-4xl">
          {INDUSTRIES_SERVED.map((ind, i) => (
            <Reveal key={ind} delay={i * 0.12}>
              <span className="text-lg md:text-xl font-display border-b border-white/20 pb-1">
                {ind}
              </span>
            </Reveal>
          ))}
        </div>
      </FullBleedSection>

      <section className="relative py-28 md:py-36 px-6 md:px-14">
        <span className="text-xs tracking-[0.3em] text-white/50">
          Inside Every Project Profile
        </span>
        <RevealText
          as="h2"
          lines={["What You'll Find In", "Each Project Record"]}
          className="font-display text-[8vw] md:text-[3.2vw] leading-[1.05] tracking-tight mt-3 mb-16 max-w-4xl"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {PROFILE_ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.18} className="bg-ink/60">
              <div className="p-8 md:p-10 h-full">
                <span className="text-xs text-white/50 mb-4 block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl md:text-2xl mb-3">
                  {item.title}
                </h3>
                <p className="text-sm font-light text-white/70 leading-relaxed">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
