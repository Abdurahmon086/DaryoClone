/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      lgx: '1074px',
      xl: '1440px',
    },
    colors: {
      'black': '#161616',
      'blackMini': '#212121',
      'blackBold': '#000',
      'white': '#f0f0f0',
      'whiteGrey': '#d1d1d1',
      'blueBtn': '#008ccc',
      'grey': '#c0c0c0',
      'greyBold': '#bbbbbb',
      'darkWhite': '#ececec',
      'whiteBold': '#FFF',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
}