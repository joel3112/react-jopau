const { template } = require('react-docgen-renderer-template');
const templateCreator = template({});

const templateObject = templateCreator`${({ context }) => `
import { classes } from '@react-jopau/utils';
import { prefixClass, withDefaults } from '@/components/shared';
import { ${context.pascalName}Props, defaultProps } from './${context.name}.props';
import { Styled${context.pascalName} } from './${context.name}.styled';

/**
  * Description component
  *
  * @param   {${context.pascalName}Props} props - Props injected to the component.
  * @returns {JSX.Element} Rendered component.
  *
  * @imports import { ${context.pascalName} } from '@react-jopau/components';
  * @example
  * <${context.pascalName} title="Title">
  *    <div>Content</div>
  * </${context.pascalName}>
  */
export const ${context.pascalName} = withDefaults<${context.pascalName}Props>((props: ${context.pascalName}Props) => {
  const { className, style, children, title } = props;

  return (
    <Styled${context.pascalName}
      className={classes(prefixClass + '-${context.name}', className)}
      css={{
        ...style
      }}>
      <h2>{title}</h2>
      {children}
    </Styled${context.pascalName}>
  );
}, defaultProps);
`}
`;

module.exports = templateObject;
