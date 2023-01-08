### Switch

Switch component is used as an alternative for the Checkbox component.
You can switch between enabled or disabled states.

#### Import

```jsx
import { Switch } from '@react-jopau/components';
```

#### Examples

```jsx
<Switch defaultChecked />
```

#### Props

| Name           | Type                                                                                                | Default value | Description                                                               |
| -------------- | --------------------------------------------------------------------------------------------------- | ------------- | ------------------------------------------------------------------------- |
| autoFocus      | `boolean`                                                                                           |               | Defines the element should receive focus on render.                       |
| checked        | `boolean`                                                                                           |               | Defines if the input element is checked (controlled).                     |
| children       | `string`                                                                                            |               | Defines the children of the component.                                    |
| className      | `string`                                                                                            |               | Classnames applied to root element                                        |
| color          | `"primary"` \| `"secondary"` \| `"tertiary"` \| `"info"` \| `"error"` \| `"success"` \| `"warning"` |               | Defines the color of input text, border and label.                        |
| defaultChecked | `boolean`                                                                                           |               | Defines the default value (uncontrolled) of the input element.            |
| disabled       | `boolean`                                                                                           |               | Defines if the element is disabled and not available for interaction.     |
| icon           | `ReactNode`                                                                                         |               | Add icon for both status (on and off)                                     |
| iconOff        | `ReactNode`                                                                                         |               | Add icon for status off                                                   |
| iconOn         | `ReactNode`                                                                                         |               | Add icon for status on                                                    |
| id             | `string`                                                                                            |               | Identifies the element that labels the current element.                   |
| name           | `string`                                                                                            |               | Define the name for the current element (used for form submission).       |
| onChange       | `((e: boolean) => void)`                                                                            |               | Function to be called when the element value is changed.                  |
| size           | `"md"` \| `"xs"` \| `"sm"` \| `"lg"` \| `"xl"`                                                      |               | Defines the size of the component.                                        |
| squared        | `boolean`                                                                                           |               | Defines the square shape of the component.                                |
| status         | `SimpleColor`                                                                                       |               | Defines the status of the element and determines the color of the border. |
| style          | `CSSProperties`                                                                                     |               | Styles applied to root element                                            |
| variant        | `"default"` \| `"bordered"`                                                                         |               | Defines the variant of the component.                                     |
