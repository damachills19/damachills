import PanoramaBackground from "./PanoramaBackground";
import ScrollCue from "./ScrollCue";

export default function FullBleedSection({
  id,
  eyebrow,
  image,
  imageAlt,
  overlay = "dark",
  direction = "right",
  scrollLabel,
  background,
  children,
}: {
  id: string;
  eyebrow?: string;
  image?: string;
  imageAlt?: string;
  overlay?: "dark" | "darker" | "light";
  direction?: "left" | "right";
  scrollLabel?: string;
  background?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden text-paper snap-start"
    >
      {background}
      {image && (
        <PanoramaBackground
          src={image}
          alt={imageAlt ?? ""}
          overlay={overlay}
          direction={direction}
        />
      )}

      {eyebrow && (
        <div className="absolute top-24 left-6 md:left-14 z-10 text-xs tracking-[0.3em] uppercase font-light">
          {eyebrow}
          <span className="block mt-2 w-10 h-px bg-current" />
        </div>
      )}

      <div className="relative z-10 px-6 md:px-14">{children}</div>

      {scrollLabel !== undefined && <ScrollCue label={scrollLabel || undefined} />}
    </section>
  );
}
