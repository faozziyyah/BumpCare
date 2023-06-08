/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        yellowgold: "#FFD700",
        textColor: "#510115",
        primaryPink: "#EFCDCB",
        lightPink: "#FFF1F4",
        faintPink: "#FDAAB9",
        darkPink: "#745464",
        secondaryPink: "#FB9CD0",
        enhancePink: "#FC6F92",
        secondaryText: "#745F64"
        
      }
    },
  },
  plugins: [],
}