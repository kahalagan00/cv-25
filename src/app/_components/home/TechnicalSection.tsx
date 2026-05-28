"use client";
import { Rubik } from "next/font/google";
import { useEffect, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";

const rubikRegular = Rubik({ weight: "300", subsets: ["latin"] });

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
      <p
        className={`${rubikRegular.className} text-xl text-gray-100 lg:text-2xl`}
      >
        {skill}
      </p>
      <div className="flex">
        {ratingsArr.map((x, idx) =>
          x ? (
            <div
              key={`Rating valid ${idx}`}
              className="ml-2 h-4 w-4 rounded-full bg-fuchsia-600 lg:h-5 lg:w-5"
            ></div>
          ) : (
            <div
              key={`Rating invalid ${idx}`}
              className="ml-2 h-4 w-4 rounded-full border-2 border-fuchsia-600 bg-transparent lg:h-5 lg:w-5"
            ></div>
          ),
        )}
      </div>
    </li>
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
      <div className="relative z-20 flex">
        <div className="flex w-full justify-center lg:block lg:w-1/2">
          <h1 className="font-clashsemibold text-[4rem] leading-tight text-white sm:text-[6rem] xl:text-[8rem]">
            My skills
          </h1>
        </div>
        <div className="hidden overflow-hidden lg:block lg:w-1/2">
          <IoMdArrowBack className="-translate-x-6 font-clashsemibold text-[8rem] leading-tight text-fuchsia-600 xl:text-[10rem]" />
        </div>
      </div>

      <div className="relative z-20 mt-12 flex flex-col lg:flex-row">
        <div className="flex w-full justify-center lg:block lg:w-1/2">
          <ul className="lg:w-full">
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
        <div className="flex w-full justify-center lg:block lg:w-1/2">
          <ul className="lg:w-full">
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

export default TechnicalSection;
