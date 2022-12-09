import type { PartialThemeConfig } from '../types';
import defaultTheme from './default';
import purpleTheme from './purple';

export const themes: Record<string, { label: string; value: PartialThemeConfig }> = {
  default: { label: 'Default', value: defaultTheme },
  purple: { label: 'Purple', value: purpleTheme }
};
