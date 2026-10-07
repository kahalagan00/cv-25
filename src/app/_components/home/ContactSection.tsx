"use client";
import { Rubik } from "next/font/google";
import { useState } from "react";
import { LuSend } from "react-icons/lu";

const rubik = Rubik({ subsets: ["latin"] });

const FOCUS_RING =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-400";

const LABEL_STYLE = "mb-2 block text-sm font-medium text-gray-300";

const FIELD_STYLE =
  "w-full rounded-2xl border border-white/10 bg-white/5 px-5 text-white outline-none transition-colors placeholder:text-gray-500 hover:border-white/20 focus:border-fuchsia-400 focus:bg-white/10 focus:ring-2 focus:ring-fuchsia-400/30";

const RequiredMark = () => (
  <span aria-hidden className="text-fuchsia-400">
    *
  </span>
);

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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
    <div className="relative z-10 w-full lg:flex">
      <div className="px-4 sm:px-8 lg:w-5/12">
        <h2 className="font-clashsemibold text-[3rem] leading-[1.05] tracking-tight text-white sm:text-[4rem] xl:text-[5rem]">
          Contact{" "}
          <span className="bg-gradient-to-r from-indigo-300 via-violet-300 to-fuchsia-400 bg-clip-text pb-2 text-transparent">
            me
          </span>
        </h2>
      </div>

      <div className="mt-12 px-4 sm:px-8 lg:mt-0 lg:w-7/12">
        <form
          onSubmit={handleSubmit}
          className={`${rubik.className} rounded-[2rem] border border-white/10 bg-white/5 p-6 sm:p-10`}
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <div>
              <label htmlFor="name" className={LABEL_STYLE}>
                Full name
                <RequiredMark />
              </label>
              <input
                placeholder="Enter your full name..."
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`${FIELD_STYLE} h-14`}
              />
            </div>

            <div>
              <label htmlFor="email" className={LABEL_STYLE}>
                Email
                <RequiredMark />
              </label>
              <input
                placeholder="Enter your email..."
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`${FIELD_STYLE} h-14`}
              />
            </div>

            <div className="sm:col-span-2 lg:col-span-1 xl:col-span-2">
              <label htmlFor="message" className={LABEL_STYLE}>
                Message
                <RequiredMark />
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Enter your message..."
                className={`${FIELD_STYLE} block min-h-48 py-4`}
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            className={`${FOCUS_RING} mt-8 flex h-12 w-full items-center justify-center gap-x-2 rounded-full bg-fuchsia-700 px-7 text-lg font-medium text-white transition-colors hover:bg-fuchsia-600 sm:w-auto`}
          >
            Send Email
            <LuSend aria-hidden />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
