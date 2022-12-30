import { useHotkeys } from 'react-hotkeys-hook';
import { toCapitalize } from '@react-jopau/utils';
import { isMacLike } from '../utils/system';

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

export const computeHotKeyShort = (hotKey: string): string => {
  const keys: string[] = hotKey.toUpperCase().split('+');
  const MapKeys: Record<string, string> = isMacLike ? MacModifierKey : WindowsModifierKey;

  return keys.reduce((acc, key) => {
    if (MapKeys[key]) {
      return `${acc}${MapKeys[key]}`;
    }

    return `${acc}${toCapitalize(key)}`;
  }, '');
};

export const useHotKey = (
  hotKey: string,
  handler: () => void
): {
  shortHotKey: string;
} => {
  useHotkeys(hotKey, handler);

  return { shortHotKey: computeHotKeyShort(hotKey) };
};
