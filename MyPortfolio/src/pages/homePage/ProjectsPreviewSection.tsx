import ProjPreviewCard from "../../components/projectPreviewCard";



export const ProjectsPreviewSection = () => {

  const projects = [
    {
      id: 1,
      title: "Projet 1",
      image: "",
      desc: "Description du projet 1",
    },
    {
      id: 2,
      title: "Projet 2",
      image: "",
      desc: "Description du projet 2",
    },
    {
      id: 3,
      title: "Projet 3",
      image: "",
      desc: "Description du projet 3",
    },
  ]

  return ( 
  <section style={{ width: "100%" }}>
    <h2 className="text-7xl font-schabo">Aperçu de mes projets</h2>
    <div className="flex gap-6 mt-10 justify-center align-items-center">
      {projects.map((project) => (
        <ProjPreviewCard
          key={project.id}
          img={project.image}
          name={project.title}
          desc={project.desc}
          pLink={`/projects/`} // TODO: mettre le lien vers la page du projet
        />
      ))}
    </div>
 </section> 
);
}
