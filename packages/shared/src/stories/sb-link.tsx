import classes from 'classnames';
import { BiLinkExternal } from 'react-icons/bi';
import LinkTo from '@storybook/addon-links/react';

export const SBLink = ({
  children,
  href,
  hideIcon,
  className
}: {
  children: string;
  href: string;
  hideIcon?: boolean;
  className?: string;
}) => {
  return (
    <LinkTo kind={href}>
      <span
        className={classes(
          'flex items-center gap-3 font-semibold text-secondary hover:underline hover:underline-offset-4',
          className
        )}>
        {children}
        {!hideIcon && <BiLinkExternal className="text-secondary text-[20px]" />}
      </span>
    </LinkTo>
  );
};
