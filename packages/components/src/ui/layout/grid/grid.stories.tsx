import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useBreakpoint } from '@react-jopau/hooks';
import {
  prepareArgTypes,
  prepareParameters,
  SBSelectorContainer
} from '@react-jopau/shared/stories';
import { useCurrentBreakpoint } from '@/components/shared';
import { Text } from '../../typography';
import { Grid } from './grid';
import docs from './readme.mdx';

export default {
  title: 'Layout/Grid',
  component: Grid,
  parameters: prepareParameters(docs),
  args: {
    as: 'div',
    gap: 2,
    wrap: 'wrap',
    direction: 'row',
    justify: 'center',
    align: 'center',
    columns: 12
  },
  argTypes: prepareArgTypes(Grid, {
    children: { control: false }
  })
} as ComponentMeta<typeof Grid>;

const Item = (children: string) => (
  <div className="flex w-full items-center justify-center rounded-sm border px-10 font-medium text-text border-secondary h-[55px]">
    {children}
  </div>
);

const Template: ComponentStory<typeof Grid> = (args) => {
  return (
    <Grid {...args}>
      <Grid.Item xs={4}>{Item('1 of 3')}</Grid.Item>
      <Grid.Item xs={4}>{Item('2 of 3')}</Grid.Item>
      <Grid.Item xs={4}>{Item('1 of 3')}</Grid.Item>
    </Grid>
  );
};

export const Docs = Template.bind({});

export const Default = Template.bind({});
Default.storyName = 'Playground';
Default.parameters = { viewMode: 'story' };

export const Fluid = () => (
  <Grid gap={2} justify="center">
    <Grid.Item xs={6}>{Item('1 of 2')}</Grid.Item>
    <Grid.Item xs={6}>{Item('2 of 2')}</Grid.Item>
    <Grid.Item xs={6}>{Item('1 of 3')}</Grid.Item>
    <Grid.Item xs={3}>{Item('2 of 3')}</Grid.Item>
    <Grid.Item xs={3}>{Item('3 of 3')}</Grid.Item>
    <Grid.Item xs={3}>{Item('1 of 4')}</Grid.Item>
    <Grid.Item xs={3}>{Item('2 of 4')}</Grid.Item>
    <Grid.Item xs={3}>{Item('3 of 4')}</Grid.Item>
    <Grid.Item xs={3}>{Item('4 of 4')}</Grid.Item>
    <Grid.Item xs={3}>{Item('1 of 3')}</Grid.Item>
    <Grid.Item xs={6}>{Item('2 of 3')}</Grid.Item>
    <Grid.Item xs={3}>{Item('3 of 3')}</Grid.Item>
  </Grid>
);

export const Responsive = () => {
  const isMd = useCurrentBreakpoint() === 'md';

  return (
    <Grid gap={2} justify="center">
      <Grid.Item xs={12} md={6}>
        {Item(isMd ? '1 of 1' : '1 of 2')}
      </Grid.Item>
      <Grid.Item xs={6} md={6}>
        {Item(isMd ? '1 of 2' : '2 of 2')}
      </Grid.Item>
      <Grid.Item xs={6} md={3}>
        {Item(isMd ? '2 of 2' : '1 of 3')}
      </Grid.Item>
      <Grid.Item xs={6} md={3}>
        {Item(isMd ? '1 of 2' : '2 of 3')}
      </Grid.Item>
      <Grid.Item xs={6} md={3}>
        {Item(isMd ? '2 of 2' : '3 of 3')}
      </Grid.Item>
    </Grid>
  );
};

export const AutoWidth = () => (
  <>
    <Grid gap={2} justify="center">
      <Grid.Item xs>{Item('1 of 3')}</Grid.Item>
      <Grid.Item xs>{Item('2 of 3')}</Grid.Item>
      <Grid.Item xs>{Item('3 of 3')}</Grid.Item>
    </Grid>
    <Grid gap={2} justify="center">
      <Grid.Item xs>{Item('1 of 3')}</Grid.Item>
      <Grid.Item xs={6}>{Item('2 of 3')}</Grid.Item>
      <Grid.Item xs>{Item('3 of 3')}</Grid.Item>
    </Grid>
  </>
);

export const HideElements = () => {
  const isMd = useBreakpoint().key === 'md';

  return (
    <>
      <Text size="sm" className="mb-10">
        Elements hidden in breakpoint 'md', visible in 'lg' and 'xl'
      </Text>
      <Grid gap={2} justify="center">
        <Grid.Item xs={6} sm={0}>
          {Item(isMd ? '1 of 2' : '1 of 1')}
        </Grid.Item>
        <Grid.Item xs={6} sm={0}>
          {Item(isMd ? '2 of 2' : '1 of 1')}
        </Grid.Item>
        <Grid.Item xs={12}>{Item('1 of 1')}</Grid.Item>
        <Grid.Item xs={12}>{Item('1 of 1')}</Grid.Item>
      </Grid>
    </>
  );
};

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
          { label: 'multiple ([2,4])', value: 'multiple' },
          { label: 'breakpoints ({xs:2, sm:3, md:4, lg:5, xl:6})', value: 'breakpoints' }
        ]
      ]}
      value={['unique']}>
      {([gapKey]) => (
        <Grid gap={gapValues[gapKey]} justify="center">
          <Grid.Item xs={6}>{Item('1 of 2')}</Grid.Item>
          <Grid.Item xs={6}>{Item('2 of 2')}</Grid.Item>
          <Grid.Item xs={3}>{Item('1 of 4')}</Grid.Item>
          <Grid.Item xs={3}>{Item('2 of 4')}</Grid.Item>
          <Grid.Item xs={3}>{Item('3 of 4')}</Grid.Item>
          <Grid.Item xs={3}>{Item('4 of 4')}</Grid.Item>
        </Grid>
      )}
    </SBSelectorContainer>
  );
};

export const Direction = () => (
  <SBSelectorContainer
    label={['Select direction']}
    items={[
      [
        { label: 'row', value: 'row' },
        { label: 'column', value: 'column' },
        { label: 'row-reverse', value: 'row-reverse' },
        { label: 'column-reverse', value: 'column-reverse' }
      ]
    ]}
    value={['direction']}>
    {([direction]) => (
      <Grid gap={2} justify="center" direction={direction}>
        <Grid.Item xs={6}>{Item('1 of 2')}</Grid.Item>
        <Grid.Item xs={6}>{Item('2 of 2')}</Grid.Item>
      </Grid>
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
      <Grid gap={2} justify={position}>
        <Grid.Item>{Item('1 of 2')}</Grid.Item>
        <Grid.Item>{Item('2 of 2')}</Grid.Item>
      </Grid>
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
      <Grid gap={2} align={position} className="h-[200px]">
        <Grid.Item>{Item('1 of 2')}</Grid.Item>
        <Grid.Item>{Item('2 of 2')}</Grid.Item>
      </Grid>
    )}
  </SBSelectorContainer>
);

export const Columns = () => (
  <>
    <Text size="sm" className="mb-10">
      Custom grid based to 20 columns
    </Text>
    <Grid gap={2} columns={20} justify="center">
      <Grid.Item xs={4}>{Item('1 of 5')}</Grid.Item>
      <Grid.Item xs={4}>{Item('2 of 5')}</Grid.Item>
      <Grid.Item xs={4}>{Item('3 of 5')}</Grid.Item>
      <Grid.Item xs={4}>{Item('4 of 5')}</Grid.Item>
      <Grid.Item xs={4}>{Item('5 of 5')}</Grid.Item>
    </Grid>
  </>
);
