### useLocalStorage

Persist a value in local storage and keep it in sync with the state.

#### Import

```tsx
import { useLocalStorage } from '@react-jopau/hooks';
```

#### Examples

```tsx
const [darkMode, setDarkMode] = useLocalStorage<boolean>('key', true);

const handleClick = () => setDarkMode((prev) => !prev);

return <button onClick={handleClick}>{darkMode ? 'Dark mode' : 'Light mode'}</button>;
```

#### Params

| Name                      | Type     | Default value | Description                                                     |
| ------------------------- | -------- | ------------- | --------------------------------------------------------------- |
| initialValue _(required)_ | `T`      |               | The initial value to use if there is no value in local storage. |
| key _(required)_          | `string` |               | The key to use in local storage.                                |

#### Returns

| Name      | Type                            | Description                     |
| --------- | ------------------------------- | ------------------------------- |
| result[0] | `T`                             | The value of the local storage  |
| result[1] | `Dispatch.<SetStateAction.<T>>` | The setter of the local storage |
