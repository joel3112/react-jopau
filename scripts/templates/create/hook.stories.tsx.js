const { template } = require('react-docgen-renderer-template');
const templateCreator = template({});

const templateObject = templateCreator`${({ context }) => `
import { Button, Container, Space } from '@react-jopau/components';
import { prepareParameters, SBCode } from '@react-jopau/shared/stories';
import { use${context.pascalName} } from './use-${context.name}';
import docs from './readme.mdx';

export default {
  title: 'use${context.pascalName}',
  parameters: prepareParameters(docs, true)
};

export const Docs = () => {};

export const Default = () => {
  const { value, setValue } = use${context.pascalName}(0);

  return (
    <Container maxWidth={450}>
      Current value: <SBCode>{value}</SBCode>

      <Space gap={5}>
        <Button color="secondary" onClick={() => setValue(value - 1)}>Decrement</Button>
        <Button color="secondary" onClick={() => setValue(value + 1)}>Increment</Button>
      </Space>
    </Container>
  );
};
Default.storyName = 'Playground';
Default.parameters = { viewMode: 'story' };
`}
`;

module.exports = templateObject;
