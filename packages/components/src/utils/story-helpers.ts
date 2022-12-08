/* eslint-disable @typescript-eslint/no-explicit-any */
import { merge } from '@react-jopau/utils/object';

const eventsActions = {
  onClick: 'clicked',
  onChange: 'changed',
  onFocus: 'focused',
  onBlur: 'blurred',
  onInput: 'inputted',
  onKeyUp: 'keyUp',
  onKeyDown: 'keyDown',
  onKeyPress: 'keyPress'
};

export const prepareArgTypes = (
  component: any,
  argTypes?: Record<string, { control?: any; table?: boolean; if?: any; action?: string }>
) => {
  const props = component?.__docgenInfo.props || {};
  const category = (name: string) => ({ table: { category: name } });

  const categories: Record<
    string,
    { control?: boolean | string; action?: string; table: { category: string } }
  > = Object.keys(props).reduce((acc, key) => {
    if (['className', 'style', 'id', 'ref'].includes(key)) {
      return { ...acc, [key]: category('Common') };
    }
    if (key.toLowerCase().includes('icon')) {
      return { ...acc, [key]: category('Icon') };
    }
    if (new RegExp('^on[A-Z].*').test(key)) {
      return {
        ...acc,
        ...{
          [key]: {
            action: eventsActions[key as keyof typeof eventsActions],
            ...category('Events')
          }
        }
      };
    }
    return { ...acc, [key]: category('Props') };
  }, {});

  return merge(argTypes || {}, categories);
};

export const prepareParameters = (docs: unknown) => ({
  controls: { sort: 'requiredFirst' },
  docs: {
    page: docs,
    source: {
      language: 'tsx'
    }
  },
  options: {
    showPanel: true,
    selectedPanel: 'storybook/story/panel'
  },
  previewTabs: {
    'storybook/docs/panel': {
      hidden: true
    },
    canvas: {
      hidden: true
    }
  }
});
