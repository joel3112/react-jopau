import classes from 'classnames';
import LinkTo from '@storybook/addon-links/react';

export const SBLink = ({
  children,
  href,
  className
}: {
  children: string;
  href: string;
  className?: string;
}) => {
  return (
    <LinkTo kind={href}>
      <span
        className={classes(
          'font-semibold text-secondary hover:underline hover:underline-offset-4',
          className
        )}>
        {children}
      </span>
    </LinkTo>
  );
};
