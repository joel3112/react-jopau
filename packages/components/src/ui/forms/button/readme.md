### Button

Button component is a clickable element that is used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.

#### Import

```jsx
import { Button } from '@react-jopau/components/ui';
```

#### Examples

```jsx
<Button color="primary" variant="outline">
  Click me
</Button>
```

#### Props

| Name         | Type                                                                                                                         | Default value | Description                                               |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------- | ------------- | --------------------------------------------------------- |
| auto         | `boolean`                                                                                                                    |               | Defines if the button takes the fit width of its parent.  |
| children     | `ReactNode`                                                                                                                  |               | Defines the children of the component.                    |
| className    | `string`                                                                                                                     |               | Classnames applied to root element                        |
| color        | `"primary"` \| `"secondary"` \| `"tertiary"` \| `"info"` \| `"error"` \| `"success"` \| `"warning"` \| `"light"` \| `"dark"` |               | Defines the color of button.                              |
| disabled     | `boolean`                                                                                                                    |               | Defines if the button is disabled and not clickable.      |
| fullWidth    | `boolean`                                                                                                                    |               | Defines if the button takes the full width of its parent. |
| icon         | `ReactNode`                                                                                                                  |               | Defines the render of the icon of the component.          |
| iconPosition | `"left"` \| `"right"`                                                                                                        |               | Defines the position of the icon in the component.        |
| onClick      | `(e: MouseEvent<HTMLButtonElement, MouseEvent>) => void`                                                                     |               | Function to be called when the button is clicked.         |
| shape        | `"default"` \| `"round"` \| `"square"`                                                                                       |               | Defines the shape of the component.                       |
| size         | `"md"` \| `"xs"` \| `"sm"` \| `"lg"` \| `"xl"`                                                                               |               | Defines the size of the component.                        |
| style        | `CSSProperties`                                                                                                              |               | Styles applied to root element                            |
| type         | `"button"` \| `"submit"` \| `"reset"`                                                                                        |               | Defines the native type of the button element.            |
| variant      | `"solid"` \| `"bordered"` \| `"ghost"` \| `"flat"` \| `"clear"`                                                              |               | Defines the variant of the component.                     |
