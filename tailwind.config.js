/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        taishin: {
          red: '#E5001A',
          dark: '#B80015',
          light: '#FF1A33',
        }
      }
    },
  },
  plugins: [],
}
