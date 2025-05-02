import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        fontcolor: "var(--fontcolor)",
        bordercolor: "var(--bordercolor)",
        lightcolor: "var(--lightcolor)",
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans], // Uses Inter as primary font
      },
    },
  },
  plugins: [],
} satisfies Config;
