import * as React from 'react';
import { convert, ThemeProvider as ThemeProviderStorybook, themes } from '@storybook/theming';
import { DocsContext, Story } from '@storybook/addon-docs';
import { addons } from '@storybook/addons';
import { SbBreadcrumbs } from '@react-jopau/shared/stories';
import { useLocalStorage } from '@react-jopau/hooks';
import { DARK_MODE_STORAGE_KEY } from '@react-jopau/styles';
import { last } from '@react-jopau/utils';

// eslint-disable-next-line react/prop-types
export const DocsPage = ({ children }) => {
  const { kind, name } = React.useContext(DocsContext);
  const [type, ...paths] = kind ? kind.split('/') : [];

  const subComponentName = name.replace(/\[(.*)\] (.*)/g, '$1');
  const isSubComponent = subComponentName !== name;

  const channel = addons.getChannel();
  const [colorScheme, setColorScheme] = useLocalStorage(DARK_MODE_STORAGE_KEY, 'light');

  React.useEffect(() => {
    channel.on('color-scheme-selected', setColorScheme);

    return () => {
      channel.off('color-scheme-selected', setColorScheme);
    };
  }, [channel, colorScheme]);

  return (
    <ThemeProviderStorybook theme={convert(themes[colorScheme])}>
      {(type === 'Hooks' || last(paths) === 'About' || paths.length === 0) && (
        <div hidden>
          <Story id="context-providers-themeprovider--default" />
        </div>
      )}
      {paths.length > 0 && last(paths) !== 'About' && (
        <SbBreadcrumbs
          items={[
            { label: 'Home', href: 'Introduction' },
            { label: type, href: `${type}/About` },
            { label: last(paths), href: isSubComponent && `${type}/${paths.join('/')}` },
            ...(isSubComponent ? [{ label: subComponentName }] : [])
          ]}
        />
      )}
      {children}
    </ThemeProviderStorybook>
  );
};
