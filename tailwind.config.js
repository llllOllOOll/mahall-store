/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
       'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        'figma':'#F5F5F5',
        'PrimaryBlue-500':'#3FA9FF',
        'PrimaryBlue-400':'#7377FF',
        'Violet-Mahall':'#6D758F',
      },
    },
  },
  plugins: [],
}
