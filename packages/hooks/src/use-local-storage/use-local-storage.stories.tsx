import { FormEvent } from 'react';
import { Button, Container, Heading, Input, Stack, Text } from '@react-jopau/components';
import { prepareParameters } from '@react-jopau/shared/stories';
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
    <Container className="py-10" maxWidth={450}>
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

      <Stack className="mt-10" direction="column" gap={1}>
        <Heading as="h6">LocalStorage:</Heading>
        <Stack align="center" gap={1} className="flex-wrap">
          <Text as="code">{key}:</Text>
          <code>
            <Text>{value}</Text>
          </code>
        </Stack>
      </Stack>
    </Container>
  );
};
Default.storyName = 'Playground';
Default.parameters = { viewMode: 'story' };
