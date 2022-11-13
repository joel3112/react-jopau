const { template } = require('react-docgen-renderer-template');
const templateCreator = template({});

const templateObject = templateCreator`${({ context }) => `
import { ComponentMeta, ComponentStory } from '@storybook/react';
import AppExample from '@apps/example';
import { ${context.pascalName}Provider } from './${context.name}-context';
import docs from './readme.mdx';

export default {
  title: '${context.pascalName}Provider',
  component: ${context.pascalName}Provider,
  parameters: {
    docs: {
      page: docs
    }
  },
  args: {
    children: <AppExample />,
    initialValue: 1
  },
  argTypes: {
    children: {
      control: false
    }
  }
} as ComponentMeta<typeof ${context.pascalName}Provider>;

const Template: ComponentStory<typeof ${context.pascalName}Provider> = (args) => {
  return <${context.pascalName}Provider {...args} />;
};

export const Default = Template.bind({});
`}
`;

module.exports = templateObject;