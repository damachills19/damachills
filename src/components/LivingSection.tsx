"use client";

import dynamic from "next/dynamic";
import ParallaxVideo from "@/components/ParallaxVideo";

const ParticleField = dynamic(() => import("@/components/ParticleField"), {
  ssr: false,
});

export default function LivingSection({
  children,
  video,
}: {
  children: React.ReactNode;
  video?: string;
}) {
  return (
    <div className="relative bg-ink text-paper">
      <div className="fixed inset-0 overflow-hidden">
        {video ? (
          <>
            <ParallaxVideo src={video} className="absolute inset-0" />
            <div className="absolute inset-0 bg-ink/70" />
          </>
        ) : (
          <ParticleField />
        )}
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
