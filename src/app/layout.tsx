import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
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

const circleColors = {
  magenta: "#411850",
  purple: "#332261",
  violet: "#2a1d52",
  indigo: "#1b1858",
  blue: "#121a54",
};

// [offset, opacity] stops that fade each circle out like a blur
const circleFade = [
  [0, 1],
  [0.25, 0.72],
  [0.5, 0.38],
  [0.75, 0.15],
  [1, 0],
];

// [cx, cy, r, color] on the 440x2000 viewBox
const circles: [number, number, number, keyof typeof circleColors][] = [
  [66, 95, 70, "magenta"],
  [187, 242, 130, "purple"],
  [371, 218, 90, "blue"],
  [196, 473, 70, "magenta"],
  [225, 687, 110, "violet"],
  [52, 780, 100, "indigo"],
  [352, 821, 70, "magenta"],
  [316, 1070, 80, "blue"],
  [74, 1129, 70, "magenta"],
  [183, 1320, 110, "purple"],
  [60, 1384, 80, "indigo"],
  [328, 1418, 70, "magenta"],
  [261, 1614, 110, "violet"],
  [65, 1654, 90, "blue"],
  [396, 1864, 80, "indigo"],
  [67, 1928, 70, "magenta"],
  [252, 1977, 110, "purple"],
];

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
        <div className="mx-auto max-w-screen-2xl px-4">
          <Header />
        </div>
        <main className="relative mt-4 overflow-hidden bg-[#13102b]">
          {children}

          {/* Whole page artwork: blurred circles drawn as vectors so they stay sharp at any size */}
          <svg
            aria-hidden="true"
            viewBox="0 0 440 2000"
            preserveAspectRatio="xMidYMid slice"
            className="absolute inset-0 z-0 h-full w-full"
          >
            <defs>
              {Object.entries(circleColors).map(([name, color]) => (
                <radialGradient key={name} id={`bg-circle-${name}`}>
                  {circleFade.map(([offset, opacity]) => (
                    <stop
                      key={offset}
                      offset={offset}
                      stopColor={color}
                      stopOpacity={opacity}
                    />
                  ))}
                </radialGradient>
              ))}
            </defs>
            {circles.map(([cx, cy, r, color]) => (
              <circle
                key={`${cx}-${cy}`}
                cx={cx}
                cy={cy}
                r={r}
                fill={`url(#bg-circle-${color})`}
              />
            ))}
          </svg>
        </main>
      </body>
    </html>
  );
}
