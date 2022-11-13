const { template } = require('react-docgen-renderer-template');
const templateCreator = template({});

const templateObject = templateCreator`${({ context }) => `
import { useEffect, useState } from 'react';

/**
 * @callback SetValueCallback
 * @param   {number} value
 * @returns {void}
 */
/**
 * @typedef  {Object} Use${context.pascalName}
 * @property {value} number - Current value
 * @property {SetValueCallback} setValue - Set value
 */
/**
 * Get current value.
 *
 * @param   {number} [initialValue] - Initial value
 * @returns {Use${context.pascalName}} Current value
 *
 * @imports import { use${context.pascalName} } from '@react-jopau/hooks';
 * @example
 * const { value, setValue } = use${context.pascalName}(0);
 *
 * console.log(value);
 */
export const use${context.pascalName} = (initialValue: number): {
  value: number;
  setValue: (value: number) => void;
} => {
  const [value, setValue] = useState<number>(0);
  
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return {
    value,
    setValue
  };
};
`}
`;

module.exports = templateObject;
