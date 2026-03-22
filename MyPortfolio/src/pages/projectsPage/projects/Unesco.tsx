import { IconX, IconBrandGithubFilled } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export default function Unesco() {
  return (
    <>
      <header className="w-full top-0 flex justify-end p-5 z-6 bg-white">
        <Link to="/projets" className="xl:mr-5">
          <IconX size={32} className="max-sm:w-5 max-sm:h-5" />
        </Link>
      </header>

      <hr className="mx-5 mb-5 xl:mx-30 xl:mb-10" />

      <main className="grow flex mx-5 gap-12 xl:mx-30 max-[61.875rem]:flex-col-reverse">
        <div className="flex flex-col flex-4/7 gap-2 w-full">
          <img
            src="/projects_illu/unesco_project/UNESCO_illu1.png"
            alt="Illustration 1"
            className="w-full object-cover"
          />
          <img
            src="/projects_illu/unesco_project/UNESCO_illu2.png"
            alt="Illustration 2"
            className="w-full object-cover"
          />
          <img
            src="/projects_illu/unesco_project/UNESCO_illu3.png"
            alt="Illustration 3"
            className="w-full object-cover"
          />
          <img
            src="/projects_illu/unesco_project/UNESCO_illu4.png"
            alt="Illustration 4"
            className="w-full object-cover"
          />
          <img
            src="/projects_illu/unesco_project/UNESCO_illu5.png"
            alt="Illustration 5"
            className="w-full object-cover"
          />
          <img
            src="/projects_illu/unesco_project/UNESCO_illu6.png"
            alt="Illustration 6"
            className="w-full object-cover"
          />
        </div>

        <div className="font-archivo text-[1rem] max-sm:text-[0.875rem] flex-3/7">
          <div className="flex justify-between gap-10 mb-2">
            <h1 className="font-bold text-6xl max-sm:text-5xl">
              Projet UNESCO
            </h1>
            <div className="my-1 sm:my-3">
              <a
                href="https://github.com/Draken1003/Unesco"
                target="_blank"
                rel="noreferrer"
              >
                <IconBrandGithubFilled
                  className="border rounded-[10px] select-none"
                  size={32}
                />
              </a>
            </div>
          </div>

          <p>
            Il s'agit d'un site web qui a pour but de montrer le patrimoine de
            la ville de Kyoto au Japon, classé au{" "}
            <b>patrimoine mondial de l'UNESCO</b>.
          </p>
          <p className="mb-5">
            Ce projet, développé en équipe de 4 sur deux semestres, avait pour
            objectif de mettre en pratique nos connaissances en{" "}
            <b>développement web</b>, en <b>base de données avec SQL</b> ainsi
            qu'en <b>recherche documentaire</b> et <b>gestion de projet</b>.
          </p>
          <p className="mb-2 underline">
            Voici une courte description du projet :
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-5">
            <li>
              La <b>page d'accueil</b> est la première page que les visiteurs du
              site voient. Elle sert d'introduction au site mais aussi de table
              de matières.
            </li>
            <li>
              La <b>page des monuments</b> regroupe tous les monuments que nous
              avons choisi de mettre.
            </li>
            <li>
              La <b>page architecture</b> nous en dit plus sur l'architecture de
              Kyoto.
            </li>
            <li>
              La <b>page Histoire</b> raconte l'histoire de Kyoto à travers les
              différentes périodes que le japon a traversé jusqu'à aujourd'hui.
            </li>
          </ul>
          <p className="mb-2">
            Le projet consiste à développer ce <b>site web</b> sur le patrimoine
            de Kyoto. Notre mission est de réaliser un site où des utilisateurs
            peuvent en apprendre plus sur le patrimoine de Kyoto.
            <br /> Pour cela, nous avons tout d'abord effectué un diagramme de
            Gantt pour établir le temps passé sur chaque tâches puis une{" "}
            <b>recherche documentaire</b> dans un <b>tableau synoptique</b> afin
            d'identifier, collecter et traiter des données sur notre sujet à
            travers des sources diverses.
            <br /> De plus, nous avons créé un <b>questionnaire</b> avec Google
            Form que nous avons envoyé à diverses personnes afin d'en savoir
            plus sur les habitudes des gens quand il s'agit de voyager.
            <br /> Ensuite, nous avons fait un <b>benchmarking</b>, afin
            d'étudier et analyser d'autres site web pour savoir ce que nous
            pourrions mettre dans le nôtre.
            <br /> Enfin, nous avons fait un <b>wireframing</b> pour avoir une
            première approche de l'apparence du site, puis après de nombreuses
            réflexions et changements, nous avons fait une <b>maquette</b> qui
            nous a servis de base pour développer le site, tout ça sur{" "}
            <b>Figma</b>.
          </p>
          <p className="mb-2">
            Pour ce projet, nous avons utilisé <b>HTML</b>, <b>CSS</b> et{" "}
            <b>PHP</b>, ainsi que <b>PostgreSQL</b> pour la base de données. Le
            site est donc <b>construit dynamiquement</b> selon le contenu des{" "}
            <b>tables de la base de données</b>.
          </p>
          <p>
            Vous pouvez retrouver ce projet sur ma <b>page GitHub</b>{" "}
            <i>(en cliquant sur le logo ci-dessus)</i> où vous trouverez le{" "}
            <b>code source</b> du projet.
          </p>
          <p className="text-red-600 font-bold">
            Pas encore de lien pour le site car le projet est en cours.
          </p>
        </div>
      </main>

      <hr className="mx-5 mt-5 xl:mx-30 xl:mt-10" />

      <footer className="flex mx-5 pb-2 sm:py-3 xl:mx-30 justify-between font-archivo">
        <p className="pt-2 text-[0.6875rem] max-sm:text-[0.5625rem]">
          made with ❤️ by Nolann
        </p>
        <p className="pt-2 text-[0.6875rem] max-sm:text-[0.5625rem]">
          Projet UNESCO
        </p>
      </footer>
    </>
  );
}
