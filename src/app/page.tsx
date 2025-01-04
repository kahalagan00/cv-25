import { Rubik } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { ImCross } from "react-icons/im";
import { IoMdArrowForward, IoMdDownload } from "react-icons/io";

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
        <div className="relative w-1/2 overflow-hidden bg-violet-900">
          <div className="absolute left-1/2 top-1/4 flex h-[500px] w-[500px] -translate-x-1/2 transform items-center justify-center rounded-full border-2 border-fuchsia-500 bg-transparent">
            <div className="h-[90%] w-[90%] rounded-full bg-red-200"></div>
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
      <section className="relative mb-16 flex w-full px-4">
        <div className="w-3/5">
          <div className="relative h-[700px] w-[700px] overflow-hidden rounded-full bg-pink-200">
            <Image
              src="/images/Coding_Desk.jpg"
              width={700}
              height={700}
              alt="Picture of developer"
              className="-translate-y-36"
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
      <section className="relative mb-16 flex w-full px-4"></section>
    </>
  );
};

export default Page;
