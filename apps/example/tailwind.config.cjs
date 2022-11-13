const defaultConfig = require('../../tailwind.config.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.tsx'],
  theme: defaultConfig.theme,
  plugins: []
};
