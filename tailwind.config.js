/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        sada:'#fff'
      },
      maxWidth: {
        'container': '92rem',
      }
    },
  },
  plugins: [],
}

