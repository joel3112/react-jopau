import { FormEvent } from 'react';
import { SBCode } from '@react-jopau/styles/components';
import { Container, Space } from '@react-jopau/components/ui/layout';
import { Button, Input } from '@react-jopau/components/ui/forms';
import { Heading, Text } from '@react-jopau/components/ui/typography';
import { prepareParameters } from '../story-helpers';
import { useLocalStorage } from './use-local-storage';
import docs from './readme.mdx';

export default {
  title: 'useLocalStorage',
  parameters: prepareParameters(docs)
};

export const Docs = () => {};

export const Default = () => {
  const key = 'useLocalStorage-test-key';
  const [value, setValue] = useLocalStorage<string>(key, '');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const form = new FormData(event.target as HTMLFormElement);
    setValue(`${form.get('value')}`);
  };

  return (
    <Container maxWidth={450}>
      <form onSubmit={handleSubmit}>
        <Input name="value" autoWidth label="Value to storage" value={value} />
        <Button className="mt-4" color="secondary" type="submit">
          Set value
        </Button>
      </form>

      <Space className="mt-10" direction="column" gap={10}>
        <Heading variant="h6">LocalStorage:</Heading>
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
