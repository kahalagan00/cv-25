import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { LuArrowUpRight } from "react-icons/lu";
import MainFooter from "../_components/MainFooter";
import { projectsData, type Project } from "../_data/projectsData";

const rubik = Rubik({ subsets: ["latin"] });

const PLACEHOLDER_DEMO =
  "/images/projects_images/demos/UnderDevelopment_Demo.svg";

const FOCUS_RING =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-400";

export const metadata: Metadata = {
  title: "Projects | Joshmar Morales",
  description:
    "Software projects built by Joshmar Morales, from full-stack web apps to machine learning.",
};

const Page: React.FC = () => {
  return (
    <section className="relative w-screen">
      <div className="relative z-10 mx-auto my-16 w-full max-w-screen-2xl px-4">
        <div className="px-4 sm:px-8">
          <h1 className="font-clashsemibold text-[3.5rem] leading-[1.05] tracking-tight text-white sm:text-[5rem] xl:text-[6.5rem]">
            Projects
          </h1>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {projectsData.map((project) => (
              <ProjectCard project={project} key={project.title} />
            ))}
          </div>
        </div>

        <div className="mt-32">
          <MainFooter />
        </div>
      </div>
    </section>
  );
};

export default Page;

const ProjectCard = ({ project }: { project: Project }) => {
  const isComingSoon =
    !project.projectDemo || project.projectDemo === PLACEHOLDER_DEMO;

  return (
    <article className="flex flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
      {/* The demos are all 16:9 recordings, so the frame matches and nothing
          is cropped. */}
      <div className="relative aspect-video w-full bg-indigo-950">
        {isComingSoon ? (
          <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-8">
            <div className="relative h-1/2 w-1/2">
              {/* The illustration is solid black, so it is inverted to show
                  on the dark panel. */}
              <Image
                alt="Project under development illustration"
                src={PLACEHOLDER_DEMO}
                fill
                className="object-contain opacity-60 invert"
              />
            </div>
            <p
              className={`${rubik.className} text-lg text-gray-300 sm:text-xl`}
            >
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

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <p
          className={`${rubik.className} text-sm uppercase tracking-widest text-fuchsia-300`}
        >
          {project.dateRange}
        </p>
        <h2 className="mt-2 font-clashmedium text-2xl text-white sm:text-3xl">
          {project.title}
        </h2>
        <p
          className={`${rubik.className} mt-4 text-base font-light leading-relaxed text-gray-400`}
        >
          {project.summary}
        </p>
        <div className="mt-auto flex gap-x-3 pt-8">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} source code on GitHub`}
            className={`${FOCUS_RING} flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white/80 transition-colors hover:bg-white/10 hover:text-white`}
          >
            <FaGithub aria-hidden />
          </a>
          <a
            href={project.siteLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit the ${project.title} live site`}
            className={`${FOCUS_RING} flex h-12 w-12 items-center justify-center rounded-full bg-fuchsia-700 text-xl text-white transition-colors hover:bg-fuchsia-600`}
          >
            <LuArrowUpRight aria-hidden />
          </a>
        </div>
      </div>
    </article>
  );
};
