import { useRef } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MdAdd } from 'react-icons/md';
import { TWSelectorContainer } from '@react-jopau/styles/components';
import { prepareArgTypes, prepareParameters } from '../../../utils/story-helpers';
import { Space } from '../../layout';
import { Button, ButtonProps } from './button';
import docs from './readme.mdx';

export default {
  title: 'Forms/Button',
  component: Button,
  parameters: prepareParameters(docs),
  args: {
    children: 'Button',
    color: 'primary',
    size: 'md',
    variant: 'solid',
    rounded: false,
    disabled: false,
    autoWidth: false
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

export const Sizes = () => {
  return (
    <Space align="center" gap={10}>
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </Space>
  );
};

export const Colors = ({
  variant
}: {
  variant: 'solid' | 'outline' | 'ghost' | 'flat' | 'link';
}) => {
  return (
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
  );
};

export const Variants = () => {
  return (
    <TWSelectorContainer
      label="Select color"
      items={[
        { label: 'Primary', value: 'primary' },
        { label: 'Secondary', value: 'secondary' },
        { label: 'Tertiary', value: 'tertiary' },
        { label: 'Info', value: 'info' },
        { label: 'Error', value: 'error' },
        { label: 'Success', value: 'success' },
        { label: 'Warning', value: 'warning' },
        { label: 'Light', value: 'light' },
        { label: 'Dark', value: 'dark' }
      ]}
      value="primary">
      {(color: ButtonProps['color']) => (
        <Space gap={10}>
          <Button color={color} variant="solid">
            Solid
          </Button>
          <Button color={color} variant="outline">
            Outline
          </Button>
          <Button color={color} variant="flat">
            Flat
          </Button>
          <Button color={color} variant="ghost">
            Ghost
          </Button>
          <Button color={color} variant="link">
            Link
          </Button>
        </Space>
      )}
    </TWSelectorContainer>
  );
};

export const IconOnly = () => (
  <TWSelectorContainer
    label="Select variant"
    items={[
      { label: 'Solid', value: 'solid' },
      { label: 'Outline', value: 'outline' },
      { label: 'Flat', value: 'flat' },
      { label: 'Ghost', value: 'ghost' },
      { label: 'Link', value: 'link' }
    ]}
    value="solid">
    {(variant: ButtonProps['variant']) => (
      <Space direction="column" gap={10}>
        <p>1. Default</p>
        <Space align="center" gap={10}>
          <Button size="xs" variant={variant} icon={<MdAdd />} />
          <Button size="sm" variant={variant} icon={<MdAdd />} />
          <Button size="md" variant={variant} icon={<MdAdd />} />
          <Button size="lg" variant={variant} icon={<MdAdd />} />
        </Space>
        <p>2. Rounded</p>
        <Space align="center" gap={10}>
          <Button size="xs" variant={variant} icon={<MdAdd />} rounded />
          <Button size="sm" variant={variant} icon={<MdAdd />} rounded />
          <Button size="md" variant={variant} icon={<MdAdd />} rounded />
          <Button size="lg" variant={variant} icon={<MdAdd />} rounded />
        </Space>
      </Space>
    )}
  </TWSelectorContainer>
);

export const TextAndIcon = () => (
  <Space gap={10} direction="column">
    <p>1. Position</p>
    <Space gap={10}>
      <Button icon={<MdAdd />}>Icon Left</Button>
      <Button icon={<MdAdd />} iconPosition="right">
        Icon Right
      </Button>
    </Space>
    <p>2. Size</p>
    <Space align="center" gap={10}>
      <Button size="xs" icon={<MdAdd />}>
        Extra Small
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
    </Space>
  </Space>
);

export const Rounded = () => (
  <TWSelectorContainer
    label="Select variant"
    items={[
      { label: 'Solid', value: 'solid' },
      { label: 'Outline', value: 'outline' },
      { label: 'Flat', value: 'flat' },
      { label: 'Ghost', value: 'ghost' }
    ]}
    value="solid">
    {(variant: ButtonProps['variant']) => (
      <Space gap={10}>
        <Button variant={variant} rounded>
          Button
        </Button>
        <Button variant={variant} icon={<MdAdd />} rounded>
          Button
        </Button>
        <Button variant={variant} icon={<MdAdd />} rounded />
      </Space>
    )}
  </TWSelectorContainer>
);

export const Disabled = () => (
  <Space gap={10}>
    <Button disabled>Disabled</Button>
    <Button disabled icon={<MdAdd />}>
      Disabled
    </Button>
    <Button disabled rounded>
      Disabled
    </Button>
    <Button disabled icon={<MdAdd />} rounded />
  </Space>
);

export const AutoWidth = () => (
  <Space direction="column" gap={5}>
    <Space gap={10}>
      <Button autoWidth icon={<MdAdd />}>
        Button
      </Button>
      <Button autoWidth icon={<MdAdd />}>
        Button
      </Button>
      <Button autoWidth icon={<MdAdd />}>
        Button
      </Button>
    </Space>
    <Space gap={10}>
      <Button autoWidth icon={<MdAdd />} rounded>
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
