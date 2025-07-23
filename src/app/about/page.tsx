"use client";
import { Rubik } from "next/font/google";
import MainFooter from "../_components/MainFooter";

const rubikRegular = Rubik({ weight: "300", subsets: ["latin"] });
// const rubikBold = Rubik({ weight: "700", subsets: ["latin"] });

const Page: React.FC = () => {
  return (
    <section className="relative w-screen">
      <div className="relative z-10 mx-auto my-16 w-full max-w-screen-2xl px-4">
        <h1 className="mb-16 font-clashsemibold text-[4rem] leading-tight text-white sm:text-[6rem] xl:text-[8rem]">
          About me
        </h1>

        <h3 className="my-8 font-clashmedium text-[2.25rem] tracking-wide text-white sm:text-[3rem] lg:text-[4rem]">
          Experience
        </h3>
        <p className="font-clashlight text-[1.5rem] text-white sm:text-[2rem] lg:text-[2.5rem]">
          JCM Global&nbsp;2023 - 2024
        </p>
        <p className="font-clashlight text-[1.5rem] text-white sm:text-[2rem] lg:text-[2.5rem]">
          Software Engineer
        </p>
        <p
          className={`${rubikRegular.className} mt-4 text-sm text-gray-400 sm:text-xl xl:text-2xl`}
        >
          &#x2022;&nbsp;Developed real-time multi-threaded applications and BSP
          drivers for a network adapter device, facilitating communication
          between devices and a web server.
        </p>
        <p
          className={`${rubikRegular.className} mt-4 text-sm text-gray-400 sm:text-xl xl:text-2xl`}
        >
          &#x2022;&nbsp;Built RESTful APIs to deliver field product data to the
          web application&apos;s back-end server.
        </p>
        <p
          className={`${rubikRegular.className} mt-4 text-sm text-gray-400 sm:text-xl xl:text-2xl`}
        >
          &#x2022;&nbsp;Implemented new features that improved EGM gameplay by
          10% and expanded networking capabilities.
        </p>
        <p
          className={`${rubikRegular.className} mt-4 text-sm text-gray-400 sm:text-xl xl:text-2xl`}
        >
          &#x2022;&nbsp;Resolved critical bugs, reducing downtimes by 10% and
          significantly enhancing user experience during casino operations.
        </p>
        <p
          className={`${rubikRegular.className} mt-4 text-sm text-gray-400 sm:text-xl xl:text-2xl`}
        >
          &#x2022;&nbsp;Thoroughly documented codebase changes, improving team
          productivity and onboarding efficiency.
        </p>

        <h3 className="my-8 font-clashmedium text-[2.25rem] tracking-wide text-white sm:text-[3rem] lg:text-[4rem]">
          Education
        </h3>
        <p className="font-clashlight text-[1.5rem] text-white sm:text-[2rem] lg:text-[2.5rem]">
          University of Nevada, Las Vegas&nbsp;2025 - 2027
        </p>
        <p
          className={`${rubikRegular.className} mt-1 text-[1rem] text-gray-300 lg:text-[1.5rem]`}
        >
          Master of Science in Computer Science
        </p>
        <p className="mt-8 font-clashlight text-[1.5rem] text-white sm:text-[2rem] lg:text-[2.5rem]">
          University of Nevada, Las Vegas&nbsp;2019 - 2023
        </p>
        <p
          className={`${rubikRegular.className} mt-1 text-[1rem] text-gray-300 lg:text-[1.5rem]`}
        >
          Bachelor of Science in Electrical and Computer Engineering
        </p>

        <div className="mt-32">
          <MainFooter />
        </div>
      </div>
    </section>
  );
};

export default Page;
