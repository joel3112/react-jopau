/* eslint-disable react/prop-types */
import * as React from 'react';
import { addons, types } from '@storybook/addons';
import { IconButton } from '@storybook/components';
import { MdScreenshotMonitor } from 'react-icons/md';

const renderIcon = () => {
  return (
    <MdScreenshotMonitor
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

const CurrentBreakpointAddon = ({ api }) => {
  const channel = addons.getChannel();
  const [key, setKey] = React.useState(null);

  const notifyBreakpointChanged = (newKey) => {
    setKey(newKey);
  };

  React.useEffect(() => {
    channel.on('current-breakpoint-changed', notifyBreakpointChanged);

    return () => {
      channel.off('current-breakpoint-changed', notifyBreakpointChanged);
    };
  }, [channel, api]);

  return (
    <IconButton className="sb-toolbar-dropdown-box" title="Current breakpoint">
      {renderIcon()}
      <span>
        Current breakpoint: <b style={{ fontWeight: 800 }}>{key?.toUpperCase()}</b>
      </span>
    </IconButton>
  );
};

addons.register('current-breakpoint', (api) => {
  addons.add('current-breakpoint/panel', {
    type: types.TOOL,
    title: 'Current breakpoint',
    render: () => <CurrentBreakpointAddon api={api} />
  });
});
