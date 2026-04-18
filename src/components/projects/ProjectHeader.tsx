import { IconX } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export default function ProjectHeader() {
  return (
    <header className="w-full top-0 flex justify-end p-5 z-6 bg-white">
      <Link to="/projets" className="xl:mr-5">
        <IconX size={32} className="max-sm:w-5 max-sm:h-5" />
      </Link>
    </header>
  );
}
