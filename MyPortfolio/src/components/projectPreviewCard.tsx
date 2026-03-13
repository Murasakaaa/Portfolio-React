import { IconArrowNarrowRight } from "@tabler/icons-react";
import { Link } from "react-router-dom";

interface ProjectPreview {
  img: string;
  name: string;
  desc: string;
  path: string;
}

export default function ProjPreviewCard({
  img,
  name,
  desc,
  path,
}: ProjectPreview) {
  return (
    <Link
      to={"/projets/" + path}
      className="flex group flex-col box-border border-2 border-black px-10 py-3 h-full hover:outline-2 hover:outline-black transition-all duration-50"
    >
      <img src={img} alt="illustration du projet" />

      <h3 className="text-4xl font-bold font-archivo mt-4">{name}</h3>
      <p className="text-gray-700 mt-1 font-archivo">{desc}</p>
      <div className="flex justify-end w-full">
        <IconArrowNarrowRight className="opacity-0 group-hover:opacity-100 max-sm:opacity-100" />
      </div>
    </Link>
  );
}
