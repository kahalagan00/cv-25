import { Rubik } from "next/font/google";
import { ImCross } from "react-icons/im";
import { IoMdDownload } from "react-icons/io";

const rubik = Rubik({ weight: "300", subsets: ["latin"] });

const Page: React.FC = () => {
  return (
    // Profile Section
    <div className="flex w-full">
      <div className="w-1/2 bg-indigo-950 pt-16">
        <h2
          className={`${rubik.className} text-4xl uppercase tracking-wide text-gray-400`}
        >
          Fullstack software engineer
        </h2>
        <h1 className="font-clashsemibold text-[7rem] leading-tight text-white">
          Joshmar Morales
        </h1>

        <div
          className={`${rubik.className} w-[300px] border-l-2 border-l-gray-200 py-1 pl-8 text-2xl text-gray-400`}
        >
          I am a Full-Stack developer and I work in the United States.
        </div>
      </div>
      <div className="relative w-1/2 overflow-hidden bg-violet-900">
        <div className="absolute left-1/2 top-1/4 flex h-[500px] w-[500px] -translate-x-1/2 transform items-center justify-center rounded-full border-2 border-fuchsia-500 bg-transparent">
          <div className="h-[90%] w-[90%] rounded-full bg-red-200"></div>
        </div>

        <div className="absolute left-24 top-1/2 flex h-36 w-36 items-center justify-center rounded-full bg-fuchsia-800 bg-opacity-70">
          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-fuchsia-700 bg-opacity-80">
            <button className="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-fuchsia-600 transition-transform ease-in-out hover:bg-fuchsia-500 active:translate-y-1">
              <IoMdDownload className="text-2xl text-white" />
              <span className="text-2xl text-white">CV</span>
            </button>
          </div>
        </div>

        <ImCross className="absolute left-1/4 top-9 h-8 w-8 text-white" />
        <ImCross className="absolute right-32 top-32 h-8 w-8 text-white" />
      </div>
    </div>
  );
};

export default Page;
