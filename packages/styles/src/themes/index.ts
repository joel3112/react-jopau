import Stitches from '@stitches/react/types/stitches';
import { ThemeConfig } from './types';

import defaultTheme from './default';
import purpleTheme from './purple';

export type ThemeStitches = Stitches['styled'] | null;

export type ThemeScheme = Stitches['theme'] | null;

export type ThemeSchemes = {
  lightTheme?: ThemeScheme;
  darkTheme?: ThemeScheme;
};

export const themes: Record<string, { label: string; value: ThemeConfig }> = {
  default: { label: 'Default', value: defaultTheme },
  purple: { label: 'Purple', value: purpleTheme }
};
