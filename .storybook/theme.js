import { create } from '@storybook/theming/create';

const colorPrimary = 'rgb(32, 35, 42)';
const colorSecondary = 'rgb(4, 207, 250)';
const colorWhite = 'white';
const colorBlack = 'black';
const colorGray200 = 'rgb(20, 20, 20)';
const colorGray80 = 'rgb(120,120,120)';

export const storyTheme = create({
  base: 'light',

  colorPrimary: colorPrimary,
  colorSecondary: colorPrimary,

  // UI
  appBg: colorWhite,
  appContentBg: colorWhite,
  appBorderColor: colorGray200,
  appBorderRadius: 4,

  // Typography
  fontBase:
    '"Nunito Sans", -apple-system, ".SFNSText-Regular", "San Francisco", BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontCode: '"Apercu", -apple-system, sans-serif',

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
  brandUrl: 'https://github.com/joel3112/react-jopau/tree/main/packages/components',
  brandImage: './images/banner.png'
});
