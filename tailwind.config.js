/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    fontFamily: {
      barlow: ['barlow condensed', 'nunito', 'fira sans'],
    },
    minHeight: {
      viewport: '100dvh',
    },
    extend: {
      colors: {
        'deep-blue': '#242942',
        'custom-orange': '#FF5E5E',
      },
    },
  },
  plugins: [],
}
