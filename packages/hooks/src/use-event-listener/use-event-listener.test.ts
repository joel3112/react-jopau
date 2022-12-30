import { renderHook, waitFor } from '@testing-library/react';
import { useEventListener } from './use-event-listener';

describe('Tests useEventListener hook', () => {
  test('calls handler when event is triggered', async () => {
    const onScroll = jest.fn();
    renderHook(() => useEventListener('scroll', onScroll));

    await waitFor(() => {
      window.dispatchEvent(new Event('scroll'));
    });

    expect(onScroll).toHaveBeenCalledTimes(1);
  });

  test('calls handler when event is triggered in custom element', async () => {
    const onMouseMove = jest.fn();
    renderHook(() => useEventListener('mousemove', onMouseMove, { current: document }));

    await waitFor(() => {
      document.dispatchEvent(new Event('mousemove'));
    });

    expect(onMouseMove).toHaveBeenCalledTimes(1);
  });
});
