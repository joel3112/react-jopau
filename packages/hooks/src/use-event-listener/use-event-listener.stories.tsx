import { UIEvent, useRef, useState } from 'react';
import { Container, Heading, Space, Text } from '@react-jopau/components/ui';
import { prepareParameters, SBCard, SBCode } from '@react-jopau/shared/stories';
import { useEventListener } from './use-event-listener';
import docs from './readme.mdx';

export default {
  title: 'useEventListener',
  parameters: prepareParameters(docs, true)
};

export const Docs = () => {};

export const Default = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [cursorPosition, setCursorPosition] = useState<[number, number]>([0, 0]);
  const documentRef = useRef<Document>(document);

  const onScroll = (event: Event) => {
    setScrollPosition((event as unknown as UIEvent<Window>).currentTarget.scrollY);
  };

  const onMouseMove = (event: Event) => {
    const { pageX, pageY } = event as unknown as MouseEvent;
    setCursorPosition([pageX, pageY]);
  };

  // example with window based event
  useEventListener('scroll', onScroll);
  // example with document based event
  useEventListener('mousemove', onMouseMove, documentRef);

  return (
    <Container className="h-[3000px]">
      <Space direction="column" gap={10} className="fixed top-12 left-12 w-[460px]">
        <SBCard title={<SBCode>[target: Window, event: 'scroll']</SBCode>}>
          <Text size="sm" className="mb-5">
            ■ Scroll the page to see the scroll position change
          </Text>
          Current scroll position:
          <Heading as="h3">{scrollPosition.toString()}</Heading>
        </SBCard>
        <SBCard title={<SBCode>[target: Document, event: 'mousemove']</SBCode>}>
          <Text size="sm" className="mb-5">
            ■ Move the mouse to see the cursor position change
          </Text>
          Current cursor position:
          <Heading as="h3">{`[x=${cursorPosition[0]}, y=${cursorPosition[1]}]`}</Heading>
        </SBCard>
      </Space>
    </Container>
  );
};
Default.storyName = 'Playground';
Default.parameters = { viewMode: 'story' };
