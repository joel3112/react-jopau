import { createContext, useEffect, useMemo, useState } from 'react';
import { globalCss, styled } from '@stitches/react';
import {
  BreakpointsRules,
  globalCSS,
  ThemeBuilder,
  ThemeConfig,
  ThemeSchemes
} from '@react-jopau/styles';
import { defaultProps, ThemeProviderProps } from './theme-context-props';

/* ==== context ================================================================ */

/**
 * Theme context to be used to access the theme values or to change the theme.
 */
export const ThemeContext = createContext<{
  config: ThemeConfig;
  darkMode: boolean;
  onToggle: () => void;
}>({ config: {} as ThemeConfig, darkMode: false, onToggle: () => {} });

/* ==== provider =============================================================== */

const globalStyles = ({ xs, sm, md, xl, lg }: BreakpointsRules) =>
  globalCss({
    ...globalCSS,
    ':root': {
      '--rjopau-breakpoint-xs': `${xs}px`,
      '--rjopau-breakpoint-sm': `${sm}px`,
      '--rjopau-breakpoint-md': `${md}px`,
      '--rjopau-breakpoint-lg': `${lg}px`,
      '--rjopau-breakpoint-xl': `${xl}px`
    },
    body: {
      background: 'var(--rjopau-colors-background)',
      color: 'var(--rjopau-colors-text)'
    },
    '*, button, input': {
      fontFamily: 'var(--rjopau-fonts-base)'
    },
    'pre *, code *, .react-json-view *': {
      fontFamily: 'var(--rjopau-fonts-code) !important'
    }
  });

const StyledContent = styled('div', {
  background: 'var(--rjopau-colors-background)',
  color: 'var(--rjopau-colors-text)'
});

/**
 * Theme provider component that allows to define the theme and the scheme to use.
 *
 * @param   {ThemeProviderProps} props - Props injected to the provider.
 * @returns {JSX.Element} Rendered provider.
 *
 * @imports import { ThemeProvider } from '@react-jopau/components';
 * @example
 * <ThemeProvider config={customConfig} darkMode>
 *    <div>Content</div>
 * </ThemeProvider>
 */
export const ThemeProvider = ({ children, config, darkMode }: ThemeProviderProps) => {
  const [dark, setDark] = useState<boolean>();
  const [configTheme, setConfigTheme] = useState<ThemeConfig | null>(null);
  const [schemes, setSchemes] = useState<ThemeSchemes>({});
  const [breakpoints, setBreakpoints] = useState<BreakpointsRules>({});

  useEffect(() => {
    setDark(darkMode);
  }, [darkMode]);

  useEffect(() => {
    const builder = new ThemeBuilder();
    builder.createTheme(config);
    setConfigTheme({ ...builder.currentConfig });
    setSchemes({ lightTheme: builder.lightTheme, darkTheme: builder.darkTheme });
    setBreakpoints(builder.breakpoints);
  }, [config]);

  const currentSchemeClass = useMemo(
    () => `${dark ? schemes.darkTheme : schemes.lightTheme}`,
    [dark, schemes]
  );

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
      <StyledContent className={currentSchemeClass}>
        {globalStyles(breakpoints)()}
        {children}
      </StyledContent>
    </ThemeContext.Provider>
  );
};

ThemeProvider.defaultProps = defaultProps;
