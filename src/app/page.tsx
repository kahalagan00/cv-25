"use client";
import { Rubik } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { IoMdArrowBack, IoMdArrowForward, IoMdDownload } from "react-icons/io";
import { useLinkContext } from "./contexts/useLink";

const rubikRegular = Rubik({ weight: "300", subsets: ["latin"] });
const rubikBold = Rubik({ weight: "700", subsets: ["latin"] });

const Page: React.FC = () => {
  return (
    <>
      {/* Profile Section */}
      <section className="mb-64 mt-16 flex w-full px-4">
        <ProfileSection />
      </section>

      {/* About me summary section */}
      <section className="relative mb-64 flex w-full px-4">
        <AboutSection />
      </section>

      {/* Technical skills summary section */}
      <section className="relative mb-64 w-full px-4">
        <TechnicalSection />
      </section>

      {/* Project showcase section */}
      <section className="relative mb-64 w-full px-4">
        <ProjectSection />
      </section>

      {/* My blogs/videos/content section */}
      <section className="relative mb-64 w-full px-4">
        <BlogsSection />
      </section>

      {/* Contact developer section */}
      <section className="relative mb-64 w-full px-4">
        <ContactSection />
      </section>

      {/* Footer section with social links */}
      <section className="relative mb-16 w-full px-4">
        <FooterSection />
      </section>
    </>
  );
};

export default Page;

const ProfileSection: React.FC = () => {
  return (
    <>
      <div className="w-1/2 bg-indigo-950 pr-4 pt-16">
        <h2
          className={`${rubikRegular.className} text-4xl uppercase tracking-wide text-gray-400`}
        >
          Fullstack software engineer
        </h2>
        <h1 className="font-clashsemibold text-[8rem] leading-tight text-white">
          Joshmar Morales
        </h1>

        <div
          className={`${rubikRegular.className} w-[300px] border-l-2 border-l-gray-200 py-1 pl-8 text-2xl text-gray-400`}
        >
          I am a Full-Stack developer and I work in the United States.
        </div>
      </div>
      <div className="relative w-1/2 overflow-hidden">
        <div className="absolute left-1/2 top-1/4 flex h-[500px] w-[500px] -translate-x-1/2 transform items-center justify-center rounded-full border-2 border-fuchsia-500 bg-transparent">
          <div className="h-[90%] w-[90%] rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 opacity-80 mix-blend-multiply"></div>
        </div>

        <div className="absolute left-16 top-1/4 z-20 flex h-36 w-36 items-center justify-center rounded-full bg-fuchsia-800 bg-opacity-70">
          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-fuchsia-700 bg-opacity-80">
            <button className="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-fuchsia-600 transition-transform ease-in-out hover:bg-fuchsia-500 active:translate-y-1">
              <IoMdDownload className="text-2xl text-white" />
              <a target="_blank" href="documents/Joshmar_Morales_Resume_V1.pdf">
                <span className="text-2xl text-white">CV</span>
              </a>
            </button>
          </div>
        </div>

        <ImCross className="absolute left-1/4 top-9 h-8 w-8 text-white" />
        <ImCross className="absolute right-32 top-32 h-8 w-8 text-white" />

        <Image
          src="/images/Header_Torsoshot.png"
          width={550}
          height={550}
          alt="Picture of developer"
          className="absolute bottom-0 left-1/2 z-10 -translate-x-1/2"
        />
      </div>
    </>
  );
};

