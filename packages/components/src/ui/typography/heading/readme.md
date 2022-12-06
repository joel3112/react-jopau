### Heading

Heading component is the used to render headings within an interface using well-defined typographic styles.

#### Import

```jsx
import { Heading } from '@react-jopau/components/ui/typography';
```

#### Examples

```jsx
<Heading as="h2">Title</Heading>
```

#### Props

| Name                  | Type                                                                                                                               | Default value | Description                            |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------------- | -------------------------------------- |
| children _(required)_ | `string`                                                                                                                           |               | Defines the children of the component. |
| as                    | `"h1"` \| `"h2"` \| `"h3"` \| `"h4"` \| `"h5"` \| `"h6"`                                                                           | `h1`          | Changes which tag component outputs    |
| className             | `string`                                                                                                                           |               | Classnames applied to root element     |
| color                 | `"inherit"` \| `"primary"` \| `"secondary"` \| `"tertiary"` \| `"info"` \| `"error"` \| `"success"` \| `"warning"` \| `"disabled"` | `inherit`     | Defines the color of the heading.      |
| style                 | `CSSProperties`                                                                                                                    |               | Styles applied to root element         |
