"use client";
import { Rubik } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

const rubik = Rubik({ subsets: ["latin"] });

const FOCUS_RING =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-400";

const AboutSection: React.FC = () => {
  return (
    <>
      <div className="relative z-10 flex w-full flex-col justify-center px-4 sm:px-8 lg:w-7/12">
        <h2 className="font-clashsemibold text-[3rem] leading-[1.05] tracking-tight text-white sm:text-[4rem] xl:text-[5rem]">
          About{" "}
          <span className="bg-gradient-to-r from-indigo-300 via-violet-300 to-fuchsia-400 bg-clip-text pb-2 text-transparent">
            me
          </span>
        </h2>
        <p
          className={`${rubik.className} mt-6 max-w-xl text-base font-light leading-relaxed text-gray-400 sm:text-lg`}
        >
          I am a Fullstack Engineer with a strong passion for creating
          impactful, user-centered applications. With a strong background on
          both Full-Stack development and Data Science, I enjoy building
          scalable solutions that solve real-world problems. I thrive in dynamic
          environments and am constantly looking for new opportunities to grow
          and contribute to meaningful projects.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Link
            href="/contact"
            className={`${rubik.className} ${FOCUS_RING} flex h-12 items-center rounded-full bg-fuchsia-700 px-7 text-lg font-medium text-white transition-colors hover:bg-fuchsia-600`}
          >
            Contact me
          </Link>
          <Link
            href="/about"
            className={`${rubik.className} ${FOCUS_RING} group flex h-12 items-center gap-x-2 rounded-full border border-white/10 bg-white/5 px-6 text-lg text-white/80 transition-colors hover:bg-white/10 hover:text-white`}
          >
            More about me
            <LuArrowRight
              aria-hidden
              className="transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none"
            />
          </Link>
        </div>
      </div>

      {/* Second in the markup so the heading leads on mobile; moved to the
          left of the text from lg up. */}
      <div className="relative z-10 mt-12 w-full px-4 sm:px-8 lg:order-first lg:mt-0 lg:w-5/12">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-[520px] overflow-hidden rounded-[3rem] border border-white/10 bg-indigo-950 lg:mx-0">
          <Image
            src="/images/Coding_Desk.jpg"
            alt=""
            fill
            sizes="(min-width: 1536px) 520px, (min-width: 1024px) 40vw, (min-width: 640px) 520px, 100vw"
            className="object-cover object-[center_25%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 opacity-80 mix-blend-multiply"></div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
