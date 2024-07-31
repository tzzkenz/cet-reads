/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "emigrate-blue": "#00415A",
      white: "#ffffff",
      base: "001F28",
      transparent: "transparent",
      test: "red",
      green: "F2F6D0",
    },
    fontFamily: {
      sans: ["Poppins", "Arial", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
