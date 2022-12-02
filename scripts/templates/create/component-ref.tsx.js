const { template } = require('react-docgen-renderer-template');
const templateCreator = template({});

const templateObject = templateCreator`${({ context }) => `
import { ReactNode, Ref, useImperativeHandle, useRef } from 'react';
import classes from 'classnames';
import { forwardRef } from '../../../utils/system';
import type { ElementHTML } from '../../../../types';
import { ${context.pascalName}Wrapper } from './${context.name}.styled';

type ${context.pascalName}Props = ElementHTML & {
  /**
  * Defines the children of the component.
  */
  children?: ReactNode;
  /**
  * Title of the component.
  */
  title?: string;
} & Partial<typeof defaultProps>;

const defaultProps = {};

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
export const ${context.pascalName} = forwardRef<${context.pascalName}Props, 'div'>(
  (
    {
      className,
      style,
      children,
      title
    }: ${context.pascalName}Props,
    ref: Ref<Partial<HTMLDivElement>>
  ) => {
    const elementRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => ({
      click: () => {
        elementRef && elementRef.current?.click();
      }
    }));
    
    return (
      <${context.pascalName}Wrapper
        ref={elementRef}
        className={classes('${context.name}-wrapper', className)}
        css={{
          ...style
        }}>
        <h2>{title}</h2>
        {children}
      </${context.pascalName}Wrapper>
    );
  }
);

${context.pascalName}.defaultProps = defaultProps;
`}
`;

module.exports = templateObject;
