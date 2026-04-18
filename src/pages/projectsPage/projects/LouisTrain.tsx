import ProjectHeader from "@/components/projects/ProjectHeader";
import ProjectImageGallery from "@/components/projects/ProjectImageGallery";
import ProjectTitleSection from "@/components/projects/ProjectTitleSection";
import ProjectContentSection from "@/components/projects/ProjectContentSection";

export default function LouisTrain() {
	const images = [
		{
			src: "/projects_illu/LTrain_project/LTrain_illu1.png",
			alt: "Illustration 1",
		},
		{
			src: "/projects_illu/LTrain_project/LTrain_illu2.png",
			alt: "Illustration 2",
		},
		{
			src: "/projects_illu/LTrain_project/LTrain_illu3.png",
			alt: "Illustration 3",
		},
		{
			src: "/projects_illu/LTrain_project/LTrain_illu4.png",
			alt: "Illustration 4",
		},
	];

	const description = [
		<>
			Il s'agit d'une{" "}
			<b>plateforme moderne de réservation de trains en ligne</b>, conçue pour
			offrir une expérience utilisateur fluide et efficace.
		</>,
		<>
			Ce projet, développé en équipe de 4 sur un semestre, avait pour objectif
			d'utiliser <b>MongoDB</b> afin de gérer les données de réservation de
			manière efficace et scalable avec <b>mongoose</b> pour la liaison entre le
			front-end et la base de données.
		</>,
	];

	const features = [
		<>
			Les utilisateurs peuvent rechercher des trains disponibles en fonction de
			leurs critères de voyage, tels que la date, la gare de départ et la gare
			d'arrivée.
		</>,
		<>
			Les utilisateurs choisir parmi les différentes options que les trains
			offrent, en fonction de leurs préférences et de leur budget.
		</>,
		<>
			Une fois qu'un utilisateur a sélectionné un train, il peut procéder à la
			réservation en fournissant les informations nécessaires et en effectuant
			le paiement de manière sécurisée.
		</>,
		<>
			L'utilisateur peut aussi gérer son panier en ajoutant ou supprimant des
			billets avant de finaliser sa réservation.
		</>,
		<>
			Les utilisateurs recoivent une confirmation de réservation par e-mail,
			contenant les billets et la facture.
		</>,
	];

	const additionalContent = (
		<>
			<p className="mb-2">
				Le projet consiste à développer cette{" "}
				<b>plateforme de réservation de trains</b> pour particuliers et
				professionnels. Notre mission est d'
				<b>analyser les besoins</b> des utilisateurs (les clients) et de les{" "}
				<b>implémenter dans le site web</b>.
				<br /> Pour cela, nous avons réalisé un <b>tableau RACI</b> afin
				d'établir les <b>rôles de chacun</b> dans le projet. Puis avant de
				commencer à coder, nous avons réalisé une maquette du site web pour
				définir son apparence et son ergonomie. Puis nous avons implémenté les
				différentes fonctionnalités du site web. Nous avons choisi NEXT.js car
				il nous permet de n'avoir qu'un seul projet pour le front-end et le
				back-end, ce qui facilite la communication entre les deux. Nous avons
				utilisé MongoDB pour la base de données car elle est la seule contrainte
				à notre projet.
			</p>
			<p className="mb-2">
				Dans un second temps, notre objectif est de{" "}
				<b>vérifier que tout fonctionne correctement</b> en réalisant un{" "}
				<b>cahier de tests</b> dans lequel nous détaillons les scénarios et les
				itérations des différents tests effectués.
			</p>
			<p className="mb-2">
				Pour ce projet, nous avons utilisé <b>NEXT.js</b>,{" "}
				<b>JavaScript/TypeScript</b> et <b>Mongoose</b>, ainsi que{" "}
				<b>MongoDB</b> pour la base de données. Le site est donc{" "}
				<b>construit dynamiquement</b> selon le contenu des{" "}
				<b>documents de la base de données</b>.
			</p>
			<p>
				Vous pouvez retrouver ce projet sur ma <b>page GitHub</b>{" "}
				<i>(en cliquant sur le logo ci-dessus)</i> où vous trouverez le{" "}
				<b>code source</b> du projet.
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
					<ProjectTitleSection title="LouisTrain" githubUrl="https://github.com/Murasakaaa/LouisTrain" />
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
				<p className="pt-2 text-[0.6875rem] max-sm:text-[0.5625rem]">
					LouisTrain
				</p>
			</footer>
		</>
	);
}
