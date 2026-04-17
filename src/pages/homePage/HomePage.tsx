import { HeroSection } from "./HeroSection";
import { ProjectsPreviewSection } from "./ProjectsPreviewSection";
import { SkillsSection } from "./SkillsSection";
import { ContactSection } from "./ContactSection";

export default function HomePage() {
  return (
    <main className="flex-1 flex flex-col mx-60 gap-10 mt-20 justify-evenly xl:items-center max-xl:flex-col sm:justify-evenly max-sm:mx-1 max-sm:mt-0 max-2xl:mx-10">
      <HeroSection />
      <hr className="w-full border-t-2 border-black" />
      <SkillsSection />
      <hr className="w-full border-t-2 border-black" />
      <ProjectsPreviewSection />
      <hr className="w-full border-t-2 border-black" />
      <ContactSection />
    </main>
  );
}
