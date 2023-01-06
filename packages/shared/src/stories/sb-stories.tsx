import { ComponentType, ReactNode } from 'react';
import { Canvas, Story } from '@storybook/addon-docs';
import { classes } from '@react-jopau/utils';
import { SBCollapsable } from './sb-collapsable';

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

export const SBStories = (({ children }: { children: ReactNode }) => {
  return (
    <SBCollapsable title="Stories" className="pt-10" opened>
      {children}
    </SBCollapsable>
  );
}) as ComponentType & {
  Item: typeof SBStory;
  Default: typeof SBStory;
};

SBStories.Item = SBStory;
// eslint-disable-next-line react/display-name
SBStories.Default = (props: { id: string }) => <SBStory {...props} isDefault />;
