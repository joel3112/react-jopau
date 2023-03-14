const { template } = require('react-docgen-renderer-template');
const templateCreator = template({});

const templateObject = templateCreator`${({ context }) => `
import { ForwardRefExoticComponent, Ref, useImperativeHandle, useRef } from 'react';
import { classes } from '@react-jopau/utils';
import { forwardRef } from '@/components/shared';
import { ${context.pascalName}Props, defaultProps } from './${context.name}-props';
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
export const ${context.pascalName} = forwardRef<${context.pascalName}Props, 'div'>(
  (
    {
      className,
      style,
      children,
      title
    }: ${context.pascalName}Props,
    ref: Ref<HTMLDivElement | null>
  ) => {
    const elementRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => elementRef.current);
    
    return (
      <Styled${context.pascalName}
        ref={elementRef}
        className={classes('${context.name}-wrapper', className)}
        css={{
          ...style
        }}>
        <h2>{title}</h2>
        {children}
      </Styled${context.pascalName}>
    );
  }
) as ForwardRefExoticComponent<
  ${context.pascalName}Props & Partial<typeof defaultProps> & RefAttributes<HTMLDivElement>
> & {};

${context.pascalName}.defaultProps = defaultProps;
`}
`;

module.exports = templateObject;
