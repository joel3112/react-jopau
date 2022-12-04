### Button

Button component is a clickable element that is used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.

#### Import

```jsx
import { Button } from '@react-jopau/components/ui/forms';
```

#### Examples

```jsx
<Button color="primary" variant="outline">
  Click me
</Button>
```

#### Props

| Name         | Type                                                                                                                         | Default value | Description                                                                                                                                                             |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| autoWidth    | `boolean`                                                                                                                    |               | Defines if the button takes the fit width of its parent.                                                                                                                |
| children     | `string`                                                                                                                     |               | Defines the children of the component.                                                                                                                                  |
| className    | `string`                                                                                                                     |               | Classnames applied to root element                                                                                                                                      |
| color        | `"primary"` \| `"secondary"` \| `"tertiary"` \| `"info"` \| `"error"` \| `"success"` \| `"warning"` \| `"light"` \| `"dark"` | `primary`     | Defines the color of button.                                                                                                                                            |
| disabled     | `boolean`                                                                                                                    |               | Defines if the button is disabled and not clickable.                                                                                                                    |
| icon         | `ReactNode`                                                                                                                  |               | Defines the render of the icon of the component. See <a href=\x22https://react-icons.github.io/react-icons/\x22 target=\x22_blank\x22>react-icons</a> for more details. |
| iconPosition | `"left"` \| `"right"`                                                                                                        | `left`        | Defines the position of the icon in the component.                                                                                                                      |
| onClick      | `(e: MouseEvent<HTMLButtonElement, MouseEvent>) => void`                                                                     |               | Function to be called when the button is clicked.                                                                                                                       |
| rounded      | `boolean`                                                                                                                    |               | Defines the round shape of the component.                                                                                                                               |
| size         | `"md"` \| `"xs"` \| `"sm"` \| `"lg"` \| `"xl"`                                                                               | `md`          | Defines the size of the component.                                                                                                                                      |
| style        | `CSSProperties`                                                                                                              |               | Styles applied to root element                                                                                                                                          |
| type         | `"button"` \| `"submit"` \| `"reset"`                                                                                        | `button`      | Defines the native type of the button element.                                                                                                                          |
| variant      | `"solid"` \| `"bordered"` \| `"ghost"` \| `"flat"` \| `"clear"`                                                              | `solid`       | Defines the variant of the component.                                                                                                                                   |
