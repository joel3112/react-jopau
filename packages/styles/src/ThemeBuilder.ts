import { createStitches, styled } from '@stitches/react';
import { BreakpointsRules } from './breakpoint';
import defaultConfig from './themes/default';
import themeUtils from './themes/utils';
import {
  getBreakpoints,
  getThemeInstance,
  normalizeThemeByScheme,
  ThemeConfig,
  ThemeScheme,
  ThemeStyled
} from './theme';

export class ThemeBuilder {
  currentConfig: ThemeConfig = defaultConfig;
  styledTheme: ThemeStyled = styled;
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

    const { createTheme: createStitchesTheme, styled } = createStitches({
      media: Object.entries(getBreakpoints(this.currentConfig)).reduce(
        (acc, [key, value]) => ({
          ...acc,
          [key]: `(max-width: ${value}px)`
        }),
        {}
      ),
      utils: themeUtils,
      prefix: 'nextui'
    });

    this.styledTheme = styled;
    this.breakpoints = getBreakpoints(this.currentConfig);

    // Light theme
    this.lightTheme = createStitchesTheme('light-theme', {
      ...normalizeThemeByScheme(this.currentConfig, 'light')
    });
    // Dark theme
    this.darkTheme = createStitchesTheme('dark-theme', {
      ...normalizeThemeByScheme(this.currentConfig, 'dark')
    });
  }
}
