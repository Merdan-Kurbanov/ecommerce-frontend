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
      tertiary: "#151030",
      "black-100": "#100d25",
      "black-200": "#090325",
      "white-100": "#f3f3f3",
    }},
  },
  plugins: [],
}