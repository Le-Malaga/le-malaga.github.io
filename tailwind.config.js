/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#e15b2d',
          dark: '#304221',
          bg: '#fcfaf6',
          footer: '#231f20'
        }
      },
      fontFamily: {
        script: ['"Dancing Script"', 'cursive'],
      }
    },
  },
  plugins: [],
}
