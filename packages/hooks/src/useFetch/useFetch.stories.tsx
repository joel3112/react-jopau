import { useState } from 'react';
import { Space } from '@react-jopau/components/space';
import { TWContainer, TWInput, TWItem, TWJSONPreview } from '@react-jopau/styles/components';
import { useFetch } from './useFetch';
import docs from './readme.mdx';

export default {
  title: 'useFetch',
  parameters: {
    docs: {
      page: docs
    }
  }
};

const Template = () => {
  const [path, setPath] = useState('https://jsonplaceholder.typicode.com/todos/1');
  const { data, loading, error } = useFetch(path, {
    method: 'GET',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSuccess: async (res: any) => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      return res.data;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (err: any) => {
      throw {
        message: err.message,
        code: err.code
      };
    }
  });

  return (
    <TWContainer>
      <TWInput value={path} label="Path" onChange={setPath} />

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

export const Default = Template.bind({});
