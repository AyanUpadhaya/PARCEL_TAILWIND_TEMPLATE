/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      monts: ["Montserrat", "sans-serif"],
      sans: ["Open Sans", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
  },
  darkMode: "class",
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
