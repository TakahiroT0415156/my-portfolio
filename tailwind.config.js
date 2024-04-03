/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {},
      fontFamily: {
        mainFont: ["Klee One"],
        name: ["Josefin Sans"],
      },
      animation: {},
      keyframes: {},
    },
    screens: {
      sp: { max: "750px" },
      pc: "950px",
    },
  },
  plugins: [],
};
