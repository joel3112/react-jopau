import { Fragment } from 'react';
import { BiChevronRight } from 'react-icons/bi';
import { SBLink } from './sb-link';

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
            <SBLink href={href || ''} hideIcon>
              {label}
            </SBLink>
            {index < items.length - 1 && <BiChevronRight className="text-lg text-text" />}
          </Fragment>
        );
      })}
    </div>
  );
};
