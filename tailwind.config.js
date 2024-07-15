/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pinkColor: '#FF66C4',
        skyBlueColor: '#08b1ff',
        lightBlueColor: '#66cfff',
        lightColor: '#f3f6ff',
        darkColor: '#1f2129'
      },
      fontFamily: {
        NormalText: ["Poppins", "sans-serif"],
        TitleText: ["Rowdies", "sans-serif"],
        SubTitleText: ["Charm", "cursive"]
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

