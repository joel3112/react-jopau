import defaultTheme from './default';
import type { ConfigType } from '@stitches/react/types/config';

export type ThemeProps = Omit<ConfigType.Theme, 'colors'> & {
  colors: {
    light: ConfigType.Theme['colors'];
    dark: ConfigType.Theme['colors'];
  };
};
export type Theme = {
  theme: ThemeProps;
  brand: {
    title: string;
    url: string;
    image: string;
  };
};

export const themes: Record<string, { label: string; value: Theme }> = {
  default: { label: 'Default', value: defaultTheme }
};
