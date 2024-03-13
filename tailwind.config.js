/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        icons_bg: "#5cd2b9",
        black_bg: "#181818",
        green_bg: "#1A3832",
        gray: "#181818",
      },
      fontFamily: {
        roboto: ["san-serif", "Roboto"],
      },
    },
  },
  plugins: [],
};
