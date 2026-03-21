import type { ReactNode } from "react";
import { Link } from "react-router-dom";

export default function RedirectBtn(props: {
  icon: ReactNode;
  path: string;
  text: string;
}) {
  return (
    <div className="font-archivo flex justify-center">
      <Link
        to={props.path}
        className="border-2 rounded-[0.313rem] w-fit flex items-center gap-1 px-2 tracking-widest cursor-pointer bg-white hover:bg-black transition-colors duration-300 group max-sm:tracking-normal"
      >
        <p className="font-archivo text-5xl text-black group-hover:text-white transition-colors duration-200 max-sm:text-xl">
          {props.text}
        </p>
        {props.icon}
      </Link>
    </div>
  );
}
