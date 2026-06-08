import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        viva: {
          bg: "#140F1B",
          bg2: "#1A1422",
          surface: "#221A2D",
          surface2: "#2A2137",
          text: "#F6F1F8",
          ember: "#FF6A2B",
          ember2: "#FFA24D",
          emberDeep: "#E2490F",
          bone: "#F2EADC",
          bone2: "#FBF6EC",
          ink: "#1B1320",
          ink2: "#5C5468",
          ok: "#4FD69C",
        },
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
