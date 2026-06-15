import type { Metadata } from "next";
import MainFooter from "../_components/MainFooter";
import ExperienceRow from "../_components/ExperienceRow";

export const metadata: Metadata = {
  title: "About | Joshmar Morales",
  description:
    "Education and professional experience of Joshmar Morales, software engineer.",
};

interface Entry {
  company: string;
  title: string;
  bulletPoints: string[];
}

const sections: { heading: string; entries: Entry[] }[] = [
  {
    heading: "Education",
    entries: [
      // {
      //   company: "University of Nevada, Las Vegas",
      //   title: "Master of Science in Computer Science",
      //   bulletPoints: [
      //     "Artificial Intelligence, Machine Learning, Advanced Algorithms",
      //   ],
      // },
      {
        company: "University of Nevada, Las Vegas",
        title: "Bachelor of Science in Electrical Computer Engineering",
        bulletPoints: ["Data Structures, Algorithms, Data Mining"],
      },
    ],
  },
  {
    heading: "Experience",
    entries: [
      {
        company: "Viticus Group (WVC)",
        title: "Fullstack Software Engineer",
        bulletPoints: [
          "Develop internal products that optimize the company's workflow in creating and selling courses.",
          "Resolved defects across internal web applications to strengthen security controls and reduce the risk of data exposure.",
          "Built and deployed in-house tooling to replace a third-party service, reducing vendor costs and improving operational efficiency.",
        ],
      },
      {
        company: "UNLV College of Engineering",
        title: "Graduate Teaching Assistant",
        bulletPoints: [
          "Offer tutoring and host office hours to help students grasp challenging computer science concepts.",
          "Guide students through assignments and provide feedback to enhance their problem-solving skills.",
          "Assisted professor with accreditation process for the university.",
        ],
      },
      {
        company: "JCM Global",
        title: "Embedded Software Engineer",
        bulletPoints: [
          "Developed real-time multi-threaded applications and BSP drivers for a network adapter device, facilitating communication between devices and a web server.",
          "Built RESTful APIs to deliver field product data to the web application's back-end server.",
          "Implemented new features that improved EGM gameplay by 10% and expanded networking capabilities.",
          "Resolved critical bugs, reducing downtimes by 10% and significantly enhancing user experience during casino operations.",
          "Thoroughly documented codebase changes, improving team productivity and onboarding efficiency.",
        ],
      },
    ],
  },
];

const Page: React.FC = () => {
  return (
    <section className="relative w-screen">
      <div className="relative z-10 mx-auto my-16 w-full max-w-screen-2xl px-4">
        <h1 className="mb-16 font-clashsemibold text-[4rem] leading-tight text-white sm:text-[6rem] xl:text-[8rem]">
          About me
        </h1>

        {sections.map(({ heading, entries }) => (
          <section key={heading} aria-labelledby={`${heading}-heading`}>
            <h2
              id={`${heading}-heading`}
              className="my-8 font-clashmedium text-[2.25rem] tracking-wide text-white sm:text-[3rem] lg:text-[4rem]"
            >
              {heading}
            </h2>
            {entries.map((entry) => (
              <ExperienceRow key={`${entry.company}-${entry.title}`} {...entry} />
            ))}
          </section>
        ))}

        <div className="mt-32">
          <MainFooter />
        </div>
      </div>
    </section>
  );
};

export default Page;
