import { Rubik } from "next/font/google";
import { useLinkContext } from "../contexts/useLink";
import Link from "next/link";

const rubikRegular = Rubik({ weight: "300", subsets: ["latin"] });

const MainFooter: React.FC = () => {
  const { setCurrentLink } = useLinkContext();
  return (
    <div>
      <div className="relative z-10 mb-4 flex border-t-2 border-t-fuchsia-500 px-4">
        <div className="mb-8 mt-12 flex w-full flex-col text-white md:flex-row">
          <div className="mx-auto font-clashregular text-2xl md:mx-0 md:w-1/2 md:text-3xl">
            Joshmar Morales
          </div>
          <div
            className={`${rubikRegular.className} mt-4 flex justify-center gap-x-8 text-base tracking-wide text-white md:mt-0 md:w-1/2 md:justify-end md:text-lg xl:gap-x-32`}
          >
            <Link
              onClick={() => setCurrentLink("home")}
              href="/"
              className="hover:underline"
            >
              Home
            </Link>
            <Link
              href="/blogs"
              onClick={() => setCurrentLink("blogs")}
              className="hover:underline"
            >
              Blogs
            </Link>
            <Link
              onClick={() => setCurrentLink("contact")}
              href="/contact"
              className="hover:underline"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      <div className="relative z-10 ml-auto flex h-8 justify-center gap-x-12 px-4 text-center text-xs tracking-wide sm:text-sm md:text-start xl:w-1/2 xl:justify-end">
        <p className={`${rubikRegular.className} text-gray-400`}>
          &copy; {new Date().getFullYear()} Joshmar Morales. All rights reserved
        </p>
        <p className={`${rubikRegular.className} text-gray-400`}>
          Terms of Use
        </p>
        <p className={`${rubikRegular.className} text-gray-400`}>
          Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default MainFooter;
