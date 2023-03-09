import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MdAddAlert, MdCheck } from 'react-icons/md';
import {
  prepareArgTypes,
  prepareParameters,
  SBSelectorContainer
} from '@react-jopau/shared/stories';
import { Stack } from '../../layout';
import { Avatar } from '../../display';
import { Badge } from './badge';
import docs from './readme.mdx';

export default {
  title: 'Display/Badge',
  component: Badge,
  parameters: prepareParameters(docs),
  args: {
    children: 'New',
    size: 'md',
    color: 'default',
    variant: 'solid',
    shape: 'rectangle',
    squared: false,
    horizontalOffset: 0,
    verticalOffset: 0,
    placement: 'top-right'
  },
  argTypes: prepareArgTypes(Badge)
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => {
  return <Badge {...args} />;
};

export const Docs = Template.bind({});

export const Default = Template.bind({});
Default.storyName = 'Playground';
Default.parameters = { viewMode: 'story' };

export const Sizes = () => (
  <Stack gap={2}>
    <Badge size="xs">New (xs)</Badge>
    <Badge size="sm">New (sm)</Badge>
    <Badge size="md">New (md)</Badge>
    <Badge size="lg">New (lg)</Badge>
    <Badge size="xl">New (xl)</Badge>
  </Stack>
);

export const Variants = () => (
  <Stack gap={2} align="center">
    <Badge variant="solid">New (solid)</Badge>
    <Badge variant="bordered">New (bordered)</Badge>
    <Badge variant="flat">New (flat)</Badge>
    <Badge variant="dot">
      <div>new</div>
    </Badge>
    <Badge variant="points">New (points)</Badge>
  </Stack>
);

export const Colors = () => (
  <SBSelectorContainer
    label={['Select variant']}
    items={[
      [
        { label: 'Solid', value: 'solid' },
        { label: 'Bordered', value: 'bordered' },
        { label: 'Flat', value: 'flat' },
        { label: 'Dot', value: 'dot' },
        { label: 'Points', value: 'points' }
      ]
    ]}
    value={['solid']}>
    {([variant]) => (
      <Stack gap={2}>
        <Badge variant={variant} color="default">
          default
        </Badge>
        <Badge variant={variant} color="primary">
          primary
        </Badge>
        <Badge variant={variant} color="secondary">
          secondary
        </Badge>
        <Badge variant={variant} color="tertiary">
          secondary
        </Badge>
        <Badge variant={variant} color="success">
          success
        </Badge>
        <Badge variant={variant} color="error">
          danger
        </Badge>
        <Badge variant={variant} color="warning">
          warning
        </Badge>
        <Badge variant={variant} color="info">
          info
        </Badge>
      </Stack>
    )}
  </SBSelectorContainer>
);

export const Squared = () => (
  <Stack gap={2}>
    <Badge squared>Default</Badge>
    <Badge squared color="primary" variant="bordered">
      Primary
    </Badge>
    <Badge squared color="error" variant="bordered">
      Error
    </Badge>
    <Badge squared color="secondary" variant="flat">
      Secondary
    </Badge>
    <Badge squared color="success" variant="flat">
      Success
    </Badge>
  </Stack>
);

export const Placement = () => (
  <Stack gap={2}>
    <Badge size="lg" placement="top-left" content={5} color="success">
      <Avatar squared src="https://i.pravatar.cc/300" />
    </Badge>
    <Badge size="lg" placement="top-right" content={5} color="success">
      <Avatar squared src="https://i.pravatar.cc/300" />
    </Badge>
    <Badge size="lg" placement="bottom-left" content={5} color="success">
      <Avatar squared src="https://i.pravatar.cc/300" />
    </Badge>
    <Badge size="lg" placement="bottom-right" content={5} color="success">
      <Avatar squared src="https://i.pravatar.cc/300" />
    </Badge>
  </Stack>
);

export const Content = () => (
  <Stack gap={3}>
    <Badge content={5} size="xs">
      <Avatar size="lg" squared src="https://i.pravatar.cc/300" />
    </Badge>
    <Badge content={5} size="sm">
      <Avatar size="lg" squared src="https://i.pravatar.cc/300" />
    </Badge>
    <Badge content={5} size="md">
      <Avatar size="lg" squared src="https://i.pravatar.cc/300" />
    </Badge>
    <Badge content={5} size="lg">
      <Avatar size="lg" squared src="https://i.pravatar.cc/300" />
    </Badge>
    <Badge content={5} size="xl">
      <Avatar size="lg" squared src="https://i.pravatar.cc/300" />
    </Badge>
    <Badge content={5} variant="bordered" size="xl" color="info">
      <Avatar size="lg" squared src="https://i.pravatar.cc/300" />
    </Badge>
    <Badge variant="dot" content="" color="success">
      <Avatar size="lg" squared src="https://i.pravatar.cc/300" />
    </Badge>
    <Badge variant="points" content="" color="warning">
      <Avatar size="lg" squared src="https://i.pravatar.cc/300" />
    </Badge>
    <Badge size="lg" content={<MdAddAlert />} color="error">
      <Avatar size="lg" squared src="https://i.pravatar.cc/300" />
    </Badge>
  </Stack>
);

export const Offset = () => (
  <Stack gap={2}>
    <Badge
      horizontalOffset="45%"
      verticalOffset="45%"
      color="success"
      size="lg"
      content={<MdCheck />}>
      <Avatar size="lg" color="success" bordered src="https://i.pravatar.cc/300" />
    </Badge>
    <Badge
      placement="bottom-right"
      horizontalOffset="45%"
      verticalOffset="-10%"
      size="lg"
      content={<MdCheck />}>
      <Avatar size="lg" src="https://i.pravatar.cc/300" />
    </Badge>
  </Stack>
);
