/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        main: "#4C7EEF",
      },
      fontFamily: {
        Mont: ["Montserrat"],
        NM: ["Nanum Myeongjo"],
      },
    },
  },
  plugins: [],
};
