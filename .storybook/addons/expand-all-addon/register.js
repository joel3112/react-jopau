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

const navigateToDocs = ({ navigateUrl }) => {
  const storiesSidebarItems = document.querySelectorAll(
    'button.sidebar-item[data-nodetype="component"]'
  );

  storiesSidebarItems.forEach((item) => {
    item.addEventListener('click', () => {
      if (item.ariaExpanded === 'true') return;

      const searchParams = new URLSearchParams(location.search);
      searchParams.set('path', `/docs/${item.dataset.itemId}--docs`);
      item.setAttribute('aria-expanded', 'true');
      setTimeout(() => {
        navigateUrl(`${location.pathname}?${decodeURIComponent(searchParams.toString())}`);
      }, 100);
    });
  });
};

addons.register('expand-all', (event) => {
  const emitter = addons.getChannel();

  emitter.on(DOCS_RENDERED, () => {
    expandCategories();
    navigateToDocs(event);
  });
  emitter.on(STORY_RENDERED, () => {
    expandCategories();
    navigateToDocs(event);
  });
});
