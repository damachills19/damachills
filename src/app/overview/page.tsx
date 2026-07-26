import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import OverviewExtra from "@/components/sections/OverviewExtra";
import LivingSection from "@/components/LivingSection";

export const metadata: Metadata = {
  title: "Overview — DAMAC HILLS",
};

export default function OverviewPage() {
  return (
    <LivingSection video="/videos/skyline.mp4">
      <Hero />
      <OverviewExtra />
    </LivingSection>
  );
}
