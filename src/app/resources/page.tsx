"use client";
import { Rubik } from "next/font/google";

import MainFooter from "../_components/MainFooter";

const rubik = Rubik({ subsets: ["latin"] });
// const rubikBold = Rubik({ weight: "700", subsets: ["latin"] });

const RESOURCES = [
  { title: "Data Structures and Algorithms", author: "Abdul Bari" },
  { title: "Clean Code", author: "Robert Martin" },
  { title: "React and Next.js", author: "Jonas Schmedtmann" },
  { title: "The C Programming Language", author: "Brian Kernighan" },
  {
    title: "100 Days of Code: The Complete Python Pro Bootcamp",
    author: "Angela Yu",
  },
];

const Page: React.FC = () => {
  return (
    <section className="relative w-screen">
      <div className="relative z-10 mx-auto my-16 flex min-h-screen w-full max-w-screen-2xl flex-col justify-between px-4">
        <div className="px-4 sm:px-8">
          <h1 className="font-clashsemibold text-[3.5rem] leading-[1.05] tracking-tight text-white sm:text-[5rem] xl:text-[6.5rem]">
            Resources
          </h1>
          <p
            className={`${rubik.className} mt-8 max-w-2xl text-base font-light leading-relaxed text-gray-400 sm:text-lg`}
          >
            I am not sponsored by these people or companies. I just simply found
            these resources beneficial to my growth as a Software Engineer, Tech
            Enthusiast and overall thinker.
          </p>

          <ul className="mt-12 divide-y divide-white/10 rounded-[2rem] border border-white/10 bg-white/5 px-6 sm:px-8">
            {RESOURCES.map(({ title, author }, index) => (
              <li key={title} className="flex gap-x-4 py-6 sm:gap-x-6">
                <span
                  aria-hidden
                  className={`${rubik.className} pt-1 text-sm tabular-nums text-fuchsia-300 sm:pt-1.5`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-1 flex-col gap-y-1 lg:flex-row lg:items-baseline lg:justify-between lg:gap-x-8">
                  <p className="font-clashmedium text-xl text-white sm:text-2xl">
                    {title}
                  </p>
                  <p
                    className={`${rubik.className} text-base font-light text-gray-400 lg:shrink-0`}
                  >
                    by {author}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-32">
          <MainFooter />
        </div>
      </div>
    </section>
  );
};

export default Page;
