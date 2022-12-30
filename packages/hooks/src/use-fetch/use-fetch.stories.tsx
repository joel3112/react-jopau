import { FormEvent, useState } from 'react';
import { Button, Container, Input, Space, Text } from '@react-jopau/components/ui';
import { prepareParameters, SBCode, SBJSONPreview } from '@react-jopau/shared/stories';
import { useFetch } from './use-fetch';
import docs from './readme.mdx';

export default {
  title: 'useFetch',
  parameters: prepareParameters(docs, true)
};

export const Docs = () => {};

export const Default = () => {
  type Data = { userId: number; id: number; title: string; body: string };
  type Error = { message: string; code: number };

  const defaultPath = 'https://jsonplaceholder.typicode.com/posts/1';
  const [path, setPath] = useState<string>(defaultPath);

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
    setPath((event.target as HTMLFormElement).path.value);
  };

  return (
    <Container maxWidth={450}>
      <form onSubmit={handleSubmit}>
        <Input name="path" label="Path" fullWidth variant="bordered" defaultValue={defaultPath} />
        <Button className="mt-4" auto color="secondary" type="submit">
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
