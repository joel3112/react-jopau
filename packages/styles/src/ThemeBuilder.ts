import { createStitches, styled } from '@stitches/react';
import { BreakpointsRules } from './breakpoint';
import defaultConfig from './themes/default';
import themeUtils from './themes/utils';
import {
  getBreakpoints,
  getColors,
  getTheme,
  getThemeInstance,
  ThemeConfig,
  ThemeProps,
  ThemePropValue,
  ThemeScheme,
  ThemeStitches
} from './theme';

export class ThemeBuilder {
  currentConfig: ThemeConfig = defaultConfig;
  styledTheme: ThemeStitches = styled;
  lightTheme: ThemeScheme = null;
  darkTheme: ThemeScheme = null;
  breakpoints: BreakpointsRules = {};
  utils = themeUtils;

  /**
   * Creates a new theme by configuration or theme key.
   *
   * @param {ThemeConfig} [config] - Theme configuration or theme key
   */
  createTheme(config?: ThemeConfig) {
    this.currentConfig = getThemeInstance(config);

    const currentTheme: ThemeProps = getTheme(this.currentConfig);
    const { createTheme: createStitchesTheme, styled } = createStitches({
      media: Object.entries(getBreakpoints(this.currentConfig)).reduce(
        (acc, [key, value]) => ({
          ...acc,
          [key]: `(max-width: ${value}px)`
        }),
        {}
      ),
      utils: themeUtils
    });

    this.styledTheme = styled;
    this.breakpoints = getBreakpoints(this.currentConfig);

    // Light theme
    this.lightTheme = createStitchesTheme('light-theme', {
      ...currentTheme,
      colors: getColors(this.currentConfig, 'light'),
      shadows: getTheme(this.currentConfig).shadows.light as ThemePropValue
    });
    // Dark theme
    this.darkTheme = createStitchesTheme('dark-theme', {
      ...currentTheme,
      colors: getColors(this.currentConfig, 'dark'),
      shadows: getTheme(this.currentConfig).shadows.dark as ThemePropValue
    });
  }
}
