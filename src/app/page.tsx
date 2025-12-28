import { HeroSection } from "@/components/sections/hero";
import { SkillsSection } from "@/components/sections/skills";
import { ExperienceSection } from "@/components/sections/experience";
import { ProjectsSection } from "@/components/sections/projects";
// Import Contact Section
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />

      {/* Tambahkan Contact di sini */}
      <ContactSection />
    </main>
  );
}