/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {  
      fontFamily: {
      'Jost-Font': ['"Jost"', 'sans-serif'],
    },},
  },
  plugins: [],
}