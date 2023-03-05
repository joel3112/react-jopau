import { useRef } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MdAdd } from 'react-icons/md';
import {
  prepareArgTypes,
  prepareParameters,
  SBTextSeparator,
  SBSelectorContainer
} from '@react-jopau/shared/stories';
import { Stack } from '../../layout';
import { Button } from './button';
import docs from './readme.mdx';

export default {
  title: 'Forms/Button',
  component: Button,
  parameters: prepareParameters(docs),
  args: {
    children: 'Button',
    type: 'button',
    color: 'primary',
    size: 'md',
    variant: 'solid',
    iconPosition: 'left',
    shape: 'default',
    disabled: false,
    auto: false,
    fullWidth: false
  },
  argTypes: prepareArgTypes(Button, {
    children: {
      control: { type: 'text' }
    }
  })
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  return <Button {...args} />;
};

export const Docs = Template.bind({});

export const Default = Template.bind({});
Default.storyName = 'Playground';
Default.parameters = { viewMode: 'story' };

export const Sizes = () => (
  <Stack direction="column" gap={1}>
    <Button size="xs">Mini</Button>
    <Button size="sm">Small</Button>
    <Button size="md">Medium</Button>
    <Button size="lg">Large</Button>
    <Button size="xl">XLarge</Button>
    <Button auto>Auto</Button>
  </Stack>
);

export const Variants = () => (
  <Stack gap={1} className="flex-wrap">
    <Button variant="solid">Solid</Button>
    <Button variant="bordered">Bordered</Button>
    <Button variant="flat">Flat</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="clear">Clear</Button>
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
        { label: 'Ghost', value: 'ghost' },
        { label: 'Clear', value: 'clear' }
      ]
    ]}
    value={['solid']}>
    {([variant]) => (
      <Stack gap={1} className="flex-wrap">
        <Button color="primary" variant={variant}>
          Primary
        </Button>
        <Button color="secondary" variant={variant}>
          Secondary
        </Button>
        <Button color="tertiary" variant={variant}>
          Tertiary
        </Button>
        <Button color="info" variant={variant}>
          Info
        </Button>
        <Button color="error" variant={variant}>
          Error
        </Button>
        <Button color="success" variant={variant}>
          Success
        </Button>
        <Button color="warning" variant={variant}>
          Warning
        </Button>
        <Button color="light" variant={variant}>
          Light
        </Button>
        <Button color="dark" variant={variant}>
          Dark
        </Button>
      </Stack>
    )}
  </SBSelectorContainer>
);

export const IconOnly = () => (
  <SBSelectorContainer
    label={['Select variant']}
    items={[
      [
        { label: 'Solid', value: 'solid' },
        { label: 'Bordered', value: 'bordered' },
        { label: 'Flat', value: 'flat' },
        { label: 'Ghost', value: 'ghost' },
        { label: 'Clear', value: 'clear' }
      ]
    ]}
    value={['solid']}>
    {([variant]) => (
      <Stack align="center" gap={1}>
        <Button size="xs" variant={variant} icon={<MdAdd />} />
        <Button size="sm" variant={variant} icon={<MdAdd />} />
        <Button size="md" variant={variant} icon={<MdAdd />} />
        <Button size="lg" variant={variant} icon={<MdAdd />} />
        <Button size="xl" variant={variant} icon={<MdAdd />} />
      </Stack>
    )}
  </SBSelectorContainer>
);

export const TextAndIcon = () => (
  <Stack gap={1} direction="column">
    <SBTextSeparator>Position</SBTextSeparator>
    <Stack gap={1}>
      <Button icon={<MdAdd />}>Icon Left</Button>
      <Button icon={<MdAdd />} iconPosition="right">
        Icon Right
      </Button>
    </Stack>
    <SBTextSeparator>With Size</SBTextSeparator>
    <Stack direction="column" gap={1}>
      <Button size="xs" icon={<MdAdd />}>
        Mini
      </Button>
      <Button size="sm" icon={<MdAdd />}>
        Small
      </Button>
      <Button size="md" icon={<MdAdd />}>
        Medium
      </Button>
      <Button size="lg" icon={<MdAdd />}>
        Large
      </Button>
      <Button size="xl" icon={<MdAdd />}>
        XLarge
      </Button>
      <Button auto icon={<MdAdd />}>
        Auto
      </Button>
    </Stack>
  </Stack>
);

export const Shape = () => (
  <SBSelectorContainer
    label={['Select variant']}
    items={[
      [
        { label: 'Solid', value: 'solid' },
        { label: 'Bordered', value: 'bordered' },
        { label: 'Flat', value: 'flat' },
        { label: 'Ghost', value: 'ghost' }
      ]
    ]}
    value={['solid']}>
    {([variant]) => (
      <Stack direction="column" gap={1}>
        <SBTextSeparator>Default</SBTextSeparator>
        <Stack gap={1}>
          <Button variant={variant}>Button</Button>
          <Button variant={variant} icon={<MdAdd />}>
            Button
          </Button>
          <Button variant={variant} icon={<MdAdd />} />
        </Stack>
        <SBTextSeparator>Round</SBTextSeparator>
        <Stack gap={1}>
          <Button variant={variant} shape="round">
            Button
          </Button>
          <Button variant={variant} shape="round" icon={<MdAdd />}>
            Button
          </Button>
          <Button variant={variant} shape="round" icon={<MdAdd />} />
        </Stack>
        <SBTextSeparator>Square</SBTextSeparator>
        <Stack gap={1}>
          <Button variant={variant} shape="square">
            Button
          </Button>
          <Button variant={variant} shape="square" icon={<MdAdd />}>
            Button
          </Button>
          <Button variant={variant} shape="square" icon={<MdAdd />} />
        </Stack>
      </Stack>
    )}
  </SBSelectorContainer>
);

export const Disabled = () => (
  <Stack gap={1}>
    <Button disabled>Disabled</Button>
    <Button disabled icon={<MdAdd />}>
      Disabled
    </Button>
    <Button disabled shape="round">
      Disabled
    </Button>
    <Button disabled icon={<MdAdd />} shape="round" />
  </Stack>
);

export const FullWidth = () => (
  <Stack direction="column" gap={5}>
    <Stack gap={1}>
      <Button fullWidth icon={<MdAdd />}>
        Button
      </Button>
      <Button fullWidth icon={<MdAdd />}>
        Button
      </Button>
      <Button fullWidth icon={<MdAdd />}>
        Button
      </Button>
    </Stack>
    <Stack gap={1}>
      <Button fullWidth icon={<MdAdd />} shape="round">
        Button
      </Button>
    </Stack>
  </Stack>
);

export const Ref = () => {
  const ref = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    ref.current?.click();
  };

  return (
    <Stack direction="column" gap={1}>
      <p>Click the "handler" button below to trigger click event on the "button-1" button</p>
      <Stack gap={1}>
        <Button color="light" onClick={handleClick}>
          handler
        </Button>
        <Button
          onClick={(e) => alert(`click in ${(e.target as HTMLButtonElement).innerText}`)}
          ref={ref}>
          button-1
        </Button>
      </Stack>
    </Stack>
  );
};
