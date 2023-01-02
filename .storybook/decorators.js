/* eslint-disable react/prop-types */
import * as React from 'react';
import { addons } from '@storybook/addons';
import { useLocalStorage } from '/packages/hooks/src/use-local-storage/use-local-storage';
import { ThemeProvider } from '/packages/components/src/contexts';
import { themes } from '/packages/styles/src/themes';
import {
  DARK_MODE_STORAGE_KEY,
  THEME_SELECTOR_STORAGE_KEY
} from '/packages/styles/src/utils/theme';

const ThemeProviderMemo = React.memo(ThemeProvider);

const ThemeStoryProvider = ({ children }) => {
  const [themeKey, setThemeKey] = useLocalStorage(THEME_SELECTOR_STORAGE_KEY, 'default');
  const [colorScheme, setColorScheme] = useLocalStorage(DARK_MODE_STORAGE_KEY, 'light');

  React.useEffect(() => {
    const channel = addons.getChannel();
    channel.on('theme-selected', setThemeKey);
    channel.on('color-scheme-selected', setColorScheme);
    channel.emit('story-mounted');

    return () => {
      channel.off('theme-selected', setThemeKey);
      channel.off('color-scheme-selected', setColorScheme);
    };
  }, []);

  React.useLayoutEffect(() => {
    [window.parent.document.body, document.body].forEach((el) => {
      el.classList.toggle('dark-theme', colorScheme === 'dark');
      el.classList.toggle('light-theme', colorScheme === 'light');
    });
  }, [themeKey, colorScheme]);

  return (
    <ThemeProviderMemo config={themes[themeKey].value} darkMode={colorScheme === 'dark'}>
      {children}
    </ThemeProviderMemo>
  );
};

const withTheme = (story) => <ThemeStoryProvider>{story()}</ThemeStoryProvider>;

export const globalDecorators = [withTheme];
