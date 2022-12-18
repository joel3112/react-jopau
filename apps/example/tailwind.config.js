const defaultConfig = require('../../tailwind.config.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.tsx'],
  theme: {
    ...defaultConfig.theme,
    screens: {
      xs: '650px',
      sm: '960px',
      md: '1280px',
      lg: '1300px',
      xl: '1920px'
    }
  },
  plugins: []
};
