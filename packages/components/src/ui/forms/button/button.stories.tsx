import { useRef } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MdAdd } from 'react-icons/md';
import { SBTextSeparator, SBSelectorContainer } from '@react-jopau/styles/components';
import { prepareArgTypes, prepareParameters } from '@react-jopau/styles/utils';
import { Space } from '../../layout';
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
  <Space direction="column" gap={10}>
    <Button size="xs">Mini</Button>
    <Button size="sm">Small</Button>
    <Button size="md">Medium</Button>
    <Button size="lg">Large</Button>
    <Button size="xl">XLarge</Button>
    <Button auto>Auto</Button>
  </Space>
);

export const Variants = () => (
  <Space gap={10} wrap>
    <Button variant="solid">Solid</Button>
    <Button variant="bordered">Bordered</Button>
    <Button variant="flat">Flat</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="clear">Clear</Button>
  </Space>
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
      <Space gap={10} wrap>
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
      </Space>
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
      <Space align="center" gap={10}>
        <Button size="xs" variant={variant} icon={<MdAdd />} />
        <Button size="sm" variant={variant} icon={<MdAdd />} />
        <Button size="md" variant={variant} icon={<MdAdd />} />
        <Button size="lg" variant={variant} icon={<MdAdd />} />
        <Button size="xl" variant={variant} icon={<MdAdd />} />
      </Space>
    )}
  </SBSelectorContainer>
);

export const TextAndIcon = () => (
  <Space gap={10} direction="column">
    <SBTextSeparator>Position</SBTextSeparator>
    <Space gap={10}>
      <Button icon={<MdAdd />}>Icon Left</Button>
      <Button icon={<MdAdd />} iconPosition="right">
        Icon Right
      </Button>
    </Space>
    <SBTextSeparator>With Size</SBTextSeparator>
    <Space direction="column" gap={10}>
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
    </Space>
  </Space>
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
      <Space direction="column" gap={10}>
        <SBTextSeparator>Default</SBTextSeparator>
        <Space gap={10}>
          <Button variant={variant}>Button</Button>
          <Button variant={variant} icon={<MdAdd />}>
            Button
          </Button>
          <Button variant={variant} icon={<MdAdd />} />
        </Space>
        <SBTextSeparator>Round</SBTextSeparator>
        <Space gap={10}>
          <Button variant={variant} shape="round">
            Button
          </Button>
          <Button variant={variant} shape="round" icon={<MdAdd />}>
            Button
          </Button>
          <Button variant={variant} shape="round" icon={<MdAdd />} />
        </Space>
        <SBTextSeparator>Square</SBTextSeparator>
        <Space gap={10}>
          <Button variant={variant} shape="square">
            Button
          </Button>
          <Button variant={variant} shape="square" icon={<MdAdd />}>
            Button
          </Button>
          <Button variant={variant} shape="square" icon={<MdAdd />} />
        </Space>
      </Space>
    )}
  </SBSelectorContainer>
);

export const Disabled = () => (
  <Space gap={10}>
    <Button disabled>Disabled</Button>
    <Button disabled icon={<MdAdd />}>
      Disabled
    </Button>
    <Button disabled shape="round">
      Disabled
    </Button>
    <Button disabled icon={<MdAdd />} shape="round" />
  </Space>
);

export const FullWidth = () => (
  <Space direction="column" gap={5}>
    <Space gap={10}>
      <Button fullWidth icon={<MdAdd />}>
        Button
      </Button>
      <Button fullWidth icon={<MdAdd />}>
        Button
      </Button>
      <Button fullWidth icon={<MdAdd />}>
        Button
      </Button>
    </Space>
    <Space gap={10}>
      <Button fullWidth icon={<MdAdd />} shape="round">
        Button
      </Button>
    </Space>
  </Space>
);

export const Ref = () => {
  const ref = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    ref.current?.click();
  };

  return (
    <Space direction="column" gap={10}>
      <p>Click the "handler" button below to trigger click event on the "button-1" button</p>
      <Space gap={10}>
        <Button color="light" onClick={handleClick}>
          handler
        </Button>
        <Button
          onClick={(e) => alert(`click in ${(e.target as HTMLButtonElement).innerText}`)}
          ref={ref}>
          button-1
        </Button>
      </Space>
    </Space>
  );
};
