const os = require('os');
const { template } = require('react-docgen-renderer-template');

const generatePropsType = (type) => {
  const types = type.split(' | ');

  return types
    .map((t) => {
      return `\`${t.replaceAll('"', '')}\``;
    })
    .join(' \\| ');
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
  if (context.srcLinkUrl) {
    headerValue = `${os.EOL}From [\`${context.srcLink}\`](${context.srcLinkUrl})`;
  }
  if (context.description) {
    headerValue += os.EOL + os.EOL + context.description;
  }
  headerValue += os.EOL;

  return headerValue;
}}
#### Props

${({ context }) => generatePropsTable(context.props)}
`;

module.exports = templateObject;
