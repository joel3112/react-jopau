import { styled } from '@stitches/react';
import { ThemeBuilder } from '@react-jopau/styles/ThemeBuilder';

const builder = new ThemeBuilder();
builder.createTheme();

export const styledTheme = builder.styledTheme || styled;
export const utilsTheme = builder.utils;

export const prepareEventArgType = (eventName: string, action: string) => ({
  [eventName]: {
    action,
    table: {
      category: 'Events'
    }
  }
});
