"use client";

import { Rubik } from "next/font/google";
import { useEffect, useState } from "react";
import { useLinkContext } from "../contexts/useLink";
import Image from "next/image";
import { FaGithub, FaLink } from "react-icons/fa";
import MainFooter from "../_components/MainFooter";

const rubikRegular = Rubik({ weight: "300", subsets: ["latin"] });
// const rubikBold = Rubik({ weight: "700", subsets: ["latin"] });

type Project = {
  title: string;
  dateRange: string;
  summary: string;
  githubLink: string;
  siteLink: string;
  projectDemo: string;
};

const Page: React.FC = () => {
  const { setCurrentLink } = useLinkContext();
  const [projectsData, setProjectsData] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true); // Set loading to true before starting the fetch
        const response = await fetch("/data/projectsData.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setProjectsData(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false); // Set loading to false after the fetch completes
      }
    };

    fetchData();
    setCurrentLink("projects");
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="relative w-screen">
      <div className="relative z-10 mx-auto my-16 w-full max-w-screen-2xl px-4">
        <h1 className="mb-16 font-clashsemibold text-[4rem] leading-tight text-white sm:text-[6rem] xl:text-[8rem]">
          Projects
        </h1>

        {projectsData.map((data, idx) => (
          <ProjectRow project={data} key={idx} />
        ))}

        <div className="mt-32">
          <MainFooter />
        </div>
      </div>
    </section>
  );
};

export default Page;

const ProjectRow = ({ project }: { project: Project }) => {
  return (
    <div className="mb-16 flex flex-col px-4 text-white lg:flex-row">
      <div className="mb-4 lg:mb-0 lg:w-1/2">
        <div className="relative h-[500px] w-full overflow-hidden rounded-[3rem] bg-indigo-300 drop-shadow-2xl">
          {project.projectDemo ? (
            <Image
              alt="Demo of project"
              src={project?.projectDemo}
              fill
              className="object-cover"
            />
          ) : (
            <div
              className={`ml-8 mt-16 text-black ${rubikRegular.className} text-3xl`}
            >
              Still under development...
            </div>
          )}
        </div>
      </div>
      <div className="lg:w-1/2 lg:pl-8">
        <div className="">
          <h3 className="font-clashmedium text-[2.25rem] tracking-wide text-white sm:text-[3rem] lg:text-[4rem]">
            {project?.title}
          </h3>
          <p className="font-clashlight text-[1.5rem] text-white sm:text-[2rem] lg:text-[2.5rem]">
            {project?.dateRange}
          </p>
          <p
            className={`${rubikRegular.className} mt-4 text-[1rem] text-gray-300 lg:text-[1.25rem]`}
          >
            {project?.summary}
          </p>
          <div className="mt-8 flex gap-x-4">
            <a href={project.githubLink} target="_blank">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-fuchsia-600 hover:scale-110 hover:bg-fuchsia-500">
                <FaGithub className="text-2xl" />
              </div>
            </a>
            <a href={project.siteLink} target="_blank">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-fuchsia-600 hover:scale-110 hover:bg-fuchsia-500">
                <FaLink className="text-2xl" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