const AboutSection: React.FC = () => {
  return (
    <>
      <div className="w-3/5">
        <div className="relative h-[500px] w-[500px] overflow-hidden rounded-full bg-pink-200 sm:h-[600px] sm:w-[600px] xl:h-[700px] xl:w-[700px]">
          <Image
            src="/images/Coding_Desk.jpg"
            alt="Picture of desk"
            fill
            className="-translate-y-18 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 opacity-80 mix-blend-multiply"></div>
        </div>
      </div>
      <div className="flex w-2/5 flex-col justify-end text-white">
        <p
          className={`${rubikRegular.className} my-16 w-[500px] text-lg tracking-[.015em] text-gray-400`}
        >
          I am a Full Stack Developer with a strong passion for creating
          impactful, user-centered web applications. With a focus on both
          frontend and backend development, I enjoy building scalable solutions
          that solve real-world problems. I thrive in dynamic environments and
          am constantly looking for new opportunities to grow and contribute to
          meaningful projects.
        </p>
        <Link
          href="/contact"
          className={`${rubikBold.className} mb-8 flex w-48 items-center justify-center rounded-full bg-fuchsia-700 px-9 py-4 text-lg hover:bg-fuchsia-600`}
        >
          Contact me
        </Link>
      </div>

      <h1 className="absolute left-1/2 top-0 w-[300px] -translate-x-1/2 font-clashsemibold text-[8rem] leading-tight text-white">
        About me
      </h1>
      <Link href="/about">
        <IoMdArrowForward className="absolute right-0 top-1/4 w-[300px] -translate-y-1/4 font-clashsemibold text-[10rem] leading-tight text-fuchsia-600" />
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
      <div className="flex">
        <div className="w-1/2">
          <h1 className="font-clashsemibold text-[8rem] leading-tight text-white">
            My skills
          </h1>
        </div>
        <div className="w-1/2 overflow-hidden">
          <IoMdArrowBack className="-translate-x-6 font-clashsemibold text-[10rem] leading-tight text-fuchsia-600" />

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

      <div className="mt-12 flex">
        <div className="w-1/2">
          <ul className="w-full">
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
        <div className="w-1/2">
          <ul className="w-full">
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
      <p className={`${rubikRegular.className} text-2xl text-gray-100`}>
        {skill}
      </p>
      <div className="flex">
        {ratingsArr.map((x, idx) =>
          x ? (
            <div
              key={`Rating valid ${idx}`}
              className="ml-2 h-5 w-5 rounded-full bg-fuchsia-600"
            ></div>
          ) : (
            <div
              key={`Rating invalid ${idx}`}
              className="ml-2 h-5 w-5 rounded-full border-2 border-fuchsia-600 bg-transparent"
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
  return (
    <>
      <div className="relative flex justify-end">
        <h1 className="mr-32 font-clashsemibold text-[8rem] leading-tight text-white">
          My projects
        </h1>
        <ImCross className="absolute h-20 w-20 translate-y-48 text-white" />
      </div>
      <div className="mt-32 flex">
        <div className="w-1/2">
          <div className="h-[400px] w-full overflow-hidden rounded-[3rem] bg-slate-500 drop-shadow-2xl">
            Artwork of project
          </div>
        </div>
        <div className="w-1/2 text-white">
          <div className="flex -translate-x-16 translate-y-16 flex-col">
            <h3 className="font-clashmedium text-[4rem] tracking-wide">
              Jhuv Nutrition
            </h3>
            <p className="font-clashlight text-[2.5rem]">Current</p>
          </div>
        </div>
      </div>

      <div className="mt-32 flex">
        <div className="z-20 w-[45%] text-white">
          <div className="flex translate-x-16 translate-y-72 flex-col items-end">
            <h3 className="font-clashmedium text-[4rem] tracking-wide">
              CV 24 Portfolio
            </h3>
            <p className="font-clashlight text-[2.5rem]">December 2024</p>
          </div>
        </div>
        <div className="z-10 w-1/2">
          <div className="h-[500px] w-[500px] overflow-hidden rounded-[3rem] bg-cyan-700 drop-shadow-2xl">
            Artwork of project
          </div>
        </div>
      </div>

      <div className="mt-32 flex">
        <div className="w-[35%]">
          <div className="h-[400px] w-full overflow-hidden rounded-[3rem] bg-purple-800 drop-shadow-2xl">
            Artwork of project
          </div>
        </div>
        <div className="w-1/2 text-white">
          <div className="flex -translate-x-16 translate-y-32 flex-col">
            <h3 className="font-clashmedium text-[4rem] tracking-wide">
              Weather App
            </h3>
            <p className="font-clashlight text-[2.5rem]">September 2024</p>
          </div>
        </div>
      </div>

      <div className="mt-32 flex">
        <div className="z-20 w-[30%] text-white">
          <div className="flex translate-x-16 translate-y-24 flex-col items-end">
            <h3 className="text-end font-clashmedium text-[4rem] tracking-wide">
              Bluelock Drowning
            </h3>
            <p className="font-clashlight text-[2.5rem]">May 2023</p>
          </div>
        </div>
        <div className="z-10 w-[70%]">
          <div className="h-[400px] w-full overflow-hidden rounded-[3rem] bg-cyan-700 drop-shadow-2xl">
            Artwork of project
          </div>
        </div>
      </div>

      <div className="mt-32 flex justify-center">
        <Link href="/projects">
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

  useEffect(() => {
    fetch("/data/blogsData.json")
      .then((response) => response.json())
      .then((data) => setBlogsData(data));
  }, []);

  // Cuts the listing in half
  const halfIndex = blogsData.length / 2;

  return (
    <>
      <div className="relative flex">
        <h1 className="mr-32 font-clashsemibold text-[8rem] leading-tight text-white">
          My blogs
        </h1>
        <ImCross className="absolute right-0 top-0 h-24 w-24 text-fuchsia-600" />
      </div>
      <div className="flex w-full gap-x-8 text-white">
        {/* First Half of List */}
        <div className="w-1/2">
          <Link
            href="/blogs"
            className={`${rubikBold.className} mt-32 flex w-48 items-center justify-center rounded-full bg-fuchsia-700 px-9 py-4 text-lg hover:bg-fuchsia-600`}
          >
            See all
          </Link>
          {blogsData.map(
            (data: { title: string; summary: string }, idx: number) =>
              idx < halfIndex && (
                <BlogCard
                  key={data.title}
                  title={data.title}
                  summary={data.summary}
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
                  key={data.title}
                  title={data.title}
                  summary={data.summary}
                />
              ),
          )}

          <ImCross className="absolute bottom-0 right-0 h-20 w-20 text-white" />
        </div>
      </div>
    </>
  );
};

const BlogCard = ({ title, summary }: { title: string; summary: string }) => {
  return (
    <div className="my-16">
      <div className="mb-8 h-[400px] w-full rounded-[3rem] bg-slate-300"></div>
      <h3 className="mb-6 font-clashregular text-5xl">{title}</h3>
      <p className={`${rubikRegular.className} mb-6 text-xl text-gray-400`}>
        {summary}
      </p>
      <Link href="/blogs">
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
  const inputStyleNormal = `h-16 w-full rounded-full pl-6 bg-indigo-900 text-white outline-none placeholder:tracking-wide`;

  return (
    <>
      <div className="relative flex w-full flex-col items-center">
        <h1 className="font-clashsemibold text-[8rem] leading-tight text-white">
          Contact me
        </h1>
        <form action="" className="block w-1/3 flex-col">
          <div className="my-8">
            <p className={`${rubikBold.className} mb-2 text-lg text-white`}>
              Full name*
            </p>
            <input
              placeholder="Enter your full name..."
              type="text"
              className={inputStyleNormal}
            />
          </div>

          <div className="my-8">
            <p className={`${rubikBold.className} mb-2 text-lg text-white`}>
              Email*
            </p>
            <input
              placeholder="Enter your email..."
              type="text"
              className={inputStyleNormal}
            />
          </div>

          <div className="relative my-8">
            <p className={`${rubikBold.className} mb-2 text-lg text-white`}>
              Message*
            </p>
            <textarea
              placeholder="Enter your message..."
              className="min-h-48 w-full rounded-3xl bg-indigo-900 pl-6 pt-4 text-white outline-none placeholder:tracking-wide"
            ></textarea>

            <IoMdArrowBack className="absolute right-0 top-10 translate-x-64 font-clashsemibold text-[10rem] leading-tight text-fuchsia-600" />
          </div>

          <Link
            href="/contact"
            className={`${rubikBold.className} mx-auto flex w-48 items-center justify-center rounded-full bg-fuchsia-700 px-9 py-4 text-lg text-white hover:bg-fuchsia-600`}
          >
            Send
          </Link>
        </form>
      </div>
    </>
  );
};

const FooterSection: React.FC = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { setCurrentLink } = useLinkContext();

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

  return (
    <>
      <div className="mb-48 flex w-full">
        <div className="relative w-3/4">
          <h1 className="font-clashsemibold text-[8rem] leading-tight text-white">
            Follow me
          </h1>
          <div className="mt-4 flex gap-x-3">{dotsArt}</div>
          <ImCross className="absolute left-0 top-0 h-24 w-24 -translate-x-32 -translate-y-32 text-fuchsia-600" />
        </div>
        <div className="w-1/4">
          <div className="mb-8 flex justify-evenly">
            <a target="_blank" href="https://discord.com">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-fuchsia-600 hover:bg-fuchsia-500">
                <FaDiscord className="h-14 w-14" />
              </div>
            </a>
            <a target="_blank" href="https://twitter.com">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-fuchsia-600 hover:bg-fuchsia-500">
                <FaTwitter className="h-14 w-14" />
              </div>
            </a>
            <a target="_blank" href="https://instagram.com">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-fuchsia-600 hover:bg-fuchsia-500">
                <FaInstagram className="h-14 w-14" />
              </div>
            </a>
          </div>
          <div className="flex justify-evenly">
            <a target="_blank" href="https://facebook.com">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-fuchsia-600 hover:bg-fuchsia-500">
                <FaFacebook className="h-14 w-14" />
              </div>
            </a>
            <a target="_blank" href="https://youtube.com">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-fuchsia-600 hover:bg-fuchsia-500">
                <FaYoutube className="h-14 w-14" />
              </div>
            </a>
            <a target="_blank" href="https://tiktok.com">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-fuchsia-600 hover:bg-fuchsia-500">
                <FaTiktok className="h-14 w-14" />
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="mb-4 flex border-t-2 border-t-fuchsia-500">
        <div className="mb-8 mt-12 flex w-full text-white">
          <div className="w-1/2 font-clashregular text-3xl">
            Joshmar Morales
          </div>
          <div
            className={`${rubikRegular.className} flex w-1/2 justify-end gap-x-32 text-lg tracking-wide text-white`}
          >
            <Link onClick={() => setCurrentLink("home")} href="/">
              Home
            </Link>
            <Link href="/blogs" onClick={() => setCurrentLink("blogs")}>
              Blogs
            </Link>
            <Link onClick={() => setCurrentLink("contact")} href="/contact">
              Contact
            </Link>
          </div>
        </div>
      </div>

      <div className="ml-auto flex h-8 w-1/2 justify-end gap-x-12 tracking-wide">
        <p className={`${rubikRegular.className} text-sm text-gray-400`}>
          &copy; {new Date().getFullYear()} Joshmar Morales. All rights reserved
        </p>
        <p className={`${rubikRegular.className} text-sm text-gray-400`}>
          Terms of Use
        </p>
        <p className={`${rubikRegular.className} text-sm text-gray-400`}>
          Privacy Policy
        </p>
      </div>
    </>
  );
};
