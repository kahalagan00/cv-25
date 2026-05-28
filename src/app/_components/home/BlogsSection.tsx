"use client";
import { Rubik } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import { useLinkContext } from "../../contexts/useLink";

const rubikRegular = Rubik({ weight: "300", subsets: ["latin"] });
const rubikBold = Rubik({ weight: "700", subsets: ["latin"] });

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

const BlogsSection: React.FC = () => {
  const [blogsData, setBlogsData] = useState([]);
  const { setCurrentLink } = useLinkContext();

  useEffect(() => {
    fetch("/data/blogsData.json")
      .then((response) => response.json())
      .then((data) => setBlogsData(data));
  }, []);

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

export default BlogsSection;
