### Radio

Radios allow users to select a single option from a list of mutually exclusive options.

#### Import

```jsx
import { Radio } from '@react-jopau/components/ui/forms';
```

#### Examples

```jsx
<Radio checked value="A">
  Option A
</Radio>
```

#### Props

| Name               | Type                                                                                                               | Default value | Description                                                               |
| ------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------- | ------------------------------------------------------------------------- |
| value _(required)_ | `string`                                                                                                           |               | Defines the value of the current element, used when submitting a form.    |
| children           | `string`                                                                                                           |               | Defines the children of the component.                                    |
| className          | `string`                                                                                                           |               | Classnames applied to root element                                        |
| color              | `"primary"` \| `"secondary"` \| `"tertiary"` \| `"info"` \| `"error"` \| `"success"` \| `"warning"`                |               | Defines the color of input text, border and label.                        |
| description        | `ReactNode`                                                                                                        |               | Defines the description of the component.                                 |
| disabled           | `boolean`                                                                                                          |               | Defines if the element is disabled and not available for interaction.     |
| id                 | `string`                                                                                                           |               | Identifies the element that labels the current element.                   |
| onChange           | `(e: boolean) => void`                                                                                             |               | Function to be called when the element value is changed.                  |
| size               | `"md"` \| `"xs"` \| `"sm"` \| `"lg"` \| `"xl"`                                                                     |               | Defines the size of the component.                                        |
| squared            | `boolean`                                                                                                          |               | Defines the square shape of the component.                                |
| status             | `"primary"` \| `"default"` \| `"secondary"` \| `"tertiary"` \| `"info"` \| `"error"` \| `"success"` \| `"warning"` |               | Defines the status of the element and determines the color of the border. |
| style              | `CSSProperties`                                                                                                    |               | Styles applied to root element                                            |
