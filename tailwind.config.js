/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1baeae',
        secondary: '#D07662',
        cancel: 'rgba(229, 66, 10, 1)',
      },
      boxShadow: {
        '3xl': '30px -30px var(--tw-shadow-colored) !important',
        'hover-1': '0 4px 15px 0 rgba(45, 54, 65, 0.75)',
        'hover-2': '0 0 5px #333',
        'hover-primary': '0 4px 15px 0 rgba(27, 174, 174, 0.75)',
        'hover-secondary': '0 4px 15px 0 rgba(229, 66, 10, 0.75)',
      },
      scale: {
        '175': '1.75',
      },
      backgroundImage: {
        bg: 'linear-gradient(to bottom right, rgba(229, 66, 10, 0.75), rgba(229, 66, 10, 0.5), rgba(229, 66, 10, 0.25), rgba(229, 66, 10, 0), rgba(27, 174, 174, 0), rgba(27, 174, 174, 0.25) ,rgba(27, 174, 174, 0.5), rgba(27, 174, 174, 0.75))'
      }
    },
  },
  plugins: [],
}

