import { ReactNode } from "react";

interface ProjectContentSectionProps {
  title: string;
  description: ReactNode[];
  features: ReactNode[];
  additionalContent?: ReactNode;
}

export default function ProjectContentSection({
  title,
  description,
  features,
  additionalContent,
}: ProjectContentSectionProps) {
  return (
    <div className="font-archivo text-[1rem] max-sm:text-[0.875rem] flex-3/7">
      {description.map((paragraph, index) => (
        <p key={`desc-${index}`} className={index < description.length - 1 ? "mb-5" : "mb-5"}>
          {paragraph}
        </p>
      ))}

      <p className="mb-2 underline">{title}</p>

      <ul className="list-disc pl-5 space-y-2 mb-5">
        {features.map((feature, index) => (
          <li key={`feature-${index}`}>{feature}</li>
        ))}
      </ul>

      {additionalContent && (
        <div>
          {additionalContent}
        </div>
      )}
    </div>
  );
}
