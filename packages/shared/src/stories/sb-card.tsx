import { ReactNode } from 'react';
import { classes } from '@react-jopau/utils';
import { BiLinkExternal } from 'react-icons/bi';
import LinkTo from '@storybook/addon-links/react';

export const SBCard = ({
  className,
  children,
  title,
  kind
}: {
  className?: string;
  children: string | ReactNode;
  title: ReactNode;
  kind?: string;
}) => {
  const childrenTmpl =
    typeof children === 'string' ? (
      <span className="text-text text-[14px] leading-sm line-clamp-3">{children}</span>
    ) : (
      children
    );

  if (!kind) {
    return (
      <div
        className={classes(
          'min-h-[150px] group relative p-8 flex flex-col gap-6 bg-background border border-gray-700 border-solid shadow-md rounded-sm',
          className
        )}>
        <div className="font-semibold text-secondary text-[18px]">{title}</div>
        {childrenTmpl}
      </div>
    );
  }

  return (
    <LinkTo kind={kind} story="docs">
      <div
        className={classes(
          'min-h-[150px] group relative p-8 flex flex-col gap-4 bg-background hover:bg-input border border-gray-700 border-solid shadow-md rounded-sm cursor-pointer',
          className
        )}>
        <div className="font-semibold text-secondary text-[18px]">{title}</div>
        {childrenTmpl}

        <BiLinkExternal className="absolute hidden text-secondary text-[20px] top-[10px] right-[10px] group-hover:flex" />
      </div>
    </LinkTo>
  );
};
