const os = require('os');
const { template } = require('react-docgen-renderer-template');
const { get } = require('lodash');

const prop =
  (key) =>
  ({ context }) =>
    get(context, key);
const componentName = prop('componentName');
const storyDefaultId = (args) => get(prop('stories')(args), 'Default.id');
const componentPath = prop('componentPath');

const templateCreator = template({});

const templateStory = ({ label, id }) => {
  return `
<span className="!text-lg font-medium">${label}</span>

<Canvas>
  <Story id="${id}" />
</Canvas>
`;
};

const templateObject = templateCreator`import { ArgsTable, Canvas, Story } from '@storybook/addon-docs';
import { SBDescription, SBSubTitle, SBTitle } from '@react-jopau/styles/components';
import { ${componentName} } from './${componentPath}';

<SBTitle>${componentName}</SBTitle>

<SBDescription>${prop('description')}</SBDescription>

\`\`\`jsx dark
${prop('imports')}
\`\`\`

<Canvas withToolbar>
  <Story id="${storyDefaultId}" />
</Canvas>

<SBSubTitle>Properties</SBSubTitle>

<ArgsTable of={${componentName}} />

${({ context }) => {
  let stories = '';
  if (Object.keys(context.stories).length > 0) {
    stories += `<SBSubTitle>Stories</SBSubTitle>`;
    stories += `${os.EOL}<br />${os.EOL}`;

    Object.keys(context.stories).forEach((key) => {
      stories += os.EOL + templateStory(context.stories[key]);
    });
  }
  stories += os.EOL;

  return stories;
}}
`;

module.exports = templateObject;
