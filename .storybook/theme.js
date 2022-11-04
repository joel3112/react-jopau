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
    appContentBg: '#f6f6f6',
    appBorderColor: colors.grayDark,
    appBorderRadius: 4,

    // Typography
    fontBase: fonts.base,
    fontCode: fonts.code,

    // Text colors
    textColor: colors.text,
    textInverseColor: colors.white,

    // Toolbar default and active colors
    barTextColor: colors.grayDark,
    barSelectedColor: colors.secondary,
    barBg: colors.white,

    // Form colors
    inputBg: colors.white,
    inputBorder: colors.grayDark,
    inputTextColor: colors.black,
    inputBorderRadius: 4,

    brandTitle: brand.title,
    brandUrl: brand.url,
    brandImage: brand.image
  });
};
