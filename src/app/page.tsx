"use client";
import { Rubik } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaDiscord,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { IoMdArrowBack, IoMdArrowForward, IoMdDownload } from "react-icons/io";
import { useLinkContext } from "./contexts/useLink";
import MainFooter from "./_components/MainFooter";
import { DOCUMENT_PATHS, SOCIAL_LINKS } from "./_utils/constants";

const rubikRegular = Rubik({ weight: "300", subsets: ["latin"] });
const rubikBold = Rubik({ weight: "700", subsets: ["latin"] });

const generateDotsArt = (cols: number) => {
  const dotsArt = [];
  for (let i = 0; i < cols; ++i) {
    dotsArt.push(
      <div className="flex flex-col gap-y-8" key={i}>
        <div className="h-2 w-2 rounded-full bg-indigo-700"></div>
        <div className="h-2 w-2 rounded-full bg-indigo-700"></div>
        <div className="h-2 w-2 rounded-full bg-indigo-700"></div>
      </div>,
    );
  }
  return dotsArt;
};

const Page: React.FC = () => {
  return (
    <>
      {/* Profile Section */}
      <section className="relative w-screen">
        <div className="relative mx-auto mb-64 mt-16 max-w-screen-2xl px-4 lg:flex">
          <ProfileSection />
        </div>
        {/* <Image
          src={"/images/Test_BG1.png"}
          fill
          alt="Test of background"
          quality={100}
          className="absolute z-0 object-cover"
        /> */}
      </section>

      {/* About me summary section */}
      <section className="relative w-screen">
        <div className="relative mx-auto mb-64 w-full max-w-screen-2xl px-4 lg:flex">
          <AboutSection />
        </div>
        {/* <Image
          src={"/images/AboutMeSection_BG1.png"}
          fill
          alt="About me section background"
          quality={100}
          className="absolute z-0 w-full"
        /> */}
      </section>

      {/* Technical skills summary section */}
      <section className="relative w-screen">
        <div className="relative mx-auto mb-64 w-full max-w-screen-2xl px-4">
          <TechnicalSection />
        </div>
        {/* <Image
          src={"/images/TechnicalSection_BG1.png"}
          fill
          alt="About me section background"
          quality={100}
          className="absolute z-0 object-cover"
        /> */}
      </section>

      {/* Project showcase section */}
      <section className="relative w-screen">
        <div className="relative mx-auto mb-64 w-full max-w-screen-2xl px-4">
          <ProjectSection />
        </div>
        {/* <Image
          src={"/images/ProjectSection_BG1.png"}
          fill
          alt="About me section background"
          quality={100}
          className="absolute z-0 object-cover"
        /> */}
      </section>

      {/* My blogs/videos/content section */}
      <section className="relative w-screen">
        <div className="relative mx-auto mb-64 w-full max-w-screen-2xl px-4">
          <BlogsSection />
        </div>
        {/* <Image
          src={"/images/BlogsSection_BG1.png"}
          fill
          alt="About me section background"
          quality={100}
          className="absolute z-0 object-cover"
        /> */}
      </section>

      {/* Contact developer section */}
      <section className="relative w-screen">
        <div className="relative mx-auto mb-64 w-full max-w-screen-2xl px-4">
          <ContactSection />
        </div>
        {/* <Image
          src={"/images/ContactSection_BG1.png"}
          fill
          alt="About me section background"
          quality={100}
          className="absolute z-0 object-cover"
        /> */}
      </section>

      {/* Footer section with social links */}
      <section className="relative w-screen">
        <div className="relative mx-auto mb-16 w-full max-w-screen-2xl px-4">
          <FooterSection />
        </div>
        {/* <Image
          src={"/images/FooterSection_BG1.png"}
          fill
          alt="About me section background"
          quality={100}
          className="absolute z-0 object-cover"
        /> */}
      </section>
    </>
  );
};

export default Page;

