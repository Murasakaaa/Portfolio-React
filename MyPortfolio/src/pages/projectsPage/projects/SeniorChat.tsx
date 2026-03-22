import { IconX, IconBrandGithubFilled } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export default function SeniorChat() {
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
            src="/projects_illu/s_chat_project/SeniorChat_Illu1.png"
            alt="Illustration 1"
            className="w-full object-cover"
          />
          <img
            src="/projects_illu/s_chat_project/SeniorChat_Illu2.png"
            alt="Illustration 2"
            className="w-full object-cover"
          />
        </div>

        <div className="font-archivo text-[1rem] max-sm:text-[0.875rem] flex-3/7">
          <div className="flex justify-between gap-10 mb-2">
            <h1 className="font-bold text-6xl max-sm:text-5xl">
              Projet SeniorChat
            </h1>
            <div className="my-1 sm:my-3">
              <a
                href="https://github.com/Draken1003/SeniorChat"
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
            Il s'agit d'une <b>plateforme de messagerie</b> pour <b>seniors</b>{" "}
            au sein d'une <b>maison de retraite</b>.
          </p>
          <p className="mb-5">
            Ce projet, développé en équipe de 4 sur un semestre, avait pour
            objectif de mettre en pratique nos connaissances en{" "}
            <b>développement web</b> ainsi qu'en <b>base de données avec SQL</b>
            .
          </p>
          <p className="mb-2 underline">
            Voici une courte description du projet :
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-5">
            <li>
              Les seniors peuvent <b>communiquer</b> entre eux à travers une{" "}
              <b>messagerie classique</b>, comme Messenger ou WhatsApp.
            </li>
            <li>
              Ils peuvent aussi accéder à un <b>agenda</b> qui leur permet de{" "}
              <b>s'inscrire aux événements de l'EHPAD</b>. Une fois inscrits,
              les événements sont <b>placés dans leur agenda personnel</b>.
            </li>
            <li>
              Ils ont la possibilité de <b>créer leurs propres événements</b>{" "}
              qui seront aussi afficher dans leur agenda perso.
            </li>
            <li>
              Sur la <b>page profil</b>, ils peuvent{" "}
              <b>modifier leur photo de profil</b>, ainsi que d'autres{" "}
              <b>informations personnelles</b> (numéro de téléphone, nom,
              prénom, etc).
            </li>
            <li>
              Un <b>administrateur</b> peut{" "}
              <b>créer et supprimer les événements</b> de l'EHPAD où les seniors
              pourront s'inscrire par la suite.
            </li>
            <li>
              L'administrateur est également responsable de la{" "}
              <b>création des comptes utilisateurs</b>.
            </li>
          </ul>
          <p className="mb-2">
            Le projet consiste à développer cette{" "}
            <b>plateforme de messagerie</b> pour seniors. Notre mission est d'
            <b>analyser les besoins</b> des utilisateurs (les seniors) et de les{" "}
            <b>implémenter dans le site web</b>.
            <br /> Pour cela, nous avons réalisé un <b>tableau RACI</b> afin
            d'établir les <b>rôles de chacun</b> dans le projet. Puis avant de
            commencer à coder, les membres de l'équipe en charge du{" "}
            <b>front-end</b> ont réalisé une maquette du site sur <b>Figma</b>{" "}
            tandis que les membres s'occupant du <b>back-end</b> ont réalisé la
            base de données avec d'abord un{" "}
            <b>MCD (modèle conceptuel de données)</b> puis en <b>SQL</b> pour
            l'executer avec PostgreSQL.
          </p>
          <p className="mb-2">
            Dans un second temps, notre objectif est de{" "}
            <b>vérifier que tout fonctionne correctement</b> en réalisant un{" "}
            <b>cahier de tests</b>.
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
        </div>
      </main>

      <hr className="mx-5 mt-5 xl:mx-30 xl:mt-10" />

      <footer className="flex mx-5 pb-2 sm:py-3 xl:mx-30 justify-between font-archivo">
        <p className="pt-2 text-[0.6875rem] max-sm:text-[0.5625rem]">
          made with ❤️ by Nolann
        </p>
        <p className="pt-2 text-[0.6875rem] max-sm:text-[0.5625rem]">
          SeniorChat
        </p>
      </footer>
    </>
  );
}
