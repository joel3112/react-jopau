import { createContext, ReactNode, useEffect, useState } from 'react';
import { globalCss } from '@stitches/react';
import { ThemeBuilder } from '@react-jopau/styles/ThemeBuilder';
import { computeScheme, ThemeConfig, ThemeSchemes } from '@react-jopau/styles/theme';
import globalCSS from '@react-jopau/styles/globalStyles';

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

type ThemeProviderProps = {
  /**
   * Defines the children of the component.
   */
  children: ReactNode;
  /**
   * Defines configuration or the theme key.
   */
  config?: ThemeConfig;
  /**
   * Flag to enable dark mode.
   */
  darkMode?: boolean;
} & Partial<typeof defaultProps>;

const defaultProps = {
  darkMode: false
};

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
