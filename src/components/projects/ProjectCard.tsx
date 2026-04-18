import { Link } from "react-router-dom";
import Tag from "../shared/tags";

interface ProjectCardProps {
  title: string;
  path: string;
  image: string;
  desc: string;
  tags: string[];
}

export default function ProjectCard({
  title,
  path,
  image,
  desc,
  tags,
}: ProjectCardProps) {
  return (
    <div className="flex 2xl:max-w-171 overflow-hidden max-md:flex-col max-xl:gap-2 max-md:items-center max-md:w-full">
      {/* Image avec zoom au hover */}
      <div className="w-85.5 h-85.5 overflow-hidden shrink-0 aspect-square max-md:w-full max-md:aspect-square">
        <Link to={`/projets/${path}`}>
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition duration-300 hover:scale-110"
          />
        </Link>
      </div>

      {/* Description du projet */}
      <div className="xl:ml-5 flex flex-col">
        {/* Titre */}
        <Link to={`/projets/${path}`}>
          <h2 className="font-bold text-5xl max-md:text-3xl">
            {title}
          </h2>
        </Link>

        {/* Courte description */}
        <p className="text-xl max-md:text-[0.875rem]">
          {desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap justify-start mt-5 font-archivo gap-2 select-none">
          {tags.map((tag, index) => (
            <Tag key={index} text={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}
