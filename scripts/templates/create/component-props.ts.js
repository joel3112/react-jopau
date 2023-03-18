const { template } = require('react-docgen-renderer-template');
const templateCreator = template({});

const templateObject = templateCreator`${({ context }) => `
import { ReactNode } from 'react';
import type { ElementHTML } from '@/components/shared';

export type ${context.pascalName}Props = ElementHTML & {
  /**
  * Defines the children of the component.
  */
  children?: ReactNode;
  /**
  * Title of the component.
  */
  title?: string;
};

export const defaultProps = {};
`}
`;

module.exports = templateObject;
