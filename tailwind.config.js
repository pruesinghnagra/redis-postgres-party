// const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./server/**/*.html', './client/**/*.jsx'],                                                                                                               
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'puce':'#d11d03',
      }
    },
  },  
  variants: {
    extend: {},
  },
  plugins: [],
}

