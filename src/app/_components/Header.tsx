"use client";

import Link from "next/link";
// import ThemeMenu from "./ThemeMenu";
import { Rubik } from "next/font/google";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { FaBuilding, FaPhone, FaQuestion, FaUser } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";

const rubik = Rubik({ weight: "400", subsets: ["latin"] });
const rubikBold = Rubik({ weight: "700", subsets: ["latin"] });

// Order of the underlined nav items; drives the sliding underline's position.
const NAV = [
  {
    key: "home",
    href: "/",
    label: "Home",
    icon: FaHouse,
    hint: "Go back to homepage",
  },
  {
    key: "about",
    href: "/about",
    label: "About",
    icon: FaUser,
    hint: "See more about me",
  },
  {
    key: "projects",
    href: "/projects",
    label: "Projects",
    icon: FaBuilding,
    hint: "See projects",
  },
  {
    key: "resources",
    href: "/resources",
    label: "Resources",
    icon: FaQuestion,
    hint: "Check additional resources",
  },
];

const Header: React.FC = () => {
  // Derived from the URL rather than click handlers, so the underline is
  // correct on direct loads, refreshes, and browser back/forward.
  const pathname = usePathname();
  const activeKey = pathname === "/" ? "home" : pathname.split("/")[1];
  const activeIndex = NAV.findIndex(({ key }) => key === activeKey);

  const navRef = useRef<HTMLElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  // Measured off the active item so the underline tracks it at any width, and
  // held at its last position while nothing is active so it fades in place.
  const [underlineX, setUnderlineX] = useState<number | null>(null);

  useLayoutEffect(() => {
    const nav = navRef.current;
    const item = itemRefs.current[activeIndex];
    if (!nav || !item) return;

    const measure = () => setUnderlineX(item.offsetLeft + item.offsetWidth / 2);
    measure();

    // Re-measure on resize and on late web-font loads, both of which move the
    // items without any React state changing.
    const observer = new ResizeObserver(measure);
    observer.observe(nav);
    observer.observe(item);
    return () => observer.disconnect();
  }, [activeIndex]);

  // The first position is unknown until measured, so sliding is enabled only
  // once it has painted — otherwise the underline flies in from the left edge.
  const hasPainted = useRef(false);
  useEffect(() => {
    if (underlineX !== null) hasPainted.current = true;
  }, [underlineX]);

  return (
    <header className="mx-auto mt-4 flex h-20 max-w-screen-xl items-center justify-start gap-x-3 rounded-full border-2 border-violet-800 bg-indigo-950 pl-4 text-white lg:gap-x-8 lg:pl-8">
      <div className="font-clashregular text-3xl font-semibold">
        <Link href="/" className="hidden text-xl lg:block xl:text-3xl">
          Joshmar Morales
        </Link>
        <Link href="/" className="text-xl lg:hidden">
          JM
        </Link>
      </div>
      <nav
        ref={navRef}
        aria-label="Main"
        className="relative flex h-full flex-1 gap-x-1 sm:gap-x-2 lg:flex-none lg:gap-x-8"
      >
        {NAV.map(({ key, href, label, icon: Icon, hint }, index) => (
          <div
            key={key}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            className="relative h-full flex-1 lg:flex-none"
          >
            {/* Both links fill the column, so the whole padded area is a tap
                target. Only one is ever displayed, so the column sizes to it. */}
            <Link
              href={href}
              aria-current={index === activeIndex ? "page" : undefined}
              className={`${rubik.className} hidden h-full items-center justify-center whitespace-nowrap px-4 text-lg lg:flex`}
            >
              {label}
            </Link>
            <Link
              title={hint}
              aria-label={hint}
              href={href}
              aria-current={index === activeIndex ? "page" : undefined}
              className={`${rubik.className} flex h-full items-center justify-center px-2 text-lg sm:px-3 lg:hidden`}
            >
              <Icon aria-hidden="true" />
            </Link>
          </div>
        ))}

        {/* Single underline that slides between items. */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute -bottom-1 left-0 h-2 w-6 rounded-full bg-fuchsia-600 lg:w-10 ${hasPainted.current
              ? "transition-[transform,opacity] duration-300 ease-out motion-reduce:transition-none"
              : ""
            }`}
          style={{
            transform: `translateX(calc(${underlineX ?? 0}px - 50%))`,
            opacity: activeIndex === -1 || underlineX === null ? 0 : 1,
          }}
        />
      </nav>

      {/* <div>
        <ThemeMenu />
      </div> */}
      <div className="ml-auto flex h-full items-center justify-center lg:w-48">
        <Link
          href="/contact"
          aria-current={pathname === "/contact" ? "page" : undefined}
          className={`${rubikBold.className} ml-8 hidden rounded-full bg-violet-900 px-9 py-4 text-lg hover:bg-violet-800 lg:block`}
        >
          Contact
        </Link>

        <Link
          title="Get in touch"
          aria-label="Get in touch"
          href="/contact"
          aria-current={pathname === "/contact" ? "page" : undefined}
          className={`${rubikBold.className} mr-3 rounded-full bg-violet-900 px-3 py-3 text-lg hover:bg-violet-800 lg:hidden`}
        >
          <FaPhone aria-hidden="true" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
