"use client";
// import { Rubik } from "next/font/google";

import MainFooter from "../_components/MainFooter";

// const rubikRegular = Rubik({ weight: "300", subsets: ["latin"] });
// const rubikBold = Rubik({ weight: "700", subsets: ["latin"] });

const Page: React.FC = () => {
  return (
    <section className="relative w-screen">
      <div className="relative z-10 mx-auto my-16 flex min-h-screen w-full max-w-screen-2xl flex-col justify-between px-4">
        <div>
          <h1 className="mb-16 font-clashsemibold text-[4rem] leading-tight text-white sm:text-[6rem] xl:text-[8rem]">
            Blogs
          </h1>
          <p className="font-clashlight text-[1.5rem] text-white sm:text-[2rem] lg:text-[2.5rem]">
            Blogs coming soon...
          </p>
        </div>
        <div className="">
          <MainFooter />
        </div>
      </div>
    </section>
  );
};

export default Page;
