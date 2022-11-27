const { template } = require('react-docgen-renderer-template');
const templateCreator = template({});

const templateObject = templateCreator`${({ context }) => `
import { Space } from '@react-jopau/components/ui/layout';
import { Button } from '@react-jopau/components/ui/forms';
import { TWContainer } from '@react-jopau/styles/components';
import { prepareParameters } from '../story-helpers';
import { use${context.pascalName} } from './use-${context.name}';
import docs from './readme.mdx';

export default {
  title: 'use${context.pascalName}',
  parameters: prepareParameters(docs)
};

export const Docs = () => {};

export const Default = () => {
  const { value, setValue } = use${context.pascalName}(0);

  return (
    <TWContainer>
      Current value: {value}

      <Space gap={5}>
        <Button color="secondary" onClick={() => setValue(value - 1)}>Decrement</Button>
        <Button color="secondary" onClick={() => setValue(value + 1)}>Increment</Button>
      </Space>
    </TWContainer>
  );
};
Default.storyName = 'Playground';
Default.parameters = { viewMode: 'story' };
`}
`;

module.exports = templateObject;
