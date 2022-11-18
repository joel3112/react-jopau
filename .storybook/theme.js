import { create } from '@storybook/theming';
import { getColors, getProps, getTheme, getThemeStored } from '/packages/styles/src/theme';

export const createStorybookTheme = (themeKey = 'default') => {
  const currentTheme = getThemeStored() || themeKey;
  const colors = getColors(currentTheme);
  const { fonts } = getTheme(currentTheme);
  const { brand } = getProps(currentTheme);

  return create({
    base: 'light',

    colorPrimary: colors.secondary,
    colorSecondary: colors.secondary,

    // UI
    appBg: colors.white,
    appContentBg: '#f6f6f6',
    appBorderColor: colors.gray700,
    appBorderRadius: 4,

    // Typography
    fontBase: fonts.base,
    fontCode: fonts.code,

    // Text colors
    textColor: colors.text,
    textInverseColor: colors.white,

    // Toolbar default and active colors
    barTextColor: colors.gray700,
    barSelectedColor: colors.secondary,
    barBg: colors.white,

    // Form colors
    inputBg: colors.white,
    inputBorder: colors.gray700,
    inputTextColor: colors.black,
    inputBorderRadius: 4,

    brandTitle: brand.title,
    brandUrl: brand.url,
    brandImage: brand.image
  });
};
