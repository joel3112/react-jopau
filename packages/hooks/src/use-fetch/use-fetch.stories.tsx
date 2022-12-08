import { FormEvent, useState } from 'react';
import { SBCode, SBJSONPreview } from '@react-jopau/styles/components';
import { Container, Space } from '@react-jopau/components/ui/layout';
import { Button, Input } from '@react-jopau/components/ui/forms';
import { Text } from '@react-jopau/components/ui/typography';
import { prepareParameters } from '../story-helpers';
import { useFetch } from './use-fetch';
import docs from './readme.mdx';

export default {
  title: 'useFetch',
  parameters: prepareParameters(docs)
};

export const Docs = () => {};

export const Default = () => {
  type Data = { userId: number; id: number; title: string; body: string };
  type Error = { message: string; code: number };

  const [path, setPath] = useState<string>('https://jsonplaceholder.typicode.com/todos/1');

  const { data, loading, error } = useFetch<Data, Error>(path, {
    method: 'GET',
    onSuccess: async (res: { data: Data }) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return res.data;
    },
    onError: (err: Error) => {
      throw {
        message: err.message,
        code: err.code
      };
    }
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const form = new FormData(event.target as HTMLFormElement);
    setPath(`${form.get('path')}`);
  };

  return (
    <Container maxWidth={450}>
      <form onSubmit={handleSubmit}>
        <Input
          name="path"
          autoWidth
          label="Path"
          value="https://jsonplaceholder.typicode.com/todos/1"
        />
        <Button className="mt-4" color="secondary" type="submit">
          Load
        </Button>
      </form>

      <Space className="mt-10" direction="column" gap={10}>
        <Space align="start" gap={10}>
          <SBCode>loading:</SBCode>
          <code>
            <Text>{loading ? 'true' : 'false'}</Text>
          </code>
        </Space>
        <Space align="start" gap={10} wrap>
          <SBCode>data:</SBCode>
          <SBJSONPreview code={data} />
        </Space>
        <Space align="start" gap={10} wrap>
          <SBCode>error:</SBCode>
          <SBJSONPreview code={error} />
        </Space>
      </Space>
    </Container>
  );
};
Default.storyName = 'Playground';
Default.parameters = { viewMode: 'story' };
