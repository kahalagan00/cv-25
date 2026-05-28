"use client";
import { Rubik } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";
import { useLinkContext } from "../../contexts/useLink";
import { generateDotsArt } from "../../_utils/dotsArt";

const rubikRegular = Rubik({ weight: "300", subsets: ["latin"] });
const rubikBold = Rubik({ weight: "700", subsets: ["latin"] });

const AboutSection: React.FC = () => {
  const { setCurrentLink } = useLinkContext();
  return (
    <>
      <div className="relative z-10 flex w-full justify-center lg:w-3/5 lg:justify-start">
        <div className="relative h-[400px] w-[400px] overflow-hidden rounded-full bg-pink-200 sm:h-[500px] sm:w-[500px] xl:h-[700px] xl:w-[700px]">
          <Image
            src="/images/Coding_Desk.jpg"
            alt="Picture of desk"
            fill
            className="-translate-y-18 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 opacity-80 mix-blend-multiply"></div>
        </div>
      </div>
      <div className="relative z-10 flex w-full flex-col items-center justify-center text-white sm:justify-end lg:w-2/5 lg:items-start">
        <p
          className={`${rubikRegular.className} my-16 w-[400px] tracking-[.015em] text-gray-400 xl:w-[500px] xl:text-lg`}
        >
          I am a Fullstack Engineer with a strong passion for creating impactful,
          user-centered applications. With a strong background on both
          Full-Stack development and Data Science, I enjoy building scalable
          solutions that solve real-world problems. I thrive in dynamic
          environments and am constantly looking for new opportunities to grow
          and contribute to meaningful projects.
        </p>
        <Link
          href="/contact"
          className={`${rubikBold.className} relative z-10 mb-8 flex w-48 items-center justify-center rounded-full bg-fuchsia-700 px-9 py-4 text-lg hover:bg-fuchsia-600`}
        >
          Contact me
        </Link>

        <div className="absolute bottom-0 right-0 mb-8 flex gap-x-8">
          {generateDotsArt(5)}
        </div>
      </div>

      <h1 className="absolute left-1/2 top-0 z-10 w-[300px] -translate-x-1/2 -translate-y-8 text-center font-clashsemibold text-[4rem] leading-tight text-white sm:text-[6rem] lg:translate-y-0 lg:text-start xl:text-[8rem]">
        About me
      </h1>
      <Link
        href="/about"
        onClick={() => setCurrentLink("about")}
        className="z-10"
      >
        <IoMdArrowForward className="absolute right-0 top-1/4 w-[300px] -translate-y-20 font-clashsemibold text-[8rem] leading-tight text-fuchsia-600 xl:-translate-y-1/4 xl:text-[10rem]" />
      </Link>
    </>
  );
};

export default AboutSection;
