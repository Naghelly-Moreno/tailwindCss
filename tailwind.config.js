/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Hanken-Grotesk': ['Hanken Grotesk', 'sans-serif'],
      },
      colors: {
        'Light-red':'hsl(0, 100%, 67%)',
        'Light-red-alpha':'hsla(0, 100%, 67%, 0.4)',
        'Orange-yellow':'hsl(39, 100%, 56%)',
        'Orange-yellow-alpha':'hsla(39, 100%, 56%, 0.4)',
        'Green-teal': 'hsl(166, 100%, 37%)',
        'Green-teal-alpha': 'hsla(166, 100%, 37%, 0.4)',
        'Cobalt-blue':'hsl(234, 85%, 45%)',
        'Cobalt-blue-alpha':'hsla(234, 85%, 45%, 0.4)',
        'lights-late-blue': 'hsl(252, 100%,67%)',
        'light-royal-blue': 'hsl(241, 81%, 54%)',
        'Violet-blue': 'hsla(256, 72%, 46%, 1)',
        'Persian-blue':'hsla(241, 72%, 46%, 0)',
        'White': 'hsl(0, 0%, 100%)',
        'Pale-blue':'hsl(221, 100%, 96%)',
        'Light-lavender':'hsla(241, 100%, 89%)',
        'Dark-gray-blue':'hsl(224, 30%, 27%)',
        'Dark-gray-blue-alpha':'hsla(224, 30%, 27%, 0.5)'
      }
    },
  },
  plugins: [],
}