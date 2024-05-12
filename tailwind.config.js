/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'hanken' : ["Hanken Grotesk", "sans-serif"],
      'script' : ["Sacramento", "cursive"],
    },
    colors: {
      'customWhite' : '#DCE1E5',
      'customGrey' : '#242629',
      'customBlack' : '#181919',
      'lightLime' : '#ACC642',
      'lightDarkLime' : '#348332',
      'darkLime' : '#87A11D',
      'darkBlackLime' : '#175C15'
    },
    extend: {},
  },
  plugins: [],
}

