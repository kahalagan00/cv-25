"use client";
import { Rubik } from "next/font/google";

import MainFooter from "../_components/MainFooter";
import { useEffect, useState } from "react";

const rubikRegular = Rubik({ weight: "300", subsets: ["latin"] });
// const rubikBold = Rubik({ weight: "700", subsets: ["latin"] });

type BlogType = {
  title: string;
  summary: string;
  content: string;
};

const Page: React.FC = () => {
  const [blogsData, setBlogsData] = useState([]);

  useEffect(() => {
    fetch("/data/blogsData.json")
      .then((response) => response.json())
      .then((data) => setBlogsData(data));
  }, []);
  return (
    <section className="relative w-screen">
      <div className="relative z-10 mx-auto my-16 flex min-h-screen w-full max-w-screen-2xl flex-col justify-between px-4">
        <div className="mb-64">
          <h1 className="mb-16 font-clashsemibold text-[4rem] leading-tight text-white sm:text-[6rem] xl:text-[8rem]">
            Blogs
          </h1>
          {/* <div
            className={`${rubikRegular.className} mb-8 pr-8 text-sm text-gray-400 sm:text-xl xl:text-2xl`}
          >
            Here I will write about my thoughts, predictions, and learnings.
            Things are always changing in the world and it is important for us
            to learn and adapt. We are mainly going to talk about Software
            Development, AI and Cybersecurity.
          </div> */}
          {blogsData.map((data: BlogType) => (
            <BlogBody
              key={data.title}
              title={data.title}
              // summary={data.summary}
              content={data.content}
            />
          ))}
        </div>

        <div className="">
          <MainFooter />
        </div>
      </div>
    </section>
  );
};

export default Page;

const BlogBody = ({
  title,
  // summary,
  content,
}: {
  title: string;
  // summary: string;
  content: string;
}) => {
  return (
    <div className="border-t-2 border-t-fuchsia-500 py-8">
      <h4 className="font-clashlight text-[1.5rem] text-white sm:text-[2rem] lg:text-[2.5rem]">
        {title}
      </h4>
      <p
        className={`${rubikRegular.className} mt-4 text-sm text-gray-400 sm:text-xl xl:text-2xl`}
      >
        {content}
      </p>
    </div>
  );
};
