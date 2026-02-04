import { IconArrowNarrowDown } from "@tabler/icons-react";
import { IconDownload } from "@tabler/icons-react";
import { IconBrandGithubFilled } from "@tabler/icons-react";
import { IconBrandLinkedinFilled } from "@tabler/icons-react";

export const HeroSection = () => {
  return (
    <section className="mt-5">
      <div className="grid grid-cols-2 auto-rows-auto gap-2">
        {/*1st cell with short intro*/}
        <div className="font-archivo text-rich_black text-[1.875rem] leading-10 max-sm:text-[1rem] max-sm:col-span-2 max-sm:leading-tight">
          Étudiant en BUT Informatique, je recherche une alternance ou un stage
          pour mettre mes compétences en pratique, développer mon savoir-faire
          et relever des défis. Mon objectif : devenir Ingénieur en Informatique
          et contribuer à la création de solutions innovantes.
        </div>

        {/*2nd cell with download button*/}
        <div className="row-start-2 font-archivo flex items-center mt-30">
          <div
            className="border-2 rounded-[0.313rem] w-fit flex items-center gap-1 px-1 tracking-widest cursor-pointer bg-white hover:bg-black transition-colors duration-300 group"
            onClick={getResume}
          >
            <p className="font-archivo text-[3rem] text-black group-hover:text-white transition-colors duration-200">
              MON CV
            </p>
            <IconDownload
              size={48}
              stroke={1.5}
              className="text-black group-hover:text-white transition-colors duration-200"
            />
          </div>
        </div>

        {/*3rd cell with icons buttons*/}
        <div className="row-start-2 flex justify-end gap-2 px-3 py-2 mt-30">
          <div className="border-2 rounded-[0.313rem] cursor-pointer bg-white hover:bg-black transition-colors duration-300 group">
            <IconBrandGithubFilled
              size={76}
              stroke={1.5}
              className="text-black group-hover:text-white transition-colors duration-200"
              onClick={gotoGithub}
            />
          </div>
          <div className="border-2 rounded-[0.313rem] cursor-pointer bg-white hover:bg-black transition-colors duration-300 group">
            <IconBrandLinkedinFilled
              size={76}
              stroke={1.5}
              className="text-black group-hover:text-white transition-colors duration-200"
              onClick={gotoLinkedin}
            />
          </div>
        </div>

        {/*4th cell with big name*/}
        <div
          className="col-span-2 row-start-3
            font-schabo-x text-[36.063rem] leading-60 mx-auto select-none mt-43"
        >
          <p>NOLANN MAUNIER</p>
        </div>

        {/*5th cell with arrow towards the bottom*/}
        <div className="col-span-2 row-start-4 flex justify-center my-11.5">
          <IconArrowNarrowDown size={32} />
        </div>
      </div>
    </section>
  );
};

const gotoGithub = () => {
  window.open("https://github.com/Murasakaaa", "_blank");
};
const gotoLinkedin = () => {
  window.open("https://www.linkedin.com/in/nolann-maunier-006003339", "_blank");
};

const getResume = () => {
  window.open("docs/CV.pdf", "_blank");
};