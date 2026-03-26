import type { ReactNode } from "react";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { Link } from "react-router-dom";

interface SkillCardProps {
  icon: ReactNode;
  title: string;
  desc: string;
  pathname: string;
}

export default function SkillCard({
  icon,
  title,
  desc,
  pathname,
}: SkillCardProps) {
  return (
    <Link
      to={"/" + pathname}
      className="flex group flex-col items-center justify-between box-border border-2 border-black rounded-[0.313rem] px-10 py-3 h-full hover:outline-2 hover:outline-black transition-all duration-50"
    >
      {icon}
      <p className="font-bold font-archivo text-4xl uppercase max-sm:text-3xl">
        {title}
      </p>
      <p className="font-archivo text-xl text-gray-700 max-sm:text-lg">
        {desc}
      </p>
      <div className="flex justify-end w-full">
        <IconArrowNarrowRight className="opacity-0 group-hover:opacity-100 max-sm:opacity-100" />
      </div>
    </Link>
  );
}
