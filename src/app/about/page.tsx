"use client";
import { Rubik } from "next/font/google";
import MainFooter from "../_components/MainFooter";

const rubikRegular = Rubik({ weight: "300", subsets: ["latin"] });
// const rubikBold = Rubik({ weight: "700", subsets: ["latin"] });

const Page: React.FC = () => {
  return (
    <section className="relative w-screen">
      <div className="relative z-10 mx-auto my-16 w-full max-w-screen-2xl px-4">
        <h1 className="mb-16 font-clashsemibold text-[4rem] leading-tight text-white sm:text-[6rem] xl:text-[8rem]">
          About me
        </h1>

        <h3 className="my-8 font-clashmedium text-[2.25rem] tracking-wide text-white sm:text-[3rem] lg:text-[4rem]">
          Education
        </h3>
        <ExperienceRow
          company="University of Nevada, Las Vegas"
          title="Master of Science in Computer Science"
          bulletPoints={[
            "Artificial Intelligence, Machine Learning, Advanced Algorithms",
          ]}
        />
        <ExperienceRow
          company="University of Nevada, Las Vegas"
          title="Bachelor of Science in Electrical Computer Engineering"
          bulletPoints={[
            "Data Structures, Algorithms, Data Mining",
          ]}
        />

        <h3 className="my-8 font-clashmedium text-[2.25rem] tracking-wide text-white sm:text-[3rem] lg:text-[4rem]">
          Experience
        </h3>
        <ExperienceRow
          company="Viticus Group (WVC)"
          title="Fullstack Software Engineer"
          bulletPoints={[
            "Develop internal products that optimizes the company&apos;s workflow in creating and selling courses.",
            "Resolved defects across internal web applications to strengthen security controls and reduce risk of data exposure.",
            "Built and deployed in-house tooling to replace a third-party service, reducing vendor costs and improving operational efficiency.",
          ]}
        />
        <ExperienceRow
          company="UNLV College of Engineering"
          title="Graduate Teaching Assistant"
          bulletPoints={[
            "Offer tutoring and host office hours to help students grasp challenging computer science concepts.",
            "Guide students through assignments and provide feedback to enhance their problem-solving skills.",
            "Assisted professor with accreditation process for the university.",
          ]}
        />
        <ExperienceRow
          company="JCM Global"
          title="Embedded Software Engineer"
          bulletPoints={[
            "Developed real-time multi-threaded applications and BSP drivers for a network adapter device, facilitating communication between devices and a web server.",
            "Built RESTful APIs to deliver field product data to the web application&apos;s back-end server.",
            "Implemented new features that improved EGM gameplay by 10% and expanded networking capabilities.",
            "Resolved critical bugs, reducing downtimes by 10% and significantly enhancing user experience during casino operations.",
            "Thoroughly documented codebase changes, improving team productivity and onboarding efficiency.",
          ]}
        />
        <div className="mt-32">
          <MainFooter />
        </div>
      </div>
    </section>
  );
};

interface ExperienceRowProps {
  company: string
  title: string;
  bulletPoints: string[];
}

const ExperienceRow = ({ company, title, bulletPoints }: ExperienceRowProps) => {

  return (
    <>
      <p className="mt-16 font-clashregular text-[1.5rem] text-white sm:text-[2rem] lg:text-[2.5rem]">
        {company}
      </p>
      <p className="font-clashlight text-[1.5rem] text-white sm:text-[2rem] lg:text-[2.5rem]">
        {title}
      </p>
      <ul>
        {bulletPoints.map((bp, idx) =>
          <li
            key={idx}
            className={`${rubikRegular.className} mt-4 text-sm text-gray-400 sm:text-xl xl:text-2xl`}
          >
            &#x2022;&nbsp;{bp}
          </li>
        )}
      </ul>
    </>
  );
}

export default Page;
