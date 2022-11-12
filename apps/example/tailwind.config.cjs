/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.tsx'],
  theme: {
    colors: {
      primary: 'var(--colors-primary)',
      secondary: 'var(--colors-secondary)',
      black: 'var(--colors-black)',
      white: 'var(--colors-white)',
      gray: {
        DEFAULT: 'var(--colors-gray)',
        dark: 'var(--colors-gray-dark)'
      },
      text: 'var(--colors-text)',
      background: 'var(--colors-background)',
      border: {
        DEFAULT: 'var(--colors-border)'
      }
    },
    fontFamily: {
      base: 'var(--fonts-base)',
      code: 'var(--fonts-code)'
    },
    extend: {
      opacity: {
        0: 'var(--opacity-0)',
        20: 'var(--opacity-20)',
        40: 'var(--opacity-40)',
        60: 'var(--opacity-60)',
        80: 'var(--opacity-80)',
        100: 'var(--opacity-100)'
      },
      boxShadow: {
        DEFAULT: 'var(--shadows-boxShadow)'
      }
    }
  },
  plugins: []
};
