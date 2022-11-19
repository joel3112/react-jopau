import { STORY_RENDERED } from '@storybook/core-events';
import { addons } from '@storybook/addons';

addons.register('expand-all', () => {
  const emitter = addons.getChannel();

  emitter.on(STORY_RENDERED, () => {
    const sidebarItems = document.querySelectorAll('.sidebar-item');

    // Expand component categories
    const componentSidebarItems = [...sidebarItems].filter((item) => {
      return [
        'components-display',
        'components-feedback',
        'components-forms',
        'components-layout',
        'components-media',
        'components-overlay',
        'components-typography'
      ].includes(item.dataset.itemId);
    });

    componentSidebarItems.forEach((item) => {
      if (item.ariaExpanded === 'false') {
        item.click();
      }
    });
  });
});
