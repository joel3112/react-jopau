const { template } = require('react-docgen-renderer-template');
const templateCreator = template({});

const templateObject = templateCreator`${({ context }) => `
import { classes } from '../../../utils/system';
import { ${context.pascalName}Props, defaultProps } from './${context.name}-props';
import { Styled${context.pascalName} } from './${context.name}.styled';

/**
  * Description component
  *
  * @param   {${context.pascalName}Props} props - Props injected to the component.
  * @returns {JSX.Element} Rendered component.
  *
  * @imports import { ${context.pascalName} } from '@react-jopau/components/ui/${context.type}';
  * @example
  * <${context.pascalName} title="Title">
  *    <div>Content</div>
  * </${context.pascalName}>
  */
export const ${context.pascalName} = ({
  className,
  style,
  children,
  title
}: ${context.pascalName}Props) => {
  return (
    <Styled${context.pascalName}
      className={classes('${context.name}', className)}
      css={{
        ...style
      }}>
      <h2>{title}</h2>
      {children}
    </Styled${context.pascalName}>
  );
};

${context.pascalName}.defaultProps = defaultProps;
`}
`;

module.exports = templateObject;
