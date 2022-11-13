const { template } = require('react-docgen-renderer-template');
const templateCreator = template({});

const templateObject = templateCreator`${({ context }) => `
import { styledTheme } from '../../../index';

export const ${context.pascalName}Wrapper = styledTheme('div', {
  boxSizing: 'border-box',
  display: 'block'
});
`}
`;

module.exports = templateObject;
