/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundgrey: "#D9D9D9",
        backgrounddark: "#171717",
        customorange: "#FF7A00",
      },
    },
  },
  plugins: [],
};
