const os = require('os');
const { template } = require('react-docgen-renderer-template');
const { get } = require('lodash');

const prop =
  (key) =>
  ({ context }) =>
    get(context, key);
const componentName = prop('componentName');

const generatePropsTable = (props, noDefaults) => {
  return `<SBArgsTable 
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

const templateObject = templateCreator`import { SBArgsTable, SBDescription, SBSubTitle, SBTitle } from '@react-jopau/styles/components';

<SBTitle>${componentName}</SBTitle>

<SBDescription>${prop('description')}</SBDescription>

\`\`\`tsx dark
${prop('imports')}
\`\`\`

${({ context }) => {
  let examples = '';
  if (context.examples.length > 0) {
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
    params += `<SBSubTitle>Params</SBSubTitle>`;
    params += os.EOL + os.EOL + generatePropsTable(context.params);
  }

  return params;
}}

${({ context }) => {
  let returns = '';
  if (context.returns && Object.keys(context.returns).length > 0) {
    returns += `<SBSubTitle>Returns</SBSubTitle>`;
    returns += os.EOL + os.EOL + generatePropsTable(context.returns, true);
  }

  return returns;
}}
`;

module.exports = templateObject;
