export default function Projects() {
  return (
    <main className="font-archivo flex flex-col xl:mx-30 mt-20 mx-10 gap-10 max-sm:gap-5 max-sm:mt-10">
      <div>
        <h1 className="font-schabo text-9xl select-none p-0 m-0 max-sm:text-7xl">
          PROJETS
        </h1>
      </div>
      <div className="flex mb-8 2xl:mb-20 2xl:justify-evenly max-2xl:flex-col max-2xl:gap-8">
        <div className="flex 2xl:max-w-171 overflow-hidden max-md:flex-col max-xl:gap-2 max-md:items-center">
          {/* fait en sorte que sur le hover la photo soit zoomée mais ne sorte pas de sa case */}
          <div className="w-85.5 h-85.5 overflow-hidden shrink-0 aspect-square max-md:w-full max-md:aspect-square">
            <a href="./projects/yams.html">
              <img
                src="/projects_illu/projects_cards/yams_card.jpg"
                alt="Yahtzee game image"
                className="w-full h-full object-cover transition duration-300 hover:scale-110"
              />
            </a>
          </div>

          {/* description du projet */}
          <div className="xl:ml-5 flex flex-col">
            {/* titre */}
            <a href="./projects/yams.html">
              <h2 className="font-bold text-5xl max-md:text-3xl">
                Yahtzee (ou Yam's) en Java
              </h2>
            </a>
            {/* courte description */}
            <p className="text-xl max-md:text-[0.875rem]">
              Jeu de Yahtzee (ou Yam's) en Java, jouable entièrement via la
              ligne de commande.
            </p>

            {/* tags */}
            <div className="flex flex-wrap justify-start mt-5 font-archivo gap-2 select-none">
              <span className="bg-gray-500/60 text-white rounded-full px-3 py-1 text-sm flex items-center space-x-1.5">
                <img
                  src="../images/icons/icons8-logo-java-coffee-cup-32.png"
                  alt="Java"
                  className="w-5 h-5"
                />
                <span>Java</span>
              </span>
            </div>
          </div>
        </div>

        <div className="flex 2xl:max-w-171 overflow-hidden max-md:flex-col max-xl:gap-2 max-md:items-center">
          {/* fait en sorte que sur le hover la photo soit zoomée mais ne sorte pas de sa case */}
          <div className="w-85.5 h-85.5 overflow-hidden shrink-0 aspect-square max-md:w-full max-md:aspect-square">
            <a href="./projects/seniorchat.html">
              <img
                src="/projects_illu/projects_cards/s_chat_card.png"
                alt="senior chat"
                className="w-full h-full object-cover transition duration-300 hover:scale-110"
              />
            </a>
          </div>

          {/* description du projet */}
          <div className="xl:ml-5 flex flex-col">
            {/* titre */}
            <a href="./projects/seniorchat.html">
              <h2 className="font-bold text-5xl max-md:text-3xl">SeniorChat</h2>
            </a>
            {/* courte description */}
            <p className="text-xl max-md:text-[0.875rem]">
              Plateforme de messagerie entre séniors au sein d'une maison de
              retraite.
            </p>

            {/* tags */}
            <div className="flex flex-wrap justify-start mt-5 font-archivo gap-2 select-none">
              <span className="bg-gray-500/60 text-white rounded-full px-3 py-1 text-sm flex items-center space-x-1.5">
                <img
                  src="../images/icons/icons8-html-5-32.png"
                  alt="Java"
                  className="w-5 h-5"
                />
                <span>HTML</span>
              </span>
              <span className="bg-gray-500/60 text-white rounded-full px-3 py-1 text-sm flex items-center space-x-1.5">
                <img
                  src="../images/icons/icons8-css3-32.png"
                  alt="Java"
                  className="w-5 h-5"
                />
                <span>CSS</span>
              </span>
              <span className="bg-gray-500/60 text-white rounded-full px-3 py-1 text-sm flex items-center space-x-1.5">
                <img
                  src="../images/icons/icons8-php-32.png"
                  alt="Java"
                  className="w-5 h-5"
                />
                <span>PHP</span>
              </span>
              <span className="bg-gray-500/60 text-white rounded-full px-3 py-1 text-sm flex items-center space-x-1.5">
                <img
                  src="../images/icons/icons8-postgresql-32.png"
                  alt="Java"
                  className="w-5 h-5"
                />
                <span>PostgreSQL</span>
              </span>
              <span className="bg-gray-500/60 text-white rounded-full px-3 py-1 text-sm flex items-center space-x-1.5">
                <img
                  src="../images/icons/icons8-figma-32.png"
                  alt="Java"
                  className="w-5 h-5"
                />
                <span>Figma</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* ligne 2 des projets */}
      <div className="flex mb-20 xl:justify-evenly max-2xl:flex-col max-2xl:gap-8">
        <div className="flex 2xl:max-w-171 overflow-hidden max-md:flex-col max-xl:gap-2 max-md:items-center">
          {/* fait en sorte que sur le hover la photo soit zoomée mais ne sorte pas de sa case */}
          <div className="w-85.5 h-85.5 overflow-hidden shrink-0 aspect-square max-md:w-full max-md:aspect-square">
            <a href="./projects/projet-unesco.html">
              <img
                src="/projects_illu/projects_cards/unesco_card.jpg"
                alt="Projet UNESCO image"
                className="w-full h-full object-cover transition duration-300 hover:scale-110"
              />
            </a>
          </div>
          {/* description du projet */}
          <div className="xl:ml-5 flex flex-col">
            {/* titre */}
            <a href="./projects/projet-unesco.html">
              <h2 className="font-bold text-5xl max-md:text-3xl">
                Projet UNESCO
              </h2>
            </a>
            {/* courte description */}
            <p className="text-xl max-md:text-[0.875rem]">
              Site web sur Kyoto et son patrimoine classé au patrimoine mondial
              de l'UNESCO.
            </p>
            {/* tags */}
            <div className="flex flex-wrap justify-start mt-5 font-archivo gap-2 select-none">
              <span className="bg-gray-500/60 text-white rounded-full px-3 py-1 text-sm flex items-center space-x-1.5">
                <img
                  src="../images/icons/icons8-html-5-32.png"
                  alt="HTML"
                  className="w-5 h-5"
                />
                <span>HTML</span>
              </span>
              <span className="bg-gray-500/60 text-white rounded-full px-3 py-1 text-sm flex items-center space-x-1.5">
                <img
                  src="../images/icons/icons8-css3-32.png"
                  alt="CSS"
                  className="w-5 h-5"
                />
                <span>CSS</span>
              </span>
              <span className="bg-gray-500/60 text-white rounded-full px-3 py-1 text-sm flex items-center space-x-1.5">
                <img
                  src="../images/icons/icons8-php-32.png"
                  alt="PHP"
                  className="w-5 h-5"
                />
                <span>PHP</span>
              </span>
              <span className="bg-gray-500/60 text-white rounded-full px-3 py-1 text-sm flex items-center space-x-1.5">
                <img
                  src="../images/icons/icons8-postgresql-32.png"
                  alt="PostgreSQL"
                  className="w-5 h-5"
                />
                <span>PostgreSQL</span>
              </span>
              <span className="bg-gray-500/60 text-white rounded-full px-3 py-1 text-sm flex items-center space-x-1.5">
                <img
                  src="../images/icons/icons8-figma-32.png"
                  alt="Figma"
                  className="w-5 h-5"
                />
                <span>Figma</span>
              </span>
            </div>
          </div>
        </div>

        <div className="flex 2xl:max-w-171 overflow-hidden max-md:flex-col max-xl:gap-2 max-md:items-center">
          {/* fait en sorte que sur le hover la photo soit zoomée mais ne sorte pas de sa case */}
          <div className="w-85.5 h-85.5 overflow-hidden shrink-0 aspect-square max-md:w-full max-md:aspect-square">
            <a href="./projects/blackjack-python.html">
              <img
                src="/projects_illu/projects_cards/bj_card.jpg"
                alt="Blackjack game image"
                className="w-full h-full object-cover transition duration-300 hover:scale-110"
              />
            </a>
          </div>
          {/* description du projet */}
          <div className="xl:ml-5 flex flex-col">
            {/* titre */}
            <a href="./projects/blackjack-python.html">
              <h2 className="font-archivo font-bold text-5xl max-md:text-3xl">
                Blackjack en Python
              </h2>
            </a>
            {/* courte description */}
            <p className="font-archivo text-xl max-md:text-[0.875rem]">
              Jeu du Blackjack en Python, jouable entièrement via la ligne de
              commande.
            </p>
            {/* tags */}
            <div className="flex flex-wrap justify-start mt-5 font-archivo gap-2 select-none">
              <span className="bg-gray-500/60 text-white rounded-full px-3 py-1 text-sm flex items-center space-x-1.5">
                <img
                  src="../images/icons/icons8-python-32.png"
                  alt="Python"
                  className="w-5 h-5"
                />
                <span>Python</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
