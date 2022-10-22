/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./packages/components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: 'var(--colors-primary)',
      secondary: 'var(--colors-secondary)',
      black: 'var(--colors-black)',
      white: 'var(--colors-white)',
      gray: 'var(--colors-gray)',
      text: 'var(--colors-text)',
      background: 'var(--colors-background)',
      grayBorder: 'var(--colors-grayBorder)',
      blackBorder: 'var(--colors-blackBorder)'
    },
    extend: {}
  },
  plugins: []
};
