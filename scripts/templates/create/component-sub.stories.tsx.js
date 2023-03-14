const { capitalize } = require('lodash');
const { template } = require('react-docgen-renderer-template');
const templateCreator = template({});

const templateObject = templateCreator`${({ context }) => {
  const subcomponentName = `${context.pascalParentName}.${context.pascalName}`;

  return `
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { prepareArgTypes, prepareParameters } from '@react-jopau/shared/stories';
import { ${context.pascalParentName} } from '../${context.parentName}';
import docs from './readme.mdx';

export default {
  title: '${capitalize(context.type)}/${context.pascalParentName}',
  component: ${subcomponentName},
  parameters: prepareParameters(docs),
  args: {
    title: 'Title'
  },
  argTypes: prepareArgTypes(${subcomponentName})
} as ComponentMeta<typeof ${subcomponentName}>;

const Template: ComponentStory<typeof ${subcomponentName}> = (args) => {
  return <${subcomponentName} {...args} />;
};

export const ${context.pascalName}Docs = Template.bind({});
${context.pascalName}Docs.storyName = '[${context.pascalName}] Docs';

export const ${context.pascalName}Default = Template.bind({});
${context.pascalName}Default.storyName = '[${context.pascalName}] Playground';
${context.pascalName}Default.parameters = { viewMode: 'story' };
`;
}}
`;

module.exports = templateObject;
