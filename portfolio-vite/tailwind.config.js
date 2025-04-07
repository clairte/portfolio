/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C9D1A5',
        secondary: '#537E72',
        accent: '#9CC97F',
      },
    },
  },
  plugins: [],
}
