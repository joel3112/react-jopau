import { UIEvent, useRef, useState } from 'react';
import { Space } from '@react-jopau/components/ui/layout';
import { Heading, Text } from '@react-jopau/components/ui/typography';
import { TWCard, TWContainer, TWHighlight } from '@react-jopau/styles/components';
import { prepareParameters } from '../story-helpers';
import { useEventListener } from './use-event-listener';
import docs from './readme.mdx';

export default {
  title: 'useEventListener',
  parameters: prepareParameters(docs)
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
    <TWContainer className="h-[3000px]">
      <Space direction="column" gap={10} className="text-text fixed top-12 left-12 w-[460px]">
        <TWCard title={<TWHighlight>[target: Window, event: 'scroll']</TWHighlight>} secondary>
          <Text size="sm">■ Scroll the page to see the scroll position change</Text>
          Current scroll position:
          <Heading variant="h3">{scrollPosition.toString()}</Heading>
        </TWCard>
        <TWCard title={<TWHighlight>[target: Document, event: 'mousemove']</TWHighlight>} secondary>
          <Text size="sm">■ Move the mouse to see the cursor position change</Text>
          Current cursor position:
          <Heading variant="h3">{`[x=${cursorPosition[0]}, y=${cursorPosition[1]}]`}</Heading>
        </TWCard>
      </Space>
    </TWContainer>
  );
};
Default.storyName = 'Playground';
Default.parameters = { viewMode: 'story' };
