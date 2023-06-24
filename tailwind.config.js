/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'PrimaryColor':'#fff',
        'ColorSpot':'#1ed760'
      },
      fontFamily: {
        'sans': ['Proxima Nova', ...defaultTheme.fontFamily.sans],
      },
      padding: {
        '15': '15px',
      }
    },
  },
  plugins: [],
}

