/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      'roboto':  ["'Roboto', sans-serif"],
      'titulos': ["fontWeight: '900'"],
      'parrafos': ["fontWeight: '300'"]
    }
  },
  plugins: [],
}
