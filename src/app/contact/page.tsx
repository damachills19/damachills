import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";
import LivingSection from "@/components/LivingSection";

export const metadata: Metadata = {
  title: "Contact — DAMAC HILLS",
};

export default function ContactPage() {
  return (
    <LivingSection>
      <Contact />
    </LivingSection>
  );
}
