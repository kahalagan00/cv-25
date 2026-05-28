"use client";
import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { SOCIAL_LINKS } from "../../_utils/constants";
import MainFooter from "../MainFooter";

const FooterSection: React.FC = () => {
  const dotsArt = [];
  for (let i = 0; i < 20; ++i) {
    dotsArt.push(
      <div
        key={i}
        className={`h-3 w-3 rounded-full bg-fuchsia-600 md:h-5 md:w-5`}
        style={{ opacity: 1 - i * 0.05 }}
      ></div>,
    );
  }

  const socialButtonParentStyle = `flex lg:h-20 lg:w-20 h-16 w-16 items-center justify-center rounded-full bg-fuchsia-600 hover:bg-fuchsia-500 transition-all duration-150 ease-in hover:scale-110`;
  const socialButtonStyle = `lg:h-14 lg:w-14 h-10 w-10`;

  return (
    <>
      <div className="relative z-10 mb-48 flex w-full flex-col px-4 lg:flex-row">
        <div className="relative flex w-full flex-col items-center justify-center lg:block lg:w-3/4">
          <h1 className="font-clashsemibold text-[4rem] leading-tight text-white sm:text-[6rem] xl:text-[8rem]">
            Follow me
          </h1>
          <div className="mt-4 flex gap-x-3">{dotsArt}</div>
          <ImCross className="absolute left-0 top-0 h-24 w-24 -translate-x-32 -translate-y-32 text-fuchsia-600" />
        </div>

        <div className="mt-8 w-full lg:mt-0 lg:w-1/4">
          <div className="mb-8 flex justify-evenly gap-x-4">
            <a target="_blank" href={SOCIAL_LINKS.linkedin}>
              <div className={socialButtonParentStyle}>
                <FaLinkedin className={socialButtonStyle} />
              </div>
            </a>

            <a target="_blank" href={SOCIAL_LINKS.github}>
              <div className={socialButtonParentStyle}>
                <FaGithub className={socialButtonStyle} />
              </div>
            </a>
            <a href={"#"}>
              <div className={socialButtonParentStyle}>
                <FaInstagram className={socialButtonStyle} />
              </div>
            </a>
          </div>
          <div className="flex justify-evenly gap-x-4">
            <a href={"#"}>
              <div className={socialButtonParentStyle}>
                <FaDiscord className={socialButtonStyle} />
              </div>
            </a>
            <a href={"#"}>
              <div className={socialButtonParentStyle}>
                <FaYoutube className={socialButtonStyle} />
              </div>
            </a>
            <a href={"#"}>
              <div className={socialButtonParentStyle}>
                <FaTiktok className={socialButtonStyle} />
              </div>
            </a>
          </div>
        </div>
      </div>
      <MainFooter />
    </>
  );
};

export default FooterSection;
