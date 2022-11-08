/* eslint-disable react/prop-types */
import * as React from 'react';
import { addons } from '@storybook/addons';
import { getColors } from '/packages/styles/src/utils';
import { useLocalStorage } from '/packages/hooks/src/useLocalStorage';
import {
  DARK_MODE_STORAGE_KEY,
  THEME_SELECTOR_STORAGE_KEY,
  ThemeProvider
} from '/packages/styles/src/ThemeProvider';

const ThemeStoryProvider = ({ Story, context }) => {
  const [themeKey, setThemeKey] = useLocalStorage(THEME_SELECTOR_STORAGE_KEY, 'default');
  const [colorScheme, setColorScheme] = useLocalStorage(DARK_MODE_STORAGE_KEY, 'light');
  const storyRef = React.useRef(null);
  const background = getColors(themeKey, colorScheme).background;

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
      storyEl.style.backgroundColor = `${background}`;
    }
    document.body.style.backgroundColor = `${background}`;
  }, [storyRef.current, themeKey, colorScheme]);

  return (
    <div ref={storyRef}>
      <ThemeProvider config={themeKey} darkMode={colorScheme === 'dark'}>
        <Story {...context} />
      </ThemeProvider>
    </div>
  );
};

const withTheme = (Story, context) => <ThemeStoryProvider Story={Story} context={context} />;

export const globalDecorators = [withTheme];
