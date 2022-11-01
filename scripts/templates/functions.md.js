const os = require('os');
const { template } = require('react-docgen-renderer-template');

const generatePropsType = (type) => {
  const types = type.split(' | ');
  return types.map((t) => `\`${t}\``).join(' \\| ');
};

const generatePropsTable = (props) => {
  const entries = Object.entries(props);
  if (entries.length === 0) return 'This component does not have any props.';

  let propsTableHeader =
    `| Name | Type | Default value | Description |${os.EOL}` +
    `| ---- | ---- | ------------- | ----------- |${os.EOL}`;
  return (
    propsTableHeader +
    entries
      .map(
        ([propName, propValue]) =>
          `| ${propName}${propValue.required ? ' _(required)_' : ''} ` +
          `| ${generatePropsType(propValue.type.name)} ` +
          `| ${propValue.defaultValue ? `\`${propValue.defaultValue}\`` : ''} ` +
          `| ${propValue.description ? propValue.description : ''} ` +
          `|`
      )
      .join(os.EOL)
  );
};

const templateCreator = template({});

const templateObject = templateCreator`### ${({ context }) => context.componentName}${({
  context
}) => {
  let headerValue = '';
  if (context.description) {
    headerValue += os.EOL + os.EOL + context.description;
  }
  headerValue += os.EOL;

  return headerValue;
}}
${({ context }) => {
  let module = '';
  if (context.import) {
    module = '#### Import';
    module += `${os.EOL}${os.EOL}\`\`\`jsx${os.EOL}${context.import}${os.EOL}\`\`\``;
  }
  module += os.EOL;

  return module;
}}
${({ context }) => {
  let examples = '';
  if (context.examples.length > 0) {
    examples = '#### Examples';
    context.examples.forEach((example) => {
      examples += `${os.EOL}${os.EOL}\`\`\`jsx${os.EOL}${example}${os.EOL}\`\`\``;
    });
  }
  examples += os.EOL;

  return examples;
}}
${({ context }) => {
  let params = '';
  if (Object.keys(context.params).length > 0) {
    params = '#### Params';
    params += `${os.EOL}${os.EOL}${generatePropsTable(context.params)}`;
  }
  params += os.EOL;

  return params;
}}
`;

module.exports = templateObject;
