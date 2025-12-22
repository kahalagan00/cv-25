import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import { LinkProvider } from "./contexts/useLink";
import Image from "next/image";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joshmar Morales",
  description: "Personal portfolio of Joshmar Morales created with Next.js",
  icons: {
    icon: "/images/Joshmar_Morales_Logo_2.png", // /public path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#13102b] antialiased`}
      >
        {/* Add the Google Analytics script */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-BV0JM95MML`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BV0JM95MML', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <LinkProvider>
          <div className="mx-auto max-w-screen-2xl px-4">
            <Header />
          </div>
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
