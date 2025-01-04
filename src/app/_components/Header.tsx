"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeMenu from "./ThemeMenu";
import { Rubik } from "next/font/google";

const rubik = Rubik({ weight: "400", subsets: ["latin"] });
const rubikBold = Rubik({ weight: "700", subsets: ["latin"] });

const Header: React.FC = () => {
  const [linkSelected, setLinkSelected] = useState("home");

  {
    /* Home | Projects | About | Resources | Contact | Theme */
  }
  return (
    <div className="mx-auto mt-4 flex h-20 max-w-screen-xl items-center justify-start gap-x-8 rounded-full border-2 border-violet-800 bg-indigo-950 pl-8 text-white">
      <div className="font-clashregular text-3xl font-semibold">
        Joshmar Morales
      </div>
      <div className="relative h-full w-28">
        <Link
          onClick={() => setLinkSelected("home")}
          href="/"
          className={`${rubik.className} absolute left-1/2 top-6 -translate-x-1/2 transform text-lg`}
        >
          Home
        </Link>
        {linkSelected === "home" && (
          <div className="absolute -bottom-1 left-1/2 h-2 w-10 -translate-x-1/2 transform rounded-full bg-fuchsia-600"></div>
        )}
      </div>
      <div className="relative h-full w-28">
        <Link
          onClick={() => setLinkSelected("projects")}
          href="/projects"
          className={`${rubik.className} absolute left-1/2 top-6 -translate-x-1/2 transform text-lg`}
        >
          Projects
        </Link>
        {linkSelected === "projects" && (
          <div className="absolute -bottom-1 left-1/2 h-2 w-10 -translate-x-1/2 transform rounded-full bg-fuchsia-600"></div>
        )}
      </div>

      <div className="relative h-full w-28">
        <Link
          onClick={() => setLinkSelected("about")}
          href="/about"
          className={`${rubik.className} absolute left-1/2 top-6 -translate-x-1/2 transform text-lg`}
        >
          About
        </Link>
        {linkSelected === "about" && (
          <div className="absolute -bottom-1 left-1/2 h-2 w-10 -translate-x-1/2 transform rounded-full bg-fuchsia-600"></div>
        )}
      </div>

      <div className="relative h-full w-28">
        <Link
          onClick={() => setLinkSelected("resources")}
          href="/resources"
          className={`${rubik.className} absolute left-1/2 top-6 -translate-x-1/2 transform text-lg`}
        >
          Resources
        </Link>
        {linkSelected === "resources" && (
          <div className="absolute -bottom-1 left-1/2 h-2 w-10 -translate-x-1/2 transform rounded-full bg-fuchsia-600"></div>
        )}
      </div>

      <div>
        <ThemeMenu />
      </div>
      <div className="ml-auto flex h-full w-48 items-center justify-center">
        <Link
          onClick={() => setLinkSelected("contact")}
          href="/contact"
          className={`${rubikBold.className} rounded-full bg-violet-900 px-9 py-4 text-lg hover:bg-violet-800`}
        >
          Contact me
        </Link>
      </div>
    </div>
  );
};

export default Header;
