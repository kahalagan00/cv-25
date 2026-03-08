import { Rubik } from "next/font/google";
const rubikRegular = Rubik({ weight: "300", subsets: ["latin"] });

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

export default ExperienceRow;
