import { createContext, useEffect, useState } from 'react';
import { globalCss } from '@stitches/react';
import type { ThemeConfig, ThemeSchemes } from '@react-jopau/styles/types';
import { ThemeBuilder } from '@react-jopau/styles/ThemeBuilder';
import { computeScheme } from '@react-jopau/styles/utils';
import globalCSS from '@react-jopau/styles/globalStyles';
import { defaultProps, ThemeProviderProps } from './theme-context-props';

/* ==== context ================================================================ */

/**
 * Theme context to be used to access the theme values or to change the theme.
 */
export const ThemeContext = createContext<{
  config: ThemeConfig;
  darkMode?: boolean;
  onToggle?: () => void;
}>({} as { config: ThemeConfig });

/* ==== provider =============================================================== */

const globalStyles = globalCss({
  ...globalCSS,
  body: {
    backgroundColor: '$background',
    color: '$text'
  },
  '*, button, input': {
    fontFamily: 'var(--rjopau-fonts-base)'
  },
  'pre *, code *': {
    fontFamily: 'var(--rjopau-fonts-code) !important'
  }
});

/**
 * Theme provider component that allows to define the theme and the scheme to use.
 *
 * @param   {ThemeProviderProps} props - Props injected to the provider.
 * @returns {JSX.Element} Rendered provider.
 *
 * @imports import { ThemeProvider } from '@react-jopau/components/contexts';
 * @example
 * <ThemeProvider config={customConfig} darkMode={false}>
 *    <div>Content</div>
 * </ThemeProvider>
 */
export const ThemeProvider = ({ children, config, darkMode }: ThemeProviderProps) => {
  const [dark, setDark] = useState<boolean>();
  const [configTheme, setConfigTheme] = useState<ThemeConfig | null>(null);
  const [schemes, setSchemes] = useState<ThemeSchemes>({});

  useEffect(() => {
    setDark(darkMode);
  }, [darkMode]);

  useEffect(() => {
    const builder = new ThemeBuilder();
    builder.createTheme(config);
    setConfigTheme({ ...builder.currentConfig });
    setSchemes({ lightTheme: builder.lightTheme, darkTheme: builder.darkTheme });
  }, [config]);

  if (!configTheme) {
    return null;
  }

  return (
    <ThemeContext.Provider
      value={{
        config: configTheme,
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

ThemeProvider.defaultProps = defaultProps;
