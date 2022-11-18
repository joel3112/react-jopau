/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./packages/**/*.{js,jsx,ts,tsx,mdx}'],
  theme: {
    colors: {
      primary: 'var(--colors-primary)',
      secondary: 'var(--colors-secondary)',
      black: 'var(--colors-black)',
      white: 'var(--colors-white)',
      blue: {
        50: 'var(--colors-blue50)',
        100: 'var(--colors-blue100)',
        200: 'var(--colors-blue200)',
        300: 'var(--colors-blue300)',
        400: 'var(--colors-blue400)',
        500: 'var(--colors-blue500)',
        600: 'var(--colors-blue600)',
        700: 'var(--colors-blue700)',
        800: 'var(--colors-blue800)',
        900: 'var(--colors-blue900)'
      },
      green: {
        50: 'var(--colors-green50)',
        100: 'var(--colors-green100)',
        200: 'var(--colors-green200)',
        300: 'var(--colors-green300)',
        400: 'var(--colors-green400)',
        500: 'var(--colors-green500)',
        600: 'var(--colors-green600)',
        700: 'var(--colors-green700)',
        800: 'var(--colors-green800)',
        900: 'var(--colors-green900)'
      },
      yellow: {
        50: 'var(--colors-yellow50)',
        100: 'var(--colors-yellow100)',
        200: 'var(--colors-yellow200)',
        300: 'var(--colors-yellow300)',
        400: 'var(--colors-yellow400)',
        500: 'var(--colors-yellow500)',
        600: 'var(--colors-yellow600)',
        700: 'var(--colors-yellow700)',
        800: 'var(--colors-yellow800)',
        900: 'var(--colors-yellow900)'
      },
      red: {
        50: 'var(--colors-red50)',
        100: 'var(--colors-red100)',
        200: 'var(--colors-red200)',
        300: 'var(--colors-red300)',
        400: 'var(--colors-red400)',
        500: 'var(--colors-red500)',
        600: 'var(--colors-red600)',
        700: 'var(--colors-red700)',
        800: 'var(--colors-red800)',
        900: 'var(--colors-red900)'
      },
      gray: {
        50: 'var(--colors-gray50)',
        100: 'var(--colors-gray100)',
        200: 'var(--colors-gray200)',
        300: 'var(--colors-gray300)',
        400: 'var(--colors-gray400)',
        500: 'var(--colors-gray500)',
        600: 'var(--colors-gray600)',
        700: 'var(--colors-gray700)',
        800: 'var(--colors-gray800)',
        900: 'var(--colors-gray900)'
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
  plugins: [require('@tailwindcss/line-clamp')]
};
