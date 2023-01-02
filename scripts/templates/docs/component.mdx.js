const os = require('os');
const { template } = require('react-docgen-renderer-template');
const { get } = require('lodash');

const prop =
  (key) =>
  ({ context }) =>
    get(context, key);
const componentName = prop('componentName');
const storyDefaultId = (context) =>
  context.stories
    ? get(
        Object.entries(context.stories).find((s) => s[0].includes('Default')),
        '[1].id'
      )
    : '';

const templateCreator = template({});

const templateStory = ({ label, id }) => {
  return `<SBStories.Item label="${label}" id="${id}" />`;
};

const templateObject = templateCreator`import { SBArgsTable, SBDescription, SBLinks, SBStories, SBTitle } from '@react-jopau/shared/stories';
${({ context }) => {
  if (context.parentSubComponentPath) {
    return `import { ${context.parentSubComponentName} } from '../${context.parentSubComponentPath}';`;
  }
  return `import { ${context.componentName} } from './${context.componentPath}';`;
}}

<SBTitle>${componentName}</SBTitle>

<SBLinks>
${({ context }) => {
  let subcomponents = `<SBLinks.Item href="${storyDefaultId(context)}">Playground</SBLinks.Item>`;
  if (context.subcomponents.length > 0) {
    context.subcomponents.forEach(({ displayName, storyDoc }) => {
      subcomponents += `<SBLinks.Item href="${storyDoc}">${displayName}</SBLinks.Item>`;
    });
  }

  return subcomponents;
}}
</SBLinks>

<SBDescription>${prop('description')}</SBDescription>

\`\`\`jsx dark
${prop('imports')}
\`\`\`

<SBStories.Default id="${(args) => storyDefaultId(args.context)}" />

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
