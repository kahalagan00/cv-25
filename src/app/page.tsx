"use client";
import ProfileSection from "./_components/home/ProfileSection";
import AboutSection from "./_components/home/AboutSection";
import TechnicalSection from "./_components/home/TechnicalSection";
import ProjectSection from "./_components/home/ProjectSection";
import BlogsSection from "./_components/home/BlogsSection";
import ContactSection from "./_components/home/ContactSection";
import FooterSection from "./_components/home/FooterSection";

const Page: React.FC = () => {
  return (
    <>
      <section className="relative w-screen">
        <div className="relative mx-auto mb-64 mt-16 max-w-screen-2xl px-4 lg:flex">
          <ProfileSection />
        </div>
      </section>

      <section className="relative w-screen">
        <div className="relative mx-auto mb-64 w-full max-w-screen-2xl px-4 lg:flex">
          <AboutSection />
        </div>
      </section>

      <section className="relative w-screen">
        <div className="relative mx-auto mb-64 w-full max-w-screen-2xl px-4">
          <TechnicalSection />
        </div>
      </section>

      {/* <section className="relative w-screen"> */}
      {/*   <div className="relative mx-auto mb-64 w-full max-w-screen-2xl px-4"> */}
      {/*     <ProjectSection /> */}
      {/*   </div> */}
      {/* </section> */}

      {/* <section className="relative w-screen"> */}
      {/*   <div className="relative mx-auto mb-64 w-full max-w-screen-2xl px-4"> */}
      {/*     <BlogsSection /> */}
      {/*   </div> */}
      {/* </section> */}

      <section className="relative w-screen">
        <div className="relative mx-auto mb-64 w-full max-w-screen-2xl px-4">
          <ContactSection />
        </div>
      </section>

      <section className="relative w-screen">
        <div className="relative mx-auto mb-16 w-full max-w-screen-2xl px-4">
          <FooterSection />
        </div>
      </section>
    </>
  );
};

export default Page;
