### Text

Text component is the used to render text and paragraphs within an interface using well-defined typographic styles.

#### Import

```jsx
import { Text } from '@react-jopau/components/ui/typography';
```

#### Examples

```jsx
<Text size="md" as="span">
  Content
</Text>
```

#### Props

| Name                  | Type                                                                                                               | Default value | Description                              |
| --------------------- | ------------------------------------------------------------------------------------------------------------------ | ------------- | ---------------------------------------- |
| children _(required)_ | `string`                                                                                                           |               | Defines the children of the component.   |
| as                    | `"p"` \| `"span"`                                                                                                  | `p`           | Defines the tag of the component.        |
| className             | `string`                                                                                                           |               | Classnames applied to root element       |
| color                 | `"default"` \| `"primary"` \| `"secondary"` \| `"disabled"` \| `"info"` \| `"error"` \| `"success"` \| `"warning"` | `default`     | Defines the color of the text.           |
| maxLines              | `number`                                                                                                           |               | Defines the line clamp of the component. |
| size                  | `"md"` \| `"xs"` \| `"sm"` \| `"lg"` \| `"xl"` \| `"2xl"` \| `"3xl"`                                               | `md`          | Defines the size of the component.       |
| style                 | `CSSProperties`                                                                                                    |               | Styles applied to root element           |
