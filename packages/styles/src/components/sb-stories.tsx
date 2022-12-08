import { ReactNode } from 'react';
import classes from 'classnames';
import { Canvas, Story } from '@storybook/addon-docs';
import { SBCollapsable } from './sb-collapsable';

export const SBThemeStories = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="invisible h-0">
        <Story id="providers-themeprovider--default" />
      </div>
      {children}
    </>
  );
};

const SBStory = ({ id, label, isDefault }: { id: string; label?: string; isDefault?: boolean }) => {
  const canvasProps = isDefault ? { withToolbar: true } : {};

  return (
    <div className={classes('flex gap-1 flex-col', { '-mt-10': isDefault })}>
      {label && <span className="!text-lg font-medium">{label}</span>}

      <Canvas {...(canvasProps || {})}>
        <Story id={id} />
      </Canvas>
    </div>
  );
};

export const SBStories = ({
  children
}: { children: ReactNode } & {
  Item: typeof Story;
  Default: typeof Story;
}) => {
  return (
    <SBCollapsable title="Stories" className="pt-10" opened>
      {children}
    </SBCollapsable>
  );
};

SBStories.Item = SBStory;
// eslint-disable-next-line react/display-name
SBStories.Default = (props: { id: string }) => <SBStory {...props} isDefault />;