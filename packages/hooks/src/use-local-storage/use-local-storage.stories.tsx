import { useState } from 'react';
import { Space } from '@react-jopau/components/ui/layout';
import { Button } from '@react-jopau/components/ui/forms';
import { Text } from '@react-jopau/components/ui/typography';
import { TWContainer, TWInput, TWItem } from '@react-jopau/styles/components';
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
  const [value, setValue] = useLocalStorage<string>(key, 'initialValue');
  const [inputValue, setInputValue] = useState<string>(value);

  const handleInputChange = (e: string) => setInputValue(e);

  return (
    <TWContainer>
      <Space direction="column" gap={5}>
        <TWInput label="Value to storage" value={inputValue} onInput={handleInputChange} />
        <Button color="secondary" disabled={!inputValue} onClick={() => setValue(inputValue)}>
          Set value
        </Button>
      </Space>

      <Space direction="column" gap={5}>
        <Text size="lg">LocalStorage</Text>
        <TWItem label={key}>{value}</TWItem>
      </Space>
    </TWContainer>
  );
};
Default.storyName = 'Playground';
Default.parameters = { viewMode: 'story' };
