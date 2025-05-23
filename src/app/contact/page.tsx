"use client";
import { Rubik } from "next/font/google";

import MainFooter from "../_components/MainFooter";
import { SOCIAL_LINKS } from "../_utils/constants";

const rubikRegular = Rubik({ weight: "300", subsets: ["latin"] });
// const rubikBold = Rubik({ weight: "700", subsets: ["latin"] });

const Page: React.FC = () => {
  return (
    <section className="relative w-screen">
      <div className="relative z-10 mx-auto my-16 flex min-h-screen w-full max-w-screen-2xl flex-col justify-between px-4">
        <div>
          <h1 className="mb-16 font-clashsemibold text-[4rem] leading-tight text-white sm:text-[6rem] xl:text-[8rem]">
            Contact
          </h1>
          <div
            className={`${rubikRegular.className} mb-8 pr-8 text-sm text-gray-400 sm:text-xl xl:text-2xl`}
          >
            Feel free to contact me in any of these. But most likely I will
            respond more via email since I check that one almost daily.
          </div>
          <p className="font-clashlight text-[1rem] text-white sm:text-[1.5rem] lg:text-[2rem]">
            &#x2022;&emsp;
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              className="hover:underline"
            >
              LinkedIn
            </a>
          </p>
          <p className="font-clashlight text-[1rem] text-white sm:text-[1.5rem] lg:text-[2rem]">
            &#x2022;&emsp;
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              className="hover:underline"
            >
              GitHub
            </a>
          </p>
          <p className="font-clashlight text-[1rem] text-white sm:text-[1.5rem] lg:text-[2rem]">
            &#x2022;&emsp; joshmarinho11@gmail.com
          </p>
        </div>

        <div>
          <MainFooter />
        </div>
      </div>
    </section>
  );
};

export default Page;
