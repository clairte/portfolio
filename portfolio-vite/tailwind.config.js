/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Courier Prime', 'monospace'],
      },
      colors: {
        primary: '#F9F2E4',
        secondary: '#537E72',
        accent: '#9CC97F',
      },
      animation: {
        wiggle: 'wiggle 1.2s ease-in-out infinite',
      }, 
      keyframes:{
        wiggle: {
          '0%, 100%': {transform: 'rotate(-5deg)'}, 
          '50%': {transform: 'rotate(5deg)'}, 
        },
      },
    },
  },
  plugins: [],
}
