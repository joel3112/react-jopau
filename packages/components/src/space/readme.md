### Space

Component flexbox-based spacing.

#### Import

```jsx
import { Space } from '@react-jopau/components/space';
```

#### Examples

```jsx
<Space direction="row" align="center" justify="center" gap={10}>
  <div>Item 1</div>
  <div>Item 2</div>
</Space>
```

#### Props

| Name                  | Type                                                           | Default value | Description                                               |
| --------------------- | -------------------------------------------------------------- | ------------- | --------------------------------------------------------- |
| align                 | `AlignSpace`                                                   |               | Defines the align-items style property.                   |
| children _(required)_ | `ReactNode`                                                    |               | Defines the children of the component.                    |
| className             | `string`                                                       |               | Classnames applied to root element                        |
| direction             | `"row"` \| `"column"` \| `"row-reverse"` \| `"column-reverse"` | `row`         | Defines the direction of the flex container.              |
| gap                   | `number` \| `number[]`                                         |               | Defines the gap between the flex container\x27s children. |
| justify               | `JustifySpace`                                                 |               | Defines the justify-content style property.               |
| style                 | `CSSProperties`                                                |               | Styles applied to root element                            |
| wrap                  | `boolean`                                                      |               | Defines if the flex container is wrapped or not.          |
