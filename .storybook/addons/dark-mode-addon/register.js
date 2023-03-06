/* eslint-disable react/prop-types */
import * as React from 'react';
import { addons, types } from '@storybook/addons';
import { IconButton, TooltipLinkList, WithTooltip } from '@storybook/components';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useLocalStorage } from '@react-jopau/hooks';
import { DARK_MODE_STORAGE_KEY } from '@react-jopau/styles';

const COLOR_SCHEMES = [
  { id: 'light', title: 'Light' },
  { id: 'dark', title: 'Dark' }
];

const ICON_SCHEMES = {
  light: FiSun,
  dark: FiMoon
};

const renderIcon = (scheme) => {
  const Icon = ICON_SCHEMES[scheme];

  return (
    <Icon
      style={{
        width: 15,
        height: 15,
        opacity: 1,
        color: 'inherit',
        display: 'flex',
        alignItems: 'center'
      }}
    />
  );
};

const DarkModeAddon = ({ api }) => {
  const channel = addons.getChannel();
  const [colorScheme, setColorScheme] = useLocalStorage(DARK_MODE_STORAGE_KEY, 'light');

  React.useEffect(() => {
    const notifyColorScheme = () => {
      channel.emit('color-scheme-selected', colorScheme);
    };

    channel.on('story-mounted', notifyColorScheme);
    channel.emit('color-scheme-selected', colorScheme);

    return () => {
      channel.off('story-mounted', notifyColorScheme);
    };
  }, [channel, colorScheme, api]);

  return (
    <WithTooltip
      placement="top"
      trigger="click"
      closeOnClick
      tooltip={({ onHide }) => (
        <TooltipLinkList
          links={COLOR_SCHEMES.map(({ id, title }) => ({
            id,
            title,
            right: renderIcon(id),
            onClick: () => {
              setColorScheme(id);
              onHide();
            }
          }))}
        />
      )}>
      <IconButton className="sb-toolbar-dropdown-box" title="Change color scheme">
        {renderIcon(colorScheme)}
        <span>Color scheme: {COLOR_SCHEMES.find(({ id }) => id === colorScheme).title}</span>
      </IconButton>
    </WithTooltip>
  );
};

addons.register('dark-mode', (api) => {
  addons.add('dark-mode/panel', {
    type: types.TOOL,
    title: 'Dark mode',
    render: () => <DarkModeAddon api={api} />
  });
});
