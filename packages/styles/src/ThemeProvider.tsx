import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { globalCss } from '@stitches/react';
import { ThemeBuilder } from './ThemeBuilder';
import { Theme } from './themes';
import { computeScheme } from './utils';

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

export const ThemeContext = createContext<{
  config: Theme | string;
  darkMode: boolean;
  onToggle: () => void;
} | null>(null);

export const useThemeContext = () => useContext(ThemeContext);

/**
 * Theme provider component that allows to define the theme and the scheme to use.
 */
export const ThemeProvider = ({
  children,
  config,
  darkMode
}: {
  children: ReactNode;
  config: Theme | string;
  darkMode?: boolean;
}) => {
  const [dark, setDark] = useState<boolean>();

  useEffect(() => {
    setDark(darkMode);
  }, [darkMode]);

  const builder = new ThemeBuilder();
  builder.createTheme(config);

  const currentScheme = computeScheme(
    {
      lightTheme: builder.lightTheme,
      darkTheme: builder.darkTheme
    },
    dark
  );

  if (!currentScheme) {
    return null;
  }

  return (
    <ThemeContext.Provider
      value={{
        config,
        darkMode: !!dark,
        onToggle: () => setDark((prev) => !prev)
      }}>
      <div className={currentScheme}>
        {globalStyles()}
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
