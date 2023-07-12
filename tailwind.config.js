/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
      primary2: "#2f2e34",
      primary: "#252429",
      primary3:'#212024',
      secondary: "#850000",
      seclight: "#ffc2b3",
      turuncu: "#ff3603",
      
    }},
  },
  plugins: [],
}