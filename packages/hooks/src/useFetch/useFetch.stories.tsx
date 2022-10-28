import { useFetch, UseFetchOptions } from './useFetch';
import ReactJson from 'react-json-view';

export default {
  title: 'useFetch',
  args: {
    path: 'https://jsonplaceholder.typicode.com/todos/1',
    options: {
      method: 'GET',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onSuccess: async (res: any) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return res.data;
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onError: (error: any) => {
        throw {
          message: error.message,
          status: error.response.status,
          code: error.code
        };
      }
    }
  },
  argTypes: {
    path: {
      description: 'The path to fetch',
      type: { name: 'string', required: true },
      table: {
        type: { summary: 'string' }
      }
    },
    options: {
      description: 'The options to use for the fetch',
      table: {
        type: { summary: 'UseFetchOptions' }
      }
    }
  },
  parameters: {
    previewTabs: {
      'storybook/docs/panel': {
        hidden: true
      }
    }
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CodePreview = ({ code }: { code: any }) => {
  if (!code) return <span className="ml-2 font-code">null</span>;

  return (
    <div className="bg-[#272822] font-code p-5 mt-2">
      <ReactJson
        style={{ backgroundColor: 'transparent', fontSize: '0.8rem' }}
        name={false}
        displayObjectSize={false}
        displayDataTypes={false}
        enableClipboard={false}
        src={code}
        theme="monokai"
        iconStyle="square"
      />
    </div>
  );
};

const Highlight = ({ children }: { children: string }) => {
  return (
    <span className="font-code text-black text-sm p-1 rounded-md bg-[#ccc] w-fit">{children}</span>
  );
};

const Template = (args: { path: string; options: UseFetchOptions }) => {
  const { data, loading, error } = useFetch(args.path, args.options);

  return (
    <div className="font-code text-text p-5 flex flex-col gap-1 w-3/5">
      <>
        <div>
          <Highlight>loading:</Highlight>
          <span className="ml-2 font-code">{loading ? 'true' : 'false'}</span>
        </div>
        <div>
          <Highlight>data:</Highlight> <CodePreview code={data} />
        </div>
        <div>
          <Highlight>error:</Highlight> <CodePreview code={error} />
        </div>
      </>
    </div>
  );
};

export const Default = Template.bind({});
