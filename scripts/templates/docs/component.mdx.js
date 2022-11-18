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
<SBStories.Item label="${label}" id="${id}" />
`;
};

const templateObject = templateCreator`import { ArgsTable } from '@storybook/addon-docs';
import { SBDescription, SBStories, SBSubTitle, SBTitle } from '@react-jopau/styles/components';
import { ${componentName} } from './${componentPath}';

<SBTitle>${componentName}</SBTitle>

<SBDescription>${prop('description')}</SBDescription>

\`\`\`jsx dark
${prop('imports')}
\`\`\`

<SBStories.Item id="${storyDefaultId}" canvasProps={{ withToolbar: true }} />

<SBSubTitle>Properties</SBSubTitle>

<ArgsTable of={${componentName}} />

${({ context }) => {
  let stories = '';
  if (Object.keys(context.stories).length > 0) {
    stories += `<SBSubTitle>Stories</SBSubTitle>${os.EOL}${os.EOL}`;
    stories += `<SBStories>`;

    Object.keys(context.stories).forEach((key) => {
      stories += templateStory(context.stories[key]);
    });

    stories += `</SBStories>${os.EOL}`;
  }
  stories += os.EOL;

  return stories;
}}
`;

module.exports = templateObject;
