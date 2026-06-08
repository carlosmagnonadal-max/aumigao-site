import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          ink: "#2f174f",
          night: "#221039",
          purple: "#6d2bbd",
          violet: "#8f45dd",
          orange: "#ff7a1a",
          peach: "#ffb36b",
          cream: "#fff8ef",
          cloud: "#fffdf8",
          blush: "#fde6d2",
        },
      },
      boxShadow: {
        soft: "0 18px 50px rgba(109, 43, 189, 0.13)",
        premium: "0 30px 90px rgba(34, 16, 57, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
