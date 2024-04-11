/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#FAED6D",
        newwhite: "#F9F6EB",
        backgroundgrey: "#D9D9D9",
        backgrounddark: "#171717",
        customorange: "#FF7A00",
        blue: "#3B66FF",
        green: "#21ff66",
        red: "#F53535",
      },
    },
  },
  plugins: [],
};
