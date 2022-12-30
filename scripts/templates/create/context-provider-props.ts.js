const { template } = require('react-docgen-renderer-template');
const templateCreator = template({});

const templateObject = templateCreator`${({ context }) => `
import { ReactNode } from 'react';

export type ${context.pascalName}ProviderProps = {
  /**
   * Defines the children of the component.
   */
  children: ReactNode;
  /**
   * Defines the initial value.
   */
  initialValue: number;
} & Partial<typeof defaultProps>;

export const defaultProps = {};
`}
`;

module.exports = templateObject;
