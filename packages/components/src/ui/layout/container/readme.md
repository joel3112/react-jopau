### Container

Containers are used to constrain a content's width to the current breakpoint.

#### Import

```jsx
import { Container } from '@react-jopau/components';
```

#### Examples

```jsx
<Container gap={10} maxWidth={1000} centered>
  <p>lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</Container>
```

#### Props

| Name                  | Type                                                                                                                                                                                                                               | Default value | Description                                   |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | --------------------------------------------- |
| children _(required)_ | `ReactNode`                                                                                                                                                                                                                        |               | Defines the children of the component.        |
| centered              | `boolean`                                                                                                                                                                                                                          |               | Centered horizontally the container.          |
| className             | `string`                                                                                                                                                                                                                           |               | Classnames applied to root element            |
| gap                   | `number` \| `number[]` \| `{ xs?: number` \| `number[]; sm?: number` \| `number[]; md?: number` \| `number[]` \| `undefined; lg?: number` \| `number[]` \| `undefined; xl?: number` \| `number[]` \| `undefined; }` \| `undefined` |               | Defines the spacing between the items.        |
| maxWidth              | `number` \| `"xs"` \| `"sm"` \| `"md"` \| `"lg"` \| `"xl"`                                                                                                                                                                         |               | Maximum width of the container or breakpoint. |
| style                 | `CSSProperties`                                                                                                                                                                                                                    |               | Styles applied to root element                |
