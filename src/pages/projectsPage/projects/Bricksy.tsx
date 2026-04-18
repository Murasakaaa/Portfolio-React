import ProjectHeader from "@/components/projects/ProjectHeader";
import ProjectImageGallery from "@/components/projects/ProjectImageGallery";
import ProjectTitleSection from "@/components/projects/ProjectTitleSection";
import ProjectContentSection from "@/components/projects/ProjectContentSection";

export default function Bricksy() {
  const images = [];

  const description = [];

  const features = [];

  const additionalContent = null;

  return (
    <>
      <ProjectHeader />
      <hr className="mx-5 mb-5 xl:mx-30 xl:mb-10" />

      <main className="grow flex mx-5 gap-12 xl:mx-30 max-[61.875rem]:flex-col-reverse">
        <ProjectImageGallery images={images} />
        <div className="flex-1">
          <ProjectTitleSection
            title="Bricksy"
            githubUrl=""
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
        <p className="pt-2 text-[0.6875rem] max-sm:text-[0.5625rem]">
          Bricksy
        </p>
      </footer>
    </>
  );
}
