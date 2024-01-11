/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      orange:'#FF6600',
      lightOrange:'#ff983f',
      extraLightOrange:'#ffffa1',
      gray:'#808080',
      darkGray:'#2b2b2b',
      white:'#FFFFFF',
      darkWhite:'#e0e0e0',
      black:'#000000',
      lightBlack:'#161616',
      extraLightBlack:'#2c2c2c',
    }
  },
  plugins: []
}