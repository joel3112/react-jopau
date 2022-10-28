import { BreakpointsRules, DEFAULT_CONFIG as breakpoints } from '@react-jopau/styles/breakpoint';
import { useBreakpoint } from './useBreakpoint';

export default {
  title: 'useBreakpoint',
  args: {
    rules: breakpoints
  },
  argTypes: {
    rules: {
      description: 'The size rules to use for the breakpoint',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: JSON.stringify(breakpoints) }
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

const Template = (args: { rules: BreakpointsRules }) => {
  const { key, isMobile, isTablet, isDesktop, isSmallDesktop, isLargeDesktop } = useBreakpoint(
    args.rules
  );

  const Highlight = ({ children }: { children: string }) => {
    return (
      <span className="font-code text-black text-sm p-1 rounded-md bg-[#ccc]">{children}</span>
    );
  };

  return (
    <div className="text-text p-5">
      <div className="w-fit text-lg flex gap-2">Target width: {window.innerWidth}px</div>

      <div className="my-5 text-base flex flex-col gap-3">
        <p>
          <Highlight>key</Highlight>: <span className="ml-2 font-code">{key}</span>
        </p>
        <p>
          <Highlight>isMobile</Highlight>: {isMobile ? '✅' : '❌'}
        </p>
        <p>
          <Highlight>isTablet</Highlight>: {isTablet ? '✅' : '❌'}
        </p>
        <p>
          <Highlight>isSmallDesktop</Highlight>: {isSmallDesktop ? '✅' : '❌'}
        </p>
        <p>
          <Highlight>isDesktop</Highlight>: {isDesktop ? '✅' : '❌'}
        </p>
        <p>
          <Highlight>isLargeDesktop</Highlight>: {isLargeDesktop ? '✅' : '❌'}
        </p>
      </div>
    </div>
  );
};

export const Default = Template.bind({});
