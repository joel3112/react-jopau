import { BreakpointsRules } from '../breakpoint';

export type ThemePropValue = { [token in number | string]: boolean | number | string };
export type ThemeProps<T = {}> = {
  borderStyles?: ThemePropValue;
  borderWidths?: ThemePropValue;
  colors: {
    light: ThemePropValue;
    dark: ThemePropValue;
  };
  fonts?: ThemePropValue;
  fontSizes?: ThemePropValue;
  fontWeights?: ThemePropValue;
  letterSpacings?: ThemePropValue;
  lineHeights?: ThemePropValue;
  radii?: ThemePropValue;
  shadows: {
    light?: ThemePropValue;
    dark?: ThemePropValue;
  };
  sizes?: ThemePropValue;
  space?: ThemePropValue;
  transitions?: ThemePropValue;
  zIndices?: ThemePropValue;
} & {
  [Scale in keyof T]: {
    [Token in keyof T[Scale]]: T[Scale][Token] extends boolean | number | string
      ? T[Scale][Token]
      : boolean | number | string;
  };
};
export type ThemeConfig = {
  theme: ThemeProps;
  media: BreakpointsRules;
  brand: {
    title: string;
    url: string;
    image: string;
  };
};
