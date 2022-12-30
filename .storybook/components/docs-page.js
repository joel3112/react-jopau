import { useContext } from 'react';
import { DocsContext, Story } from '@storybook/addon-docs';
import { SbBreadcrumbs } from '/packages/styles/src/components';
import { last } from '/packages/utils/src';

// eslint-disable-next-line react/prop-types
export const DocsPage = ({ children }) => {
  const { kind } = useContext(DocsContext);
  const [type, ...paths] = kind.split('/');

  return (
    <>
      {(type === 'Hooks' || last(paths) === 'About' || paths.length === 0) && (
        <div hidden>
          <Story id="providers-themeprovider--default" />
        </div>
      )}
      {paths.length > 0 && last(paths) !== 'About' && (
        <SbBreadcrumbs
          items={[
            { label: 'Home', href: 'Introduction' },
            { label: type, href: `${type}/About` },
            { label: last(paths) }
          ]}
        />
      )}
      {children}
    </>
  );
};
