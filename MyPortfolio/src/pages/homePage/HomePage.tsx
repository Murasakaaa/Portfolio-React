import { HeroSection } from "./HeroSection";
import { SkillsSection } from "./SkillsSection";

export default function HomePage() {
  return (
    <main className="flex-1 flex flex-col mx-10 gap-10 mt-20 justify-evenly xl:items-center max-xl:flex-col sm:justify-evenly max-sm:mx-1 max-sm:mt-0">
      <HeroSection />
      <hr className="w-full border-t-2 border-black"/>
      <SkillsSection />
    </main>
  );
}
