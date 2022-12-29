import { Fragment } from 'react';
import LinkTo from '@storybook/addon-links/react';
import classes from 'classnames';
import { BiChevronRight } from 'react-icons/bi';

export const SbBreadcrumbs = ({
  items
}: {
  items: Array<{
    label: string;
    href?: string;
  }>;
}) => {
  return (
    <div className="flex items-center gap-2 mb-8 text-sm">
      {items.map(({ label, href }, index) => {
        if (items.length - 1 === index) {
          return (
            <span className="font-semibold" key={index} onClick={() => {}}>
              {label}
            </span>
          );
        }

        return (
          <Fragment key={index}>
            <LinkTo kind={href}>
              <span
                className={classes(
                  'font-semibold text-secondary hover:underline hover:underline-offset-4'
                )}>
                {label}
              </span>
            </LinkTo>
            {index < items.length - 1 && <BiChevronRight className="text-gray-900 text-lg" />}
          </Fragment>
        );
      })}
    </div>
  );
};
