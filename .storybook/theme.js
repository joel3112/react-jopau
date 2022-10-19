import { create } from '@storybook/theming/create';
import { baseTheme as theme } from '../styles/theme';

const { colors, fonts } = theme;

export const storyTheme = create({
  base: 'light',

  colorPrimary: colors.primary,
  colorSecondary: colors.primary,

  // UI
  appBg: colors.white,
  appContentBg: colors.white,
  appBorderColor: colors.gray200,
  appBorderRadius: 4,

  // Typography
  fontBase: fonts.base,
  fontCode: fonts.code,

  // Text colors
  textColor: colors.black,
  textInverseColor: colors.white,

  // Toolbar default and active colors
  barTextColor: colors.gray80,
  barSelectedColor: colors.secondary,
  barBg: colors.white,

  // Form colors
  inputBg: colors.white,
  inputBorder: colors.gray200,
  inputTextColor: colors.black,
  inputBorderRadius: 4,

  brandTitle: 'react-jopau',
  brandUrl: 'https://github.com/joel3112/react-jopau/tree/main/packages/components',
  brandImage: './images/banner.png'
});
