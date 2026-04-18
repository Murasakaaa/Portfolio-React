import { IconBrandGithubFilled } from "@tabler/icons-react";

interface ProjectTitleSectionProps {
  title: string;
  githubUrl: string;
}

export default function ProjectTitleSection({ title, githubUrl }: ProjectTitleSectionProps) {
  return (
    <div className="flex justify-between gap-10 mb-2">
      <h1 className="font-archivo font-bold text-6xl max-sm:text-5xl">
        {title}
      </h1>
      <div className="my-1 sm:my-3">
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
        >
          <IconBrandGithubFilled
            size={32}
            className="border rounded-[10px] select-none"
          />
        </a>
      </div>
    </div>
  );
}
