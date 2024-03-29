import { ReactNode } from 'react';
import { classes } from '@react-jopau/utils';

export const SBTitle = ({ children, className }: { children: string; className?: string }) => {
  return (
    <h1 className={classes('text-3xl border-0 font-semibold mb-10 -mt-4', className)}>
      {children}
    </h1>
  );
};

export const SBDescription = ({
  children,
  className,
  tag
}: {
  children: ReactNode;
  className?: string;
  tag?: 'span' | 'p';
}) => {
  const Tag = tag || 'p';

  return <Tag className={classes('text-base font-light leading-md', className)}>{children}</Tag>;
};

export const SBSubTitle = ({ children }: { children: string }) => {
  return <h4 className="border-b border-gray-900 pb-4 text-lg font-semibold">{children}</h4>;
};

export const SBTextSeparator = ({ children }: { children: string }) => {
  return (
    <p className="my-6 w-full border-t border-b border-t-gray-700 border-b-gray-700 py-3 font-semibold text-gray-700 border-text text-[13px] text-text">
      {children}
    </p>
  );
};
