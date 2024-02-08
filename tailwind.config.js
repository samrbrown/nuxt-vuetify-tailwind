/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors: {
      'primary': {
        50: '#D4E1FF',
        100: '#A1BEFF',
        200: '#6E9BFF',
        300: '#5286F7',
        400: '#4072DE',
        500: '#2557C4',
        600: '#0F40AB',
        700: '#002E91',
        800: '#002678',
        900: '#001E5E',
        950: '#001645',
      },
      'secondary': '#b551ba',
      'tertiary': '#6cfbce',
      'info': '#00cde4',
      'warning': '#ffc05b',
      'success': '#20c197',
      'danger': '#f7596a',
      'ak-black': '#141421',
      'white': '#ffffff',
      'ak-grey': '#d4d4d4',
    },
    fontFamily: {
      'sans': ['Urbanist', 'sans-serif'],
    },
    extend: {
    },
  },
  corePlugins: {
    fontSize: false,
  },
  plugins: [
    require('tailwindcss-fluid-type'),
  ],
}
