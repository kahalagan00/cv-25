"use client";
import { Rubik } from "next/font/google";
import { useCallback, useEffect, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";

const rubikRegular = Rubik({ weight: "300", subsets: ["latin"] });

const SkillRow = ({ skill, rating }: { skill: string; rating: number }) => {
  const safeRating = Math.max(0, Math.min(10, Math.round(rating ?? 0)));

  const ratingsArr = [];
  for (let i = 0; i < 10; i++) {
    if (i + 1 <= safeRating) {
      ratingsArr.push(1);
    } else {
      ratingsArr.push(0);
    }
  }

  return (
    <li className="my-4 grid w-full grid-cols-[minmax(0,150px)_1fr] justify-start text-white">
      <p
        className={`${rubikRegular.className} text-xl text-gray-100 lg:text-2xl`}
      >
        {skill}
      </p>
      <div
        className="flex flex-wrap gap-2"
        role="img"
        aria-label={`${safeRating} out of 10`}
      >
        {ratingsArr.map((x, idx) =>
          x ? (
            <div
              key={`Rating valid ${idx}`}
              className="h-4 w-4 shrink-0 rounded-full bg-fuchsia-600 lg:h-5 lg:w-5"
            ></div>
          ) : (
            <div
              key={`Rating invalid ${idx}`}
              className="h-4 w-4 shrink-0 rounded-full border-2 border-fuchsia-600 bg-transparent lg:h-5 lg:w-5"
            ></div>
          ),
        )}
      </div>
    </li>
  );
};

const SKELETON_ROWS = 6;
const FETCH_TIMEOUT_MS = 10000;

const SkeletonRow = () => (
  <li
    aria-hidden
    className="my-4 grid w-full grid-cols-[minmax(0,150px)_1fr] justify-start"
  >
    <div className="h-7 w-24 animate-pulse rounded bg-gray-700 lg:h-8" />
    <div className="flex flex-wrap gap-2">
      {Array.from({ length: 10 }).map((_, idx) => (
        <div
          key={idx}
          className="h-4 w-4 shrink-0 animate-pulse rounded-full bg-fuchsia-600 bg-opacity-20 lg:h-5 lg:w-5"
        />
      ))}
    </div>
  </li>
);

const TechnicalSection: React.FC = () => {
  const [skillsData, setSkillsData] = useState<
    { skill: string; rating: number }[]
  >([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const loadSkills = useCallback(() => {
    setIsLoading(true);
    setHasError(false);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

    fetch("/data/skillsData.json", { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json();
      })
      .then((data) => {
        if (!Array.isArray(data)) throw new Error("Malformed skills payload");
        setSkillsData(data);
      })
      .catch(() => setHasError(true))
      .finally(() => {
        clearTimeout(timeoutId);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    loadSkills();
  }, [loadSkills]);

  const midpoint = Math.ceil(skillsData.length / 2);

  return (
    <>
      <div className="relative z-20 flex">
        <div className="flex w-full justify-center lg:block lg:w-1/2">
          <h2 className="font-clashsemibold text-[4rem] leading-tight text-white sm:text-[6rem] xl:text-[8rem]">
            My skills
          </h2>
        </div>
        <div className="hidden overflow-hidden lg:block lg:w-1/2">
          <IoMdArrowBack
            aria-hidden
            className="-translate-x-6 text-[8rem] text-fuchsia-600 xl:text-[10rem]"
          />
        </div>
      </div>

      <div className="relative z-20 mt-12 flex flex-col lg:flex-row">
        {hasError ? (
          <div role="alert" className={`${rubikRegular.className} w-full`}>
            <p className="text-xl text-gray-400">
              Skills could not be loaded right now.
            </p>
            <button
              type="button"
              onClick={loadSkills}
              className="mt-4 rounded-full bg-fuchsia-700 px-6 py-3 text-lg text-white hover:bg-fuchsia-600"
            >
              Try again
            </button>
          </div>
        ) : (
          <>
            <div className="flex w-full justify-center lg:block lg:w-1/2">
              <ul className="lg:w-full">
                {isLoading
                  ? Array.from({ length: SKELETON_ROWS }, (_, idx) => (
                      <SkeletonRow key={idx} />
                    ))
                  : skillsData
                      .slice(0, midpoint)
                      .map((data) => (
                        <SkillRow
                          key={data.skill}
                          skill={data.skill}
                          rating={data.rating}
                        />
                      ))}
              </ul>
            </div>
            <div className="flex w-full justify-center lg:block lg:w-1/2">
              <ul className="lg:w-full">
                {isLoading
                  ? Array.from({ length: SKELETON_ROWS }, (_, idx) => (
                      <SkeletonRow key={idx} />
                    ))
                  : skillsData
                      .slice(midpoint)
                      .map((data) => (
                        <SkillRow
                          key={data.skill}
                          skill={data.skill}
                          rating={data.rating}
                        />
                      ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default TechnicalSection;
