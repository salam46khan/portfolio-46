/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pinkColor: '#FF66C4',
        lightBlueColor: '#66cfff'
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

