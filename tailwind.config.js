/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
      Sora: ["Sora", "sans-serif"],
      WorkSans: ["Work Sans", "sans-serif"],
      Sen: ["Sen", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#120B48",
          50: "#e7e7ed",
          100: "#b6b3c6",
          200: "#928fab",
          300: "#605c84",
          400: "#413c6d",
          500: "#120b48",
          600: "#100a42",
          700: "#0d0833",
          800: "#0a0628",
          900: "#08051e",
        },
        secondary: {
          DEFAULT: "#008282",
          50: "#e6f3f3",
          100: "#b0d8d8",
          200: "#8ac6c6",
          300: "#54abab",
          400: "#339b9b",
          500: "#008282",
          600: "#007676",
          700: "#005c5c",
          800: "#004848",
          900: "#003737",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
