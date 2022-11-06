### Container

Containers are used to constrain a content\x27s width to the current breakpoint.

#### Import

```jsx
import { Container } from '@react-jopau/components/container';
```

#### Examples

```jsx
<Container gap={10} maxWidth={1000} centered>
  <p>lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</Container>
```

#### Props

| Name                  | Type                                                       | Default value | Description                                                   |
| --------------------- | ---------------------------------------------------------- | ------------- | ------------------------------------------------------------- |
| centered              | `boolean`                                                  | `false`       | Centered horizontally the container.                          |
| children _(required)_ | `ReactNode`                                                |               | Defines the children of the component.                        |
| className             | `string`                                                   |               | Classnames applied to root element                            |
| gap                   | `number` \| `number[]`                                     |               | Defines the gap horizontally and vertically in the container. |
| maxWidth              | `number` \| `"xs"` \| `"sm"` \| `"md"` \| `"lg"` \| `"xl"` |               | Maximum width of the container or breakpoint.                 |
| style                 | `CSSProperties`                                            |               | Styles applied to root element                                |
