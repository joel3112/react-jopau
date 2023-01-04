import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '@react-jopau/components/contexts';
import type { ThemeConfig } from '@react-jopau/styles';

/**
 * @callback ToggleCallback
 * @returns {void}
 */
/**
 * @typedef  {Object} UseTheme
 * @property {Object} config - The current theme config
 * @property {boolean} darkMode - If dark mode is enabled
 * @property {ToggleCallback} onToggle - Toggle dark mode
 */
/**
 * Get the current theme config and dark mode.
 * For correct functionality, it must be used inside a ThemeProvider.
 *
 * @returns {UseTheme} Current theme config and dark mode
 *
 * @imports import { useTheme } from '@react-jopau/hooks';
 * @example
 * const { darkMode, onToggle } = useTheme();
 *
 * console.log(darkMode); // true | false
 *
 * return (
 *  <button onClick={onToggle}>
 *    Toggle theme
 *  </button>
 * );
 */
export const useTheme = (): {
  config: ThemeConfig;
  darkMode: boolean;
  onToggle: () => void;
} => {
  const { config, darkMode, onToggle } = useContext(ThemeContext);
  const [themeConfig, setThemeConfig] = useState(config);

  useEffect(() => {
    setThemeConfig(config);
  }, [config]);

  return {
    config: themeConfig,
    darkMode,
    onToggle
  };
};
