import { styled } from '@stitches/react';
import { ThemeBuilder } from '@react-jopau/styles/GlobalStyles';

const builder = new ThemeBuilder('theme.json');
builder.createTheme();

export const styledTheme = builder.styledTheme || styled;
