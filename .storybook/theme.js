import { create } from '@storybook/theming/create';

const colorPrimary = 'rgb(32, 35, 42)';
const colorSecondary = 'rgb(4, 207, 250)';
const colorBackgroundContent = '#f7f8f9';
const colorWhite = 'white';
const colorBlack = 'black';
const colorGray200 = 'rgb(20, 20, 20)';
const colorGray80 = 'rgb(120,120,120)';

export const customTheme = create({
  base: 'light',

  colorPrimary: colorPrimary,
  colorSecondary: colorPrimary,

  // UI
  appBg: colorBackgroundContent,
  appContentBg: colorWhite,
  appBorderColor: colorGray200,
  appBorderRadius: 4,

  // Typography
  fontBase:
    '"Nunito Sans", -apple-system, ".SFNSText-Regular", "San Francisco", BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: colorBlack,
  textInverseColor: colorWhite,

  // Toolbar default and active colors
  barTextColor: colorGray80,
  barSelectedColor: colorSecondary,
  barBg: colorWhite,

  // Form colors
  inputBg: colorWhite,
  inputBorder: colorGray200,
  inputTextColor: colorBlack,
  inputBorderRadius: 4,

  brandTitle: 'react-jopau',
  brandUrl: '#',
  brandImage: './images/banner.png'
});
