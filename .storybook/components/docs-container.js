import * as React from 'react';
import { styled } from '@stitches/react';
import { DocsContainer as DocsContainerStorybook } from '@storybook/addon-docs';
import { prefix } from '@react-jopau/styles';

const StyledDocsContainer = styled('div', {
  backgroundColor: `var(--${prefix}-colors-backgroundContent) !important`,
  color: `var(--${prefix}-colors-text) !important`,

  // Story
  '.sbdocs-wrapper': { background: 'transparent' },
  '.sbdocs-preview > .os-host-scrollbar-vertical-hidden': {
    backgroundColor: `var(--${prefix}-colors-backgroundContrast)`
  },
  '.docs-story': {
    backgroundColor: `var(--${prefix}-colors-background)`,
    color: `var(--${prefix}-colors-text)`
  },
  '.docs-story > div:nth-child(2)': { background: 'transparent' },
  '.docs-story .docblock-code-toggle': {
    background: `var(--${prefix}-colors-backgroundContrast)`
  },

  // Code
  '.docblock-source': { background: '#212121' },
  'pre.sbdocs-pre + .sbdocs-pre': { marginTop: -40 },

  // ArgTable
  '.docblock-argstable tr[title]:not(:hover) td': {
    background: `var(--${prefix}-colors-backgroundContent) !important`
  },
  '.docblock-argstable tr:not([title]) td': {
    color: `var(--${prefix}-colors-text)`,
    background: `var(--${prefix}-colors-backgroundContrast)`
  }
});

export const DocsContainer = (props) => {
  return (
    <StyledDocsContainer>
      <DocsContainerStorybook {...props} />
    </StyledDocsContainer>
  );
};
