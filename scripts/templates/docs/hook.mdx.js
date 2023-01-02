const os = require('os');
const { template } = require('react-docgen-renderer-template');
const { get } = require('lodash');

const prop =
  (key) =>
  ({ context }) =>
    get(context, key);
const componentName = prop('componentName');

const storyDefaultId = (args) => `hooks-${args.context.componentName.toLowerCase()}--default`;

const generatePropsTable = (heading, props, noDefaults) => {
  return `<SBPureArgsTable 
      heading="${heading}"
      ${noDefaults ? 'noDefaults' : ''}
      rows={{
        ${Object.keys(props).map((key) => {
          const param = props[key];

          return `"${key}": {
            name: '${key}',${os.EOL}
            ${param.description ? `description: '${param.description}',` : ''}
            required: ${param.required},${os.EOL}
            type: '${param.type.name}',${os.EOL}
            ${param.defaultValue ? `defaultValue: '${param.defaultValue}',` : ''}
          }${os.EOL}`;
        })}
      }}
    />`.replaceAll('\n', '');
};

const templateCreator = template({});

const templateObject = templateCreator`import { SBDescription, SBLinks, SBPureArgsTable, SBSubTitle, SBTitle } from '@react-jopau/shared/stories';

<SBTitle>${componentName}</SBTitle>

<SBLinks>
<SBLinks.Item href="${storyDefaultId}">Playground</SBLinks.Item>
</SBLinks>

<SBDescription>${prop('description')}</SBDescription>

\`\`\`tsx dark
${prop('imports')}
\`\`\`

${({ context }) => {
  let examples = '';
  if (context.examples && context.examples.length > 0) {
    examples += `<SBSubTitle>Examples</SBSubTitle>`;
    context.examples.forEach((example) => {
      examples += `${os.EOL}${os.EOL}\`\`\`tsx dark${os.EOL}${example}${os.EOL}\`\`\``;
    });
  }
  examples += os.EOL;

  return examples;
}}
${({ context }) => {
  let params = '';
  if (context.params && Object.keys(context.params).length > 0) {
    params += os.EOL + os.EOL + generatePropsTable('Params', context.params);
  }

  return params;
}}

${({ context }) => {
  let returns = '';
  if (context.returns && Object.keys(context.returns).length > 0) {
    returns += os.EOL + os.EOL + generatePropsTable('Returns', context.returns, true);
  }

  return returns;
}}
`;

module.exports = templateObject;
