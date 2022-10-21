const { createStitches } = require('@stitches/react');

const baseTheme = {
  theme: {
    colors: {
      primary: '#20232a',
      secondary: '#04cffa',
      text: '#000',
      white: '#fff',
      black: '#000',
      gray200: '#141414',
      gray80: '#787878',
      background: '#f8f8f8'
    }
  },
  fonts: {
    base: '"Nunito Sans", -apple-system, ".SFNSText-Regular", "San Francisco", BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif',
    code: '"MonoLisa", -apple-system, sans-serif'
  }
};

const { createTheme } = createStitches({
  ...baseTheme
});

const lightTheme = createTheme('light-theme', {
  colors: {
    ...baseTheme.theme.colors
  },
  fonts: baseTheme.fonts
});

const darkTheme = createTheme('dark-theme', {
  colors: {
    primary: '#04cffa',
    secondary: '#20232a',
    text: '#fff',
    background: '#333'
  },
  fonts: baseTheme.fonts
});

module.exports = {
  baseTheme: { colors: baseTheme.theme.colors, fonts: baseTheme.fonts },
  lightTheme,
  darkTheme
};
