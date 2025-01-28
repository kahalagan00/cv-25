"use client";
import { Rubik } from "next/font/google";

import MainFooter from "../_components/MainFooter";

const rubikRegular = Rubik({ weight: "300", subsets: ["latin"] });
// const rubikBold = Rubik({ weight: "700", subsets: ["latin"] });

const Page: React.FC = () => {
  return (
    <section className="relative w-screen">
      <div className="relative z-10 mx-auto my-16 flex min-h-screen w-full max-w-screen-2xl flex-col justify-between px-4">
        <div>
          <h1 className="mb-16 font-clashsemibold text-[4rem] leading-tight text-white sm:text-[6rem] xl:text-[8rem]">
            Blogs
          </h1>
          <div
            className={`${rubikRegular.className} mb-8 pr-8 text-sm text-gray-400 sm:text-xl xl:text-2xl`}
          >
            Here I will write about my thoughts, predictions, and learnings.
            Things are always changing in the world and it is important for us
            to learn and adapt.
          </div>
        </div>
        <div className="">
          <MainFooter />
        </div>
      </div>
    </section>
  );
};

export default Page;
