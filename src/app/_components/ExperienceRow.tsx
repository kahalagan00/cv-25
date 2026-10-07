import { Rubik } from "next/font/google";
const rubik = Rubik({ subsets: ["latin"] });

interface ExperienceRowProps {
  company: string;
  title: string;
  bulletPoints: string[];
}

const ExperienceRow = ({
  company,
  title,
  bulletPoints,
}: ExperienceRowProps) => {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
      <h3 className="font-clashmedium text-xl text-white sm:text-2xl">
        {company}
      </h3>
      <p
        className={`${rubik.className} mt-1 text-base text-fuchsia-300 sm:text-lg`}
      >
        {title}
      </p>
      <ul
        className={`${rubik.className} mt-5 space-y-3 text-base font-light leading-relaxed text-gray-400 sm:text-lg`}
      >
        {bulletPoints.map((bp, idx) => (
          <li key={idx} className="flex gap-x-3">
            <span
              aria-hidden
              className="mt-[0.62em] h-1.5 w-1.5 shrink-0 rounded-full bg-fuchsia-400"
            />
            {bp}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default ExperienceRow;
