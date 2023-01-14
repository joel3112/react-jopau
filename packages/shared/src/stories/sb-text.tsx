import { ReactNode } from 'react';
import { classes } from '@react-jopau/utils';

export const SBCode = ({ children }: { children: ReactNode }) => {
  return (
    <div className="inline-block font-code text-black text-sm w-fit py-1 px-2 rounded-[5px] bg-[#dedede]">
      {children}
    </div>
  );
};

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
  return <h4 className="text-lg font-semibold border-b pb-4 border-gray-900">{children}</h4>;
};

export const SBTextSeparator = ({ children }: { children: string }) => {
  return (
    <p className="border-t border-b border-t-gray-700 border-b-gray-700 py-3 my-8 border-text text-[13px] text-gray-700 font-semibold text-text first:mt-0">
      {children}
    </p>
  );
};
