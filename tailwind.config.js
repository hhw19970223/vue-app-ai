/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        secondary: {
          '500': 'hsl(11 48% 60%)',
        },
        primary: {
          '500': 'hsl(190 63% 54%)',
        },
      },
      boxShadow: {
        '3xl': '30px -30px var(--tw-shadow-colored) !important',
      }
    },
  },
  plugins: [],
}

