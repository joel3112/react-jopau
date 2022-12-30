import { ComponentType, ReactNode } from 'react';
import { SBLink } from './sb-link';

const SBItem = ({ label, id }: { label: string; id: string }) => (
  <li key={label}>
    <SBLink href={id}>{label}</SBLink>
  </li>
);

export const SbSubComponents = (({ children }: { children: ReactNode }) => {
  return (
    <>
      <h3 className="mt-8 mb-4 font-semibold text-sm">Sub components:</h3>

      <ul className="list-disc flex flex-col gap-2 ml-10">{children}</ul>
    </>
  );
}) as ComponentType & {
  Item: typeof SBItem;
};

SbSubComponents.Item = SBItem;
