import * as React from 'react';
import { styled } from '@stitches/react';
import { DocsContainer as DocsContainerStorybook } from '@storybook/addon-docs';

const StyledDocsContainer = styled('div', {
  backgroundColor: 'var(--rjopau-colors-backgroundContent) !important',
  color: 'var(--rjopau-colors-text) !important',

  // Story
  '.sbdocs-wrapper': { background: 'transparent' },
  '.sbdocs-preview > .os-host-scrollbar-vertical-hidden': {
    backgroundColor: 'var(--rjopau-colors-backgroundContrast)'
  },
  '.docs-story': {
    backgroundColor: 'var(--rjopau-colors-background)',
    color: 'var(--rjopau-colors-text)'
  },
  '.docs-story > div:nth-child(2)': { background: 'transparent' },
  '.docs-story .docblock-code-toggle': { background: 'var(--rjopau-colors-backgroundContrast)' },

  // Code
  '.docblock-source': { background: '#212121' },
  'pre.sbdocs-pre + .sbdocs-pre': { marginTop: -40 },

  // ArgTable
  '.docblock-argstable tr[title]:not(:hover) td': {
    background: 'var(--rjopau-colors-backgroundContent) !important'
  },
  '.docblock-argstable tr:not([title]) td': {
    color: 'var(--rjopau-colors-text)',
    background: 'var(--rjopau-colors-backgroundContrast)'
  }
});

export const DocsContainer = (props) => {
  return (
    <StyledDocsContainer>
      <DocsContainerStorybook {...props} />
    </StyledDocsContainer>
  );
};
