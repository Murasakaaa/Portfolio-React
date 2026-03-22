import { IconX, IconBrandGithubFilled } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export default function Yams() {
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
            src="/projects_illu/yams_project/y_illu1.png"
            alt="Illustration 1"
            className="w-full object-cover"
          />
          <img
            src="/projects_illu/yams_project/y_illu2.png"
            alt="Illustration 2"
            className="w-full object-cover"
          />
          <img
            src="/projects_illu/yams_project/y_illu3.png"
            alt="Illustration 3"
            className="w-full object-cover"
          />
        </div>

        <div className="font-archivo text-[1rem] max-sm:text-[0.875rem] flex-3/7">
          <div className="flex justify-between gap-10 mb-2">
            <h1 className="font-bold text-6xl max-sm:text-5xl">Projet Yam's</h1>
            <div className="my-1 sm:my-3">
              <a
                href="https://github.com/Murasakaaa/Yahtzee-game-java"
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
            Il s'agit d'un jeu de Yahtzee (ou Yam's) en Java, jouable
            entièrement via la ligne de commande.
          </p>
          <p className="mb-5">
            Ce projet, développé en binôme sur un semestre, avait pour objectif
            de mettre en pratique les concepts de la programmation orientée
            objet en Java.
          </p>
          <p className="mb-2 underline">
            Voici une courte description du projet :
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-5">
            <li>
              Une partie se compose de <b>7 manches</b>, avec{" "}
              <b>3 lancers de 5 dés</b> par manche.
            </li>
            <li>
              Le but est de réaliser des{" "}
              <b>combinaisons qui rapportent des points</b> (comme un brelan, un
              carré, etc.) afin d'obtenir le{" "}
              <b>score le plus élevé possible.</b>
            </li>
            <li>
              Pour choisir son action (relancer les dés ou non, choisir une
              combinaison ou en sacrifier une), il suffit de lire dans le
              terminal l'étape actuelle du jeu et d'écrire le numéro qui
              correspond à l'action voulue.
            </li>
            <li>
              La <b>version Duo</b> (multijoueur local) se joue de la même
              manière, mais contre un <b>autre joueur ou une IA</b> qui prend
              ses décisions toute seule, à tour de rôle.
            </li>
            <li>
              Dans cette version du projet, seules les{" "}
              <b>logiques de combinaisons</b> (brelan, carré, etc.) sont
              implémentées pour le moment.
            </li>
            <li>
              Pendant toute la partie, les <b>lancers de dés</b> ainsi que la{" "}
              <b>feuille de score</b> s'affichent dans le terminal, et sont mis
              à jour à chaque tour pour faciliter le suivi du score.
            </li>
          </ul>
          <p className="mb-2">
            Le projet consiste à reprendre le développement d'un jeu de Yam's
            initialement mis en pause pour diverses raisons. Notre mission est
            d'analyser le code existant afin d'identifier les éléments
            manquants, puis de les implémenter pour finaliser le jeu.
          </p>
          <p className="mb-2">
            Puis dans un deuxième temps (en cours de réalisation), notre
            objectif est d'améliorer la version livrée pour le premier rendu
            afin d'ajouter des fonctionnalités ou diverses amélioration. Par
            exemple, nous envisageons d'ajouter : un interface graphique avec
            JavaFX ou des bonus spéciaux.
          </p>
          <p className="mb-2">
            Dans le premier livrable, nous devions confectionner une IA qui joue
            seule. Pour cela, nous avons décider de la rendre la plus
            "intelligente" possible en la codant comme si c'était un humain qui
            jouait. Elle analyse à son tour tous les scores possibles avec les
            dés qu'elle à afin de décider la suite.
            <br /> Quand elle voit qu'elle est proche d'une meilleure
            combinaison, elle relance les dés. Enfin, elle coche la bonne case
            qui lui permet d'avoir le plus de point dans la manche.
          </p>
          <p>
            Vous pouvez retrouver ce projet sur ma <b>page github</b>{" "}
            <i>(en cliquant sur le logo ci-dessus)</i> où vous y retrouverez le{" "}
            <b>code source, une notice d'utilisation</b>, ainsi que les{" "}
            <b>rapports d'avancements du projets.</b>
          </p>
        </div>
      </main>

      <hr className="mx-5 mt-5 xl:mx-30 xl:mt-10" />

      <footer className="flex mx-5 pb-2 sm:py-3 xl:mx-30 justify-between font-archivo">
        <p className="pt-2 text-[0.6875rem] max-sm:text-[0.5625rem]">
          made with ❤️ by Nolann
        </p>
        <p className="pt-2 text-[0.6875rem] max-sm:text-[0.5625rem]">
          Jeu de Yahtzee (ou Yam's) en Java
        </p>
        <p className="pt-2 text-[0.6875rem] max-sm:text-[0.5625rem]">
          Icons by{" "}
          <a
            target="_blank"
            href="https://icones8.fr/icons"
            rel="noreferrer"
            className="underline hover:text-green-700"
          >
            Icons8
          </a>
        </p>
      </footer>
    </>
  );
}
