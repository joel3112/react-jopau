import { ComponentType, ReactNode } from 'react';
import { SBLink } from './sb-link';

export const SBLinks = (({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-background-contrast border border-border-contrast flex items-center py-5 px-8 -mt-8 mb-9 rounded-[4px]">
      <h3 className="mr-8 font-semibold">Links:</h3>

      <div className="flex gap-8 items-center">{children}</div>
    </div>
  );
}) as ComponentType & {
  Item: typeof SBLink;
};

SBLinks.Item = SBLink;
