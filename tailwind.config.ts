import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        clashlight: [
          "ClashDisplay-Light",
          "ClashDisplay-Light-Fallback",
          "sans-serif",
        ],
        clashregular: [
          "ClashDisplay-Regular",
          "ClashDisplay-Regular-Fallback",
          "sans-serif",
        ],
        clashbold: [
          "ClashDisplay-Bold",
          "ClashDisplay-Bold-Fallback",
          "sans-serif",
        ],
        clashmedium: [
          "ClashDisplay-Medium",
          "ClashDisplay-Medium-Fallback",
          "sans-serif",
        ],
        clashsemibold: [
          "ClashDisplay-Semibold",
          "ClashDisplay-Semibold-Fallback",
          "sans-serif",
        ],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
