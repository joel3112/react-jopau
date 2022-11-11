import { ThemeConfig } from '../theme';
import defaultTheme from './default';
import purpleTheme from './purple';

export const themes: Record<string, { label: string; value: ThemeConfig }> = {
  default: { label: 'Default', value: defaultTheme },
  purple: { label: 'Purple', value: purpleTheme }
};
