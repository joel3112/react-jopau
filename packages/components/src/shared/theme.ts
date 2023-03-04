import { styled } from '@stitches/react';
import { prefix, ThemeBuilder } from '@react-jopau/styles';

const builder = new ThemeBuilder();
builder.createTheme();

export const styledTheme = builder.styledTheme || styled;
export const utilsTheme = builder.utils;

export const prefixClass = prefix;
