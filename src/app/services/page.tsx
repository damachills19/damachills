import type { Metadata } from "next";
import Services from "@/components/sections/Services";
import LivingSection from "@/components/LivingSection";

export const metadata: Metadata = {
  title: "Services — DAMAC HILLS",
};

export default function ServicesPage() {
  return (
    <LivingSection video="/videos/services.mp4">
      <Services />
    </LivingSection>
  );
}
