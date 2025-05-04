/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        'wave-sand': '#F5E6DA',
        'wave-gold': '#D4B88C',
        'wave-ocean': '#4FA6B3',
        'wave-palm': '#2F7A4D',
        'wave-dark': '#1D1D1B',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'wave-pattern': "url('/images/wave-pattern.svg')",
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      }
    },
  },
  plugins: [],
} 