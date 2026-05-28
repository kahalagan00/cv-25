"use client";
import { Rubik } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { ImCross } from "react-icons/im";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useLinkContext } from "../../contexts/useLink";
import { generateDotsArt } from "../../_utils/dotsArt";

const rubikRegular = Rubik({ weight: "300", subsets: ["latin"] });

const ProjectSection: React.FC = () => {
  const { setCurrentLink } = useLinkContext();

  return (
    <>
      <div className="relative z-10 flex justify-end">
        <h1 className="mx-auto font-clashsemibold text-[4rem] leading-tight text-white sm:text-[6rem] lg:mx-0 lg:mr-32 xl:text-[8rem]">
          My projects
        </h1>
        <ImCross className="absolute h-16 w-16 translate-y-32 text-white lg:h-20 lg:w-20 lg:translate-y-48" />
      </div>

      <div className="relative z-10 mt-16 flex flex-col px-4 lg:mt-32 lg:flex-row lg:px-0">
        <div className="z-20 hidden w-[45%] text-white lg:block">
          <div className="flex translate-x-16 translate-y-72 flex-col items-end">
            <h3 className="font-clashmedium text-[4rem] tracking-wide">
              Egolift University
            </h3>
            <p className="font-clashlight text-[2.5rem]">Current</p>
          </div>
        </div>

        <div className="relative z-10 lg:w-1/2">
          <div className="h-[400px] overflow-hidden rounded-[3rem] bg-violet-400 drop-shadow-2xl lg:h-[500px] lg:w-[500px]">
            <DotLottieReact
              src="https://lottie.host/622eef5c-b382-411e-abf8-d4a2d14965c6/oR8WjYDVmr.lottie"
              loop
              autoplay
            />
          </div>
        </div>
        <div className="z-20 text-white lg:hidden">
          <div className="flex flex-col">
            <h3 className="font-clashmedium text-[3rem] tracking-wide lg:text-[4rem]">
              CV 24 Portfolio
            </h3>
            <p className="font-clashlight text-[2rem] lg:text-end lg:text-[2.5rem]">
              December 2024
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-32 flex flex-col px-4 lg:flex-row lg:px-0">
        <div className="relative lg:w-1/2">
          <div className="relative h-[400px] w-full overflow-hidden rounded-[3rem] bg-violet-800 drop-shadow-2xl">
            <Image
              src="/images/projects_images/showcases/Jhuv_Nutrition_Showcase.png"
              fill
              className="object-cover lg:-translate-x-20 lg:translate-y-16"
              alt="Showcase of the Jhuv Nutrition App"
            />
          </div>
          <div className="absolute bottom-0 left-0 hidden translate-y-32 gap-x-8 lg:flex">
            {generateDotsArt(10)}
          </div>
        </div>
        <div className="text-white lg:w-1/2">
          <div className="flex flex-col lg:-translate-x-16 lg:translate-y-16">
            <h3 className="font-clashmedium text-[3rem] tracking-wide lg:text-[4rem]">
              Jhuv Nutrition
            </h3>
            <p className="font-clashlight text-[2rem] lg:text-[2.5rem]">
              Current
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-16 flex flex-col px-4 lg:mt-32 lg:flex-row lg:px-0">
        <div className="z-20 hidden w-[45%] text-white lg:block">
          <div className="flex translate-x-16 translate-y-72 flex-col items-end">
            <h3 className="font-clashmedium text-[4rem] tracking-wide">
              CV 24 Portfolio
            </h3>
            <p className="font-clashlight text-[2.5rem]">December 2024</p>
          </div>
        </div>

        <div className="relative z-10 lg:w-1/2">
          <div className="h-[400px] overflow-hidden rounded-[3rem] bg-violet-400 drop-shadow-2xl lg:h-[500px] lg:w-[500px]">
            <Image
              src="/images/projects_images/showcases/CV24_Showcase.png"
              width={1000}
              height={300}
              className="mt-16 translate-x-20 -rotate-45 scale-150"
              alt="Showcase of the CV 24 Portfolio"
            />
          </div>

          <div className="absolute bottom-0 left-0 ml-72 hidden translate-y-32 gap-x-8 lg:flex">
            {generateDotsArt(5)}
          </div>
        </div>

        <div className="z-20 text-white lg:hidden">
          <div className="flex flex-col">
            <h3 className="font-clashmedium text-[3rem] tracking-wide lg:text-[4rem]">
              CV 24 Portfolio
            </h3>
            <p className="font-clashlight text-[2rem] lg:text-end lg:text-[2.5rem]">
              December 2024
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-16 flex flex-col px-4 lg:mt-32 lg:flex-row lg:px-0">
        <div className="lg:w-[35%]">
          <div className="h-[400px] w-full overflow-hidden rounded-[3rem] bg-purple-800 drop-shadow-2xl">
            <Image
              src="/images/projects_images/showcases/WeatherApp_Showcase.png"
              width={450}
              height={300}
              className="mx-auto mt-14 object-contain lg:mx-0 lg:mt-24"
              alt="Showcase of the Weather App"
            />
          </div>
        </div>
        <div className="text-white lg:w-1/2">
          <div className="flex flex-col lg:-translate-x-16 lg:translate-y-32">
            <h3 className="font-clashmedium text-[3rem] tracking-wide lg:text-[4rem]">
              Weather App
            </h3>
            <p className="font-clashlight text-[2rem] lg:text-[2.5rem]">
              September 2024
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-16 flex flex-col px-4 lg:mt-32 lg:flex-row lg:px-0">
        <div className="z-20 hidden w-[30%] text-white lg:block">
          <div className="flex translate-x-16 translate-y-24 flex-col items-end">
            <h3 className="text-end font-clashmedium text-[4rem] tracking-wide">
              Bluelock Detection
            </h3>
            <p className="font-clashlight text-[2.5rem]">May 2023</p>
          </div>
        </div>

        <div className="z-10 lg:w-[70%]">
          <div className="h-[400px] w-full overflow-hidden rounded-[3rem] bg-cyan-700 drop-shadow-2xl">
            <Image
              src="/images/projects_images/showcases/Bluelock_Showcase.png"
              width={975}
              height={300}
              className="translate-y-32 scale-90 lg:ml-16 lg:mt-24 lg:translate-y-0 lg:object-contain"
              alt="Showcase of the Bluelock Project"
            />
          </div>
        </div>

        <div className="z-20 text-white lg:hidden lg:w-[30%]">
          <div className="flex flex-col">
            <h3 className="font-clashmedium text-[3rem] tracking-wide lg:text-[4rem]">
              Bluelock Detection
            </h3>
            <p className="font-clashlight text-[2rem] lg:text-[2.5rem]">
              May 2023
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-32 flex justify-center">
        <Link href="/projects" onClick={() => setCurrentLink("projects")}>
          <p
            className={`${rubikRegular.className} text-2xl tracking-wide text-fuchsia-600 hover:underline`}
          >
            See more projects &gt;&gt;
          </p>
        </Link>
      </div>
    </>
  );
};

export default ProjectSection;
