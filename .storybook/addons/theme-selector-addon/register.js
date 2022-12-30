/* eslint-disable react/prop-types */
import * as React from 'react';
import { addons, types } from '@storybook/addons';
import { IconButton, Separator, TooltipLinkList, WithTooltip } from '@storybook/components';
import { useLocalStorage } from '/packages/hooks/src/use-local-storage/use-local-storage';
import { getColors, THEME_SELECTOR_STORAGE_KEY } from '/packages/styles/src/utils/theme';
import { themes } from '/packages/styles/src/themes';
import { createStorybookTheme } from '../../theme';

const renderPrimaryColorDot = (themeKey) => {
  const { primary, secondary } = getColors(themeKey);

  return (
    <div
      style={{
        width: 15,
        height: 15,
        background: `linear-gradient(to right, ${primary} 50%, ${secondary} 50%)`,
        borderRadius: '50%'
      }}
    />
  );
};

const ThemeSelectorAddon = ({ api }) => {
  const channel = addons.getChannel();
  const [currentThemeKey, setCurrentThemeKey] = useLocalStorage(
    THEME_SELECTOR_STORAGE_KEY,
    'default'
  );

  React.useEffect(() => {
    const notifyTheme = () => {
      channel.emit('theme-selected', currentThemeKey);
    };

    channel.on('story-mounted', notifyTheme);

    return () => {
      channel.off('story-mounted', notifyTheme);
    };
  }, [channel, currentThemeKey]);

  React.useEffect(() => {
    channel.emit('theme-selected', currentThemeKey);

    api.setOptions({ theme: createStorybookTheme(currentThemeKey) });

    // We need this timeout because there could be some race condition between addon mount and storybook manager initialization on page load
    const tid = setTimeout(() => {
      api.setOptions({ theme: createStorybookTheme(currentThemeKey) });
    }, 100);

    return () => {
      clearTimeout(tid);
    };
  }, [api, channel, currentThemeKey]);

  return (
    <>
      <Separator />
      <WithTooltip
        placement="top"
        trigger="click"
        closeOnClick
        tooltip={({ onHide }) => (
          <TooltipLinkList
            links={Object.keys(themes).map((themeKey) => ({
              id: themeKey,
              title: themeKey,
              right: renderPrimaryColorDot(themeKey),
              onClick: () => {
                setCurrentThemeKey(themeKey);
                onHide();
              }
            }))}
          />
        )}>
        <IconButton className="sb-toolbar-dropdown-box" title="Change theme">
          {renderPrimaryColorDot(currentThemeKey)}
          <span>{themes[currentThemeKey].label}</span>
        </IconButton>
      </WithTooltip>
    </>
  );
};

addons.register('theme-selector', (api) => {
  addons.add('theme-selector/panel', {
    type: types.TOOL,
    title: 'Theme',
    render: () => <ThemeSelectorAddon api={api} />
  });
});