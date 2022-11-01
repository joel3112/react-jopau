const os = require('os');
const { template } = require('react-docgen-renderer-template');
const { get } = require('lodash');

const prop =
  (key) =>
  ({ context }) =>
    get(context, key);
const componentName = prop('componentName');

const generatePropsTable = (props) => {
  return `<PureArgsTable 
      sort="requiredFirst"
      rows={{
        ${Object.keys(props).map((key) => {
          const param = props[key];

          return `${key}: {
            name: '${key}',${os.EOL}
            ${param.description ? `description: '${param.description}',` : ''}
            type: {${os.EOL}
              required: ${param.required},${os.EOL}
            },${os.EOL}
            table: {${os.EOL}
              type: {${os.EOL}
                required: ${param.required},${os.EOL} 
                summary: '${param.type.name}',${os.EOL}
              },${os.EOL}
              ${param.defaultValue ? `defaultValue: { summary:'${param.defaultValue}' },` : ''}
            }
          }${os.EOL}`;
        })}
      }}
    />`.replaceAll('\n', '');
};

const templateCreator = template({});

const templateObject = templateCreator`import { ArgsTable as PureArgsTable } from '@storybook/components';
import { SBDescription, SBSubTitle, SBTitle } from '@react-jopau/styles/components';

<SBTitle>${componentName}</SBTitle>

<SBDescription>${prop('description')}</SBDescription>

\`\`\`jsx dark
${prop('import')}
\`\`\`

${({ context }) => {
  let examples = '';
  if (context.examples.length > 0) {
    context.examples.forEach((example) => {
      examples += `${os.EOL}${os.EOL}\`\`\`jsx dark${os.EOL}${example}${os.EOL}\`\`\``;
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
`;

module.exports = templateObject;
