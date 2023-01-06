const { template } = require('react-docgen-renderer-template');
const templateCreator = template({});

const templateObject = templateCreator`${({ context }) => `
import { styledTheme } from '@/components/shared';

export const Styled${context.pascalName} = styledTheme('div', {
  boxSizing: 'border-box',
  display: 'block'
});
`}
`;

module.exports = templateObject;
