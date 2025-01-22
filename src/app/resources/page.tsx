// import { Rubik } from "next/font/google";

// const rubikRegular = Rubik({ weight: "300", subsets: ["latin"] });
// const rubikBold = Rubik({ weight: "700", subsets: ["latin"] });

const Page: React.FC = () => {
  return (
    <section className="relative w-screen">
      <div className="relative z-10 mx-auto my-16 w-full max-w-screen-2xl px-4">
        <h1 className="mb-16 font-clashsemibold text-[4rem] leading-tight text-white sm:text-[6rem] xl:text-[8rem]">
          Resources
        </h1>
        <p className="font-clashlight text-[1.5rem] text-white sm:text-[2rem] lg:text-[2.5rem]">
          &#x2022;&emsp;Data Structures and Algorithms by Abdul Bari
        </p>
        <p className="font-clashlight text-[1.5rem] text-white sm:text-[2rem] lg:text-[2.5rem]">
          &#x2022;&emsp;Clean Code by Robert Martin
        </p>
        <p className="font-clashlight text-[1.5rem] text-white sm:text-[2rem] lg:text-[2.5rem]">
          &#x2022;&emsp;React and Next.js by Jonas Schmedtmann
        </p>
        <p className="font-clashlight text-[1.5rem] text-white sm:text-[2rem] lg:text-[2.5rem]">
          &#x2022;&emsp;The C Programming Language by Brian Kernighan
        </p>
      </div>
    </section>
  );
};

export default Page;
