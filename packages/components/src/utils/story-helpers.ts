/* eslint-disable @typescript-eslint/no-explicit-any */
import { merge } from '@react-jopau/utils/dist/object';

const eventsActions = {
  onClick: 'clicked',
  onChange: 'changed',
  onFocus: 'focused',
  onBlur: 'blurred',
  onInput: 'inputted',
  onClear: 'cleared',
  onKeyUp: 'keyUp',
  onKeyDown: 'keyDown',
  onKeyPress: 'keyPress'
};

export const prepareArgTypes = (
  component: any,
  argTypes?: Record<string, { control?: any; table?: boolean; if?: any }>
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

  return merge(categories, argTypes || {});
};

export const prepareParameters = (docs: unknown) => ({
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
