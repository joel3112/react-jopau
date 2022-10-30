const os = require('os');
const { template } = require('react-docgen-renderer-template');
const { get } = require('lodash');

const prop =
  (key) =>
  ({ context }) =>
    get(context, key);
const componentName = prop('componentName');
const componentPath = (args) => prop('componentName')(args).toLowerCase();

const templateCreator = template({});

const templateStory = (componentPath, { storyLabel, storyId }) => `
<span className="!text-lg font-medium">${storyLabel}</span>

<Canvas>
  <Story id="components-${componentPath}--${storyId}" />
</Canvas>
`;

const templateObject = templateCreator`import { ArgsTable, Canvas, Story, Source, SourceState } from '@storybook/addon-docs';
import { ${componentName} } from './${componentPath}';

<h1 className="!border-0 !font-bold">${componentName}</h1>

<p className="!text-base font-medium">${prop('description')}</p>

<Source code={\`import { ${componentName} } from '@react-jopau/components/${componentPath}';\`} language="jsx" dark />

<Canvas withToolbar withSource={SourceState.OPEN}>
  <Story id="components-${componentPath}--default" />
</Canvas>

<h4 className="!text-xl font-semibold underline decoration-4 underline-offset-8">Properties</h4>

<ArgsTable of={${componentName}} />

${({ context }) => {
  let stories = '';
  if (context.composes.length > 0) {
    stories += `<h4 className="!text-xl font-semibold underline decoration-4 underline-offset-8 !mb-6">Stories</h4>`;

    context.composes.forEach((compose) => {
      stories += os.EOL + templateStory(context.componentName.toLowerCase(), compose);
    });
  }
  stories += os.EOL;

  return stories;
}}
`;

module.exports = templateObject;
