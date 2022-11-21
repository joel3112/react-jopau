import { useRef } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MdAdd } from 'react-icons/md';
import { Space } from '../../layout';
import { Button } from './button';
import docs from './readme.mdx';

export default {
  title: 'Forms/Button',
  component: Button,
  parameters: {
    docs: {
      page: docs
    }
  },
  args: {
    children: 'Button',
    color: 'primary',
    size: 'md',
    variant: 'solid',
    rounded: false,
    disabled: false,
    autoWidth: false
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  return <Button {...args} />;
};

export const Default = Template.bind({});

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
    <Space gap={10} direction="column">
      <p>1. Solid</p>
      <Colors variant="solid" />
      <p>2. Outline</p>
      <Colors variant="outline" />
      <p>3. Flat</p>
      <Colors variant="flat" />
      <p>4. Ghost</p>
      <Colors variant="ghost" />
      <p>5. Link</p>
      <Colors variant="link" />
    </Space>
  );
};

export const IconOnly = () => (
  <Space direction="column" gap={10}>
    <p>1. Default</p>
    <Space gap={10}>
      <Button icon={<MdAdd />} />
      <Button variant="outline" icon={<MdAdd />} />
      <Button variant="flat" icon={<MdAdd />} />
      <Button variant="ghost" icon={<MdAdd />} />
    </Space>
    <p>2. Rounded</p>
    <Space gap={10}>
      <Button icon={<MdAdd />} rounded />
      <Button variant="outline" icon={<MdAdd />} rounded />
      <Button variant="flat" icon={<MdAdd />} rounded />
      <Button variant="ghost" icon={<MdAdd />} rounded />
    </Space>
  </Space>
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

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};

export const Rounded = Template.bind({});
Rounded.args = {
  rounded: true
};

export const AutoWidth = () => (
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
