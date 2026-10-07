"use client";
import { Rubik } from "next/font/google";
import Image from "next/image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { LuArrowUpRight } from "react-icons/lu";
import { DOCUMENT_PATHS, SOCIAL_LINKS } from "../../_utils/constants";

const rubik = Rubik({ subsets: ["latin"] });

const FOCUS_RING =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-400";

const SOCIAL_BUTTON = `${FOCUS_RING} flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white/80 transition-colors hover:bg-white/10 hover:text-white`;

const ProfileSection: React.FC = () => {
  return (
    <>
      <div className="relative z-10 flex w-full flex-col justify-center px-4 pt-16 sm:px-8 lg:w-1/2 lg:pt-0">
        <p
          className={`${rubik.className} mb-6 flex w-fit items-center gap-x-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-light uppercase tracking-widest text-gray-300 sm:text-base`}
        >
          <span aria-hidden className="h-2 w-2 rounded-full bg-fuchsia-500" />
          Software & Data
        </p>
        <h1 className="break-words font-clashsemibold text-[3.5rem] leading-[1.05] tracking-tight text-white sm:text-[6rem] lg:text-[5rem] xl:text-[6.5rem] 2xl:text-[8rem]">
          <span className="block">Joshmar</span>{" "}
          <span className="block bg-gradient-to-r from-indigo-300 via-violet-300 to-fuchsia-400 bg-clip-text pb-2 text-transparent">
            Morales
          </span>
        </h1>

        <p
          className={`${rubik.className} mt-6 max-w-md text-base font-light text-gray-400 sm:text-xl xl:text-2xl`}
        >
          Fullstack and Mobile Engineer in the United States
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href={DOCUMENT_PATHS.resume}
            target="_blank"
            rel="noreferrer"
            aria-label="View CV as a PDF in a new tab"
            className={`${rubik.className} ${FOCUS_RING} group flex h-12 items-center gap-x-2 rounded-full bg-fuchsia-700 px-7 text-lg font-medium text-white transition-colors hover:bg-fuchsia-600`}
          >
            View CV
            <LuArrowUpRight
              aria-hidden
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
            />
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className={SOCIAL_BUTTON}
          >
            <FaLinkedinIn aria-hidden />
          </a>
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className={SOCIAL_BUTTON}
          >
            <FaGithub aria-hidden />
          </a>
        </div>
      </div>

      {/* The mask dissolves the portrait and its backdrop into the page
          instead of cutting them off at the bottom edge. */}
      <div className="relative z-10 mt-8 h-[500px] w-full overflow-hidden [mask-image:linear-gradient(to_bottom,black_75%,transparent)] lg:mt-0 lg:h-auto lg:min-h-[500px] lg:w-1/2">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(closest-side,rgba(139,92,246,0.35),transparent)]"
        />
        <div
          aria-hidden
          className="absolute left-1/2 top-1/4 h-[350px] w-[350px] -translate-x-1/2 translate-y-16 rounded-full border border-white/15 bg-gradient-to-b from-fuchsia-500/40 via-violet-600/25 to-transparent lg:h-[400px] lg:w-[400px] lg:translate-y-0 xl:h-[500px] xl:w-[500px]"
        />

        <Image
          src="/images/CV25_PFP.PNG"
          width={400}
          height={500}
          priority
          alt="Joshmar Morales"
          className="absolute bottom-0 left-1/2 z-10 -translate-x-1/2 translate-y-16 scale-90 brightness-110 xl:translate-y-0 xl:scale-100"
        />
      </div>
    </>
  );
};

export default ProfileSection;
