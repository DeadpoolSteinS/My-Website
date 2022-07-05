/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'card': "url('../img/website_2.png')",
      },
      boxShadow: {
        'card': "inset 0 1000px rgba(0,0,0,.7)",
      }
    },
  },
  plugins: [],
}
