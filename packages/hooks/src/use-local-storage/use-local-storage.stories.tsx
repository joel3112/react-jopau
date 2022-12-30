import { FormEvent } from 'react';
import { Button, Container, Heading, Input, Space, Text } from '@react-jopau/components/ui';
import { prepareParameters, SBCode } from '@react-jopau/shared/stories';
import { useLocalStorage } from './use-local-storage';
import docs from './readme.mdx';

export default {
  title: 'useLocalStorage',
  parameters: prepareParameters(docs, true)
};

export const Docs = () => {};

export const Default = () => {
  const key = 'useLocalStorage-test-key';
  const [value, setValue] = useLocalStorage<string>(key, '');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setValue((event.target as HTMLFormElement).text.value);
  };

  return (
    <Container maxWidth={450}>
      <form onSubmit={handleSubmit}>
        <Input
          name="text"
          label="Value to storage"
          variant="bordered"
          fullWidth
          defaultValue={value}
        />
        <Button className="mt-4" auto color="secondary" type="submit">
          Set value
        </Button>
      </form>

      <Space className="mt-10" direction="column" gap={10}>
        <Heading as="h6">LocalStorage:</Heading>
        <Space align="center" gap={10} wrap>
          <SBCode>{key}:</SBCode>
          <code>
            <Text>{value}</Text>
          </code>
        </Space>
      </Space>
    </Container>
  );
};
Default.storyName = 'Playground';
Default.parameters = { viewMode: 'story' };
