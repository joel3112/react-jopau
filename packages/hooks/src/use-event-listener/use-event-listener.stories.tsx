import { UIEvent, useRef, useState } from 'react';
import { Container, Heading, Stack, Text } from '@react-jopau/components';
import { prepareParameters, SBCard } from '@react-jopau/shared/stories';
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
      <Stack direction="column" gap={1} className="fixed top-12 left-12 w-[400px] max-w-[80%]">
        <SBCard title={<Text as="code">[target: Window, event: 'scroll']</Text>}>
          <Text size="sm" className="mb-5">
            ■ Scroll the page to see the scroll position change
          </Text>
          Current scroll position:
          <Heading as="h3">{scrollPosition.toString()}</Heading>
        </SBCard>
        <SBCard title={<Text as="code">[target: Document, event: 'mousemove']</Text>}>
          <Text size="sm" className="mb-5">
            ■ Move the mouse to see the cursor position change
          </Text>
          Current cursor position:
          <Heading as="h3">{`[x=${cursorPosition[0]}, y=${cursorPosition[1]}]`}</Heading>
        </SBCard>
      </Stack>
    </Container>
  );
};
Default.storyName = 'Playground';
Default.parameters = { viewMode: 'story' };
