import { useHotkeys } from 'react-hotkeys-hook';
import { toCapitalize } from '@react-jopau/utils';
import { isMacLike } from '../index';

const MacModifierKey = {
  CONTROL: '^',
  CTRL: '^',
  OPTION: '⌥',
  ALT: '⌥',
  META: '⌘',
  SHIFT: '⇧'
};

const WindowsModifierKey = {
  CONTROL: 'Ctrl',
  CTRL: 'Ctrl',
  OPTION: 'Alt',
  ALT: 'Alt',
  META: 'Win',
  SHIFT: 'Shift'
};

const computeHotKeyShort = (hotKey: string): string => {
  const keys: string[] = hotKey.toUpperCase().split('+');
  const MapKeys: Record<string, string> = isMacLike ? MacModifierKey : WindowsModifierKey;

  return keys.reduce((acc, key) => {
    if (MapKeys[key]) {
      return `${acc}${MapKeys[key]}`;
    }

    return `${acc}${toCapitalize(key)}`;
  }, '');
};

/**
 * @callback HandlerCallback
 * @returns {void}
 */
/**
 * @typedef  {Object} UseHotKey
 * @property {string} shortHotKey - Short hotkey version. Example: ⌘K (Mac) or WinK (Windows)
 */
/**
 * Listen to a hotkey and execute a callback.
 *
 * @param   {string} hotKey - Hot key to listen
 * @param   {HandlerCallback} handler - Callback to call when the hot key is triggered
 * @returns {UseHotKey} Hot key short version
 *
 * @imports import { useHotKey } from '@react-jopau/hooks';
 * @example
 * const hotKeyShort = useHotKey('ctrl+shift+e', () => console.log('ctrl+shift+e'));
 * const hotKeyShort2 = useHotKey('meta+k', () => console.log('meta+k'));
 *
 * console.log(hotKeyShort); // Mac: ^⇧E | Windows: CtrlShiftE
 * console.log(hotKeyShort2); // Mac: ⌘K | Windows: WinK
 */
export const useHotKey = (
  hotKey: string,
  handler: () => void
): {
  shortHotKey: string;
} => {
  useHotkeys(hotKey, handler);

  useHotkeys('meta+shift+k', () => {
    console.log('meta+shift+a+c');
  });

  return { shortHotKey: computeHotKeyShort(hotKey) };
};
