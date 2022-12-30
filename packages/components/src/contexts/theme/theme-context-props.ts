import { ReactNode } from 'react';
import { ThemeConfig } from '@react-jopau/styles/types';

export type ThemeProviderProps = {
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

export const defaultProps = {
  darkMode: false
};
