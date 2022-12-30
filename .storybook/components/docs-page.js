import { useContext } from 'react';
import { DocsContext, Story } from '@storybook/addon-docs';
import { SbBreadcrumbs } from '../../packages/shared/src/stories';
import { last } from '../../packages/utils/src';

// eslint-disable-next-line react/prop-types
export const DocsPage = ({ children }) => {
  const { kind, name } = useContext(DocsContext);
  const [type, ...paths] = kind ? kind.split('/') : [];

  const subComponentName = name.replace(/\[(.*)\] (.*)/g, '$1');
  const isSubComponent = subComponentName !== name;

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
      {children}
    </>
  );
};
