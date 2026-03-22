import { IconX, IconBrandGithubFilled } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export default function Blackjack() {
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
            src="/projects_illu/bj_project/bj_illu1.png"
            alt="Illustration 1"
            className="w-full object-cover"
          />
          <img
            src="/projects_illu/bj_project/bj_illu2.png"
            alt="Illustration 2"
            className="w-full object-cover"
          />
        </div>

        <div className="font-archivo text-[1rem] max-sm:text-[0.875rem] flex-3/7">
          <div className="flex justify-between gap-10 mb-2">
            <h1 className="font-bold text-6xl max-sm:text-5xl">
              Jeu du Blackjack en Python
            </h1>
            <div className="my-1 sm:my-3">
              <a
                href="https://github.com/Murasakaaa/Blackjack-en-python"
                target="_blank"
                rel="noreferrer"
              >
                <IconBrandGithubFilled
                  size={32}
                  className="border rounded-[10px] select-none"
                />
              </a>
            </div>
          </div>

          <p>
            Jeu du Blackjack en python <b>simplifiée</b> avec la{" "}
            <b>programmation orientée objet</b>. C'est-à-dire qu'il n'y a pas
            les mécaniques poussées du Blackjack comme le croupier qui doit
            forcément arrêter de piocher quand il tombe sur 17 au total.
          </p>
          <p className="mb-5">
            Ce projet, développé seul sur un semestre, avait pour objectif de
            mettre en pratique ce qu'on avait appris sur le développement
            orientée objet en Python.
          </p>
          <p className="mb-2 underline">
            Voici une courte description du projet :
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-5">
            <li>
              Le programme reprend d'une manière <b>simplifiée</b>, le jeu du
              Blackjack que l'on retrouve dans les casinos. Il est composé de 2
              classes <b>Cartes et Joueur</b> ainsi que d'une boucle principale
              pour le déroulement du jeu utilisant les classes et fonctions.
            </li>
            <li>
              Le programme demande tout d'abord au joueur d'entrer une{" "}
              <b>mise</b> puis il affiche{" "}
              <b>les mains du croupier et du joueur</b> ainsi que le{" "}
              <b>score du joueur</b> et lui demande s'il veut continuer (piocher
              une nouvelle carte) ou s'arrêter.
            </li>
            <li>
              <b>Si le joueur continue</b>, il pioche une nouvelle carte. Selon
              son score on lui redemande s'il veut continuer mais{" "}
              <b>s'il dépasse 21</b>, la partie s'arrête puisqu'il a perdu. Son
              argent est mis à jour et on lui demande s'il veut <b>rejouer</b>.
            </li>
            <li>
              <b>Si le joueur ne continue pas</b>, on révèle la 2e carte du
              croupier et il pioche pour se rapprocher le plus possible de 21
              comme le joueur.
            </li>
            <li>
              Si le joueur à un <b>meilleur score</b> que le croupier ou si le
              croupier <b>dépasse 21</b>, le joueur <b>gagne</b> et son argent
              est mis à jour.
            </li>
            <li>
              Si le joueur décide de <b>rejouer</b>, le jeu recommence en
              gardant son argent. Cependant si le joueur{" "}
              <b>ne veut pas rejouer</b>, le programme est arrêté et l'argent
              n'est pas gardé.
            </li>
          </ul>
          <p className="mb-2">
            Le projet consiste à développer un jeu en Python en utilisant la
            programmation orientée objet (le choix du jeu était libre). Ma
            mission était de développer ce jeu, de faire un rapport en décrivant
            toutes les fonctions et classes du programme (détails sur github)
            puis de faire une sorte de sujet d'examen en créant nous-même les
            exercices (questions de cours, code à trous, etc).
          </p>
          <p className="mb-2">
            Pour ce projet, j'ai seulement utilisé Python avec les modules
            intégrés à ce dernier.
          </p>
          <p>
            Vous pouvez retrouver ce projet sur ma <b>page GitHub</b>{" "}
            <i>(en cliquant sur le logo ci-dessus)</i> où vous trouverez le{" "}
            <b>code source</b> du projet et les détails du code dans le{" "}
            <b>readme</b>.
          </p>
        </div>
      </main>

      <hr className="mx-5 mt-5 xl:mx-30 xl:mt-10" />

      <footer className="flex mx-5 pb-2 sm:py-3 xl:mx-30 justify-between font-archivo">
        <p className="pt-2 text-[0.6875rem] max-sm:text-[0.5625rem]">
          made with ❤️ by Nolann
        </p>
        <p className="pt-2 text-[0.6875rem] max-sm:text-[0.5625rem]">
          Blackjack python
        </p>
      </footer>
    </>
  );
}
