/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'navy': '#033047',
        'iron': '#304C62',
        'gray': '#5C677D',
        'light-gray': '#D9D9D9',
        'pearl-white': '#F4F3EE',
        'maroon': '#750E21'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  content: [],
}

