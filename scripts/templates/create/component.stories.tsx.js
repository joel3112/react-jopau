const { capitalize } = require('lodash');
const { template } = require('react-docgen-renderer-template');
const templateCreator = template({});

const templateObject = templateCreator`${({ context }) => `
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ${context.pascalName} } from './${context.name}';
import docs from './readme.mdx';

export default {
  title: '${capitalize(context.type)}/${context.pascalName}',
  component: ${context.pascalName},
  parameters: {
    docs: {
      page: docs
    }
  },
  args: {
    title: 'Title'
  }
} as ComponentMeta<typeof ${context.pascalName}>;

const Template: ComponentStory<typeof ${context.pascalName}> = (args) => {
  return <${context.pascalName} {...args} />;
};

export const Default = Template.bind({});
`}
`;

module.exports = templateObject;
