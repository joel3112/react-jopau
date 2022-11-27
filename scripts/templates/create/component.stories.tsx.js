const { capitalize } = require('lodash');
const { template } = require('react-docgen-renderer-template');
const templateCreator = template({});

const templateObject = templateCreator`${({ context }) => `
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { prepareArgTypes, prepareParameters } from '../../../story-helpers';
import { ${context.pascalName} } from './${context.name}';
import docs from './readme.mdx';

export default {
  title: '${capitalize(context.type)}/${context.pascalName}',
  component: ${context.pascalName},
  parameters: prepareParameters(docs),
  args: {
    title: 'Title'
  },
  argTypes: prepareArgTypes(${context.pascalName})
} as ComponentMeta<typeof ${context.pascalName}>;

const Template: ComponentStory<typeof ${context.pascalName}> = (args) => {
  return <${context.pascalName} {...args} />;
};

export const Docs = Template.bind({});

export const Default = Template.bind({});
Default.storyName = 'Playground';
Default.parameters = { viewMode: 'story' };
`}
`;

module.exports = templateObject;
