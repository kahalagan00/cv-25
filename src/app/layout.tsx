import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import { LinkProvider } from "./contexts/useLink";

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
        className={`${geistSans.variable} ${geistMono.variable} bg-indigo-950 antialiased`}
      >
        <LinkProvider>
          <div className="w-screen">
            <Header />
          </div>
          <main className="mx-auto mt-4 max-w-screen-2xl bg-indigo-950">
            {children}
          </main>
        </LinkProvider>
      </body>
    </html>
  );
}
