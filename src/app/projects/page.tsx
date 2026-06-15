import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import Image from "next/image";
import { FaGithub, FaLink } from "react-icons/fa";
import MainFooter from "../_components/MainFooter";
import SetActiveLink from "../_components/SetActiveLink";
import projectsJson from "../../../public/data/projectsData.json";

const rubikRegular = Rubik({ weight: "300", subsets: ["latin"] });

const PLACEHOLDER_DEMO =
  "/images/projects_images/demos/UnderDevelopment_Demo.svg";

type Project = {
  title: string;
  dateRange: string;
  summary: string;
  githubLink: string;
  siteLink: string;
  projectDemo: string;
};

const projects = projectsJson as Project[];

export const metadata: Metadata = {
  title: "Projects | Joshmar Morales",
  description:
    "Software projects built by Joshmar Morales, from full-stack web apps to machine learning.",
};

const Page: React.FC = () => {
  return (
    <section className="relative w-screen">
      <SetActiveLink link="projects" />
      <div className="relative z-10 mx-auto my-16 w-full max-w-screen-2xl px-4">
        <h1 className="mb-16 font-clashsemibold text-[4rem] leading-tight text-white sm:text-[6rem] xl:text-[8rem]">
          Projects
        </h1>

        {projects.map((project) => (
          <ProjectRow project={project} key={project.title} />
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
  const isComingSoon =
    !project.projectDemo || project.projectDemo === PLACEHOLDER_DEMO;

  return (
    <div className="mb-16 flex flex-col px-4 text-white lg:flex-row">
      <div className="mb-4 lg:mb-0 lg:w-1/2">
        <div className="relative h-[300px] w-full overflow-hidden rounded-[3rem] bg-indigo-300 drop-shadow-2xl sm:h-[500px]">
          {isComingSoon ? (
            <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-8 text-black">
              <div className="relative h-1/2 w-1/2">
                <Image
                  alt="Project under development illustration"
                  src={PLACEHOLDER_DEMO}
                  fill
                  className="object-contain"
                />
              </div>
              <p className={`${rubikRegular.className} text-2xl sm:text-3xl`}>
                Under development...
              </p>
            </div>
          ) : (
            <Image
              alt={`Demo of ${project.title}`}
              src={project.projectDemo}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          )}
        </div>
      </div>
      <div className="lg:w-1/2 lg:pl-8">
        <h2 className="font-clashmedium text-[2.25rem] tracking-wide text-white sm:text-[3rem] lg:text-[4rem]">
          {project.title}
        </h2>
        <p className="font-clashlight text-[1.5rem] text-white sm:text-[2rem] lg:text-[2.5rem]">
          {project.dateRange}
        </p>
        <p
          className={`${rubikRegular.className} mt-4 text-sm text-gray-400 sm:text-xl xl:text-2xl`}
        >
          {project.summary}
        </p>
        <div className="mt-8 flex gap-x-4">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} source code on GitHub`}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-fuchsia-600 transition-all duration-100 ease-in hover:scale-110 hover:bg-fuchsia-500 sm:h-12 sm:w-12"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href={project.siteLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit the ${project.title} live site`}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-fuchsia-600 transition-all duration-100 ease-in hover:scale-110 hover:bg-fuchsia-500 sm:h-12 sm:w-12"
          >
            <FaLink className="text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
};
