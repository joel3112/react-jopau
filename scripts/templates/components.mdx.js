const os = require('os');
const { template } = require('react-docgen-renderer-template');
const { get, kebabCase, lowerCase, upperFirst } = require('lodash');

const prop =
  (key) =>
  ({ context }) =>
    get(context, key);
const componentName = prop('componentName');
const storyId = (args) => prop('componentName')(args).toLowerCase();
const componentPath = prop('componentPath');

const templateCreator = template({});

const templateStory = (componentPath, { name }) => {
  const id = kebabCase(name);
  const label = lowerCase(name)
    .split(' ')
    .map((t) => upperFirst(t))
    .join(' ');

  return `
<span className="!text-lg font-medium">${label}</span>

<Canvas>
  <Story id="components-${componentPath}--${id}" />
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
  <Story id="components-${storyId}--default" />
</Canvas>

<SBSubTitle>Properties</SBSubTitle>

<ArgsTable of={${componentName}} />

${({ context }) => {
  let stories = '';
  if (Object.keys(context.stories).length > 0) {
    stories += `<SBSubTitle>Stories</SBSubTitle>`;
    stories += `${os.EOL}<br />${os.EOL}`;

    Object.keys(context.stories).forEach((key) => {
      stories += os.EOL + templateStory(context.componentName.toLowerCase(), context.stories[key]);
    });
  }
  stories += os.EOL;

  return stories;
}}
`;

module.exports = templateObject;
