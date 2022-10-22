import { create } from '@storybook/theming';
import { getColors, getProps, getTheme } from '/packages/styles/src/GlobalStyles';

export const createStorybookTheme = (themeKey = 'default') => {
  const colors = getColors(themeKey);
  const { fonts } = getTheme(themeKey);
  const { brand } = getProps(themeKey);

  return create({
    base: 'light',

    colorPrimary: colors.primary,
    colorSecondary: colors.primary,

    // UI
    appBg: colors.white,
    appContentBg: colors.white,
    appBorderColor: colors.blackBorder,
    appBorderRadius: 4,

    // Typography
    fontBase: fonts.base,
    fontCode: fonts.code,

    // Text colors
    textColor: colors.black,
    textInverseColor: colors.white,

    // Toolbar default and active colors
    barTextColor: colors.grayBorder,
    barSelectedColor: colors.secondary,
    barBg: colors.white,

    // Form colors
    inputBg: colors.white,
    inputBorder: colors.blackBorder,
    inputTextColor: colors.black,
    inputBorderRadius: 4,

    brandTitle: brand.title,
    brandUrl: brand.url,
    brandImage: brand.image
  });
};
