import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { globalCss } from '@stitches/react';
import { ThemeBuilder } from './ThemeBuilder';
import { ThemeConfig } from './themes/types';
import { ThemeScheme } from './themes';
import { computeScheme } from './utils';

export const THEME_SELECTOR_STORAGE_KEY = 'key-theme-selector';
export const DARK_MODE_STORAGE_KEY = 'key-dark-mode';

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
  config?: ThemeConfig | string;
  darkMode?: boolean;
  onToggle?: () => void;
}>({});

export const useThemeContext = () => useContext(ThemeContext);

type ThemeProviderProps = {
  children: ReactNode;
  config: ThemeConfig | string;
  darkMode?: boolean;
};

/**
 * Theme provider component that allows to define the theme and the scheme to use.
 *
 * @param   {ThemeProviderProps} props - Props injected to the provider.
 * @returns {JSX.Element} Rendered provider.
 */
export const ThemeProvider = ({ children, config, darkMode }: ThemeProviderProps) => {
  const [dark, setDark] = useState<boolean>();
  const [schemes, setSchemes] = useState<{ lightTheme?: ThemeScheme; darkTheme?: ThemeScheme }>({});

  useEffect(() => {
    setDark(darkMode);
  }, [darkMode]);

  useEffect(() => {
    const builder = new ThemeBuilder();
    builder.createTheme(config);
    setSchemes({ lightTheme: builder.lightTheme, darkTheme: builder.darkTheme });
  }, [config]);

  return (
    <ThemeContext.Provider
      value={{
        config,
        darkMode: !!dark,
        onToggle: () => setDark((prev) => !prev)
      }}>
      <div className={computeScheme(schemes, dark)}>
        {globalStyles()}
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
