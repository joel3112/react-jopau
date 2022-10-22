/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, useEffect, useState } from 'react';
import { createStitches, globalCss } from '@stitches/react';
import type { ConfigType } from '@stitches/react/types/config';
import { ThemeProps, themes } from './themes';

const globalStyles = globalCss({
  body: {
    backgroundColor: '$background',
    color: '$text'
  },
  '*, button, input': {
    fontFamily: '$base !important'
  },
  'pre *, code *': {
    fontFamily: '$code !important'
  }
});

export const getProps = (themeKey: string) => {
  return themes[themeKey].value;
};

export const getTheme = (themeKey: string) => {
  return getProps(themeKey).theme;
};

export const getColors = (themeKey: string, scheme: 'light' | 'dark' = 'light') => {
  return getTheme(themeKey).colors[scheme];
};

const getSchemes = (themeKey: string) => {
  // eslint-disable-next-line @typescript-eslint/ban-types
  const currenTheme: any = getTheme(themeKey);
  const { createTheme } = createStitches({
    theme: currenTheme as ConfigType.Theme<ThemeProps>
  });
  const lightTheme = createTheme('light-theme', {
    ...currenTheme,
    colors: getColors(themeKey, 'light')
  });
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
  const [schemes, setSchemes] = useState<any>({});
  const [currentScheme, setCurrentScheme] = useState<any>(null);

  useEffect(() => {
    handleSchemesChange(getSchemes(themeKey));
  }, [themeKey]);

  useEffect(() => {
    if (schemes.lightTheme && schemes.darkTheme) {
      setCurrentScheme({ ...schemes[darkMode ? 'darkTheme' : 'lightTheme'] });
    }
  }, [darkMode]);

  const handleSchemesChange = (schemes: any) => {
    setSchemes({ ...schemes });
    setCurrentScheme({ ...schemes[darkMode ? 'darkTheme' : 'lightTheme'] });
  };

  return (
    <div className={currentScheme}>
      {globalStyles()}
      {children}
    </div>
  );
};
