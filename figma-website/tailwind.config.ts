import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      height: {
        "card-lg": "45rem",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        "bandeau": "bandeau 20s linear infinite",

      },
      keyframes: {
        bandeau: {
          "0%": { transform: "translateX(120%)" },
          "100%": { transform: "translateX(-120%)"},
        },
      },
    },
  },
  plugins: [],
};

export default config;
