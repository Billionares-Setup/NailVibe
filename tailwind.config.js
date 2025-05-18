import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "infinite-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }, // Match container width
        },
      },
      animation: {
        "infinite-scroll": "infinite-scroll 80s linear infinite",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".paused": {
          "animation-play-state": "paused",
        },
        ".running": {
          "animation-play-state": "running",
        },
      });
    },
  ],
};
