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
        gradient: "linear-gradient(200deg, #BA9C9D 0%, #9A6E76 100%);",
      },
      boxShadow: {
        sm: "0px 0px 30px 0px rgba(0, 0, 0, 0.5);",
      },
    },
  },
  plugins: [],
};
export default config;
