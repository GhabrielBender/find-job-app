/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/home/nearby/Nearbyjobs.{js,jsx,ts,tsx}",
    "./components/**/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#312651",
        secondary: "#444262",
        tertiary: "#FF7754",

        gray: "#83829A",
        gray2: "#C1C0C8",

        white: "#F3F4F8",
        lightWhite: "#FAFAFC",
        superWhite: "#FFF",
      },
    },
  },
  plugins: [],
};
