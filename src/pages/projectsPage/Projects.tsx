import { Link } from "react-router-dom";
import Tag from "../../components/shared/tags";

export default function Projects() {
  return (
    <main className="font-archivo flex flex-col xl:mx-30 mt-20 mx-10 gap-0 max-sm:gap-5 max-sm:mt-10 max-2xl:gap-0">
      <div>
        <h1 className="font-schabo text-9xl select-none p-0 m-0 max-sm:text-7xl">
          PROJETS
        </h1>
      </div>
      <div className="flex mb-8 2xl:mb-20 2xl:justify-evenly max-2xl:flex-col max-2xl:gap-8">
        <div className="flex 2xl:max-w-171 overflow-hidden max-md:flex-col max-xl:gap-2 max-md:items-center">
          {/* fait en sorte que sur le hover la photo soit zoomée mais ne sorte pas de sa case */}
          <div className="w-85.5 h-85.5 overflow-hidden shrink-0 aspect-square max-md:w-full max-md:aspect-square">
            <Link to="/projets/yams">
              <img
                src="/projects_illu/projects_cards/yams_card.jpg"
                alt="Yahtzee game image"
                className="w-full h-full object-cover transition duration-300 hover:scale-110"
              />
            </Link>
          </div>

          {/* description du projet */}
          <div className="xl:ml-5 flex flex-col">
            {/* titre */}
            <Link to="/projets/yams">
              <h2 className="font-bold text-5xl max-md:text-3xl">
                Yahtzee (ou Yam's) en Java
              </h2>
            </Link>
            {/* courte description */}
            <p className="text-xl max-md:text-[0.875rem]">
              Jeu de Yahtzee (ou Yam's) en Java, jouable entièrement via la
              ligne de commande.
            </p>

            {/* tags */}
            <div className="flex flex-wrap justify-start mt-5 font-archivo gap-2 select-none">
              <Tag text={"Java"} />
            </div>
          </div>
        </div>

        <div className="flex 2xl:max-w-171 overflow-hidden max-md:flex-col max-xl:gap-2 max-md:items-center">
          {/* fait en sorte que sur le hover la photo soit zoomée mais ne sorte pas de sa case */}
          <div className="w-85.5 h-85.5 overflow-hidden shrink-0 aspect-square max-md:w-full max-md:aspect-square">
            <Link to="/projets/seniorchat">
              <img
                src="/projects_illu/projects_cards/s_chat_card.png"
                alt="senior chat"
                className="w-full h-full object-cover transition duration-300 hover:scale-110"
              />
            </Link>
          </div>

          {/* description du projet */}
          <div className="xl:ml-5 flex flex-col">
            {/* titre */}
            <Link to="/projets/seniorchat">
              <h2 className="font-bold text-5xl max-md:text-3xl">SeniorChat</h2>
            </Link>
            {/* courte description */}
            <p className="text-xl max-md:text-[0.875rem]">
              Plateforme de messagerie entre séniors au sein d'une maison de
              retraite.
            </p>

            {/* tags */}
            <div className="flex flex-wrap justify-start mt-5 font-archivo gap-2 select-none">
              <Tag text="HTML" />
              <Tag text="CSS" />
              <Tag text="PHP" />
              <Tag text="PostgreSQL" />
              <Tag text="Figma" />
            </div>
          </div>
        </div>
      </div>
      {/* ligne 2 des projets */}
      <div className="flex mb-20 xl:justify-evenly max-2xl:flex-col max-2xl:gap-8">
        <div className="flex 2xl:max-w-171 overflow-hidden max-md:flex-col max-xl:gap-2 max-md:items-center">
          {/* fait en sorte que sur le hover la photo soit zoomée mais ne sorte pas de sa case */}
          <div className="w-85.5 h-85.5 overflow-hidden shrink-0 aspect-square max-md:w-full max-md:aspect-square">
            <Link to="/projets/unesco">
              <img
                src="/projects_illu/projects_cards/unesco_card.jpg"
                alt="Projet UNESCO image"
                className="w-full h-full object-cover transition duration-300 hover:scale-110"
              />
            </Link>
          </div>
          {/* description du projet */}
          <div className="xl:ml-5 flex flex-col">
            {/* titre */}
            <Link to="/projets/unesco">
              <h2 className="font-bold text-5xl max-md:text-3xl">
                Projet UNESCO
              </h2>
            </Link>
            {/* courte description */}
            <p className="text-xl max-md:text-[0.875rem]">
              Site web sur Kyoto et son patrimoine classé au patrimoine mondial
              de l'UNESCO.
            </p>
            {/* tags */}
            <div className="flex flex-wrap justify-start mt-5 font-archivo gap-2 select-none">
              <Tag text="HTML" />
              <Tag text="CSS" />
              <Tag text="PHP" />
              <Tag text="PostgreSQL" />
              <Tag text="Figma" />
            </div>
          </div>
        </div>

        <div className="flex 2xl:max-w-171 overflow-hidden max-md:flex-col max-xl:gap-2 max-md:items-center">
          {/* fait en sorte que sur le hover la photo soit zoomée mais ne sorte pas de sa case */}
          <div className="w-85.5 h-85.5 overflow-hidden shrink-0 aspect-square max-md:w-full max-md:aspect-square">
            <Link to="/projets/blackjack">
              <img
                src="/projects_illu/projects_cards/bj_card.jpg"
                alt="Blackjack game image"
                className="w-full h-full object-cover transition duration-300 hover:scale-110"
              />
            </Link>
          </div>
          {/* description du projet */}
          <div className="xl:ml-5 flex flex-col">
            {/* titre */}
            <Link to="/projets/blackjack">
              <h2 className="font-archivo font-bold text-5xl max-md:text-3xl">
                Blackjack en Python
              </h2>
            </Link>
            {/* courte description */}
            <p className="font-archivo text-xl max-md:text-[0.875rem]">
              Jeu du Blackjack en Python, jouable entièrement via la ligne de
              commande.
            </p>
            {/* tags */}
            <div className="flex flex-wrap justify-start mt-5 font-archivo gap-2 select-none">
              <Tag text="Python" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
