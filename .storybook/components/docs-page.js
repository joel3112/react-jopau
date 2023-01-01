import * as React from 'react';
import { styled } from '@stitches/react';
import { DocsContext, Story } from '@storybook/addon-docs';
import { addons } from '@storybook/addons';
import { SbBreadcrumbs } from '../../packages/shared/src/stories';
import { DARK_MODE_STORAGE_KEY } from '../../packages/styles/src/utils';
import { useLocalStorage } from '../../packages/hooks/src/use-local-storage/use-local-storage';
import { last } from '../../packages/utils/src';

const StyledContent = styled('div', {
  // Code
  '.sbdocs-preview .os-host-scrollbar-vertical-hidden': {
    backgroundColor: '$$background !important'
  },
  '.docs-story div:nth-child(2)': { background: 'transparent' },
  '.docs-story .docblock-code-toggle': {
    color: '$colors$text',
    background: '$$background'
  },

  // ArgTable
  '.docblock-argstable tbody tr': { borderTopColor: '$$borderColorRow !important' },
  '.docblock-argstable tr th': { color: '$$colorCellHeader !important' },
  '.docblock-argstable tr td': {
    background: '$$backgroundCell !important',
    color: '$$colorCell !important'
  },
  '.docblock-argstable tr td:nth-of-type(2) div:nth-child(2) span, .docblock-argstable tr td:nth-of-type(3) span[class]':
    {
      border: '1px solid $$borderColorCode',
      color: '$$colorCode',
      background: '$$backgroundCode'
    },
  '.docblock-argstable tr td:nth-of-type(3) .sbdocs-expandable': {
    border: '1px solid $$borderColorCode',
    background: '$$backgroundCode'
  },
  '.docblock-argstable tr[title]:hover > td': { background: 'rgba(30,167,253,0.07) !important' },
  '.docblock-argstable tr[title] td span': { color: '$$colorCellHeaderTitle !important' },
  '.docblock-argstable tr[title] td span svg': { color: '$$colorCellHeaderTitleSVG !important' },

  variants: {
    darkMode: {
      true: {
        $$background: '#111',
        $$backgroundColorRowHover: '#1e1e1e',
        $$borderColorRow: '#1e1e1e',
        $$colorCell: '#fff',
        $$colorCellHeader: 'rgba(255,255,255,0.55)',
        $$colorCellHeaderTitle: 'rgba(255,255,255,0.4)',
        $$colorCellHeaderTitleSVG: 'rgba(255,255,255,0.7)',
        $$backgroundCell: '#111',
        $$backgroundTitleCell: 'green',
        $$borderColorCode: '#444',
        $$colorCode: 'rgba(255,255,255,0.7)',
        $$backgroundCode: 'rgba(0,0,0,.1)'
      },
      false: {
        $$background: '#fff',
        $$backgroundColorRowHover: 'rgba(30,167,253,0.07)',
        $$borderColorRow: '#e6e6e6',
        $$colorCell: '#000',
        $$colorCellHeader: 'rgba(0,0,0,0.75)',
        $$colorCellHeaderTitle: 'rgba(0,0,0,0.6)',
        $$colorCellHeaderTitleSVG: 'rgba(0,0,0,0.75)',
        $$backgroundCell: '#fff',
        $$backgroundTitleCell: '#f8f8f8',
        $$borderColorCode: '#eee',
        $$colorCode: 'rgba(0, 0, 0, 0.9)',
        $$backgroundCode: '#f8f8f8'
      }
    }
  }
});

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
    <>
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
      <StyledContent darkMode={colorScheme === 'dark'}>{children}</StyledContent>
    </>
  );
};
