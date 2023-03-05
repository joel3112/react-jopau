import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  prepareArgTypes,
  prepareParameters,
  SBSelectorContainer
} from '@react-jopau/shared/stories';
import { multiply } from '@react-jopau/utils';
import { Stack } from './stack';
import docs from './readme.mdx';

export default {
  title: 'Layout/Stack',
  component: Stack,
  parameters: prepareParameters(docs),
  args: {
    as: 'div',
    gap: 2,
    direction: 'row',
    justify: 'start',
    align: 'start'
  },
  argTypes: prepareArgTypes(Stack, {
    children: { control: false }
  })
} as ComponentMeta<typeof Stack>;

const Items = (count: number) => (
  <>
    {multiply([null], count).map((_, index) => (
      <div
        key={index}
        className="text-text font-medium border border-secondary rounded-sm h-[55px] w-[55px] flex justify-center items-center px-10">
        {index + 1}
      </div>
    ))}
  </>
);

const Template: ComponentStory<typeof Stack> = (args) => {
  return <Stack {...args}>{Items(3)}</Stack>;
};

export const Docs = Template.bind({});

export const Default = Template.bind({});
Default.storyName = 'Playground';
Default.parameters = { viewMode: 'story' };

export const Gap = () => {
  const gapValues = {
    unique: 2,
    multiple: [2, 4],
    breakpoints: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }
  };

  return (
    <SBSelectorContainer
      label={['Select option']}
      items={[
        [
          { label: 'unique (2)', value: 'unique' },
          { label: 'breakpoints ({xs:2, sm:3, md:4, lg:5, xl:6})', value: 'breakpoints' }
        ]
      ]}
      value={['unique']}>
      {([gapKey]) => <Stack gap={gapValues[gapKey]}>{Items(3)}</Stack>}
    </SBSelectorContainer>
  );
};

export const Direction = () => (
  <SBSelectorContainer
    label={['Select direction']}
    items={[
      [
        { label: 'row', value: 'row' },
        { label: 'column', value: 'column' }
      ]
    ]}
    value={['direction']}>
    {([direction]) => (
      <Stack gap={2} direction={direction}>
        {Items(3)}
      </Stack>
    )}
  </SBSelectorContainer>
);

export const Justify = () => (
  <SBSelectorContainer
    label={['Select position']}
    items={[
      [
        { label: 'flex-start', value: 'start' },
        { label: 'center', value: 'center' },
        { label: 'flex-end', value: 'end' },
        { label: 'space-between', value: 'between' },
        { label: 'space-around', value: 'around' },
        { label: 'space-evenly', value: 'evenly' }
      ]
    ]}
    value={['position']}>
    {([position]) => (
      <Stack gap={2} justify={position}>
        {Items(3)}
      </Stack>
    )}
  </SBSelectorContainer>
);

export const Align = () => (
  <SBSelectorContainer
    label={['Select position']}
    items={[
      [
        { label: 'flex-start', value: 'start' },
        { label: 'center', value: 'center' },
        { label: 'flex-end', value: 'end' },
        { label: 'baseline', value: 'baseline' },
        { label: 'stretch', value: 'stretch' }
      ]
    ]}
    value={['position']}>
    {([position]) => (
      <Stack gap={2} align={position} className="h-[200px]">
        {Items(3)}
      </Stack>
    )}
  </SBSelectorContainer>
);
