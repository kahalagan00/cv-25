import { Rubik } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { ImCross } from "react-icons/im";
import { IoMdArrowBack, IoMdArrowForward, IoMdDownload } from "react-icons/io";

const rubikRegular = Rubik({ weight: "300", subsets: ["latin"] });
const rubikBold = Rubik({ weight: "700", subsets: ["latin"] });

const Page: React.FC = () => {
  return (
    <>
      {/* Profile Section */}
      <section className="mb-64 mt-16 flex w-full px-4">
        <div className="w-1/2 bg-indigo-950 pr-4 pt-16">
          <h2
            className={`${rubikRegular.className} text-4xl uppercase tracking-wide text-gray-400`}
          >
            Fullstack software engineer
          </h2>
          <h1 className="font-clashsemibold text-[7rem] leading-tight text-white">
            Joshmar Morales
          </h1>

          <div
            className={`${rubikRegular.className} w-[300px] border-l-2 border-l-gray-200 py-1 pl-8 text-2xl text-gray-400`}
          >
            I am a Full-Stack developer and I work in the United States.
          </div>
        </div>
        <div className="relative w-1/2 overflow-hidden">
          <div className="absolute left-1/2 top-1/4 flex h-[500px] w-[500px] -translate-x-1/2 transform items-center justify-center rounded-full border-2 border-fuchsia-500 bg-transparent">
            <div className="h-[90%] w-[90%] rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 opacity-80 mix-blend-multiply"></div>
          </div>

          <div className="absolute left-16 top-1/4 z-20 flex h-36 w-36 items-center justify-center rounded-full bg-fuchsia-800 bg-opacity-70">
            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-fuchsia-700 bg-opacity-80">
              <button className="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-fuchsia-600 transition-transform ease-in-out hover:bg-fuchsia-500 active:translate-y-1">
                <IoMdDownload className="text-2xl text-white" />
                <span className="text-2xl text-white">CV</span>
              </button>
            </div>
          </div>

          <ImCross className="absolute left-1/4 top-9 h-8 w-8 text-white" />
          <ImCross className="absolute right-32 top-32 h-8 w-8 text-white" />

          <Image
            src="/images/Header_Torsoshot.png"
            width={550}
            height={550}
            alt="Picture of developer"
            className="absolute bottom-0 left-1/2 z-10 -translate-x-1/2"
          />
        </div>
      </section>

      {/* About me summary section */}
      <section className="relative mb-64 flex w-full px-4">
        <div className="w-3/5">
          <div className="relative h-[500px] w-[500px] overflow-hidden rounded-full bg-pink-200 sm:h-[600px] sm:w-[600px] xl:h-[700px] xl:w-[700px]">
            <Image
              src="/images/Coding_Desk.jpg"
              alt="Picture of desk"
              fill
              className="-translate-y-18 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 opacity-80 mix-blend-multiply"></div>
          </div>
        </div>
        <div className="flex w-2/5 flex-col justify-end text-white">
          <p
            className={`${rubikRegular.className} my-16 w-[500px] text-lg tracking-[.015em] text-gray-400`}
          >
            I am a Full Stack Developer with a strong passion for creating
            impactful, user-centered web applications. With a focus on both
            frontend and backend development, I enjoy building scalable
            solutions that solve real-world problems. I thrive in dynamic
            environments and am constantly looking for new opportunities to grow
            and contribute to meaningful projects.
          </p>
          <Link
            href="/contact"
            className={`${rubikBold.className} mb-8 flex w-48 items-center justify-center rounded-full bg-fuchsia-700 px-9 py-4 text-lg hover:bg-fuchsia-600`}
          >
            Contact me
          </Link>
        </div>

        <h1 className="absolute left-1/2 top-0 w-[300px] -translate-x-1/2 font-clashsemibold text-[7rem] leading-tight text-white">
          About me
        </h1>
        <Link href="/about">
          <IoMdArrowForward className="absolute right-0 top-1/4 w-[300px] -translate-y-1/4 font-clashsemibold text-[10rem] leading-tight text-fuchsia-600" />
        </Link>
      </section>

      {/* Technical skills summary section */}
      <section className="relative mb-64 w-full px-4">
        <div className="flex">
          <div className="w-1/2">
            <h1 className="font-clashsemibold text-[7rem] leading-tight text-white">
              My skills
            </h1>
          </div>
          <div className="w-1/2 overflow-hidden">
            <IoMdArrowBack className="-translate-x-6 font-clashsemibold text-[10rem] leading-tight text-fuchsia-600" />
            {/* Use and investigate again later when the entire app is already done */}
            {/* <Image
              src="/svgs/arrow-left-long.svg"
              alt="Picture of left long arrow"
              height={50}
              width={400}
              className="object-cover"
            /> */}
          </div>
        </div>

        <div className="mt-12 flex">
          <div className="w-1/2">
            <ul className="w-full">
              <SkillRow skill="TypeScript" rating={7} />
              <SkillRow skill="React" rating={8} />
              <SkillRow skill="Next.js" rating={7} />
              <SkillRow skill="Tailwind" rating={10} />
              <SkillRow skill="Python" rating={10} />
            </ul>
          </div>
          <div className="w-1/2">
            <ul className="w-full">
              <SkillRow skill="Node.js" rating={8} />
              <SkillRow skill="Express" rating={8} />
              <SkillRow skill="Django" rating={3} />
              <SkillRow skill="MongoDB" rating={8} />
              <SkillRow skill="PostgreSQL" rating={4} />
            </ul>
          </div>
        </div>
      </section>

      {/* Project showcase section */}
      <section className="relative mb-64 w-full px-4">
        <div className="flex justify-end">
          <h1 className="mr-32 font-clashsemibold text-[7rem] leading-tight text-white">
            My projects
          </h1>
        </div>
        <div className="mt-32 flex">
          <div className="w-1/2">
            <div className="h-[400px] w-full rounded-3xl bg-slate-500 drop-shadow-2xl">
              Artwork of project
            </div>
          </div>
          <div className="w-1/2 text-white">
            <div className="flex -translate-x-16 translate-y-16 flex-col">
              <h3 className="font-clashmedium text-[4rem] tracking-wide">
                Jhuv Nutrition
              </h3>
              <p className="font-clashlight text-[2.5rem]">Current</p>
            </div>
          </div>
        </div>

        <div className="mt-32 flex">
          <div className="z-20 w-[45%] text-white">
            <div className="flex translate-x-16 translate-y-72 flex-col items-end">
              <h3 className="font-clashmedium text-[4rem] tracking-wide">
                CV 24 Portfolio
              </h3>
              <p className="font-clashlight text-[2.5rem]">December 2024</p>
            </div>
          </div>
          <div className="z-10 w-1/2">
            <div className="h-[500px] w-[500px] rounded-3xl bg-cyan-700 drop-shadow-2xl">
              Artwork of project
            </div>
          </div>
        </div>

        <div className="mt-32 flex">
          <div className="w-[35%]">
            <div className="h-[400px] w-full rounded-3xl bg-purple-800 drop-shadow-2xl">
              Artwork of project
            </div>
          </div>
          <div className="w-1/2 text-white">
            <div className="flex -translate-x-16 translate-y-32 flex-col">
              <h3 className="font-clashmedium text-[4rem] tracking-wide">
                Weather App
              </h3>
              <p className="font-clashlight text-[2.5rem]">September 2024</p>
            </div>
          </div>
        </div>

        <div className="mt-32 flex">
          <div className="z-20 w-[30%] text-white">
            <div className="flex translate-x-16 translate-y-24 flex-col items-end">
              <h3 className="text-end font-clashmedium text-[4rem] tracking-wide">
                Bluelock Drowning
              </h3>
              <p className="font-clashlight text-[2.5rem]">May 2023</p>
            </div>
          </div>
          <div className="z-10 w-[70%]">
            <div className="h-[400px] w-full rounded-3xl bg-cyan-700 drop-shadow-2xl">
              Artwork of project
            </div>
          </div>
        </div>

        <div className="mt-32 flex justify-center">
          <Link href="/projects">
            <p
              className={`${rubikRegular.className} text-2xl tracking-wide text-fuchsia-600`}
            >
              See more projects &gt;&gt;
            </p>
          </Link>
        </div>
      </section>

      {/* My blogs/videos/content section */}
      <section className="relative mb-64 w-full px-4">
        <div className="flex justify-end">
          <h1 className="mr-32 font-clashsemibold text-[7rem] leading-tight text-white">
            My blogs
          </h1>
        </div>
      </section>
    </>
  );
};

export default Page;

const SkillRow = ({ skill, rating }: { skill: string; rating: number }) => {
  const ratingsArr = [];
  for (let i = 0; i < 10; i++) {
    if (i + 1 <= rating) {
      ratingsArr.push(1);
    } else {
      ratingsArr.push(0);
    }
  }

  return (
    <li className="my-4 grid w-full grid-cols-[150px_1fr] justify-start text-white">
      <p className={`${rubikRegular.className} text-2xl text-gray-100`}>
        {skill}
      </p>
      <div className="flex">
        {ratingsArr.map((x, idx) =>
          x ? (
            <div
              key={`Rating valid ${idx}`}
              className="ml-2 h-5 w-5 rounded-full bg-fuchsia-600"
            ></div>
          ) : (
            <div
              key={`Rating invalid ${idx}`}
              className="ml-2 h-5 w-5 rounded-full border-2 border-fuchsia-600 bg-transparent"
            ></div>
          ),
        )}
        {/* <div className="ml-2 h-5 w-5 rounded-full bg-fuchsia-600"></div> */}
        {/* <div className="ml-2 h-5 w-5 rounded-full border-2 border-fuchsia-600 bg-transparent"></div> */}
      </div>
    </li>
  );
};
