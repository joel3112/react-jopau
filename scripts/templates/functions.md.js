const os = require('os');
const { template } = require('react-docgen-renderer-template');

const generatePropsType = (type) => {
  const types = type.split(' | ');
  return types.map((t) => `\`${t}\``).join(' \\| ');
};

const generatePropsTable = (props, noDefaults) => {
  const entries = Object.entries(props);
  if (entries.length === 0) return 'This component does not have any props.';

  const sortedEntries = entries.sort((a, b) => {
    if (a[1].required && !b[1].required) {
      return -1;
    }
    if (!a[1].required && b[1].required) {
      return 1;
    }
    return 0;
  });

  let propsTableHeader = !noDefaults
    ? `| Name | Type | Default value | Description |${os.EOL}` +
      `| ---- | ---- | ------------- | ----------- |${os.EOL}`
    : `| Name | Type | Description |${os.EOL}` + `| ---- | ---- | ----------- |${os.EOL}`;
  return (
    propsTableHeader +
    sortedEntries
      .map(
        ([propName, propValue]) =>
          `| ${propName}${propValue.required ? ' _(required)_' : ''} ` +
          `| ${generatePropsType(propValue.type.name)} ` +
          (!noDefaults
            ? `| ${propValue.defaultValue ? `\`${propValue.defaultValue}\`` : ''} `
            : '') +
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
  if (context.imports) {
    module = '#### Import';
    module += `${os.EOL}${os.EOL}\`\`\`tsx${os.EOL}${context.imports}${os.EOL}\`\`\``;
  }
  module += os.EOL;

  return module;
}}
${({ context }) => {
  let examples = '';
  if (context.examples.length > 0) {
    examples = '#### Examples';
    context.examples.forEach((example) => {
      examples += `${os.EOL}${os.EOL}\`\`\`tsx${os.EOL}${example}${os.EOL}\`\`\``;
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
${({ context }) => {
  let returns = '';
  if (Object.keys(context.returns).length > 0) {
    returns = '#### Returns';
    returns += `${os.EOL}${os.EOL}${generatePropsTable(context.returns, true)}`;
  }
  returns += os.EOL;

  return returns;
}}
`;

module.exports = templateObject;
