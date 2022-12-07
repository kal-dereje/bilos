/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "ping-slow": "ping 2s linear infinite",
        "spin-menu": "spin 0.4s linear ",
        wiggle: "wiggle 0.7s ease-in-out ",
        grow: "grow 0.4s linear",
      },
      boxShadow: {
        custom: "0 0 10px 2px rgba(192, 192, 192, 0.5)",
      },
      backgroundImage: {
        "hero-pattern": "url('/assests/cup.png')",
      },
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
          fourth: "#8484A1",
        },
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        grow: {
          "100%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.5)" },
          "0%": { transform: "scale(0)" },

          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
