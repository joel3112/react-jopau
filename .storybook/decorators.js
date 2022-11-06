/* eslint-disable react/prop-types */
import * as React from 'react';
import { addons } from '@storybook/addons';
import { getColors, getThemeQueryParam } from '/packages/styles/src/utils';
import { ThemeProvider } from '/packages/styles/src/ThemeProvider';
import { themes } from '/packages/styles/src/themes';

export const getThemeKey = () => {
  const qsKey = getThemeQueryParam();

  return Object.keys(themes).find((key) => key === qsKey) || 'default';
};

const ThemeStoryProvider = ({ Story, context }) => {
  const [themeKey, setThemeKey] = React.useState(getThemeKey);
  const [colorScheme, setColorScheme] = React.useState('light');
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
