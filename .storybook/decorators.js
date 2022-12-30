/* eslint-disable react/prop-types */
import * as React from 'react';
import { addons } from '@storybook/addons';
import { useLocalStorage } from '/packages/hooks/src/use-local-storage/use-local-storage';
import { ThemeProvider } from '/packages/components/src/contexts';
import { themes } from '/packages/styles/src/themes';
import {
  DARK_MODE_STORAGE_KEY,
  getColors,
  THEME_SELECTOR_STORAGE_KEY
} from '/packages/styles/src/utils/theme';

const ThemeProviderMemo = React.memo(ThemeProvider);

const ThemeStoryProvider = ({ children }) => {
  const [themeKey, setThemeKey] = useLocalStorage(THEME_SELECTOR_STORAGE_KEY, 'default');
  const [colorScheme, setColorScheme] = useLocalStorage(DARK_MODE_STORAGE_KEY, 'light');

  const storyRef = React.useRef(null);
  const backgroundColor = getColors(themeKey, colorScheme).background;
  const textColor = getColors(themeKey, colorScheme).text;

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
    const storyEl = storyRef.current?.closest('.docs-story');
    if (storyEl) {
      storyEl.style.backgroundColor = `${backgroundColor}`;
      storyEl.style.color = `${textColor}`;
    }
    const docsEl = document.body.querySelector('.sbdocs-wrapper');
    if (docsEl) {
      docsEl.style.color = `initial`;
    }

    document.body.classList.toggle('dark-theme', colorScheme === 'dark');
    document.body.classList.toggle('light-theme', colorScheme === 'light');
    document.body.style.backgroundColor = `${backgroundColor}`;
  }, [storyRef.current, themeKey, colorScheme]);

  return (
    <div ref={storyRef}>
      <ThemeProviderMemo config={themes[themeKey].value} darkMode={colorScheme === 'dark'}>
        {children}
      </ThemeProviderMemo>
    </div>
  );
};

const withTheme = (story) => <ThemeStoryProvider>{story()}</ThemeStoryProvider>;

export const globalDecorators = [withTheme];
