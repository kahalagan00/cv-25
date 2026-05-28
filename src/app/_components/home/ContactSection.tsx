"use client";
import { Rubik } from "next/font/google";
import { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { generateDotsArt } from "../../_utils/dotsArt";

const rubikBold = Rubik({ weight: "700", subsets: ["latin"] });

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const inputStyleNormal = `h-16 w-full rounded-full pl-6 bg-indigo-900 text-white outline-none placeholder:tracking-wide`;

  // eslint-disable-next-line
  // @ts-ignore
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // eslint-disable-next-line
  // @ts-ignore
  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${formData.email}?subject=Message from ${formData.name}&body=${encodeURIComponent(
      formData.message,
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      <div className="relative z-10 flex w-full flex-col items-center">
        <h1 className="font-clashsemibold text-[4rem] leading-tight text-white sm:text-[6rem] lg:text-[8rem]">
          Contact me
        </h1>
        <form
          onSubmit={handleSubmit}
          className="block w-full flex-col px-4 sm:w-1/2 sm:px-0 lg:w-1/3"
        >
          <div className="my-8">
            <p className={`${rubikBold.className} mb-2 text-lg text-white`}>
              Full name*
            </p>
            <input
              placeholder="Enter your full name..."
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={inputStyleNormal}
            />
          </div>

          <div className="my-8">
            <p className={`${rubikBold.className} mb-2 text-lg text-white`}>
              Email*
            </p>
            <input
              placeholder="Enter your email..."
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={inputStyleNormal}
            />
          </div>

          <div className="relative my-8">
            <p className={`${rubikBold.className} mb-2 text-lg text-white`}>
              Message*
            </p>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Enter your message..."
              className="min-h-48 w-full rounded-3xl bg-indigo-900 pl-6 pt-4 text-white outline-none placeholder:tracking-wide"
            ></textarea>

            <IoMdArrowBack className="absolute right-0 top-10 hidden translate-x-44 font-clashsemibold text-[8rem] leading-tight text-fuchsia-600 sm:block lg:translate-x-64 lg:text-[10rem]" />
          </div>

          <button
            type="submit"
            className={`${rubikBold.className} mx-auto flex w-48 items-center justify-center rounded-full bg-fuchsia-700 px-9 py-4 text-lg text-white hover:bg-fuchsia-600`}
          >
            Send Email
          </button>
        </form>

        <div className="absolute bottom-1/4 hidden translate-y-16 flex-col gap-y-8 max-lg:left-0 sm:flex lg:right-0">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="flex gap-x-8">
              {generateDotsArt(3)}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ContactSection;
