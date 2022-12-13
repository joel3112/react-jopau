import { useRef, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SBCode, SBTextSeparator } from '@react-jopau/styles/components';
import { prepareArgTypes, prepareParameters } from '@react-jopau/styles/utils';
import { Space } from '../../../layout';
import { Radio } from '../radio';
import docs from './readme.mdx';

export default {
  title: 'Forms/Radio',
  component: Radio.Group,
  parameters: prepareParameters(docs),
  args: {
    children: 'Option',
    description: '',
    value: '1',
    defaultValue: '1',
    name: 'radio-name',
    label: 'Options',
    size: 'md',
    color: 'primary',
    status: 'default',
    disabled: false,
    readOnly: false,
    required: false
  },
  argTypes: prepareArgTypes(Radio.Group)
} as ComponentMeta<typeof Radio.Group>;

const Options = (size: number) => (
  <>
    {Array.from({ length: size }, (_, i) => (
      <Radio key={i + 1} value={String(i + 1)}>
        {`Option ${i + 1}`}
      </Radio>
    ))}
  </>
);

const Template: ComponentStory<typeof Radio.Group> = (args) => {
  return <Radio.Group {...args}>{Options(3)}</Radio.Group>;
};

export const GroupDocs = Template.bind({});
GroupDocs.storyName = '[Group] Docs';

export const GroupDefault = Template.bind({});
GroupDefault.storyName = '[Group] Playground';
GroupDefault.parameters = { viewMode: 'story' };

export const GroupLabel = () => (
  <Radio.Group label="Options" defaultValue="1">
    {Options(4)}
  </Radio.Group>
);

export const GroupOrientation = () => (
  <Space direction="column" gap={10}>
    <SBTextSeparator>Vertical</SBTextSeparator>
    <Radio.Group orientation="vertical" value="default">
      <Radio value="default" status="default">
        Default
      </Radio>
      <Radio value="primary" status="primary">
        Primary
      </Radio>
      <Radio value="secondary" status="secondary" disabled>
        Secondary
      </Radio>
      <Radio value="tertiary" status="tertiary">
        Tertiary
      </Radio>
      <Radio value="info" status="info">
        Info
      </Radio>
      <Radio value="success" status="success" disabled>
        Success
      </Radio>
      <Radio value="error" status="error">
        Error
      </Radio>
      <Radio value="warning" status="warning">
        Warning
      </Radio>
    </Radio.Group>
    <SBTextSeparator>Horizontal</SBTextSeparator>
    <Radio.Group orientation="horizontal" value="default">
      <Radio value="default" status="default">
        Default
      </Radio>
      <Radio value="primary" status="primary" disabled>
        Primary
      </Radio>
      <Radio value="secondary" status="secondary">
        Secondary
      </Radio>
      <Radio value="tertiary" status="tertiary" disabled>
        Tertiary
      </Radio>
      <Radio value="info" status="info">
        Info
      </Radio>
      <Radio value="success" status="success" disabled>
        Success
      </Radio>
      <Radio value="error" status="error">
        Error
      </Radio>
      <Radio value="warning" status="warning">
        Warning
      </Radio>
    </Radio.Group>
  </Space>
);

export const GroupUncontrolledVSControlled = () => {
  const refUncontrolled = useRef<HTMLInputElement>(null);
  const [valueControlled, setValueControlled] = useState('C');

  return (
    <Space direction="column" gap={10}>
      <SBTextSeparator>Uncontrolled</SBTextSeparator>
      <Radio.Group defaultValue="A" ref={refUncontrolled}>
        <Radio value="A">Option A</Radio>
        <Radio value="B">Option B</Radio>
      </Radio.Group>

      <SBTextSeparator>Controlled</SBTextSeparator>
      <Radio.Group value={valueControlled} onChange={setValueControlled}>
        <Radio value="A">Option A</Radio>
        <Radio value="B">Option B</Radio>
        <Radio value="C">Option C</Radio>
        <Radio value="D">Option D</Radio>
      </Radio.Group>
      <span>
        Selected: <SBCode>{valueControlled}</SBCode>
      </span>
    </Space>
  );
};
