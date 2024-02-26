/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "two" : "#D88B67",
        "tan" : "#FDF6EE",
        "apricot" : "#F6A680",
        "pale" : "#F5BEA3",
        "gray" : "#D5DBD6",
        "teal" : "#5CE1E6",
        "lime" : "#C1FF72",
        "dino" : "#7ED957",
        "avocado" : "#00BF63",
      },
      fontFamily: {
        gamja: ["Gamja Flower", "san-serif"],
        mali: ["Mali", "cursive"],
        'ibm-plex-mono': ['"IBM Plex Mono"', 'monospace'],

      }
    },
  },
  plugins: [],
}