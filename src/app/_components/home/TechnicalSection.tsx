"use client";
import { Rubik } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import { skillsData } from "../../_data/skillsData";

const rubik = Rubik({ subsets: ["latin"] });

const RING_GRADIENT_ID = "skill-ring-gradient";
const RING_RADIUS = 15;
const RING_LENGTH = 2 * Math.PI * RING_RADIUS;

const SkillTile = ({
  skill,
  rating,
  index,
  inView,
}: {
  skill: string;
  rating: number;
  index: number;
  inView: boolean;
}) => {
  const safeRating = Math.max(0, Math.min(10, Math.round(rating ?? 0)));

  return (
    <li className="flex flex-col items-center gap-y-3 rounded-3xl border border-white/10 bg-white/5 px-3 py-6 transition-colors hover:border-fuchsia-400/40 hover:bg-white/10">
      <div
        className="relative h-20 w-20"
        role="img"
        aria-label={`${safeRating} out of 10`}
      >
        <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
          <circle
            cx="18"
            cy="18"
            r={RING_RADIUS}
            fill="none"
            strokeWidth="3"
            className="stroke-white/10"
          />
          {/* One dash as long as the ring, offset to leave only the rated
              share showing. It stays fully offset until the grid scrolls into
              view, then draws in; the hidden offset sits just past the full
              length so no round cap shows early. */}
          <circle
            cx="18"
            cy="18"
            r={RING_RADIUS}
            fill="none"
            strokeWidth="3"
            strokeLinecap="round"
            stroke={`url(#${RING_GRADIENT_ID})`}
            strokeDasharray={`${RING_LENGTH} ${RING_LENGTH * 2}`}
            strokeDashoffset={
              inView && safeRating > 0
                ? RING_LENGTH * (1 - safeRating / 10)
                : RING_LENGTH * 1.05
            }
            className="transition-[stroke-dashoffset] duration-1000 ease-out motion-reduce:transition-none"
            style={{ transitionDelay: `${index * 60}ms` }}
          />
        </svg>
        <span className="absolute inset-0 flex items-baseline justify-center pt-6 font-clashsemibold text-2xl leading-8 text-white">
          {safeRating}
          <span className="text-xs text-white/50">/10</span>
        </span>
      </div>
      <p
        className={`${rubik.className} text-center text-base text-gray-100 sm:text-lg`}
      >
        {skill}
      </p>
    </li>
  );
};

const TechnicalSection: React.FC = () => {
  const gridRef = useRef<HTMLUListElement | null>(null);
  const [inView, setInView] = useState(false);

  // Draws the rings once, the first time the grid is scrolled into view.
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setInView(true);
        observer.disconnect();
      },
      { threshold: 0.2 },
    );
    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* One gradient shared by every ring. */}
      <svg aria-hidden className="absolute h-0 w-0">
        <defs>
          <linearGradient id={RING_GRADIENT_ID} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#818cf8" />
            <stop offset="1" stopColor="#d946ef" />
          </linearGradient>
        </defs>
      </svg>

      <h2 className="relative z-20 px-4 font-clashsemibold text-[3rem] leading-[1.05] tracking-tight text-white sm:px-8 sm:text-[4rem] xl:text-[5rem]">
        My{" "}
        <span className="bg-gradient-to-r from-indigo-300 via-violet-300 to-fuchsia-400 bg-clip-text pb-2 text-transparent">
          skills
        </span>
      </h2>

      <ul
        ref={gridRef}
        className="relative z-20 mt-12 grid grid-cols-2 gap-3 px-4 sm:grid-cols-3 sm:gap-4 sm:px-8 lg:grid-cols-4 xl:grid-cols-6"
      >
        {skillsData.map((data, index) => (
          <SkillTile
            key={data.skill}
            skill={data.skill}
            rating={data.rating}
            index={index}
            inView={inView}
          />
        ))}
      </ul>
    </>
  );
};

export default TechnicalSection;
