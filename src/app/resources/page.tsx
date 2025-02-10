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
            Resources
          </h1>
          <div
            className={`${rubikRegular.className} mb-8 pr-8 text-sm text-gray-400 sm:text-xl xl:text-2xl`}
          >
            I am not sponsored by these people or companies. I just simply found
            these resources beneficial to my growth as a programmer and engineer
            in general.
          </div>

          <p className="font-clashlight text-[1rem] text-white sm:text-[1.5rem] lg:text-[2rem]">
            &#x2022;&emsp;Data Structures and Algorithms by Abdul Bari
          </p>
          <p className="font-clashlight text-[1rem] text-white sm:text-[1.5rem] lg:text-[2rem]">
            &#x2022;&emsp;Clean Code by Robert Martin
          </p>
          <p className="font-clashlight text-[1rem] text-white sm:text-[1.5rem] lg:text-[2rem]">
            &#x2022;&emsp;React and Next.js by Jonas Schmedtmann
          </p>
          <p className="font-clashlight text-[1rem] text-white sm:text-[1.5rem] lg:text-[2rem]">
            &#x2022;&emsp;The C Programming Language by Brian Kernighan
          </p>
          <p className="font-clashlight text-[1rem] text-white sm:text-[1.5rem] lg:text-[2rem]">
            &#x2022;&emsp;100 Days of Code: The Complete Python Pro Bootcamp by
            Angela Yu
          </p>
          <p className="font-clashlight text-[1rem] text-white sm:text-[1.5rem] lg:text-[2rem]">
            &#x2022;&emsp;
            <a
              href="https://tryhackme.com"
              target="_blank"
              className="hover:underline"
            >
              TryHackMe
            </a>
          </p>
          <p className="font-clashlight text-[1rem] text-white sm:text-[1.5rem] lg:text-[2rem]">
            &#x2022;&emsp;
            <a
              href="https://leetcode.com"
              target="_blank"
              className="hover:underline"
            >
              Leetcode
            </a>
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
