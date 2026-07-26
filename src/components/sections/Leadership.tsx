import Reveal from "@/components/Reveal";
import RevealText from "@/components/RevealText";

const MESSAGES = [
  {
    n: "01",
    title: "Chairman's Message",
    body: [
      "At Damac Hills, we believe every project represents an opportunity to build lasting value. Through innovation, quality craftsmanship, and unwavering commitment, we transform ideas into exceptional developments that contribute to Saudi Arabia's future.",
      "Our success is built on trust, integrity, and excellence. Every member of our team shares a commitment to delivering projects that exceed expectations while maintaining the highest standards of safety, quality, and sustainability.",
      "As Saudi Arabia continues its remarkable transformation under Vision 2030, Damac Hills remains committed to supporting this journey by delivering world-class engineering and construction solutions.",
      "Together, we build the future.",
    ],
    signature: "Chairman",
  },
  {
    n: "02",
    title: "CEO Message",
    body: [
      "Welcome to Damac Hills. Our company has established itself as a trusted partner in the construction and engineering sector through professionalism, innovation, and technical expertise.",
      "From residential communities to commercial developments and infrastructure projects, every assignment reflects our commitment to excellence.",
      "We continuously invest in advanced technologies, skilled professionals, and sustainable construction methods to ensure every project delivers lasting value.",
      "Our vision extends beyond constructing buildings — we create environments where communities thrive.",
    ],
    signature: "Chief Executive Officer",
  },
];

export default function Leadership() {
  return (
    <section className="relative py-28 md:py-40 px-6 md:px-14">
      <div className="grid md:grid-cols-2 gap-16 md:gap-24">
        {MESSAGES.map((m) => (
          <div key={m.n} className="relative">
            <span className="text-xs tracking-[0.3em] text-white/50">{m.n}</span>
            <RevealText
              as="h3"
              lines={[m.title]}
              className="font-display text-3xl md:text-4xl mt-3 mb-8"
            />
            <div className="space-y-5">
              {m.body.map((p, i) => (
                <Reveal key={i} delay={i * 0.18}>
                  <p className="text-sm md:text-base leading-relaxed text-white/80 font-light">
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.2}>
              <p className="mt-8 text-xs tracking-[0.25em] uppercase font-medium">
                {m.signature}
              </p>
            </Reveal>
            <div className="border-t border-white/15 mt-10" />
          </div>
        ))}
      </div>
    </section>
  );
}
