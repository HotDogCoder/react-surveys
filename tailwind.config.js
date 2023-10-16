/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "layers",
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        //... add other colors as necessary
        'acidjelly-blue': {
          DEFAULT: '#03ffff',
          '50': '#03ffff',
          '100': '#03ffff',
          '200': '#03ffff',
          '300': '#03ffff',
          '400': '#03ffff',
          '500': '#03ffff',
          '600': '#03ffff',
          '700': '#37c7c7',
          '800': '#03ffff',
          '900': '#03ffff'
        },
        'acidjelly-red': {
          DEFAULT: '#ff0000',
          '50': '#ff0000',
          '100': '#ff0000',
          '200': '#ff0000',
          '300': '#ff0000',
          '400': '#ff0000',
          '500': '#ff0000',
          '600': '#ff0000',
          '700': '#ff0000',
          '800': '#ff0000',
          '900': '#ff0000'
        },
      },
    }
  },
  variants: {
  },
  plugins: [
      require("@tailwindcss/typography"),
      require("tailwind-scrollbar-hide"),
  ],
};
