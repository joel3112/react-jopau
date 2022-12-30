### Textarea

Textarea component is a multi-line Input which allows you to write large texts.

#### Import

```jsx
import { Textarea } from '@react-jopau/components/ui';
```

#### Examples

```jsx
<Textarea color="primary" label="Label" placeholder="placeholder" value="text" />
```

#### Props

| Name             | Type                                                                                                               | Default value | Description                                                                                   |
| ---------------- | ------------------------------------------------------------------------------------------------------------------ | ------------- | --------------------------------------------------------------------------------------------- |
| autoComplete     | `"off"` \| `"on"`                                                                                                  |               | Defines if the input has autocomplete enabled.                                                |
| autoFocus        | `boolean`                                                                                                          |               | Defines the element should receive focus on render.                                           |
| className        | `string`                                                                                                           |               | Classnames applied to root element                                                            |
| color            | `"default"` \| `"primary"` \| `"secondary"` \| `"tertiary"` \| `"info"` \| `"error"` \| `"success"` \| `"warning"` |               | Defines the color of input text, border and label.                                            |
| defaultValue     | `string`                                                                                                           |               | Defines the default value (uncontrolled) of the current element, used when submitting a form. |
| disabled         | `boolean`                                                                                                          |               | Defines if the element is disabled and not available for interaction.                         |
| fullWidth        | `boolean`                                                                                                          |               | Defines if the button takes the full width of its parent.                                     |
| helperText       | `string`                                                                                                           |               | Defines the helper text of the input element.                                                 |
| id               | `string`                                                                                                           |               | Identifies the element that labels the current element.                                       |
| label            | `string`                                                                                                           |               | Defines the label of the current element.                                                     |
| labelPlaceholder | `string`                                                                                                           |               | Defines the placeholder, it becomes a label element when the input is focused.                |
| maxRows          | `number`                                                                                                           |               | Defines the maximum number of rows of the textarea element.                                   |
| minRows          | `number`                                                                                                           |               | Defines the minimum number of rows of the textarea element.                                   |
| name             | `string`                                                                                                           |               | Define the name for the current element (used for form submission).                           |
| onBlur           | `(e: FocusEvent<HTMLTextAreaElement, Element>) => void`                                                            |               | Function to be called when the element is blurred.                                            |
| onChange         | `(e: ChangeEvent<HTMLTextAreaElement>) => void`                                                                    |               | Function to be called when the element value is changed.                                      |
| onFocus          | `(e: FocusEvent<HTMLTextAreaElement, Element>) => void`                                                            |               | Function to be called when the element is focused.                                            |
| onHeightChange   | `(height: number) => void`                                                                                         |               | Function to be called when the height of the textarea changes.                                |
| placeholder      | `string`                                                                                                           |               | Defines the placeholder of the input element.                                                 |
| readOnly         | `boolean`                                                                                                          |               | Defines if the element is read-only.                                                          |
| required         | `boolean`                                                                                                          |               | Defines if the element is required.                                                           |
| rows             | `number`                                                                                                           |               | Defines the number of rows of the textarea element.                                           |
| shape            | `"default"` \| `"round"` \| `"square"`                                                                             |               | Defines the shape of the component.                                                           |
| size             | `"md"` \| `"xs"` \| `"sm"` \| `"lg"` \| `"xl"`                                                                     |               | Defines the size of the component.                                                            |
| status           | `"default"` \| `"primary"` \| `"secondary"` \| `"tertiary"` \| `"info"` \| `"error"` \| `"success"` \| `"warning"` |               | Defines the status of the element and determines the color of the border.                     |
| style            | `CSSProperties`                                                                                                    |               | Styles applied to root element                                                                |
| value            | `string`                                                                                                           |               | Defines the value (controlled) of the current element, used when submitting a form.           |
| variant          | `"default"` \| `"bordered"` \| `"underlined"`                                                                      |               | Defines the variant of the component.                                                         |
