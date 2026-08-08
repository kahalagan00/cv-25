"use client";

import Link from "next/link";
// import ThemeMenu from "./ThemeMenu";
import { Rubik } from "next/font/google";
import { useLinkContext } from "../contexts/useLink";
import { FaBuilding, FaPhone, FaQuestion, FaUser } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";

const rubik = Rubik({ weight: "400", subsets: ["latin"] });
const rubikBold = Rubik({ weight: "700", subsets: ["latin"] });

// Order of the underlined nav items; drives the sliding underline's position.
const navOrder = ["home", "about", "projects", "resources"];

const Header: React.FC = () => {
  const { currentLink, setCurrentLink } = useLinkContext();
  const activeIndex = navOrder.indexOf(currentLink);

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
      <div className="relative flex h-full gap-x-8">
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
        </div>

        {/* Single underline that slides between items. Each item is w-28 (7rem)
            with a gap-x-8 (2rem), so the step between centers is 9rem. */}
        <div
          className="pointer-events-none absolute -bottom-1 left-0 h-2 w-10 rounded-full bg-fuchsia-600 transition-[transform,opacity] duration-300 ease-out motion-reduce:transition-none"
          style={{
            transform: `translateX(calc(${Math.max(activeIndex, 0)} * 9rem + 3.5rem - 50%))`,
            opacity: activeIndex === -1 ? 0 : 1,
          }}
        />
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
          className={`${rubikBold.className} mr-4 rounded-full bg-violet-900 px-4 py-4 text-lg hover:bg-violet-800 lg:hidden`}
        >
          <FaPhone />
        </Link>
      </div>
    </div>
  );
};

export default Header;
