### Badge

Badges are used as a small numerical value or status descriptor for UI elements.

#### Import

```jsx
import { Badge } from '@react-jopau/components';
```

#### Examples

```jsx
<Badge color="primary" size="md">
  new
</Badge>
```

#### Props

| Name             | Type                                                                                                               | Default value | Description                                                                    |
| ---------------- | ------------------------------------------------------------------------------------------------------------------ | ------------- | ------------------------------------------------------------------------------ |
| children         | `ReactNode`                                                                                                        |               | Defines the children of the component.                                         |
| className        | `string`                                                                                                           |               | Classnames applied to root element                                             |
| color            | `"default"` \| `"primary"` \| `"secondary"` \| `"tertiary"` \| `"info"` \| `"error"` \| `"success"` \| `"warning"` |               | Defines the color of the component.                                            |
| content          | `ReactNode`                                                                                                        |               | The content of the badge. The badge will be rendered relative to its children. |
| horizontalOffset | `string` \| `number`                                                                                               |               | Defines the horizontal offset of the badge content.                            |
| placement        | `"top-right"` \| `"top-left"` \| `"bottom-left"` \| `"bottom-right"`                                               |               | Defines the position of the badge content.                                     |
| shape            | `"rectangle"` \| `"circle"`                                                                                        |               | Defines the wrapped shape the badge should overlap.                            |
| size             | `"md"` \| `"xs"` \| `"sm"` \| `"lg"` \| `"xl"`                                                                     |               | Defines the size of the component.                                             |
| squared          | `boolean`                                                                                                          |               | Defines if the badge should be squared.                                        |
| style            | `CSSProperties`                                                                                                    |               | Styles applied to root element                                                 |
| variant          | `"solid"` \| `"flat"` \| `"dot"` \| `"points"` \| `"bordered"`                                                     |               | Defines the variant of the component.                                          |
| verticalOffset   | `string` \| `number`                                                                                               |               | Defines the vertical offset of the badge content.                              |
