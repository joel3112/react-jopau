import type { PartialThemeConfig } from '../utils';
import defaultTheme from './default';
import purpleTheme from './purple';

export { defaultTheme, purpleTheme };

export const themes: Record<string, { label: string; value: PartialThemeConfig }> = {
  default: { label: 'Default', value: defaultTheme },
  purple: { label: 'Purple', value: purpleTheme }
};
