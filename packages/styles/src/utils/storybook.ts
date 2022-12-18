import { ComponentType, useContext } from 'react';
import { ArgTypes } from '@storybook/addons';
import { DocsContext, extractComponentArgTypes } from '@storybook/addon-docs';
import { anysort, merge } from '@react-jopau/utils';

export const sortedArgTypes = (argTypes: ArgTypes): ArgTypes => {
  const order = ['Props', 'Icon', 'Common', 'Events'];
  const argTypesSortedByCategory = Object.entries(argTypes).sort((a, b) => {
    return anysort(a[1].table.category, b[1].table.category, order);
  });

  return Object.fromEntries(argTypesSortedByCategory);
};

export const disableArgTypes = (argTypes: ArgTypes, exclude: string[]): ArgTypes => {
  const argTypesDisabled = Object.keys(argTypes).reduce((acc, key) => {
    if (exclude.includes(key)) {
      return { ...acc, [key]: { table: { disable: true } } };
    }
    return { ...acc, [key]: argTypes[key] };
  }, {} as ArgTypes);

  return merge(argTypesDisabled, argTypes);
};

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
const category = (name: string) => ({ table: { category: name } });

const addCategories = (argTypes: ArgTypes): ArgTypes => {
  return Object.keys(argTypes).reduce((acc, key) => {
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
};

export const prepareArgTypes = (
  component: Partial<ComponentType> & { __docgenInfo?: ArgTypes },
  argTypes?: ArgTypes
) => {
  const props = component?.__docgenInfo?.props || {};

  return merge(argTypes || {}, addCategories(props));
};

export const prepareArgTypesWithContext = (component: ComponentType, extraArgTypes?: ArgTypes) => {
  const context = useContext(DocsContext);
  const argTypes = extractComponentArgTypes(component, context);

  return merge(merge(argTypes, addCategories(argTypes)), extraArgTypes || {});
};

export const prepareParameters = (docs: unknown, noControls?: boolean) => ({
  docs: {
    page: docs,
    source: {
      language: 'tsx'
    }
  },
  ...(!noControls
    ? {}
    : {
        controls: {
          disable: true
        },
        actions: {
          disable: true
        },
        viewMode: 'docs'
      }),
  options: {
    showPanel: true,
    selectedPanel: !noControls ? 'storybook/story/panel' : 'storybook/source-loader/panel'
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
