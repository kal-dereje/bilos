/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Pacifico: ["Pacifico", "cursive"],
        RobotoSlab: ["Roboto Slab", "serif"],
        Courgette: ["Courgette", "cursive"],
        Kanit: ["Kanit", "cursive"],
        Roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        Bilos: {
          primary: "#F6893C",
          secondary: "#F6EC40",
          third: "#5F5950",
          fourth: "#CBC8C4",
        },
      },
    },
  },
  plugins: [],
};
