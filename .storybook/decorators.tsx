import { DecoratorFn } from '@storybook/react';

export const withTheme: DecoratorFn = (StoryFn, { globals: { theme = 'light' } }) => {
  document.body.classList.toggle('theme-light', theme === 'light');
  document.body.classList.toggle('theme-dark', theme === 'dark');

  return (
    <>
      <StoryFn />
    </>
  );
};

export const globalDecorators = [withTheme];
