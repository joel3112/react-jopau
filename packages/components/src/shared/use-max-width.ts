import { useContext } from 'react';
import type { BreakpointsRules } from '@react-jopau/styles';
import { ThemeContext } from '../contexts';

const computeMaxWidth = (
  breakpoints: BreakpointsRules,
  maxWidth?: number | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
): number => {
  if (typeof maxWidth === 'number') {
    return maxWidth;
  }
  if (typeof maxWidth === 'string' && breakpoints[maxWidth]) {
    return breakpoints[maxWidth] as number;
  }
  return 1500;
};

export const useMaxWidth = (maxWidth?: number | keyof BreakpointsRules) => {
  const { config } = useContext(ThemeContext);

  return computeMaxWidth(config.media, maxWidth);
};
