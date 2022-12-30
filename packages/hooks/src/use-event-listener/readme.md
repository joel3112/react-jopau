### useEventListener

Listen to a window event on a specific element and execute a callback.

#### Import

```tsx
import { useEventListener } from '@react-jopau/hooks';
```

#### Examples

```tsx
const onScroll = (event) => console.log('scroll', event);

useEventListener('scroll', onScroll);
```

```tsx
// With ref element to listen to
const buttonRef = useRef<HTMLButtonElement>(null);
const onClick = (event) => console.log('click', event);

useEventListener('click', onClick, buttonRef);

return <button ref={buttonRef}>Click me</button>;
```

#### Params

| Name                   | Type                     | Default value | Description                                 |
| ---------------------- | ------------------------ | ------------- | ------------------------------------------- |
| eventName _(required)_ | `string`                 |               | Event name to listen to                     |
| handler _(required)_   | `(event: Event) => void` |               | Handler to call when the event is triggered |
| element                | `React.RefObject`        | `window`      | Element to listen to                        |
