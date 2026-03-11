import type { ReactNode } from "react";
import { IconArrowNarrowRight } from "@tabler/icons-react";

interface SkillCardProps {
  icon: ReactNode;
  title: string;
  desc: string;
}

export default function SkillCard({ icon, title, desc }: SkillCardProps) {
  return (
    <div className="flex group flex-col items-center justify-between box-border border-2 border-black px-10 py-3 h-full hover:outline-2 hover:outline-black transition-all duration-50 hover:cursor-pointer">
      {icon}
      <p className="font-bold font-archivo text-4xl uppercase">{title}</p>
      <p className="font-archivo text-2xl">{desc}</p>
      <div className="flex justify-end w-full">
        <IconArrowNarrowRight className="opacity-0 group-hover:opacity-100"/>
      </div>
    </div>
  );
}
