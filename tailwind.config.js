/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./packages/components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: 'var(--colors-primary)',
      secondary: 'var(--colors-secondary)',
      black: 'var(--colors-black)',
      white: 'var(--colors-white)',
      text: 'var(--color-text)'
    },
    extend: {}
  },
  plugins: []
};
