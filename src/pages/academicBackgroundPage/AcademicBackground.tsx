import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import { useMediaQuery } from "@mui/material";

function LeftAlignedTimeline() {
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: isMobile ? 0 : 0.2,
          display: isMobile ? "none" : "flex",
          "@media (max-width: 768px)": {
            flex: 0,
            display: "none",
          },
        },
        "@media (max-width: 768px)": {
          padding: 0,
        },
      }}
    >
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          Septembre 2024- Juin 2027
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ "@media (max-width: 768px)": { paddingX: 1 } }}>
          <div>
            <p className="font-archivo text-gray-400 text-sm mb-1 max-md:text-xs md:hidden">
              Septembre 2024 - Juin 2027
            </p>
            <h2 className="font-bold font-archivo text-4xl mb-2.5 max-md:text-2xl">
              BUT Informatique
            </h2>
            <p className="font-archivo text-gray-500 mb-4 w-full text-[1rem] max-md:text-[0.875rem]">
              IUT de Marne-la-Vallée - Université Gustave Eiffel. <br />{" "}
              Parcours réalisation d'applications : conception, développement,
              validation.
            </p>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          Juin 2024
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ "@media (max-width: 768px)": { paddingX: 1 } }}>
          <div>
            <p className="font-archivo text-gray-400 text-sm mb-1 max-md:text-xs md:hidden">
              Juin 2024
            </p>
            <h2 className="font-archivo font-bold text-4xl mb-2.5 max-md:text-2xl">
              Cambridge English Certificate
            </h2>
            <p className="font-archivo text-gray-500 mb-4 w-full text-[1rem] max-md:text-[0.875rem]">
              Obtention du Cambridge English Certificate (CEC)
            </p>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          Septembre 2021 - Juin 2024
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent sx={{ "@media (max-width: 768px)": { paddingX: 1 } }}>
          <div>
            <p className="font-archivo text-gray-400 text-sm mb-1 max-md:text-xs md:hidden">
              Septembre 2021 - Juin 2024
            </p>
            <h2 className="font-archivo font-bold text-4xl mb-2.5 max-md:text-2xl">
              Baccalauréat général
            </h2>
            <p className="font-archivo text-gray-500 mb-4 w-full text-[1rem] max-md:text-[0.875rem]">
              Baccalauréat général avec mention - options NSI et Mathématiques -
              Lycée Émilie du Châtelet
            </p>
          </div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export default function AcademicBackground() {
  return (
    <main className="h-screen flex flex-col xl:mx-30 mt-20 mx-10 gap-10 max-sm:gap-5 max-sm:mt-10">
      <div>
        <h1 className="font-schabo text-9xl select-none p-0 m-0 max-sm:text-7xl">
          FORMATIONS
        </h1>
        <LeftAlignedTimeline />
      </div>
    </main>
  );
}
