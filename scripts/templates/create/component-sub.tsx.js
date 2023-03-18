const { template } = require('react-docgen-renderer-template');
const templateCreator = template({});

const templateObject = templateCreator`${({ context }) => {
  const name = `${context.parentName}-${context.name}`;
  const pascalName = `${context.pascalParentName}${context.pascalName}`;

  return `
import { classes } from '@react-jopau/utils';
import { prefixClass, withDefaults } from '@/components/shared';
import { ${pascalName}Props, defaultProps } from './${name}-props';
import { Styled${pascalName} } from '../${context.parentName}.styled';

/**
  * Description component
  *
  * @param   {${pascalName}Props} props - Props injected to the component.
  * @returns {JSX.Element} Rendered component.
  *
  * @imports import { ${pascalName} } from '@react-jopau/components';
  * @example
  * <${pascalName} title="Title">
  *    <div>Content</div>
  * </${pascalName}>
  */
export const ${pascalName} = withDefaults<${pascalName}Props>((props: ${pascalName}Props) => {
  const { className, style, children, title } = props;

  return (
    <Styled${pascalName}
      className={classes(prefixClass + '-${name}', className)}
      css={{
        ...style
      }}>
      <h2>{title}</h2>
      {children}
    </Styled${pascalName}>
  );
}, defaultProps);
`;
}}
`;

module.exports = templateObject;
