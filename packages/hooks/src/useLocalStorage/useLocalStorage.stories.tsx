import { useState } from 'react';
import { Space } from '@react-jopau/components/space';
import { TWButton, TWContainer, TWInput, TWItem, TWText } from '@react-jopau/styles/components';
import { useLocalStorage } from './useLocalStorage';
import docs from './readme.mdx';

export default {
  title: 'useLocalStorage',
  parameters: {
    docs: {
      page: docs
    }
  }
};

export const Default = () => {
  const key = 'useLocalStorage-test-key';
  const [value, setValue] = useLocalStorage<string>(key, 'initialValue');
  const [inputValue, setInputValue] = useState<string>(value);

  const handleInputChange = (e: string) => setInputValue(e);

  return (
    <TWContainer>
      <Space direction="column" gap={5}>
        <TWInput label="Value to storage" value={inputValue} onInput={handleInputChange} />
        <TWButton disabled={!inputValue} onClick={() => setValue(inputValue)}>
          Set value
        </TWButton>
      </Space>

      <Space direction="column" gap={5}>
        <TWText>LocalStorage</TWText>
        <TWItem label={key}>{value}</TWItem>
      </Space>
    </TWContainer>
  );
};
