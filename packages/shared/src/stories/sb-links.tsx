import { ComponentType, ReactNode } from 'react';
import { SBLink } from './sb-link';

export const SBLinks = (({ children }: { children: ReactNode }) => {
  return (
    <div className="-mt-8 mb-9 flex items-center border px-8 py-5 bg-background-contrast border-border-contrast rounded-[4px] text-[14px]">
      <h3 className="mr-8 font-semibold">Links:</h3>

      <div className="flex items-center gap-8">{children}</div>
    </div>
  );
}) as ComponentType & {
  Item: typeof SBLink;
};

SBLinks.Item = SBLink;
