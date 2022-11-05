import { memo, ReactNode } from 'react';
import { createStitches, globalCss } from '@stitches/react';
import type { ConfigType } from '@stitches/react/types/config';
import { Theme, ThemeProps } from './themes';
import { computeScheme, getBreakpoints, getColors, getTheme } from './utils';

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
 * Creates a new theme by configuration or theme key.
 */
export const createTheme = (config: Theme | string) => {
  const currentTheme: ThemeProps = getTheme(config);
  const { createTheme: createStitchesTheme, styled } = createStitches({
    theme: currentTheme as unknown as ConfigType.Theme<ThemeProps>,
    media: Object.entries(getBreakpoints(config)).reduce(
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

  // Light theme
  const lightTheme = createStitchesTheme('light-theme', {
    ...currentTheme,
    colors: getColors(config, 'light'),
    shadows: getTheme(config).shadows.light as ConfigType.Theme<ThemeProps>['shadows']
  });
  // Dark theme
  const darkTheme = createStitchesTheme('dark-theme', {
    ...currentTheme,
    colors: getColors(config, 'dark'),
    shadows: getTheme(config).shadows.dark as ConfigType.Theme<ThemeProps>['shadows']
  });

  return { lightTheme, darkTheme, styled };
};

/**
 * Global styles for the application with the theme
 */
// eslint-disable-next-line react/display-name
export const GlobalStyles = memo(
  ({
    children,
    themeConfig,
    darkMode
  }: {
    children: ReactNode;
    themeConfig: string;
    darkMode: boolean;
  }) => {
    const schemes = createTheme(themeConfig || 'default');
    const currentScheme = computeScheme(schemes, darkMode);

    if (!currentScheme) {
      return null;
    }

    return (
      <div className={currentScheme}>
        {globalStyles()}
        {children}
      </div>
    );
  }
);
