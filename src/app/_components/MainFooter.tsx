"use client";
import { Rubik } from "next/font/google";
import Link from "next/link";

const rubik = Rubik({ subsets: ["latin"] });

const FOOTER_LINK =
  "rounded-full px-4 py-2 text-white/70 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-400";

const MainFooter: React.FC = () => {
  return (
    <footer className="relative z-10 border-t border-white/10 px-4 pb-6 pt-10 sm:px-8">
      <div className="flex flex-col items-center gap-y-4 md:flex-row md:justify-between">
        <div className="font-clashregular text-2xl text-white md:text-3xl">
          Joshmar Morales
        </div>
        <nav
          aria-label="Footer"
          className={`${rubik.className} flex gap-x-1 text-base md:-mr-4 md:text-lg`}
        >
          <Link href="/" className={FOOTER_LINK}>
            Home
          </Link>
          <Link href="/blogs" className={FOOTER_LINK}>
            Blogs
          </Link>
          <Link href="/contact" className={FOOTER_LINK}>
            Contact
          </Link>
        </nav>
      </div>

      <div
        className={`${rubik.className} mt-8 flex flex-col items-center gap-y-2 text-center text-xs font-light tracking-wide text-gray-400 sm:text-sm md:flex-row md:justify-between`}
      >
        <p>
          &copy; {new Date().getFullYear()} Joshmar Morales. All rights reserved
        </p>
        <div className="flex gap-x-6">
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
