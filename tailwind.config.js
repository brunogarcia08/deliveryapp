/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FE724C',
        text: '#3A4F66',
        title: '#171718',
        lightBlue: '#E8F0FF',
        darkBlue: '#4167B0'
      },
    },
  },
  plugins: [],
}

