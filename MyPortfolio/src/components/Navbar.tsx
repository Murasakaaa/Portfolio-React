
import { IconMenu2 } from "@tabler/icons-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 flex justify-between items-center p-3 mx-4 z-6 bg-white">
      <p className="text-2xl font-archivo ml-3 select-none">Nolann Maunier.</p>

      {/* div pour le menu et son bouton*/}
      <div className="relative m-0 xl:mr-10">
        {/* bouton menu */}
        <label className="text-3xl cursor-pointer z-20 relative select-none">
          <IconMenu2 size={32} strokeLinecap="square"/>
        </label>

        {/* menu qui apparait quand on clique sur le bouton prévu à cet effet */}
        <div className="fixed top-0 right-0 w-100 bg-white h-screen p-10 transform translate-x-full transition-transform duration-300 peer-checked:translate-x-0 z-19 max-sm:w-87.5">
          <ul className="space-y-6 text-xl mt-10">
            <li>
              <a
                href="./mainfiles/academic-background/education-timeline.html"
                className="block select-none hover:underline"
              >
                Formations
              </a>
            </li>
            <li>
              <a
                href="./mainfiles/projects-pages/main.html"
                className="block select-none hover:underline"
              >
                Projets
              </a>
            </li>
            <li>
              <a
                href="./mainfiles/contact/contact.html"
                className="block select-none hover:underline"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
