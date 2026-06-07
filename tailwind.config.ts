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
          ink: "#18201d",
          forest: "#176b55",
          mint: "#bfe8d5",
          coral: "#f9735b",
          amber: "#f4b942",
          cloud: "#f6f8f7",
        },
      },
      boxShadow: {
        soft: "0 18px 50px rgba(24, 32, 29, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
