import { Rubik } from "next/font/google";

const rubikRegular = Rubik({ weight: "300", subsets: ["latin"] });
// const rubikBold = Rubik({ weight: "700", subsets: ["latin"] });

const Page: React.FC = () => {
  return (
    <section className="relative w-screen">
      <div className="relative z-10 mx-auto my-64 w-full max-w-screen-2xl px-4">
        <div className="flex">
          <div className="w-1/2">
            <h1 className="font-clashsemibold text-[6rem] leading-tight text-white">
              Blogs
            </h1>
            <p
              className={`${rubikRegular.className} text-4xl tracking-wide text-gray-400`}
            >
              Page currently in development...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
