"use client";
import { Rubik } from "next/font/google";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { LuArrowUpRight, LuMail } from "react-icons/lu";

import MainFooter from "../_components/MainFooter";
import { SOCIAL_LINKS } from "../_utils/constants";

const rubik = Rubik({ subsets: ["latin"] });
// const rubikBold = Rubik({ weight: "700", subsets: ["latin"] });

const EMAIL = "joshmarinho11@gmail.com";

// Shown under each name, so the destination is visible before clicking.
const stripProtocol = (url: string) =>
  url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

const CONTACTS = [
  {
    name: "LinkedIn",
    value: stripProtocol(SOCIAL_LINKS.linkedin),
    href: SOCIAL_LINKS.linkedin,
    icon: FaLinkedinIn,
  },
  {
    name: "GitHub",
    value: stripProtocol(SOCIAL_LINKS.github),
    href: SOCIAL_LINKS.github,
    icon: FaGithub,
  },
  {
    name: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: LuMail,
  },
];

const Page: React.FC = () => {
  return (
    <section className="relative w-screen">
      <div className="relative z-10 mx-auto my-16 flex min-h-screen w-full max-w-screen-2xl flex-col justify-between px-4">
        <div className="px-4 sm:px-8">
          <h1 className="font-clashsemibold text-[3.5rem] leading-[1.05] tracking-tight text-white sm:text-[5rem] xl:text-[6.5rem]">
            Contact
          </h1>
          <p
            className={`${rubik.className} mt-8 max-w-2xl text-base font-light leading-relaxed text-gray-400 sm:text-lg`}
          >
            Feel free to contact me in any of these. But most likely I will
            respond more via email since I check that one almost daily.
          </p>

          <ul className="mt-12 divide-y divide-white/10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
            {CONTACTS.map(({ name, value, href, icon: Icon }) => {
              const isMail = href.startsWith("mailto:");

              return (
                <li key={name}>
                  <a
                    href={href}
                    target={isMail ? undefined : "_blank"}
                    rel={isMail ? undefined : "noreferrer"}
                    className="group flex items-center gap-x-4 px-6 py-5 transition-colors hover:bg-white/5 focus-visible:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-fuchsia-400 sm:gap-x-6 sm:px-8"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-fuchsia-700 text-xl text-white transition-colors group-hover:bg-fuchsia-600">
                      <Icon aria-hidden />
                    </span>
                    <span className="flex min-w-0 flex-col gap-y-1">
                      <span className="font-clashmedium text-xl text-white sm:text-2xl">
                        {name}
                      </span>
                      <span
                        className={`${rubik.className} break-all text-sm font-light text-gray-400 sm:text-base`}
                      >
                        {value}
                      </span>
                    </span>
                    <LuArrowUpRight
                      aria-hidden
                      className="ml-auto shrink-0 text-xl text-white/40 transition-[color,transform] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white motion-reduce:transition-none"
                    />
                  </a>
                </li>
              );
            })}
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
