/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'stylescript': ['Style Script', 'cursive'],
        'frankhl' : ['Frank Ruhl Libre', 'serif'],
        'lato' : ['Lato', 'serif']
      },
      boxShadow: {
        'custom-blur': '0px 0px 20px 10px var(--blue2--)',
      },
    },
  },
  plugins: [],
})

