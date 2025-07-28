
const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF5A8A",
        secondary: "#FFD3E0",
        darkText: "#1F1F1F"
      },
      fontFamily: {
        pop: ["Poppins", "sans-serif"]
      }
    }
  },
  plugins: [
    flowbite.plugin(),
  ],
}

