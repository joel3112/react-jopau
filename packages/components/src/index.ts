import { styled } from '@stitches/react';
import { ThemeBuilder } from '@react-jopau/styles/GlobalStyles';
import { BreakpointsRules } from '@react-jopau/styles/breakpoint';

const builder = new ThemeBuilder('./theme.config.js');
builder.createTheme();

export const styledTheme = builder.styledTheme || styled;
export const breakpoints = builder.breakpoints || ({} as BreakpointsRules);
