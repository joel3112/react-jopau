### useMediaQuery

Reactive media query hook that returns the truthy value of the media query.

#### Import

```tsx
import { useMediaQuery } from '@react-jopau/hooks';
```

#### Examples

```tsx
const isLargeScreen = useMediaQuery('(min-width: 600px)');

console.log(isLargeScreen); // true or false
```

#### Params

| Name               | Type     | Default value | Description        |
| ------------------ | -------- | ------------- | ------------------ |
| query _(required)_ | `string` |               | Media query string |

#### Returns

| Name   | Type      | Description                     |
| ------ | --------- | ------------------------------- |
| result | `boolean` | Truthy value of the media query |
