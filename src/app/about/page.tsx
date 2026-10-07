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
        <div className="px-4 sm:px-8">
          <h1 className="font-clashsemibold text-[3.5rem] leading-[1.05] tracking-tight text-white sm:text-[5rem] xl:text-[6.5rem]">
            About{" "}
            <span className="bg-gradient-to-r from-indigo-300 via-violet-300 to-fuchsia-400 bg-clip-text pb-2 text-transparent">
              me
            </span>
          </h1>

          {sections.map(({ heading, entries }) => (
            <section
              key={heading}
              aria-labelledby={`${heading}-heading`}
              className="mt-16 border-t border-white/10 pt-10 lg:flex"
            >
              <h2
                id={`${heading}-heading`}
                className="font-clashmedium text-[2rem] tracking-tight text-white sm:text-[2.5rem] lg:w-4/12"
              >
                {heading}
              </h2>
              <div className="mt-6 space-y-4 lg:mt-0 lg:w-8/12">
                {entries.map((entry) => (
                  <ExperienceRow
                    key={`${entry.company}-${entry.title}`}
                    {...entry}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-32">
          <MainFooter />
        </div>
      </div>
    </section>
  );
};

export default Page;
