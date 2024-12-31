import { Rubik } from "next/font/google";
import Link from "next/link";

const rubik = Rubik({ weight: "400", subsets: ["latin"] });

const Header: React.FC = () => {
  return (
    <div className="mx-auto mt-4 flex h-20 max-w-screen-xl items-center justify-between rounded-full border-2 border-violet-600 bg-indigo-950 px-8 text-white">
      <div className="text-3xl font-semibold">Joshmar Morales</div>
      <Link href="/" className={`${rubik.className} text-sm`}>
        Home
      </Link>
      <Link href="/projects" className={`${rubik.className} text-sm`}>
        Projects
      </Link>
      <Link href="/about" className={`${rubik.className} text-sm`}>
        About
      </Link>
      <Link href="/resources" className={`${rubik.className} text-sm`}>
        Resources
      </Link>
      <div className={`${rubik.className} text-sm`}>Theme</div>
      <Link href="/contact" className={`${rubik.className} text-sm`}>
        Contact
      </Link>
    </div>
  );
};

export default Header;
