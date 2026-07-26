import type { Metadata } from "next";
import Projects from "@/components/sections/Projects";
import LivingSection from "@/components/LivingSection";

export const metadata: Metadata = {
  title: "Projects — DAMAC HILLS",
};

export default function ProjectsPage() {
  return (
    <LivingSection video="/videos/projects.mp4">
      <Projects />
    </LivingSection>
  );
}
