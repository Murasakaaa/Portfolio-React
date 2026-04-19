import ProjectHeader from "@/components/projects/ProjectHeader";
import ProjectImageGallery from "@/components/projects/ProjectImageGallery";
import ProjectTitleSection from "@/components/projects/ProjectTitleSection";
import ProjectContentSection from "@/components/projects/ProjectContentSection";

export default function Bricksy() {
	const images = [
		{
			src: "/projects_illu/bricksy_project/bricksy_illu1.png",
			alt: "Illustration 1",
		},
		{
			src: "/projects_illu/bricksy_project/bricksy_illu2.png",
			alt: "Illustration 2",
		},
		{
			src: "/projects_illu/bricksy_project/bricksy_illu3.png",
			alt: "Illustration 3",
		},
		{
			src: "/projects_illu/bricksy_project/bricksy_illu4.png",
			alt: "Illustration 4",
		},
		{
			src: "/projects_illu/bricksy_project/bricksy_illu5.png",
			alt: "Illustration 5",
		},
		{
			src: "/projects_illu/bricksy_project/bricksy_illu6.png",
			alt: "Illustration 6",
		},
	];

	const description = [
		<>
			Il s'agit d'un{" "}
			<b>site de e-commerce vendant des mosaïques de briques LEGO</b> et d'un{" "}
			<b>site de jeux</b> permettant une fidélisation des clients par
			gamification.
		</>,
		<>
			Ce projet, développé en équipe de 5 sur 2 semestres, avait pour objectif
			d'utiliser plein de langages différents afin d'obtenir à la fin un projet
			complet avec un back-end, un front-end et une base de données.
		</>,
	];

	const features = [
		<>
			Les clients peuvent <b>uploader</b> une image de leur choix sur le site de
			e-commerce. Le site <b>génère</b> ensuite une mosaïque de briques LEGO à
			partir de cette image, en essayant d'avoir les couleurs les plus proches
			de l'image originale.
		</>,
		<>
			Les clients peuvent <b>redimensionner</b> leur image et choisir la taille
			de leur mosaïque (48x48, 96x96, etc.) pour obtenir un résultat plus ou
			moins détaillé.
		</>,
		<>
			Les clients peuvent ensuite <b>choisir un des pavages possibles</b> pour
			leur mosaïque (pavage avec prix le plus bas, pavage au pixel près, etc.)
			et <b>l'ajouter à leur panier</b> pour ensuite finaliser leur achat.
		</>,
		<>
			Les clients peuvent aussi <b>créer un compte</b> sur le site de e-commerce
			pour pouvoir suivre leurs commandes et accéder à leur historique d'achats
			avec un athentification à deux facteurs par mail ou par application
			d'authentification.
		</>,
		<>
			Le site de jeux permet aux clients de <b>gagner des points de fidélité</b>{" "}
			en jouant à <b>2 jeux différents</b> : un jeu de puzzle où il devra
			reconstituer une mosaïque de briques à partir de briques mélangées et de
			l'image du pavage, et un autre jeu de puzzle mais dans celui-ci le client
			devra placer des briques sur une grille afin de réaliser des lignes un peu
			comme au Tetris.
		</>,
		<>
			Les clients peuvent aussi <b>installer l'application mobile</b> des deux sites
			pour pouvoir accéder à leur compte et jouer aux jeux/commander des
			mosaïques depuis leur téléphone.
		</>,
	];

	const additionalContent = (
		<>
			<p className="mb-2">
				Le projet consiste à développer ce <b>site de e-commerce</b> en
				utilisant plein de langages différents (Java et C pour le back-end,
				HTML/CSS/PHP pour le front-end, MySQL pour la base de données du site de
				vente). Notre mission était de développer les différents modules du
				projet (génération de la mosaïque, pavage, etc.) et de les intégrer tous
				ensemble dans le site web.
				<br /><br />
				Nous devions aussi développer un <b>site de jeux</b> pour fidéliser les
				clients en leur permettant de gagner des points de fidélité en jouant à
				des jeux avec pour but de pratiquer <b>React</b>. Enfin, Nous avons aussi développé une{" "}
				<b>application mobile</b> pour permettre aux clients d'accéder à leur
				compte et de jouer aux jeux depuis leur téléphone avec pour but de pratiquer le développement mobile sur <b>Android-Studio</b>.
				<br /><br /> Pour cela, nous avons réalisé un <b>tableau RACI</b> afin de
				repartir les différentes tâches entre les membres de l'équipe. Puis
				avant de commencer à coder, nous avons réalisé une maquette du site web
				pour définir son apparence et son ergonomie. Puis nous avons implémenté
				les différentes fonctionnalités du site web.
			</p>
			<p className="mb-2">
				Pour la partie site de e-commerce, nous avons utilisé <b>Java</b> pour
				les appels au C, à la base de données et pour la réduction de taille de
				l'image, <b>HTML/CSS/PHP</b> pour le front-end, ainsi que <b>MySQL</b>{" "}
				pour la base de données. Enfin nous avons utilisé le <b>C</b> pour
				l'algorithme de pavage. Pour fonctionner le site de e-commerce à besoin
				de tous ces différents modules qui communiquent entre eux.
			</p>
			<p>
				Pour la partie site de jeux, nous avons utilisé <b>React</b> pour le
				front-end et <b>Node.js</b> pour le back-end, ainsi que <b>MongoDB</b>{" "}
				pour la base de données.
			</p>
			<p>
				Pour la partie application mobile, nous avons utilisé{" "}
				<b>Android-Studio</b> avec <b>Java</b> pour le développement.
			</p>
			<p className="mb-2"></p>
			<p>
				Vous pouvez retrouver ce projet sur <b>GitHub</b>{" "}
				<i>(en cliquant sur le logo ci-dessus)</i> où vous trouverez le{" "}
				<b>code source</b> du projet. <br />
				<br />
				Vous pouvez aussi accéder au site de e-commerce et au site de jeux en
				cliquant sur les liens suivants : <br />
				<br />
				<a
					href="https://adam.nachnouchi.com/"
					target="_blank"
					rel="noopener noreferrer"
					className="underline hover:text-blue-500"
				>
					Visiter le site de e-commerce
				</a>
				<br />
				<a
					href="https://adam.nachnouchi.com/games"
					target="_blank"
					rel="noopener noreferrer"
					className="underline hover:text-blue-500"
				>
					Visiter le site de jeux
				</a>
			</p>
		</>
	);

	return (
		<>
			<ProjectHeader />
			<hr className="mx-5 mb-5 xl:mx-30 xl:mb-10" />

			<main className="grow flex mx-5 gap-12 xl:mx-30 max-[61.875rem]:flex-col-reverse">
				<ProjectImageGallery images={images} />
				<div className="flex-1">
					<ProjectTitleSection
						title="Bricksy"
						githubUrl="https://github.com/redlinka/Projet-HAVEN"
					/>
					<ProjectContentSection
						title="Voici une courte description du projet :"
						description={description}
						features={features}
						additionalContent={additionalContent}
					/>
				</div>
			</main>

			<hr className="mx-5 mt-5 xl:mx-30 xl:mt-10" />

			<footer className="flex mx-5 pb-2 sm:py-3 xl:mx-30 justify-between font-archivo">
				<p className="pt-2 text-[0.6875rem] max-sm:text-[0.5625rem]">
					made with ❤️ by Nolann
				</p>
				<p className="pt-2 text-[0.6875rem] max-sm:text-[0.5625rem]">Bricksy</p>
			</footer>
		</>
	);
}
