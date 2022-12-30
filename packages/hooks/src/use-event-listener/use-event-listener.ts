import { RefObject, useEffect, useRef } from 'react';
import { isClient, useIsomorphicLayoutEffect } from '../index';

/**
 * @callback HandlerCallback
 * @param   {Event} event
 * @returns {void}
 */
/**
 * Listen to a window event on a specific element and execute a callback.
 *
 * @param   {string} eventName - Event name to listen to
 * @param   {HandlerCallback} handler - Handler to call when the event is triggered
 * @param   {React.RefObject} [element=window] - Element to listen to
 *
 * @imports import { useEventListener } from '@react-jopau/hooks';
 * @example
 * const onScroll = event => console.log('scroll', event);
 *
 * useEventListener('scroll', onScroll);
 * @example
 * // With ref element to listen to
 * const buttonRef = useRef<HTMLButtonElement>(null);
 * const onClick = event => console.log('click', event);
 *
 * useEventListener('click', onClick, buttonRef);
 *
 * return <button ref={buttonRef}>Click me</button>;
 */
export const useEventListener = <
  KW extends keyof WindowEventMap,
  KD extends keyof DocumentEventMap,
  KH extends keyof HTMLElementEventMap,
  KM extends keyof MediaQueryListEventMap,
  T extends Document | HTMLElement | MediaQueryList | void = void
>(
  eventName: KW | KD | KH | KM,
  handler: (
    event:
      | WindowEventMap[KW]
      | DocumentEventMap[KD]
      | HTMLElementEventMap[KH]
      | MediaQueryListEventMap[KM]
      | Event
  ) => void,
  element?: RefObject<T>
): void => {
  const savedHandler = useRef(handler);

  useIsomorphicLayoutEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    // Define the listening target
    const targetElement: T | Window = element?.current ?? window;

    if (!(targetElement && targetElement.addEventListener)) return;
    if (!isClient) return;

    // Create event listener that calls handler function stored in ref
    const eventListener: typeof handler = (event) => savedHandler.current(event);
    targetElement.addEventListener(eventName, eventListener);

    return () => {
      targetElement.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
};
