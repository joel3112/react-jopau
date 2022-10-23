import { ReactNode, useEffect, useState } from 'react';
import { createStitches, globalCss } from '@stitches/react';
import type { ConfigType } from '@stitches/react/types/config';
import { Theme, ThemeProps, themes, ThemeScheme, ThemeSchemes } from './themes';

const globalStyles = globalCss({
  body: {
    backgroundColor: '$background',
    color: '$text'
  },
  '*, button, input': {
    fontFamily: '$base'
  },
  'pre *, code *': {
    fontFamily: '$code'
  }
});

export const getProps = (themeKey: string): Theme => {
  return themes[themeKey].value;
};

export const getTheme = (themeKey: string): ThemeProps => {
  return getProps(themeKey).theme;
};

export const getColors = (themeKey: string, scheme: 'light' | 'dark' = 'light') => {
  return getTheme(themeKey).colors[scheme] as ConfigType.Theme<ThemeProps>['colors'];
};

export const getBreakpoints = (themeKey: string) => {
  return getProps(themeKey).media;
};

const getSchemes = (themeKey: string) => {
  const currenTheme: ThemeProps = getTheme(themeKey);
  const { createTheme } = createStitches({
    theme: currenTheme as unknown as ConfigType.Theme<ThemeProps>,
    media: Object.entries(getBreakpoints(themeKey)).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: `(max-width: ${value}px)`
      }),
      {}
    )
  });

  // Light theme
  const lightTheme = createTheme('light-theme', {
    ...currenTheme,
    colors: getColors(themeKey, 'light')
  });
  // Dark theme
  const darkTheme = createTheme('dark-theme', {
    ...currenTheme,
    colors: getColors(themeKey, 'dark')
  });

  return { lightTheme, darkTheme };
};

export const GlobalStyles = ({
  children,
  themeKey,
  darkMode
}: {
  children: ReactNode;
  themeKey: string;
  darkMode: boolean;
}) => {
  const [schemes, setSchemes] = useState<ThemeSchemes>({});
  const [currentScheme, setCurrentScheme] = useState<ThemeScheme>(null);

  useEffect(() => {
    const _schemes: ThemeSchemes = getSchemes(themeKey);
    setSchemes({ ..._schemes });
    handleSchemeChange(_schemes);
  }, [themeKey]);

  useEffect(() => {
    handleSchemeChange(schemes);
  }, [darkMode]);

  const handleSchemeChange = (schemes: ThemeSchemes) => {
    if (schemes.lightTheme && schemes.darkTheme) {
      setCurrentScheme(darkMode ? schemes.darkTheme : schemes.lightTheme);
    }
  };

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
