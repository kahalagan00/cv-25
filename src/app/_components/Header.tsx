"use client";

import Link from "next/link";
// import ThemeMenu from "./ThemeMenu";
import { Rubik } from "next/font/google";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  LuBookOpen,
  LuHouse,
  LuLayers,
  LuMail,
  LuUserRound,
} from "react-icons/lu";

const rubik = Rubik({ subsets: ["latin"] });

const FOCUS_RING =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-400";

// Order of the nav items; drives the sliding pill's position.
const NAV = [
  {
    key: "home",
    href: "/",
    label: "Home",
    icon: LuHouse,
    hint: "Go back to homepage",
  },
  {
    key: "about",
    href: "/about",
    label: "About",
    icon: LuUserRound,
    hint: "See more about me",
  },
  {
    key: "projects",
    href: "/projects",
    label: "Projects",
    icon: LuLayers,
    hint: "See projects",
  },
  {
    key: "resources",
    href: "/resources",
    label: "Resources",
    icon: LuBookOpen,
    hint: "Check additional resources",
  },
];

const Header: React.FC = () => {
  // Derived from the URL rather than click handlers, so the pill is
  // correct on direct loads, refreshes, and browser back/forward.
  const pathname = usePathname();
  const activeKey = pathname === "/" ? "home" : pathname.split("/")[1];
  const activeIndex = NAV.findIndex(({ key }) => key === activeKey);

  const navRef = useRef<HTMLElement | null>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  // Measured off the active item so the pill tracks it at any width, and
  // held at its last position while nothing is active so it fades in place.
  const [pill, setPill] = useState<{ x: number; width: number } | null>(null);

  useLayoutEffect(() => {
    const nav = navRef.current;
    const item = itemRefs.current[activeIndex];
    if (!nav || !item) return;

    const measure = () => {
      const x = item.offsetLeft;
      const width = item.offsetWidth;
      setPill((prev) =>
        prev && prev.x === x && prev.width === width ? prev : { x, width },
      );
    };
    measure();

    // Re-measure on resize and on late web-font loads, both of which move the
    // items without any React state changing.
    const observer = new ResizeObserver(measure);
    observer.observe(nav);
    observer.observe(item);
    return () => observer.disconnect();
  }, [activeIndex]);

  // The first position is unknown until measured, so sliding is enabled only
  // once it has painted — otherwise the pill flies in from the left edge.
  const hasPainted = useRef(false);
  useEffect(() => {
    if (pill !== null) hasPainted.current = true;
  }, [pill]);

  return (
    <header className="sticky top-4 z-50 mx-auto mt-4 flex h-14 w-[calc(100%-2rem)] max-w-screen-xl items-center gap-x-1 rounded-full border border-white/10 bg-indigo-950/90 px-1.5 text-white shadow-lg shadow-black/30 backdrop-blur-xl supports-[backdrop-filter]:bg-indigo-950/70 lg:h-16 lg:px-2.5">
      <div className="flex shrink-0 lg:flex-1">
        <Link
          href="/"
          className={`${FOCUS_RING} flex h-11 items-center rounded-full px-4 font-clashregular text-xl font-semibold xl:text-2xl`}
        >
          <span className="hidden lg:inline">Joshmar Morales</span>
          <span className="lg:hidden">JM</span>
        </Link>
      </div>
      <nav
        ref={navRef}
        aria-label="Main"
        className="relative flex h-full flex-1 items-center lg:flex-none lg:gap-x-1"
      >
        {/* Single pill that slides behind the active item. */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-y-0 left-0 my-auto h-11 rounded-full bg-fuchsia-500/15 ring-1 ring-inset ring-fuchsia-400/30 ${
            hasPainted.current
              ? "transition-[transform,width,opacity] duration-300 ease-out motion-reduce:transition-none"
              : ""
          }`}
          style={{
            transform: `translateX(${pill?.x ?? 0}px)`,
            width: pill?.width ?? 0,
            opacity: activeIndex === -1 || pill === null ? 0 : 1,
          }}
        />

        {/* Icon below lg, label from lg up; the label is always the
            accessible name. */}
        {NAV.map(({ key, href, label, icon: Icon, hint }, index) => (
          <Link
            key={key}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            href={href}
            title={hint}
            aria-current={index === activeIndex ? "page" : undefined}
            className={`${rubik.className} ${FOCUS_RING} relative flex h-11 flex-1 items-center justify-center rounded-full px-3 text-lg text-white/70 transition-colors hover:text-white aria-[current=page]:text-white lg:flex-none lg:px-5 lg:text-base`}
          >
            <Icon aria-hidden="true" className="lg:hidden" />
            <span className="sr-only lg:not-sr-only">{label}</span>
          </Link>
        ))}
      </nav>

      {/* <div>
        <ThemeMenu />
      </div> */}
      <div className="flex shrink-0 justify-end lg:flex-1">
        <Link
          href="/contact"
          title="Get in touch"
          aria-current={pathname === "/contact" ? "page" : undefined}
          className={`${rubik.className} ${FOCUS_RING} relative flex h-11 w-11 items-center justify-center rounded-full bg-fuchsia-700 text-lg font-medium shadow-lg shadow-fuchsia-700/30 transition-colors hover:bg-fuchsia-600 aria-[current=page]:ring-2 aria-[current=page]:ring-white/60 lg:w-auto lg:px-6 lg:text-base`}
        >
          <LuMail aria-hidden="true" className="lg:hidden" />
          <span className="sr-only lg:not-sr-only">Contact</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
