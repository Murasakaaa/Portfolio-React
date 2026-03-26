import RedirectBtn from "../../components/shared/RedirectBtn";
import { IconMailForward, IconSchool } from "@tabler/icons-react";

export const ContactSection = () => {
  return (
    <section style={{ width: "100%" }}>
      <h2 className="text-7xl font-schabo">Mon profil vous intéresse ?</h2>
      <div className="flex w-full justify-around py-20 max-sm:flex-col max-sm:gap-8 max-sm:py-10">
        <RedirectBtn
          icon={
            <IconSchool
              size={48}
              stroke={1.5}
              className="text-black group-hover:text-white transition-colors duration-200"
            />
          }
          path="/formations"
          text="Voir mon parcours académique"
        />
        <RedirectBtn
          icon={
            <IconMailForward
              size={48}
              stroke={1.5}
              className="text-black group-hover:text-white transition-colors duration-200"
            />
          }
          path="/contact"
          text="Contactez-moi"
        />
      </div>
    </section>
  );
};
