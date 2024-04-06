import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        "bg-blue-1": "#3366FF",
        "bg-blue-2": "#F3F7FE",
        "bg-blue-3": "#F2F6FD",
        "text-thick-blue": "#0D2159",
      },
      borderColor: {
        "b-blue": "#D4DCF1",
      },
    },

    screens: {
      sm: "390px",
      mob: "620px",
      md: "950px",
      lg: "1024px",
      xl: "1200px",
      "2xl": "1600px",
    },
  },
  plugins: [],
};
export default config;
