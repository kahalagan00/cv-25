"use client";

import Link from "next/link";
// import ThemeMenu from "./ThemeMenu";
import { Rubik } from "next/font/google";
import { useLinkContext } from "../contexts/useLink";
import { FaBuilding, FaPhone, FaQuestion, FaUser } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";

const rubik = Rubik({ weight: "400", subsets: ["latin"] });
const rubikBold = Rubik({ weight: "700", subsets: ["latin"] });

const Header: React.FC = () => {
  const { currentLink, setCurrentLink } = useLinkContext();

  {
    /* Home | Projects | About | Resources | Contact | Theme */
  }
  return (
    <div className="mx-auto mt-4 flex h-20 max-w-screen-xl items-center justify-start gap-x-8 rounded-full border-2 border-violet-800 bg-indigo-950 pl-8 text-white">
      <div className="font-clashregular text-3xl font-semibold">
        <Link
          onClick={() => setCurrentLink("home")}
          href="/"
          className="hidden text-xl lg:block xl:text-3xl"
        >
          Joshmar Morales
        </Link>
        <Link
          onClick={() => setCurrentLink("home")}
          href="/"
          className="text-xl lg:hidden"
        >
          JM
        </Link>
      </div>
      <div className="relative h-full w-28">
        <Link
          onClick={() => setCurrentLink("home")}
          href="/"
          className={`${rubik.className} absolute left-1/2 top-6 hidden -translate-x-1/2 transform text-lg lg:block`}
        >
          Home
        </Link>
        <Link
          title="Go back to homepage"
          onClick={() => setCurrentLink("home")}
          href="/"
          className={`${rubik.className} absolute left-1/2 top-6 -translate-x-1/2 transform text-lg lg:hidden`}
        >
          <FaHouse />
        </Link>
        {currentLink === "home" && (
          <div className="absolute -bottom-1 left-1/2 h-2 w-10 -translate-x-1/2 transform rounded-full bg-fuchsia-600"></div>
        )}
      </div>
      <div className="relative h-full w-28">
        <Link
          onClick={() => setCurrentLink("projects")}
          href="/projects"
          className={`${rubik.className} absolute left-1/2 top-6 hidden -translate-x-1/2 transform text-lg lg:block`}
        >
          Projects
        </Link>
        <Link
          title="See projects"
          onClick={() => setCurrentLink("projects")}
          href="/projects"
          className={`${rubik.className} absolute left-1/2 top-6 -translate-x-1/2 transform text-lg lg:hidden`}
        >
          <FaBuilding />
        </Link>
        {currentLink === "projects" && (
          <div className="absolute -bottom-1 left-1/2 h-2 w-10 -translate-x-1/2 transform rounded-full bg-fuchsia-600"></div>
        )}
      </div>

      <div className="relative h-full w-28">
        <Link
          onClick={() => setCurrentLink("about")}
          href="/about"
          className={`${rubik.className} absolute left-1/2 top-6 hidden -translate-x-1/2 transform text-lg lg:block`}
        >
          About
        </Link>

        <Link
          title="See more about me"
          onClick={() => setCurrentLink("about")}
          href="/about"
          className={`${rubik.className} absolute left-1/2 top-6 -translate-x-1/2 transform text-lg lg:hidden`}
        >
          <FaUser />
        </Link>
        {currentLink === "about" && (
          <div className="absolute -bottom-1 left-1/2 h-2 w-10 -translate-x-1/2 transform rounded-full bg-fuchsia-600"></div>
        )}
      </div>

      <div className="relative h-full w-28">
        <Link
          onClick={() => setCurrentLink("resources")}
          href="/resources"
          className={`${rubik.className} absolute left-1/2 top-6 hidden -translate-x-1/2 transform text-lg lg:block`}
        >
          Resources
        </Link>
        <Link
          title="Check additional resources"
          onClick={() => setCurrentLink("resources")}
          href="/resources"
          className={`${rubik.className} absolute left-1/2 top-6 -translate-x-1/2 transform text-lg lg:hidden`}
        >
          <FaQuestion />
        </Link>
        {currentLink === "resources" && (
          <div className="absolute -bottom-1 left-1/2 h-2 w-10 -translate-x-1/2 transform rounded-full bg-fuchsia-600"></div>
        )}
      </div>

      {/* <div>
        <ThemeMenu />
      </div> */}
      <div className="ml-auto flex h-full w-48 items-center justify-center">
        <Link
          onClick={() => setCurrentLink("contact")}
          href="/contact"
          className={`${rubikBold.className} ml-8 hidden rounded-full bg-violet-900 px-9 py-4 text-lg hover:bg-violet-800 lg:block`}
        >
          Contact
        </Link>

        <Link
          onClick={() => setCurrentLink("contact")}
          href="/contact"
          className={`${rubikBold.className} rounded-full bg-violet-900 px-4 py-4 text-lg hover:bg-violet-800 lg:hidden`}
        >
          <FaPhone />
        </Link>
      </div>
    </div>
  );
};

export default Header;
