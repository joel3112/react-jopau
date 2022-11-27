import { useState } from 'react';
import { Space } from '@react-jopau/components/ui/layout';
import { Button } from '@react-jopau/components/ui/forms';
import { TWContainer, TWInput, TWItem, TWJSONPreview } from '@react-jopau/styles/components';
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

  const [inputValue, setInputValue] = useState<string>(
    'https://jsonplaceholder.typicode.com/todos/1'
  );
  const [path, setPath] = useState<string>(inputValue);

  const { data, loading, error } = useFetch<Data, Error>(path, {
    method: 'GET',
    onSuccess: async (res: { data: Data }) => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      return res.data;
    },
    onError: (err: Error) => {
      throw {
        message: err.message,
        code: err.code
      };
    }
  });

  return (
    <TWContainer>
      <Space direction="column" gap={5}>
        <TWInput value={inputValue} label="Path" onInput={setInputValue} />
        <Button color="secondary" disabled={!inputValue} onClick={() => setPath(inputValue)}>
          Load
        </Button>
      </Space>

      <Space direction="column" gap={10}>
        <TWItem label="loading">{loading ? 'true' : 'false'}</TWItem>
        <TWItem label="data" column={!!data}>
          <TWJSONPreview code={data} />
        </TWItem>
        <TWItem label="error" column={!!error}>
          <TWJSONPreview code={error} />
        </TWItem>
      </Space>
    </TWContainer>
  );
};
Default.storyName = 'Playground';
Default.parameters = { viewMode: 'story' };
