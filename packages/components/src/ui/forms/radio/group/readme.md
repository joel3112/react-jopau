### Radio.Group

Radios group allows users to select a single option from a list of mutually exclusive options.

#### Import

```jsx
import { Radio } from '@react-jopau/components/ui';
```

#### Examples

```jsx
<Radio.Group defaultValue="A">
  <Radio value="A">Option A</Radio>
  <Radio value="B">Option B</Radio>
</Radio.Group>
```

#### Props

| Name                  | Type                                                                                                                                       | Default value | Description                                                                                   |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------- | --------------------------------------------------------------------------------------------- |
| children _(required)_ | `ReactElement<RadioProps, string` \| `JSXElementConstructor<any>>` \| `ReactElement<RadioProps, string` \| `JSXElementConstructor<any>>[]` |               | Defines the children of the component.                                                        |
| autoFocus             | `boolean`                                                                                                                                  |               | Defines the element should receive focus on render.                                           |
| className             | `string`                                                                                                                                   |               | Classnames applied to root element                                                            |
| color                 | `NormalColor`                                                                                                                              |               | Defines the color of input text, border and label.                                            |
| defaultValue          | `string`                                                                                                                                   |               | Defines the default value (uncontrolled) of the current element, used when submitting a form. |
| disabled              | `boolean`                                                                                                                                  |               | Defines if the element is disabled and not available for interaction.                         |
| id                    | `string`                                                                                                                                   |               | Identifies the element that labels the current element.                                       |
| label                 | `string`                                                                                                                                   |               | Defines the label of the current element.                                                     |
| name                  | `string`                                                                                                                                   |               | Define the name for the current element (used for form submission).                           |
| onChange              | `((e: string) => void)`                                                                                                                    |               | Function to be called when the element value is changed.                                      |
| orientation           | `"vertical"` \| `"horizontal"`                                                                                                             |               | Defines the axis radio group is aligned.                                                      |
| readOnly              | `boolean`                                                                                                                                  |               | Defines if the element is read-only.                                                          |
| required              | `boolean`                                                                                                                                  |               | Defines if the element is required.                                                           |
| size                  | `NormalSize`                                                                                                                               |               | Defines the size of the component.                                                            |
| status                | `SimpleColor`                                                                                                                              |               | Defines the status of the element and determines the color of the border.                     |
| style                 | `CSSProperties`                                                                                                                            |               | Styles applied to root element                                                                |
| value                 | `string`                                                                                                                                   |               | Defines the value (controlled) of the current element, used when submitting a form.           |
