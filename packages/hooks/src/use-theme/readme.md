### useTheme

Get the current theme config and dark mode.
For correct functionality, it must be used inside a ThemeProvider.

#### Import

```tsx
import { useTheme } from '@react-jopau/hooks';
```

#### Examples

```tsx
const { darkMode, onToggle } = useTheme();

console.log(darkMode); // true | false

return <button onClick={onToggle}>Toggle theme</button>;
```

#### Returns

| Name            | Type         | Description              |
| --------------- | ------------ | ------------------------ |
| result.config   | `Object`     | The current theme config |
| result.darkMode | `boolean`    | If dark mode is enabled  |
| result.onToggle | `() => void` | Toggle dark mode         |
