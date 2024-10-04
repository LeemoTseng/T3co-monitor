/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html",
  ],
  theme: {
    extend: {
      screens: {
        monitor:'1080px'
      },
      colors: {
        'bgcolor':'#F1EFE8',
        'primary': '#F6AB00',
        'secondary': '#262626',
        'tertiary': '#535353',
      },
    },
  },
  plugins: [],
}

