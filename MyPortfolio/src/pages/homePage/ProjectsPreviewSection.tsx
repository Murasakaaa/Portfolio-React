import { Box, Grid } from "@mui/material";
import ProjPreviewCard from "../../components/projectPreviewCard";
import projects_preview from "../../data/projects_previews.json";
import { IconFolderShare } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export const ProjectsPreviewSection = () => {
  return (
    <section className="w-full">
      <h2 className="text-7xl font-schabo">Aperçu de mes projets</h2>
      <Box sx={{ width: "100%", py: 4 }}>
        <Grid container spacing={3} sx={{ width: "100%", margin: 0 }}>
          {projects_preview.map((project) => (
            <Grid key={project.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <ProjPreviewCard
                img={project.image}
                name={project.title}
                desc={project.desc}
                path={project.path}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <div className="font-archivo flex justify-center">
        <Link
          to="/projets"
          className="border-2 rounded-[0.313rem] w-fit flex items-center gap-1 px-2 tracking-widest cursor-pointer bg-white hover:bg-black transition-colors duration-300 group max-sm:tracking-normal"
        >
          <p className="font-archivo text-[3rem] text-black group-hover:text-white transition-colors duration-200 max-sm:text-3xl">
            Voir tous mes projets
          </p>
          <IconFolderShare
            size={48}
            stroke={1.5}
            className="text-black group-hover:text-white transition-colors duration-200"
          />
        </Link>
      </div>
    </section>
  );
};
