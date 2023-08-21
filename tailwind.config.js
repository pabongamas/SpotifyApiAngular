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
        'ColorSpot':'#1ed760',
        'activeButtonOption':'#fff',
        'inactiveButtonOption':'#181818',
        'hoverButtonOptionInactive':'#282828',
        'buttonSearch':'#242424'
      },
      fontFamily: {
        'sans': ['Proxima Nova', ...defaultTheme.fontFamily.sans],
      },
      padding: {
        '15': '15px',
      },
      borderRadius:{
        'roundedMainOption':'32px',
        '500Br':'500px'
      }
    },
  },
  plugins: [],
}

