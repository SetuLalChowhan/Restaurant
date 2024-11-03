/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    container: {
      center: true,
      padding: "100px",
    },
    extend: {
      fontFamily: {
        bebas: ['"Bebas Neue"', 'cursive'], // Add Bebas Neue as a custom font
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

