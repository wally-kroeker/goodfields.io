import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          950: "#0b0b0d",
          900: "#18181b",
          800: "#27272a",
        },
      },
      boxShadow: {
        focus: "0 0 0 3px rgba(16, 185, 129, 0.35)",
      },
    },
  },
  plugins: [],
};
export default config;
