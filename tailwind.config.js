/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {colors: {
      primary: "#0B2447",
      secondary: "#19376D",
    }},
  },
  plugins: [],
}