const ProfileSection: React.FC = () => {
  return (
    <>
      <div className="relative z-10 w-full pl-16 pt-16 sm:pl-24 lg:w-1/2">
        <h2
          className={`${rubikRegular.className} text-xl uppercase tracking-wide text-gray-400 sm:text-3xl xl:text-4xl`}
        >
          Software Engineer
        </h2>
        <h1 className="font-clashsemibold text-[4rem] leading-tight text-white sm:text-[6rem] xl:text-[8rem]">
          Joshmar Morales
        </h1>

        <div
          className={`${rubikRegular.className} w-[300px] border-l-2 border-l-gray-200 py-1 pl-8 text-sm text-gray-400 sm:text-xl xl:text-2xl`}
        >
          I am a Software Engineer and I work in the United States.
        </div>

        <div className="absolute left-0 top-0 flex h-[100px] translate-y-32 flex-col justify-between sm:h-[200px]">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="h-[5px] w-10 rotate-45 rounded-md bg-indigo-400 sm:w-20"
            ></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 mt-8 h-[500px] w-full overflow-hidden lg:mt-0 lg:h-auto lg:w-1/2">
        <div className="absolute left-1/2 top-1/4 flex h-[350px] w-[350px] -translate-x-1/2 translate-y-16 transform items-center justify-center rounded-full border-2 border-fuchsia-500 bg-transparent lg:h-[400px] lg:w-[400px] lg:translate-y-0 xl:h-[500px] xl:w-[500px]">
          <div className="h-[90%] w-[90%] rounded-full bg-gradient-to-r from-indigo-300 via-violet-300 to-fuchsia-300 opacity-80 mix-blend-multiply"></div>
        </div>

        <div className="absolute left-16 top-1/4 z-20 flex h-32 w-32 -translate-x-12 items-center justify-center rounded-full bg-fuchsia-800 bg-opacity-70 lg:-translate-x-0 xl:h-36 xl:w-36">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-fuchsia-700 bg-opacity-80 xl:h-28 xl:w-28">
            <button className="flex h-16 w-16 flex-col items-center justify-center rounded-full bg-fuchsia-600 transition-transform ease-in-out hover:bg-fuchsia-500 active:translate-y-1 xl:h-20 xl:w-20">
              <IoMdDownload className="text-xl text-white xl:text-2xl" />
              <a target="_blank" href={DOCUMENT_PATHS.resume}>
                <span className="text-xl text-white xl:text-2xl">CV</span>
              </a>
            </button>
          </div>
        </div>

        <ImCross className="absolute left-1/4 top-9 h-8 w-8 text-white" />
        <ImCross className="absolute right-32 top-32 h-8 w-8 text-white" />

        <Image
          src="/images/CV25_PFP.PNG"
          width={400}
          height={400}
          alt="Picture of developer"
          className="absolute bottom-0 left-1/2 z-10 -translate-x-1/2 translate-y-16 scale-90 brightness-110 xl:translate-y-0 xl:scale-100"
        />

        <div className="absolute right-0 top-1/4 z-20 flex flex-col gap-y-4">
          <a href={SOCIAL_LINKS.linkedin} target="_blank">
            <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-700 transition-all duration-150 ease-in hover:scale-125 hover:bg-indigo-500">
              <FaLinkedin className="text-xl text-white" />
            </div>
          </a>
          <a href={SOCIAL_LINKS.github} target="_blank">
            <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-700 transition-all duration-150 ease-in hover:scale-125 hover:bg-indigo-500">
              <FaGithub className="text-xl text-white" />
            </div>
          </a>
          <a href={"#"}>
            <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-700 transition-all duration-150 ease-in hover:scale-125 hover:bg-indigo-500">
              <FaDiscord className="text-xl text-white" />
            </div>
          </a>
          <a href={"#"}>
            <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-700 transition-all duration-150 ease-in hover:scale-125 hover:bg-indigo-500">
              <FaInstagram className="text-xl text-white" />
            </div>
          </a>
          <a href={"#"}>
            <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-700 transition-all duration-150 ease-in hover:scale-125 hover:bg-indigo-500">
              <FaFacebook className="text-xl text-white" />
            </div>
          </a>

          <a href={"#"}>
            <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-700 transition-all duration-150 ease-in hover:scale-125 hover:bg-indigo-500">
              <FaTiktok className="text-xl text-white" />
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

const AboutSection: React.FC = () => {
  const { setCurrentLink } = useLinkContext();
  return (
    <>
      <div className="relative z-10 flex w-full justify-center lg:w-3/5 lg:justify-start">
        <div className="relative h-[400px] w-[400px] overflow-hidden rounded-full bg-pink-200 sm:h-[500px] sm:w-[500px] xl:h-[700px] xl:w-[700px]">
          <Image
            src="/images/Coding_Desk.jpg"
            alt="Picture of desk"
            fill
            className="-translate-y-18 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 opacity-80 mix-blend-multiply"></div>
        </div>
      </div>
      <div className="relative z-10 flex w-full flex-col items-center justify-center text-white sm:justify-end lg:w-2/5 lg:items-start">
        <p
          className={`${rubikRegular.className} my-16 w-[400px] tracking-[.015em] text-gray-400 xl:w-[500px] xl:text-lg`}
        >
          I am a Full Stack Software Engineer with a strong passion for creating
          impactful, user-centered web and Android applications. With a focus on
          both frontend and backend development, I enjoy building scalable
          solutions that solve real-world problems. I thrive in dynamic
          environments and am constantly looking for new opportunities to grow
          and contribute to meaningful projects.
        </p>
        <Link
          href="/contact"
          className={`${rubikBold.className} relative z-10 mb-8 flex w-48 items-center justify-center rounded-full bg-fuchsia-700 px-9 py-4 text-lg hover:bg-fuchsia-600`}
        >
          Contact me
        </Link>

        <div className="absolute bottom-0 right-0 mb-8 flex gap-x-8">
          {generateDotsArt(5)}
        </div>
      </div>

      <h1 className="absolute left-1/2 top-0 z-10 w-[300px] -translate-x-1/2 -translate-y-8 text-center font-clashsemibold text-[4rem] leading-tight text-white sm:text-[6rem] lg:translate-y-0 lg:text-start xl:text-[8rem]">
        About me
      </h1>
      <Link
        href="/about"
        onClick={() => setCurrentLink("about")}
        className="z-10"
      >
        <IoMdArrowForward className="absolute right-0 top-1/4 w-[300px] -translate-y-20 font-clashsemibold text-[8rem] leading-tight text-fuchsia-600 xl:-translate-y-1/4 xl:text-[10rem]" />
      </Link>
    </>
  );
};

const TechnicalSection: React.FC = () => {
  const [skillsData, setSkillsData] = useState([]);

  useEffect(() => {
    fetch("/data/skillsData.json")
      .then((response) => response.json())
      .then((data) => setSkillsData(data));
  }, []);

  return (
    <>
      <div className="relative z-20 flex">
        <div className="flex w-full justify-center lg:block lg:w-1/2">
          <h1 className="font-clashsemibold text-[4rem] leading-tight text-white sm:text-[6rem] xl:text-[8rem]">
            My skills
          </h1>
        </div>
        <div className="hidden overflow-hidden lg:block lg:w-1/2">
          <IoMdArrowBack className="-translate-x-6 font-clashsemibold text-[8rem] leading-tight text-fuchsia-600 xl:text-[10rem]" />

          {/* Long Arrow implementation */}
          {/* Use and investigate again later when the entire app is already done */}
          {/* <Image
              src="/svgs/arrow-left-long.svg"
              alt="Picture of left long arrow"
              height={50}
              width={400}
              className="object-cover"
            /> */}
        </div>
      </div>

      <div className="relative z-20 mt-12 flex flex-col lg:flex-row">
        <div className="flex w-full justify-center lg:block lg:w-1/2">
          <ul className="lg:w-full">
            {skillsData.map(
              (data: { skill: string; rating: number }, idx: number) =>
                idx < skillsData.length / 2 && (
                  <SkillRow
                    key={data.skill}
                    skill={data.skill}
                    rating={data.rating}
                  />
                ),
            )}
          </ul>
        </div>
        <div className="flex w-full justify-center lg:block lg:w-1/2">
          <ul className="lg:w-full">
            {skillsData.map(
              (data: { skill: string; rating: number }, idx: number) =>
                idx >= skillsData.length / 2 && (
                  <SkillRow
                    key={data.skill}
                    skill={data.skill}
                    rating={data.rating}
                  />
                ),
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

const SkillRow = ({ skill, rating }: { skill: string; rating: number }) => {
  const ratingsArr = [];
  for (let i = 0; i < 10; i++) {
    if (i + 1 <= rating) {
      ratingsArr.push(1);
    } else {
      ratingsArr.push(0);
    }
  }

  return (
    <li className="my-4 grid w-full grid-cols-[150px_1fr] justify-start text-white">
      <p
        className={`${rubikRegular.className} text-xl text-gray-100 lg:text-2xl`}
      >
        {skill}
      </p>
      <div className="flex">
        {ratingsArr.map((x, idx) =>
          x ? (
            <div
              key={`Rating valid ${idx}`}
              className="ml-2 h-4 w-4 rounded-full bg-fuchsia-600 lg:h-5 lg:w-5"
            ></div>
          ) : (
            <div
              key={`Rating invalid ${idx}`}
              className="ml-2 h-4 w-4 rounded-full border-2 border-fuchsia-600 bg-transparent lg:h-5 lg:w-5"
            ></div>
          ),
        )}
        {/* <div className="ml-2 h-5 w-5 rounded-full bg-fuchsia-600"></div> */}
        {/* <div className="ml-2 h-5 w-5 rounded-full border-2 border-fuchsia-600 bg-transparent"></div> */}
      </div>
    </li>
  );
};

const ProjectSection: React.FC = () => {
  const { setCurrentLink } = useLinkContext();

  return (
    <>
      <div className="relative z-10 flex justify-end">
        <h1 className="mx-auto font-clashsemibold text-[4rem] leading-tight text-white sm:text-[6rem] lg:mx-0 lg:mr-32 xl:text-[8rem]">
          My projects
        </h1>
        <ImCross className="absolute h-16 w-16 translate-y-32 text-white lg:h-20 lg:w-20 lg:translate-y-48" />
      </div>

      <div className="relative z-10 mt-32 flex flex-col px-4 lg:flex-row lg:px-0">
        <div className="relative lg:w-1/2">
          <div className="relative h-[400px] w-full overflow-hidden rounded-[3rem] bg-violet-800 drop-shadow-2xl">
            <Image
              src="/images/projects_images/showcases/Jhuv_Nutrition_Showcase.png"
              fill
              className="object-cover lg:-translate-x-20 lg:translate-y-16"
              alt="Showcase of the Jhuv Nutrition App"
            />
          </div>
          <div className="absolute bottom-0 left-0 hidden translate-y-32 gap-x-8 lg:flex">
            {generateDotsArt(10)}
          </div>
        </div>
        <div className="text-white lg:w-1/2">
          <div className="flex flex-col lg:-translate-x-16 lg:translate-y-16">
            <h3 className="font-clashmedium text-[3rem] tracking-wide lg:text-[4rem]">
              Jhuv Nutrition
            </h3>
            <p className="font-clashlight text-[2rem] lg:text-[2.5rem]">
              Current
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-16 flex flex-col px-4 lg:mt-32 lg:flex-row lg:px-0">
        <div className="z-20 hidden w-[45%] text-white lg:block">
          <div className="flex translate-x-16 translate-y-72 flex-col items-end">
            <h3 className="font-clashmedium text-[4rem] tracking-wide">
              CV 24 Portfolio
            </h3>
            <p className="font-clashlight text-[2.5rem]">December 2024</p>
          </div>
        </div>

        <div className="relative z-10 lg:w-1/2">
          <div className="h-[400px] overflow-hidden rounded-[3rem] bg-violet-400 drop-shadow-2xl lg:h-[500px] lg:w-[500px]">
            <Image
              src="/images/projects_images/showcases/CV24_Showcase.png"
              width={1000}
              height={300}
              className="mt-16 translate-x-20 -rotate-45 scale-150"
              alt="Showcase of the CV 24 Portfolio"
            />
          </div>

          <div className="absolute bottom-0 left-0 ml-72 hidden translate-y-32 gap-x-8 lg:flex">
            {generateDotsArt(5)}
          </div>
        </div>

        <div className="z-20 text-white lg:hidden">
          <div className="flex flex-col">
            <h3 className="font-clashmedium text-[3rem] tracking-wide lg:text-[4rem]">
              CV 24 Portfolio
            </h3>
            <p className="font-clashlight text-[2rem] lg:text-end lg:text-[2.5rem]">
              December 2024
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-16 flex flex-col px-4 lg:mt-32 lg:flex-row lg:px-0">
        <div className="lg:w-[35%]">
          <div className="h-[400px] w-full overflow-hidden rounded-[3rem] bg-purple-800 drop-shadow-2xl">
            <Image
              src="/images/projects_images/showcases/WeatherApp_Showcase.png"
              width={450}
              height={300}
              className="mx-auto mt-14 object-contain lg:mx-0 lg:mt-24"
              alt="Showcase of the Weather App"
            />
          </div>
        </div>
        <div className="text-white lg:w-1/2">
          <div className="flex flex-col lg:-translate-x-16 lg:translate-y-32">
            <h3 className="font-clashmedium text-[3rem] tracking-wide lg:text-[4rem]">
              Weather App
            </h3>
            <p className="font-clashlight text-[2rem] lg:text-[2.5rem]">
              September 2024
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-16 flex flex-col px-4 lg:mt-32 lg:flex-row lg:px-0">
        <div className="z-20 hidden w-[30%] text-white lg:block">
          <div className="flex translate-x-16 translate-y-24 flex-col items-end">
            <h3 className="text-end font-clashmedium text-[4rem] tracking-wide">
              Bluelock Detection
            </h3>
            <p className="font-clashlight text-[2.5rem]">May 2023</p>
          </div>
        </div>

        <div className="z-10 lg:w-[70%]">
          <div className="h-[400px] w-full overflow-hidden rounded-[3rem] bg-cyan-700 drop-shadow-2xl">
            <Image
              src="/images/projects_images/showcases/Bluelock_Showcase.png"
              width={975}
              height={300}
              className="translate-y-32 scale-90 lg:ml-16 lg:mt-24 lg:translate-y-0 lg:object-contain"
              alt="Showcase of the Bluelock Project"
            />
          </div>
        </div>

        <div className="z-20 text-white lg:hidden lg:w-[30%]">
          <div className="flex flex-col">
            <h3 className="font-clashmedium text-[3rem] tracking-wide lg:text-[4rem]">
              Bluelock Detection
            </h3>
            <p className="font-clashlight text-[2rem] lg:text-[2.5rem]">
              May 2023
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-32 flex justify-center">
        <Link href="/projects" onClick={() => setCurrentLink("projects")}>
          <p
            className={`${rubikRegular.className} text-2xl tracking-wide text-fuchsia-600 hover:underline`}
          >
            See more projects &gt;&gt;
          </p>
        </Link>
      </div>
    </>
  );
};

const BlogsSection: React.FC = () => {
  const [blogsData, setBlogsData] = useState([]);
  const { setCurrentLink } = useLinkContext();

  useEffect(() => {
    fetch("/data/blogsData.json")
      .then((response) => response.json())
      .then((data) => setBlogsData(data));
  }, []);

  // Cuts the listing in half
  const halfIndex = blogsData.length / 2;

  return (
    <>
      <div className="relative z-10 flex">
        <h1 className="mx-auto font-clashsemibold text-[4rem] leading-tight text-white sm:text-[6rem] lg:mx-0 lg:mr-32 lg:text-[8rem]">
          My blogs
        </h1>
        <ImCross className="absolute right-0 top-0 h-16 w-16 text-fuchsia-600 lg:h-24 lg:w-24" />
      </div>

      <div className="relative z-10 flex w-full flex-col px-4 text-white lg:hidden">
        {blogsData.map(
          (data: { title: string; summary: string }, idx: number) => (
            <BlogCard
              key={idx.toString() + data.title}
              title={data.title}
              summary={data.summary}
              index={idx}
            />
          ),
        )}

        <Link
          onClick={() => setCurrentLink("blogs")}
          href="/blogs"
          className={`${rubikBold.className} mx-auto flex w-48 items-center justify-center rounded-full bg-fuchsia-700 px-9 py-4 text-lg hover:bg-fuchsia-600`}
        >
          See all
        </Link>
      </div>

      <div className="relative z-10 hidden w-full gap-x-8 text-white lg:flex">
        {/* First Half of List */}
        <div className="w-1/2">
          <Link
            onClick={() => setCurrentLink("blogs")}
            href="/blogs"
            className={`${rubikBold.className} mt-32 flex w-48 items-center justify-center rounded-full bg-fuchsia-700 px-9 py-4 text-lg hover:bg-fuchsia-600`}
          >
            See all
          </Link>
          {blogsData.map(
            (data: { title: string; summary: string }, idx: number) =>
              idx < halfIndex && (
                <BlogCard
                  key={idx.toString() + data.title}
                  title={data.title}
                  summary={data.summary}
                  index={idx}
                />
              ),
          )}
        </div>

        {/* Second half of list */}
        <div className="relative w-1/2">
          {blogsData.map(
            (data: { title: string; summary: string }, idx: number) =>
              idx >= halfIndex && (
                <BlogCard
                  key={idx.toString() + data.title}
                  title={data.title}
                  summary={data.summary}
                  index={idx}
                />
              ),
          )}

          <ImCross className="absolute bottom-0 right-0 h-20 w-20 text-white" />
        </div>
      </div>
    </>
  );
};

const BlogCard = ({
  title,
  summary,
  index,
}: {
  title: string;
  summary: string;
  index: number;
}) => {
  const { setCurrentLink } = useLinkContext();

  return (
    <div className="my-16">
      <div className="relative mb-8 h-[400px] w-full overflow-hidden rounded-[3rem] bg-slate-300">
        <Image
          src={`/images/blogs_images/${index}.jpg`}
          fill
          alt={`Image for blog number ${index}`}
          className="object-cover"
        />
      </div>
      <h3 className="mb-6 font-clashregular text-5xl">{title}</h3>
      <p className={`${rubikRegular.className} mb-6 text-xl text-gray-400`}>
        {summary}
      </p>
      <Link href="/blogs" onClick={() => setCurrentLink("blogs")}>
        <p
          className={`${rubikRegular.className} text-2xl tracking-wide text-fuchsia-600 hover:underline`}
        >
          Read more &gt;&gt;
        </p>
      </Link>
    </div>
  );
};

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  // const { setCurrentLink } = useLinkContext();
  const inputStyleNormal = `h-16 w-full rounded-full pl-6 bg-indigo-900 text-white outline-none placeholder:tracking-wide`;

  // eslint-disable-next-line
  // @ts-ignore
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // eslint-disable-next-line
  // @ts-ignore
  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${formData.email}?subject=Message from ${formData.name}&body=${encodeURIComponent(
      formData.message,
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      <div className="relative z-10 flex w-full flex-col items-center">
        <h1 className="font-clashsemibold text-[4rem] leading-tight text-white sm:text-[6rem] lg:text-[8rem]">
          Contact me
        </h1>
        <form
          onSubmit={handleSubmit}
          className="block w-full flex-col px-4 sm:w-1/2 sm:px-0 lg:w-1/3"
        >
          <div className="my-8">
            <p className={`${rubikBold.className} mb-2 text-lg text-white`}>
              Full name*
            </p>
            <input
              placeholder="Enter your full name..."
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={inputStyleNormal}
            />
          </div>

          <div className="my-8">
            <p className={`${rubikBold.className} mb-2 text-lg text-white`}>
              Email*
            </p>
            <input
              placeholder="Enter your email..."
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={inputStyleNormal}
            />
          </div>

          <div className="relative my-8">
            <p className={`${rubikBold.className} mb-2 text-lg text-white`}>
              Message*
            </p>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Enter your message..."
              className="min-h-48 w-full rounded-3xl bg-indigo-900 pl-6 pt-4 text-white outline-none placeholder:tracking-wide"
            ></textarea>

            <IoMdArrowBack className="absolute right-0 top-10 hidden translate-x-44 font-clashsemibold text-[8rem] leading-tight text-fuchsia-600 sm:block lg:translate-x-64 lg:text-[10rem]" />
          </div>

          <button
            type="submit"
            className={`${rubikBold.className} mx-auto flex w-48 items-center justify-center rounded-full bg-fuchsia-700 px-9 py-4 text-lg text-white hover:bg-fuchsia-600`}
          >
            Send Email
          </button>

          {/* <Link
            href="/contact"
            className={`${rubikBold.className} mx-auto flex w-48 items-center justify-center rounded-full bg-fuchsia-700 px-9 py-4 text-lg text-white hover:bg-fuchsia-600`}
            onClick={() => setCurrentLink("contact")}
          >
            Send
          </Link> */}
        </form>

        <div className="absolute bottom-1/4 hidden translate-y-16 flex-col gap-y-8 max-lg:left-0 sm:flex lg:right-0">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="flex gap-x-8">
              {generateDotsArt(3)}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

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
