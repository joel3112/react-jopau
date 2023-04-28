const { template } = require('react-docgen-renderer-template');
const templateCreator = template({});

const templateObject = templateCreator`${({ context }) => {
  const name = `${context.parentName}-${context.name}`;
  const pascalName = `${context.pascalParentName}${context.pascalName}`;

  return `
import { ForwardedRef, useImperativeHandle, useRef } from 'react';
import { classes } from '@react-jopau/utils';
import { forwardRef } from '@/components/shared';
import { ${pascalName}Props, defaultProps } from './${name}.props';
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
export const ${pascalName} = forwardRef<${pascalName}Props, 'div'>(
  (
    {
      className,
      style,
      children,
      title
    }: ${pascalName}Props,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const elementRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => elementRef.current);

    return (
      <Styled${pascalName}
        ref={elementRef}
        className={classes('${context.name}-wrapper', className)}
        css={{
          ...style
        }}>
        <h2>{title}</h2>
        {children}
      </Styled${pascalName}>
    );
  }
);

${pascalName}.defaultProps = defaultProps;
`;
}}
`;

module.exports = templateObject;
