import { styled } from '@stitches/react';
import { BreakpointsRules } from '@react-jopau/styles/breakpoint';
import { ThemeBuilder } from '@react-jopau/styles/ThemeBuilder';

const builder = new ThemeBuilder();
builder.createTheme();

export const styledTheme = builder.styledTheme || styled;
export const breakpoints = builder.breakpoints || ({} as BreakpointsRules);
