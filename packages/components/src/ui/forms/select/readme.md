### Select

Select component is a component that allows users pick a value from predefined options.

#### Import

```jsx
import { Select } from '@react-jopau/components/ui/forms';
```

#### Examples

```jsx
<Select value="A">
  <Select.Option value="A">A</Select.Option>
  <Select.Option value="B">B</Select.Option>
  <Select.Option value="C">C</Select.Option>
</Select>
```

#### Props

| Name                  | Type                                                                                                                                                                                                          | Default value | Description                                                                                   |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | --------------------------------------------------------------------------------------------- |
| children _(required)_ | `ReactElement<SelectOptionProps, string` \| `JSXElementConstructor<any>>` \| `ReactElement<SelectOptionGroupProps, string` \| `JSXElementConstructor<any>>` \| `ReactElement<...>[]` \| `ReactElement<...>[]` |               | Defines the children of the component.                                                        |
| autoFocus             | `boolean`                                                                                                                                                                                                     |               | Defines the element should receive focus on render.                                           |
| className             | `string`                                                                                                                                                                                                      |               | Classnames applied to root element                                                            |
| color                 | `"default"` \| `"primary"` \| `"secondary"` \| `"tertiary"` \| `"info"` \| `"error"` \| `"success"` \| `"warning"`                                                                                            |               | Defines the color of input text, border and label.                                            |
| defaultValue          | `string`                                                                                                                                                                                                      |               | Defines the default value (uncontrolled) of the current element, used when submitting a form. |
| disabled              | `boolean`                                                                                                                                                                                                     |               | Defines if the element is disabled and not available for interaction.                         |
| fullWidth             | `boolean`                                                                                                                                                                                                     |               | Defines if the button takes the full width of its parent.                                     |
| helperText            | `string`                                                                                                                                                                                                      |               | Defines the helper text of the input element.                                                 |
| id                    | `string`                                                                                                                                                                                                      |               | Identifies the element that labels the current element.                                       |
| label                 | `string`                                                                                                                                                                                                      |               | Defines the label of the current element.                                                     |
| name                  | `string`                                                                                                                                                                                                      |               | Define the name for the current element (used for form submission).                           |
| onBlur                | `(e: FocusEvent<HTMLSelectElement, Element>) => void`                                                                                                                                                         |               | Function to be called when the element is blurred.                                            |
| onChange              | `(e: ChangeEvent<HTMLSelectElement>) => void`                                                                                                                                                                 |               | Function to be called when the element value is changed.                                      |
| onFocus               | `(e: FocusEvent<HTMLSelectElement, Element>) => void`                                                                                                                                                         |               | Function to be called when the element is focused.                                            |
| placeholder           | `string`                                                                                                                                                                                                      |               | Defines the placeholder of the input element.                                                 |
| required              | `boolean`                                                                                                                                                                                                     |               | Defines if the element is required.                                                           |
| shape                 | `"default"` \| `"round"` \| `"square"`                                                                                                                                                                        |               | Defines the shape of the component.                                                           |
| size                  | `"md"` \| `"xs"` \| `"sm"` \| `"lg"` \| `"xl"`                                                                                                                                                                |               | Defines the size of the component.                                                            |
| status                | `"default"` \| `"primary"` \| `"secondary"` \| `"tertiary"` \| `"info"` \| `"error"` \| `"success"` \| `"warning"`                                                                                            |               | Defines the status of the element and determines the color of the border.                     |
| style                 | `CSSProperties`                                                                                                                                                                                               |               | Styles applied to root element                                                                |
| value                 | `string`                                                                                                                                                                                                      |               | Defines the value (controlled) of the current element, used when submitting a form.           |
| variant               | `"default"` \| `"bordered"` \| `"underlined"`                                                                                                                                                                 |               | Defines the variant of the component.                                                         |
