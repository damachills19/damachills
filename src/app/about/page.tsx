import type { Metadata } from "next";
import Leadership from "@/components/sections/Leadership";
import About from "@/components/sections/About";
import WhyUs from "@/components/sections/WhyUs";
import LivingSection from "@/components/LivingSection";

export const metadata: Metadata = {
  title: "About Us — DAMAC HILLS",
};

export default function AboutPage() {
  return (
    <LivingSection video="/videos/about.mp4">
      <Leadership />
      <About />
      <WhyUs />
    </LivingSection>
  );
}
