const { template } = require('react-docgen-renderer-template');
const templateCreator = template({});

const templateObject = templateCreator`${({ context }) => `
import { TWButton, TWContainer } from '@react-jopau/styles/components';
import { ${context.pascalName}Provider } from './use${context.pascalName}';
import docs from './readme.mdx';

export default {
  title: 'use${context.pascalName}',
  parameters: {
    docs: {
      page: docs
    }
  }
};

const Template = () => {
  const { value, setValue } = use${context.pascalName}();

  return (
    <TWContainer>
      Demo {value}
      <TWButton onClick={() => setValue(value + 1)}>Increment</TWButton>
    </TWContainer>
  );
};

export const Default = Template.bind({});
`}
`;

module.exports = templateObject;
