const { template } = require('react-docgen-renderer-template');
const templateCreator = template({});

const templateObject = templateCreator`${({ context }) => `
import { createContext, useState } from 'react';
import { withDefaults } from '@/components/shared';
import { ${context.pascalName}ProviderProps, defaultProps } from './${context.name}-context-props';

/* ==== context ================================================================ */

/**
 * ${context.pascalName} context.
 */
export const ${context.pascalName}Context = createContext<{
  value: number;
  onChange?: () => void;
}>({} as { value: number });

/* ==== provider =============================================================== */

/**
 * ${context.pascalName} provider component.
 *
 * @param   {${context.pascalName}ProviderProps} props - Props injected to the provider.
 * @returns {JSX.Element} Rendered provider.
 *
 * @imports import { ${context.pascalName}Provider } from '@react-jopau/components';
 * @example
 * <${context.pascalName}Provider initialValue={1}>
 *    <div>Content</div>
 * </${context.pascalName}Provider>
 */
export const ${context.pascalName}Provider = withDefaults<${context.pascalName}Props>((props: ${context.pascalName}ProviderProps) => {
  const { children, initialValue } = props;

  const [value, setValue] = useState<number>(initialValue);

  return (
    <${context.pascalName}Context.Provider
      value={{
        value,
        onChange: () => setValue((prev) => prev + 1)
      }}>
      {children}
    </${context.pascalName}Context.Provider>
  );
}, defaultProps);
`}
`;

module.exports = templateObject;
