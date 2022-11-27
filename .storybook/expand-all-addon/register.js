import { DOCS_RENDERED, STORY_RENDERED } from '@storybook/core-events';
import { addons } from '@storybook/addons';

const componentCategories = [
  'components-display',
  'components-feedback',
  'components-forms',
  'components-layout',
  'components-media',
  'components-overlay',
  'components-typography'
];

const expandCategories = () => {
  const sidebarItems = document.querySelectorAll('.sidebar-item');

  // Expand component categories
  const componentSidebarItems = [...sidebarItems].filter((item) => {
    return componentCategories.includes(item.dataset.itemId);
  });

  componentSidebarItems.forEach((item) => {
    if (item.ariaExpanded === 'false') {
      item.click();
    }
  });
};

addons.register('expand-all', () => {
  const emitter = addons.getChannel();
  emitter.on(DOCS_RENDERED, () => {
    expandCategories();
  });
  emitter.on(STORY_RENDERED, () => {
    expandCategories();
  });
});
