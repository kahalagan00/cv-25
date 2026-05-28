"use client";
import { Rubik } from "next/font/google";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { IoMdDownload } from "react-icons/io";
import { DOCUMENT_PATHS, SOCIAL_LINKS } from "../../_utils/constants";

const rubikRegular = Rubik({ weight: "300", subsets: ["latin"] });

const ProfileSection: React.FC = () => {
  return (
    <>
      <div className="relative z-10 w-full pl-16 pt-16 sm:pl-24 lg:w-1/2">
        <h2
          className={`${rubikRegular.className} text-xl uppercase tracking-wide text-gray-400 sm:text-3xl xl:text-4xl`}
        >
          Software & Data
        </h2>
        <h1 className="font-clashsemibold text-[4rem] leading-tight text-white sm:text-[6rem] xl:text-[8rem]">
          Joshmar Morales
        </h1>

        <div
          className={`${rubikRegular.className} w-[300px] border-l-2 border-l-gray-200 py-1 pl-8 text-sm text-gray-400 sm:text-xl xl:text-2xl`}
        >
          Fullstack Software Engineer in the United States
        </div>

        <div className="absolute left-0 top-0 flex h-[100px] translate-y-32 flex-col justify-between sm:h-[200px]">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="h-[5px] w-10 rotate-45 rounded-md bg-indigo-400 sm:w-20"
            ></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 mt-8 h-[500px] w-full overflow-hidden lg:mt-0 lg:h-auto lg:w-1/2">
        <div className="absolute left-1/2 top-1/4 flex h-[350px] w-[350px] -translate-x-1/2 translate-y-16 transform items-center justify-center rounded-full border-2 border-fuchsia-500 bg-transparent lg:h-[400px] lg:w-[400px] lg:translate-y-0 xl:h-[500px] xl:w-[500px]">
          <div className="h-[90%] w-[90%] rounded-full bg-gradient-to-r from-indigo-300 via-violet-300 to-fuchsia-300 opacity-80 mix-blend-multiply"></div>
        </div>

        <div className="absolute left-16 top-1/4 z-20 flex h-32 w-32 -translate-x-12 items-center justify-center rounded-full bg-fuchsia-800 bg-opacity-70 lg:-translate-x-0 xl:h-36 xl:w-36">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-fuchsia-700 bg-opacity-80 xl:h-28 xl:w-28">
            <button className="flex h-16 w-16 flex-col items-center justify-center rounded-full bg-fuchsia-600 transition-transform ease-in-out hover:bg-fuchsia-500 active:translate-y-1 xl:h-20 xl:w-20">
              <IoMdDownload className="text-xl text-white xl:text-2xl" />
              <a target="_blank" href={DOCUMENT_PATHS.resume}>
                <span className="text-xl text-white xl:text-2xl">CV</span>
              </a>
            </button>
          </div>
        </div>

        <ImCross className="absolute left-1/4 top-9 h-8 w-8 text-white" />
        <ImCross className="absolute right-32 top-32 h-8 w-8 text-white" />

        <Image
          src="/images/CV25_PFP.PNG"
          width={400}
          height={400}
          alt="Picture of developer"
          className="absolute bottom-0 left-1/2 z-10 -translate-x-1/2 translate-y-16 scale-90 brightness-110 xl:translate-y-0 xl:scale-100"
        />

        <div className="absolute right-0 top-1/4 z-20 flex flex-col gap-y-4">
          <a href={SOCIAL_LINKS.linkedin} target="_blank">
            <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-700 transition-all duration-150 ease-in hover:scale-125 hover:bg-indigo-500">
              <FaLinkedin className="text-xl text-white" />
            </div>
          </a>
          <a href={SOCIAL_LINKS.github} target="_blank">
            <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-700 transition-all duration-150 ease-in hover:scale-125 hover:bg-indigo-500">
              <FaGithub className="text-xl text-white" />
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default ProfileSection;
