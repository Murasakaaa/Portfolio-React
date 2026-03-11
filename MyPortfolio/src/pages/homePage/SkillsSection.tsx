import { Box, Grid } from "@mui/material";
import {
  IconCode,
  IconBolt,
  IconUsers,
  IconTool,
  IconDatabaseCog,
  IconClipboardText,
} from "@tabler/icons-react";
import SkillCard from "../../components/SkillCard";

const SkillsList = [
  {
    id: 1,
    icon: <IconCode size={64} />,
    title: "Réaliser",
    desc: "Concevoir, coder, tester et intégrer des solutions informatiques pour répondre aux besoins des clients.",
  },
  {
    id: 2,
    icon: <IconBolt size={64} />,
    title: "Optimiser",
    desc: "Proposer des applications informatiques performantes en analysant le temps d'exécution, la précision et la consommation de ressources.",
  },
  {
    id: 3,
    icon: <IconUsers size={64} />,
    title: "Collaborer",
    desc: "Proposer des applications informatiques performantes en analysant le temps d'exécution, la précision et la consommation de ressources.",
  },
  {
    id: 4,
    icon: <IconTool size={64} />,
    title: "Administrer",
    desc: "Installer, configurer et maintenir en conditions opérationnelles les infrastructures, services et réseaux d'une organisation.",
  },
  {
    id: 5,
    icon: <IconDatabaseCog size={64} />,
    title: "Gérer",
    desc: "Concevoir et exploiter les données de l'entreprise pour permettre un pilotage efficace de l'activité.",
  },
  {
    id: 6,
    icon: <IconClipboardText size={64} />,
    title: "Conduire",
    desc: "Organiser et piloter un projet informatique en utilisant des méthodes classiques ou agiles pour satisfaire les utilisateurs.",
  },
];

export const SkillsSection = () => {
  return (
    <section style={{ width: "100%" }}>
      <h2 className="text-7xl font-schabo">Mes compétences métier</h2>
      <Box sx={{ width: "100%", py: 4 }}>
        <Grid
          container
          spacing={3}
          sx={{
            width: "100%",
            margin: 0,
          }}
        >
          {SkillsList.map((skill) => (
            <Grid
              key={skill.id}
              size={{
                xs: 12,
                sm: 6,
                md: 4,
              }}
            >
              <SkillCard
                icon={skill.icon}
                title={skill.title}
                desc={skill.desc}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <div className="flex justify-center">
          <p className="font-bold font-archivo text-2xl">Cliquez sur une des cartes pour en savoir plus.</p>
      </div>
    </section>
  );
};
