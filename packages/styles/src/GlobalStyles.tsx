import { ReactNode } from 'react';
import { createStitches, globalCss, styled } from '@stitches/react';
import type { ConfigType } from '@stitches/react/types/config';
import { Theme, ThemeProps, ThemeScheme, ThemeStitches } from './themes';
import { computeScheme, getBreakpoints, getColors, getTheme, getThemeInstance } from './utils';

const globalStyles = globalCss({
  body: {
    backgroundColor: '$background',
    color: '$text'
  },
  '*, button, input': {
    fontFamily: '$base'
  },
  'pre *, code *': {
    fontFamily: '$code !important'
  }
});

/**
 * Global styles for the application with the theme
 */
export const GlobalStyles = ({
  children,
  themeConfig,
  darkMode
}: {
  children: ReactNode;
  themeConfig: Theme | string;
  darkMode: boolean;
}) => {
  const builder = new ThemeBuilder();
  builder.createTheme(themeConfig);

  const currentScheme = computeScheme(
    {
      lightTheme: builder.lightTheme,
      darkTheme: builder.darkTheme
    },
    darkMode
  );

  if (!currentScheme) {
    return null;
  }

  return (
    <div className={currentScheme}>
      {globalStyles()}
      {children}
    </div>
  );
};

export class ThemeBuilder {
  styledTheme: ThemeStitches = styled;
  lightTheme: ThemeScheme = null;
  darkTheme: ThemeScheme = null;
  #configuration: string | null = null;

  constructor(configJSON?: string) {
    if (configJSON) {
      try {
        this.#configuration = require(configJSON || '');
      } catch (e) {
        console.warn('Invalid theme configuration path', configJSON);
      }
    }
  }

  /**
   * Creates a new theme by configuration or theme key.
   */
  createTheme(config?: Theme | string) {
    const currentConfig = this.#configuration || getThemeInstance(config);
    const currentTheme: ThemeProps = getTheme(currentConfig);
    const { createTheme: createStitchesTheme, styled } = createStitches({
      theme: currentTheme as unknown as ConfigType.Theme<ThemeProps>,
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

    // Light theme
    this.lightTheme = createStitchesTheme('light-theme', {
      ...currentTheme,
      colors: getColors(currentConfig, 'light'),
      shadows: getTheme(currentConfig).shadows.light as ConfigType.Theme<ThemeProps>['shadows']
    });
    // Dark theme
    this.darkTheme = createStitchesTheme('dark-theme', {
      ...currentTheme,
      colors: getColors(currentConfig, 'dark'),
      shadows: getTheme(currentConfig).shadows.dark as ConfigType.Theme<ThemeProps>['shadows']
    });
  }
}
