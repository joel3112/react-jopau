import { useState } from 'react';
import { Container, Space } from '@react-jopau/components/ui/layout';
import { SBCard, SBCode } from '@react-jopau/styles/components';
import { prepareParameters } from '@react-jopau/styles/utils';
import { useHotKey } from './use-hot-key';
import docs from './readme.mdx';

export default {
  title: 'useHotKey',
  parameters: prepareParameters(docs, true)
};

export const Docs = () => {};

export const Default = () => {
  const [show, setShow] = useState(true);
  const { shortHotKey: shortHotKeyShow } = useHotKey('meta+K', () => setShow(true));
  const { shortHotKey: shortHotKeyHide } = useHotKey('meta+J', () => setShow(false));

  return (
    <Container maxWidth={450}>
      <Space direction="column" gap={5}>
        <Space align="center" gap={4}>
          ■ Press <SBCode>{shortHotKeyShow}</SBCode> to show card
        </Space>
        <Space align="center" gap={4}>
          ■ Press <SBCode>{shortHotKeyHide}</SBCode> to hide card
        </Space>

        {show && (
          <SBCard className="mt-10 w-[250px]" title="Card shown/hidden">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat libero, similique.
          </SBCard>
        )}
      </Space>
    </Container>
  );
};
Default.storyName = 'Playground';
Default.parameters = { viewMode: 'story' };
