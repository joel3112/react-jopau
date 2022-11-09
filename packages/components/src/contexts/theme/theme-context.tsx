import { createContext, ReactNode, useEffect, useState } from 'react';
import { globalCss } from '@stitches/react';
import { ThemeBuilder } from '@react-jopau/styles/ThemeBuilder';
import { ThemeConfig, ThemeScheme } from '@react-jopau/styles/themes';
import { computeScheme } from '@react-jopau/styles/utils';

/* ================================================================================================= */

/**
 * Theme context to be used to access the theme values or to change the theme.
 */
export const ThemeContext = createContext<{
  config?: ThemeConfig | string;
  darkMode?: boolean;
  onToggle?: () => void;
}>({});

/* ================================================================================================= */

type ThemeProviderProps = {
  /**
   * Defines the children of the component.
   */
  children: ReactNode;
  /**
   * Defines configuration or the theme key.
   */
  config: ThemeConfig | string;
  /**
   * Flag to enable dark mode.
   */
  darkMode?: boolean;
} & typeof defaultProps;

const defaultProps = {
  darkMode: false
};

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
 * Theme provider component that allows to define the theme and the scheme to use.
 *
 * @param   {ThemeProviderProps} props - Props injected to the provider.
 * @returns {JSX.Element} Rendered provider.
 *
 * @imports import { Header } from '@react-jopau/components/header';
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

ThemeProvider.defaultProps = defaultProps;
