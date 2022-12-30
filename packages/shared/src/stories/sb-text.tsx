import { ReactNode } from 'react';
import classes from 'classnames';

export const SBCode = ({ children }: { children: ReactNode }) => {
  return (
    <div className="inline-block font-code text-black text-sm w-fit py-1 px-2 rounded-[5px] bg-[#dedede]">
      {children}
    </div>
  );
};

export const SBTitle = ({ children, className }: { children: string; className?: string }) => {
  return (
    <h1 className={classes('text-2xl border-0 font-bold mb-10 -mt-4', className)}>{children}</h1>
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
    <p className="border-t border-b py-3 my-3 border-text text-[13px] font-semibold text-text first:mt-0">
      {children}
    </p>
  );
};
