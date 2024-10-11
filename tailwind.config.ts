import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#9A6E76",
        whiteSmooke: "#E6DED8",
        black: "#181818",
      },
      boxShadow: {
        sm: "0px 0px 30px 0px rgba(0, 0, 0, 0.5);",
        md: "2px 2px 5px -2px rgba(0, 0, 0, 0.5);",
      },
      backgroundImage: {
        gradient: "linear-gradient(180deg, #E6DED88F 0%, #E6DED8 100%)",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateY(30%)" },
          to: { transform: "translateY(-100%)" },
        },
      },
      animation: {
        "infinite-scroll": "infinite-scroll 50s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
