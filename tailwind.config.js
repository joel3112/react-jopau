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
      border: {
        DEFAULT: 'var(--colors-border)',
        gray: 'var(--colors-grayBorder)',
        black: 'var(--colors-blackBorder)'
      }
    },
    extend: {
      opacity: {
        0: 'var(--opacity-0)',
        20: 'var(--opacity-20)',
        40: 'var(--opacity-40)',
        60: 'var(--opacity-60)',
        80: 'var(--opacity-80)',
        100: 'var(--opacity-100)'
      }
    }
  },
  plugins: []
};
