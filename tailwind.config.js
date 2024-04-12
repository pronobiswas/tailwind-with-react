/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        sada:'#fff',
        RoyalBlue : '#1C1E53',
        Darkblue : '#282938',
        Tintblue : '#1C1E53',
        Grey : '#F4F6FC',
        Yellow : '#FCD980',
        Accent : '#EEF4FA'
      },
      backgroundImage: {
        'inquriBG': "url('./Components/HomeComponent/images/inquiry.jpg')",
        'footer-texture': "url('./Components/HomeComponent/images/inquiry.jpg')",
      }
      
    },
  },
  plugins: [],
}

