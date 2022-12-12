/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Rubik', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        focus: `0 0 0 2px ${colors.violet['500']}`,
      },
    },
  },
  plugins: [],
}
