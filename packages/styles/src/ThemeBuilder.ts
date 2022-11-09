import { createStitches, styled } from '@stitches/react';
import { ThemeConfig, ThemeProps, ThemePropValue } from './themes/types';
import { ThemeScheme, ThemeStitches } from './themes';
import { BreakpointsRules } from './breakpoint';
import { getBreakpoints, getColors, getTheme, getThemeInstance } from './utils';

export class ThemeBuilder {
  styledTheme: ThemeStitches = styled;
  lightTheme: ThemeScheme = null;
  darkTheme: ThemeScheme = null;
  breakpoints: BreakpointsRules = {};

  /**
   * Creates a new theme by configuration or theme key.
   *
   * @param {(ThemeConfig | string)} [config] - Theme configuration or theme key
   */
  createTheme(config?: ThemeConfig | string) {
    const currentConfig = getThemeInstance(config);
    const currentTheme: ThemeProps = getTheme(currentConfig);
    const { createTheme: createStitchesTheme, styled } = createStitches({
      media: Object.entries(getBreakpoints(currentConfig)).reduce(
        (acc, [key, value]) => ({
          ...acc,
          [key]: `(max-width: ${value}px)`
        }),
        {}
      ),
      utils: {
        size: (value: number) => ({
          width: value,
          height: value
        }),
        br: (value: number) => ({
          borderRadius: value
        }),
        m: (value: number) => ({
          margin: value
        }),
        mt: (value: number) => ({
          marginTop: value
        }),
        mr: (value: number) => ({
          marginRight: value
        }),
        mb: (value: number) => ({
          marginBottom: value
        }),
        ml: (value: number) => ({
          marginLeft: value
        }),
        mx: (value: number) => ({
          marginLeft: value,
          marginRight: value
        }),
        my: (value: number) => ({
          marginTop: value,
          marginBottom: value
        }),
        p: (value: number) => ({
          padding: value
        }),
        pt: (value: number) => ({
          paddingTop: value
        }),
        pr: (value: number) => ({
          paddingRight: value
        }),
        pb: (value: number) => ({
          paddingBottom: value
        }),
        pl: (value: number) => ({
          paddingLeft: value
        }),
        px: (value: number) => ({
          paddingLeft: value,
          paddingRight: value
        }),
        py: (value: number) => ({
          paddingTop: value,
          paddingBottom: value
        }),
        alignBetween: (direction: 'row' | 'column') => ({
          display: 'flex',
          flexDirection: direction,
          alignItems: 'center',
          justifyContent: 'space-between'
        }),
        alignCenterX: (direction: 'row' | 'column') => ({
          display: 'flex',
          flexDirection: direction,
          alignItems: 'center'
        }),
        alignCenterY: (direction: 'row' | 'column') => ({
          display: 'flex',
          flexDirection: direction,
          justifyContent: 'center'
        })
      }
    });

    this.styledTheme = styled;
    this.breakpoints = getBreakpoints(currentConfig);

    // Light theme
    this.lightTheme = createStitchesTheme('light-theme', {
      ...currentTheme,
      colors: getColors(currentConfig, 'light'),
      shadows: getTheme(currentConfig).shadows.light as ThemePropValue
    });
    // Dark theme
    this.darkTheme = createStitchesTheme('dark-theme', {
      ...currentTheme,
      colors: getColors(currentConfig, 'dark'),
      shadows: getTheme(currentConfig).shadows.dark as ThemePropValue
    });
  }
}
