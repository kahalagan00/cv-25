// import { Rubik } from "next/font/google";

// const rubikRegular = Rubik({ weight: "300", subsets: ["latin"] });
// const rubikBold = Rubik({ weight: "700", subsets: ["latin"] });

const Page: React.FC = () => {
  return (
    <section className="relative w-screen">
      <div className="relative z-10 mx-auto my-16 w-full max-w-screen-2xl px-4">
        <h1 className="mb-8 font-clashsemibold text-[8rem] leading-tight text-white">
          Projects
        </h1>

        <div className="flex text-white">
          <div className="w-1/2">Artwork for project</div>
          <div className="w-1/2">Description and Links for project</div>
        </div>
      </div>
    </section>
  );
};

export default Page;
