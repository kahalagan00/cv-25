"use client";
import { Rubik } from "next/font/google";
import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { SOCIAL_LINKS } from "../../_utils/constants";
import MainFooter from "../MainFooter";

const rubik = Rubik({ subsets: ["latin"] });

const FOCUS_RING =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-400";

const SOCIALS = [
  {
    name: "LinkedIn",
    label: "LinkedIn profile",
    href: SOCIAL_LINKS.linkedin,
    icon: FaLinkedinIn,
  },
  {
    name: "GitHub",
    label: "GitHub profile",
    href: SOCIAL_LINKS.github,
    icon: FaGithub,
  },
  {
    name: "Instagram",
    label: "Instagram profile",
    href: "#",
    icon: FaInstagram,
  },
  {
    name: "Discord",
    label: "Discord profile",
    href: "#",
    icon: FaDiscord,
  },
  {
    name: "YouTube",
    label: "YouTube channel",
    href: "#",
    icon: FaYoutube,
  },
  {
    name: "TikTok",
    label: "TikTok profile",
    href: "#",
    icon: FaTiktok,
  },
];

const FooterSection: React.FC = () => {
  return (
    <>
      <div className="relative z-10 mb-48 w-full lg:flex">
        <div className="px-4 sm:px-8 lg:w-5/12">
          <h2 className="font-clashsemibold text-[3rem] leading-[1.05] tracking-tight text-white sm:text-[4rem] xl:text-[5rem]">
            Follow{" "}
            <span className="bg-gradient-to-r from-indigo-300 via-violet-300 to-fuchsia-400 bg-clip-text pb-2 text-transparent">
              me
            </span>
          </h2>
        </div>

        <ul className="mt-12 grid grid-cols-3 gap-3 px-4 sm:gap-4 sm:px-8 lg:mt-0 lg:w-7/12">
          {SOCIALS.map(({ name, label, href, icon: Icon }) => (
            <li key={name}>
              <a
                href={href}
                // Only real destinations open in a new tab.
                target={href === "#" ? undefined : "_blank"}
                rel={href === "#" ? undefined : "noreferrer"}
                aria-label={label}
                className={`${FOCUS_RING} group flex flex-col items-center gap-y-3 rounded-3xl border border-white/10 bg-white/5 px-2 py-6 transition-colors hover:border-fuchsia-400/40 hover:bg-white/10`}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-fuchsia-700 text-2xl text-white transition-colors group-hover:bg-fuchsia-600">
                  <Icon aria-hidden />
                </span>
                <span
                  className={`${rubik.className} text-sm text-gray-100 sm:text-lg`}
                >
                  {name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <MainFooter />
    </>
  );
};

export default FooterSection;
