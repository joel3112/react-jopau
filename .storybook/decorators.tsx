import { useLayoutEffect, useRef } from 'react';
import { DecoratorFn } from '@storybook/react';
import { GlobalStyles } from '../styles/GlobalStyles';
import { lightTheme, darkTheme } from '../styles/theme';

export const withTheme: DecoratorFn = (StoryFn, { globals: { theme: themeKey = 'light' } }) => {
  const storyRef = useRef<HTMLDivElement>(null);
  const theme = themeKey === 'light' ? lightTheme : darkTheme;
  const background = theme.colors.background;

  useLayoutEffect(() => {
    const storyEl = storyRef.current?.closest('.docs-story') as HTMLDivElement | null;
    if (storyEl) {
      storyEl.style.backgroundColor = `${background}`;
    }

    document.body.classList.toggle(lightTheme, themeKey === 'light');
    document.body.classList.toggle(darkTheme, themeKey === 'dark');
  }, [storyRef.current, themeKey]);

  return (
    <div ref={storyRef}>
      <GlobalStyles darkMode={theme === 'dark'}>
        <StoryFn />
      </GlobalStyles>
    </div>
  );
};

export const globalDecorators = [withTheme];
