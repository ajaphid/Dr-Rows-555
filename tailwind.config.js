/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      colors: {
        ...colors,
        'darkBrown': '#5C4036',
        'darkRed': '#963817',
        'offWhite': '#FFF4E9'
      }
    },
    plugins: [],
  }