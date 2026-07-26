import Link from "next/link";
import Image from "next/image";
import RevealText from "@/components/RevealText";
import Reveal from "@/components/Reveal";
import { NAV_ITEMS } from "@/data/nav";
import { CONTACT } from "@/data/content";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-32 px-6 md:px-14">
      <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-start">
        <div>
          <RevealText
            as="h2"
            lines={["Contact Us"]}
            className="font-display text-5xl md:text-6xl mb-10"
          />
          <ul className="space-y-3 text-sm tracking-[0.15em] uppercase font-light">
            {NAV_ITEMS.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.1}>
                <li>
                  <Link href={item.id} className="hover:text-white/60 transition-colors">
                    {item.label}
                  </Link>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        <div>
          <RevealText
            as="h3"
            lines={["Riyadh, Kingdom of Saudi Arabia"]}
            className="font-display text-2xl mb-4"
          />
          <div className="space-y-2 text-sm font-light text-white/70">
            {[
              `Website: ${CONTACT.website}`,
              `Email: ${CONTACT.email}`,
              `Phone: ${CONTACT.phone}`,
              CONTACT.address,
            ].map((line, i) => (
              <Reveal key={line} delay={0.2 + i * 0.1}>
                <p>{line}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <Reveal delay={0.5}>
        <div className="mt-24 pt-8 border-t border-white/15 flex flex-col md:flex-row items-center justify-between gap-6">
          <Image
            src="/logo-footer.png"
            alt="DAMAC HILLS"
            width={130}
            height={42}
            className="invert h-9 w-auto"
          />
          <p className="text-xs tracking-[0.2em] uppercase font-light text-white/50">
            © {new Date().getFullYear()} Damac Hills. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-xs tracking-[0.2em] uppercase font-light text-white/50">
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
