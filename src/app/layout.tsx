import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import { LinkProvider } from "./contexts/useLink";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joshmar Morales CV25",
  description: "Created with Next.js",
  icons: {
    icon: "/svgs/panda.svg", // /public path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#13102b] antialiased`}
      >
        <LinkProvider>
          <div className="mx-auto max-w-screen-2xl px-4">
            <Header />
          </div>
          {/* <main className="mx-auto mt-4 max-w-screen-2xl overflow-hidden bg-[#13102b]"> */}
          <main className="relative mt-4 overflow-hidden bg-[#13102b]">
            {children}

            <Image
              alt="Whole page artwork"
              src={"/images/WholePage_BG1.png"}
              fill
              className="z-0 object-cover"
            />
          </main>
        </LinkProvider>
      </body>
    </html>
  );
}
