import type { Metadata } from "next";
import Strength from "@/components/sections/Strength";
import LivingSection from "@/components/LivingSection";

export const metadata: Metadata = {
  title: "Company Strength — DAMAC HILLS",
};

export default function StrengthPage() {
  return (
    <LivingSection video="/videos/excavation-crane.mp4">
      <Strength />
    </LivingSection>
  );
}
