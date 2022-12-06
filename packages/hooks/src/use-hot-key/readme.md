### useHotKey

Listen to a hotkey and execute a callback.

#### Import

```tsx
import { useHotKey } from '@react-jopau/hooks';
```

#### Examples

```tsx
const hotKeyShort = useHotKey('ctrl+shift+e', () => console.log('ctrl+shift+e'));
const hotKeyShort2 = useHotKey('meta+k', () => console.log('meta+k'));

console.log(hotKeyShort); // Mac: ^⇧E | Windows: CtrlShiftE
console.log(hotKeyShort2); // Mac: ⌘K | Windows: WinK
```

#### Params

| Name                 | Type         | Default value | Description                                    |
| -------------------- | ------------ | ------------- | ---------------------------------------------- |
| handler _(required)_ | `() => void` |               | Callback to call when the hot key is triggered |
| hotKey _(required)_  | `string`     |               | Hot key to listen                              |

#### Returns

| Name               | Type     | Description                                               |
| ------------------ | -------- | --------------------------------------------------------- |
| result.shortHotKey | `string` | Short hotkey version. Example: ⌘K (Mac) or WinK (Windows) |
