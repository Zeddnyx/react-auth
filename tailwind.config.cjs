/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pop:  ['Poppins', 'sans-serif'],
      },
      fontSize: {
        sm: '18px',
      },
      colors: {
        dark: 'hsl(260, 8%, 14%)'
      },
    },
  },
  plugins: [],
}
