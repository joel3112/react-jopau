const { template } = require('react-docgen-renderer-template');
const templateCreator = template({});

const templateObject = templateCreator`${({ context }) => `
import { Space } from '@react-jopau/components/ui/layout';
import { TWButton, TWContainer } from '@react-jopau/styles/components';
import { use${context.pascalName} } from './use-${context.name}';
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
  const { value, setValue } = use${context.pascalName}(0);

  return (
    <TWContainer>
      Current value: {value}

      <Space gap={5}>
        <TWButton onClick={() => setValue(value - 1)}>Decrement</TWButton>
        <TWButton onClick={() => setValue(value + 1)}>Increment</TWButton>
      </Space>
    </TWContainer>
  );
};

export const Default = Template.bind({});
`}
`;

module.exports = templateObject;
