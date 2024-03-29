### Checkbox

Checkbox allows users to select one or more options from a set.

#### Import

```jsx
import { Checkbox } from '@react-jopau/components';
```

#### Examples

```jsx
<Checkbox checked value="A">
  Option A
</Checkbox>
```

#### Props

| Name           | Type                     | Default value | Description                                                                                                          |
| -------------- | ------------------------ | ------------- | -------------------------------------------------------------------------------------------------------------------- |
| autoFocus      | `boolean`                |               | Defines the element should receive focus on render.                                                                  |
| checked        | `boolean`                |               | Defines if the input element is checked (controlled).                                                                |
| children       | `string`                 |               | Defines the children of the component.                                                                               |
| className      | `string`                 |               | Classnames applied to root element                                                                                   |
| color          | `NormalColor`            |               | Defines the color of input text, border and label.                                                                   |
| defaultChecked | `boolean`                |               | Defines the default value (uncontrolled) of the input element.                                                       |
| disabled       | `boolean`                |               | Defines if the element is disabled and not available for interaction.                                                |
| id             | `string`                 |               | Identifies the element that labels the current element.                                                              |
| indeterminate  | `boolean`                |               | Indeterminism is presentational only. The indeterminate visual representation remains regardless of user interaction |
| label          | `string`                 |               | Defines the label of the current element.                                                                            |
| name           | `string`                 |               | Define the name for the current element (used for form submission).                                                  |
| onChange       | `((e: boolean) => void)` |               | Function to be called when the element value is changed.                                                             |
| readOnly       | `boolean`                |               | Defines if the element is read-only.                                                                                 |
| required       | `boolean`                |               | Defines if the element is required.                                                                                  |
| rounded        | `boolean`                |               | Defines the round shape of the component.                                                                            |
| size           | `NormalSize`             |               | Defines the size of the component.                                                                                   |
| status         | `SimpleColor`            |               | Defines the status of the element and determines the color of the border.                                            |
| style          | `CSSProperties`          |               | Styles applied to root element                                                                                       |
| throughed      | `boolean`                |               | Line in the middle of the label when the element is checked                                                          |
| value          | `string`                 |               | Defines the value of the current element, used when submitting a form.                                               |
