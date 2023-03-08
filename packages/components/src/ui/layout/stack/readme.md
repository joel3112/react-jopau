### Stack

Stack is a layout component used to group elements together and apply a space between them.

#### Import

```jsx
import { Stack } from '@react-jopau/components';
```

#### Examples

```jsx
<Stack direction="column" gap={2}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Stack>
```

#### Props

| Name      | Type                                                                                                                                                                                                                                                              | Default value | Description                                  |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | -------------------------------------------- |
| align     | `"start"` \| `"center"` \| `"end"` \| `"baseline"` \| `"stretch"`                                                                                                                                                                                                 |               | Defines the align-items style property.      |
| as        | `"object"` \| `"div"` \| `"a"` \| `"abbr"` \| `"address"` \| `"area"` \| `"article"` \| `"aside"` \| `"audio"` \| `"b"` \| `"base"` \| `"bdi"` \| `"bdo"` \| `"blockquote"` \| `"body"` \| `"br"` \| `"button"` \| `"canvas"` \| `"caption"` \| `... 92 more ...` |               | Changes which tag component outputs          |
| children  | `ReactNode`                                                                                                                                                                                                                                                       |               | Defines the children of the component.       |
| className | `string`                                                                                                                                                                                                                                                          |               | Classnames applied to root element           |
| direction | `"row"` \| `"column"`                                                                                                                                                                                                                                             |               | Defines the direction of the flex container. |
| gap       | `number` \| `Partial<{ xs: number; sm: number; md: number; lg: number; xl: number; }>`                                                                                                                                                                            |               | Defines the spacing between the items.       |
| justify   | `"start"` \| `"center"` \| `"end"` \| `"between"` \| `"around"` \| `"evenly"`                                                                                                                                                                                     |               | Defines the justify-content style property.  |
| style     | `CSSProperties`                                                                                                                                                                                                                                                   |               | Styles applied to root element               |
