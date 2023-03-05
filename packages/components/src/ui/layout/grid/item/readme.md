### Grid.Item

The layout Grid item adapts to screen size and orientation, ensuring consistency across layouts.

#### Import

```jsx
import { Grid } from '@react-jopau/components';
```

#### Examples

```jsx
<Grid.Item>1 of 2</Grid.Item>
```

#### Props

| Name      | Type                                                                                                                                                                                                                                                              | Default value | Description                                                                         |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ----------------------------------------------------------------------------------- |
| as        | `"object"` \| `"div"` \| `"a"` \| `"abbr"` \| `"address"` \| `"area"` \| `"article"` \| `"aside"` \| `"audio"` \| `"b"` \| `"base"` \| `"bdi"` \| `"bdo"` \| `"blockquote"` \| `"body"` \| `"br"` \| `"button"` \| `"canvas"` \| `"caption"` \| `... 92 more ...` |               | Changes which tag component outputs                                                 |
| children  | `ReactNode`                                                                                                                                                                                                                                                       |               | Defines the children of the component.                                              |
| className | `string`                                                                                                                                                                                                                                                          |               | Classnames applied to root element                                                  |
| direction | `string`                                                                                                                                                                                                                                                          |               |                                                                                     |
| lg        | `number` \| `boolean`                                                                                                                                                                                                                                             |               | Defines the number of columns the component is going to use in large devices.       |
| md        | `number` \| `boolean`                                                                                                                                                                                                                                             |               | Defines the number of columns the component is going to use in medium devices.      |
| sm        | `number` \| `boolean`                                                                                                                                                                                                                                             |               | Defines the number of columns the component is going to use in small devices.       |
| style     | `CSSProperties`                                                                                                                                                                                                                                                   |               | Styles applied to root element                                                      |
| xl        | `number` \| `boolean`                                                                                                                                                                                                                                             |               | Defines the number of columns the component is going to use in extra large devices. |
| xs        | `number` \| `boolean`                                                                                                                                                                                                                                             |               | Defines the number of columns the component is going to use in extra small devices. |
