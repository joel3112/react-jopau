/* eslint-disable react/prop-types */
import * as React from 'react';
import { addons, types } from '@storybook/addons';
import { IconButton, TooltipLinkList, WithTooltip } from '@storybook/components';
import { FiMoon, FiSun } from 'react-icons/fi';

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
        color: '#000',
        display: 'flex',
        alignItems: 'center'
      }}
    />
  );
};

const DarkModeAddon = ({ api }) => {
  const channel = addons.getChannel();
  const [colorScheme, setColorScheme] = React.useState('light');

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
      <IconButton title="Change color scheme">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {renderIcon(colorScheme)}
          <span style={{ marginLeft: 5 }}>
            Color scheme: {COLOR_SCHEMES.find(({ id }) => id === colorScheme).title}
          </span>
        </div>
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
