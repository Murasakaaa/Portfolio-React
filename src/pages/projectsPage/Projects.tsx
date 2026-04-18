import ProjectCard from "../../components/projects/ProjectCard";
import projectsData from "../../data/projects_all.json";

export default function Projects() {
  return (
    <main className="font-archivo flex flex-col xl:mx-30 mt-20 mx-10 gap-0 max-sm:gap-5 max-sm:mt-10 max-2xl:gap-0">
      <div>
        <h1 className="font-schabo text-9xl select-none p-0 m-0 max-sm:text-7xl">
          PROJETS
        </h1>
      </div>

      {/* Grille dynamique de projets */}
      <div className="flex flex-wrap mb-20 2xl:justify-evenly max-2xl:flex-col max-2xl:gap-8 gap-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </main>
  );
}
