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
        AccentColor: {
          // DEFAULT: "rgb(0, 134, 255)",
          // DEFAULT: "rgb(186, 130, 199)",
          DEFAULT: "rgb(50, 60, 182)",
        },
        // MainColor: {
        //   DEFAULT: "rgb(231, 105, 64)",
        //   100: "rgb(231, 105, 64, 0.2)",
        //   200: "rgb(248, 215, 204)",
        // },
        MainColor: {
          DEFAULT: "rgb(186, 130, 199)",
          100: "rgb(186, 130, 199, 0.2)",
          200: "rgb(186, 130, 199)",
        },
        // AccentGreenColor: {
        //   DEFAULT: "rgb(87, 228, 20)",
        // },
        AccentGreenColor: {
          DEFAULT: "rgb(67, 186, 154)",
        },
        BlackColor: {
          DEFAULT: "rgb(0, 0, 0, 0.4)",
          100: "rgb(0, 0, 0, 0.1)",
          200: "rgb(18, 20, 23)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
