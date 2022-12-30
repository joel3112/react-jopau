const os = require('os');
const { template } = require('react-docgen-renderer-template');
const { get } = require('lodash');

const prop =
  (key) =>
  ({ context }) =>
    get(context, key);
const componentName = prop('componentName');
const storyDefaultId = (args) =>
  get(
    Object.entries(prop('stories')(args)).find((s) => s[0].includes('Default')),
    '[1].id'
  );

const templateCreator = template({});

const templateStory = ({ label, id }) => {
  return `
<SBStories.Item label="${label}" id="${id}" />
`;
};

const templateObject = templateCreator`${({ context }) => {
  if (context.subcomponents.length > 0) {
    return `import { SBArgsTable, SbSubComponents, SBDescription, SBStories, SBTitle } from '@react-jopau/shared/stories';`;
  }
  return `import { SBArgsTable, SBDescription, SBStories, SBTitle } from '@react-jopau/shared/stories';`;
}}
${({ context }) => {
  if (context.parentSubComponentPath) {
    return `import { ${context.parentSubComponentName} } from '../${context.parentSubComponentPath}';`;
  }
  return `import { ${context.componentName} } from './${context.componentPath}';`;
}}

<SBTitle>${componentName}</SBTitle>

<SBDescription>${prop('description')}</SBDescription>

${({ context }) => {
  let subcomponents = '';
  if (context.subcomponents.length > 0) {
    subcomponents += `<SbSubComponents>`;

    context.subcomponents.forEach(({ displayName, storyDoc }) => {
      subcomponents += `<SbSubComponents.Item label="${displayName}" id="${storyDoc}" />`;
    });

    subcomponents += `</SbSubComponents>${os.EOL}`;
  }
  subcomponents += os.EOL;

  return subcomponents;
}}

\`\`\`jsx dark
${prop('imports')}
\`\`\`

<SBStories.Default id="${storyDefaultId}" />

<SBArgsTable component={${componentName}} />

${({ context }) => {
  let stories = '';
  if (Object.keys(context.stories).length > 0) {
    stories += `<SBStories>`;

    Object.keys(context.stories).forEach((key) => {
      if (['Default', 'Docs', 'Playground'].some((s) => key.includes(s))) return;
      stories += templateStory(context.stories[key]);
    });

    stories += `</SBStories>${os.EOL}`;
  }
  stories += os.EOL;

  return stories;
}}
`;

module.exports = templateObject;
