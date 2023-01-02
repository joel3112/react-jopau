### Input

Input component is a component that is used to get user input in a text field.

#### Import

```jsx
import { Input } from '@react-jopau/components/ui';
```

#### Examples

```jsx
<Input label="Label" placeholder="placeholder" value="text" />
```

#### Props

| Name             | Type                                                                                                               | Default value | Description                                                                                   |
| ---------------- | ------------------------------------------------------------------------------------------------------------------ | ------------- | --------------------------------------------------------------------------------------------- |
| as               | `"input"` \| `"textarea"`                                                                                          |               | Changes which tag component outputs                                                           |
| autoComplete     | `"off"` \| `"on"`                                                                                                  |               | Defines if the input has autocomplete enabled.                                                |
| autoFocus        | `boolean`                                                                                                          |               | Defines the element should receive focus on render.                                           |
| className        | `string`                                                                                                           |               | Classnames applied to root element                                                            |
| clearable        | `boolean`                                                                                                          |               | Defines if the input element can be cleared by clicking the clear button.                     |
| color            | `"default"` \| `"primary"` \| `"secondary"` \| `"tertiary"` \| `"info"` \| `"error"` \| `"success"` \| `"warning"` |               | Defines the color of input text, border and label.                                            |
| defaultValue     | `string`                                                                                                           |               | Defines the default value (uncontrolled) of the current element, used when submitting a form. |
| disabled         | `boolean`                                                                                                          |               | Defines if the element is disabled and not available for interaction.                         |
| fullWidth        | `boolean`                                                                                                          |               | Defines if the button takes the full width of its parent.                                     |
| helperText       | `string`                                                                                                           |               | Defines the helper text of the input element.                                                 |
| hotKey           | `string`                                                                                                           |               | Defines the hot keybinding to focus the input element.                                        |
| icon             | `ReactNode`                                                                                                        |               | Defines the render of the icon of the component.                                              |
| iconPosition     | `"left"` \| `"right"`                                                                                              |               | Defines the position of the icon in the component.                                            |
| id               | `string`                                                                                                           |               | Identifies the element that labels the current element.                                       |
| label            | `string`                                                                                                           |               | Defines the label of the current element.                                                     |
| labelLeft        | `string`                                                                                                           |               | Defines the text label at left of the input                                                   |
| labelPlaceholder | `string`                                                                                                           |               | Defines the placeholder, it becomes a label element when the input is focused.                |
| labelRight       | `string`                                                                                                           |               | Defines the text label at right of the input                                                  |
| mask             | `false` \| `(string` \| `RegExp)[]`                                                                                |               | Defines the input mask array pattern to be used.                                              |
| name             | `string`                                                                                                           |               | Define the name for the current element (used for form submission).                           |
| onBlur           | `(e: FocusEvent<HTMLInputElement, Element>) => void`                                                               |               | Function to be called when the element is blurred.                                            |
| onChange         | `(e: ChangeEvent<HTMLInputElement>) => void`                                                                       |               | Function to be called when the element value is changed.                                      |
| onClearClick     | `(e: MouseEvent<Element, MouseEvent>) => void`                                                                     |               | Function to be called when the clear button is clicked.                                       |
| onFocus          | `(e: FocusEvent<HTMLInputElement, Element>) => void`                                                               |               | Function to be called when the element is focused.                                            |
| onIconClick      | `(key: ContentPosition, e: MouseEvent<Element, MouseEvent>) => void`                                               |               | Function to be called when the content is clicked.                                            |
| placeholder      | `string`                                                                                                           |               | Defines the placeholder of the input element.                                                 |
| readOnly         | `boolean`                                                                                                          |               | Defines if the element is read-only.                                                          |
| required         | `boolean`                                                                                                          |               | Defines if the element is required.                                                           |
| shape            | `"default"` \| `"round"` \| `"square"`                                                                             |               | Defines the shape of the component.                                                           |
| size             | `"md"` \| `"xs"` \| `"sm"` \| `"lg"` \| `"xl"`                                                                     |               | Defines the size of the component.                                                            |
| status           | `"default"` \| `"primary"` \| `"secondary"` \| `"tertiary"` \| `"info"` \| `"error"` \| `"success"` \| `"warning"` |               | Defines the status of the element and determines the color of the border.                     |
| style            | `CSSProperties`                                                                                                    |               | Styles applied to root element                                                                |
| tabIndex         | `number`                                                                                                           |               | Defines the tab order of the element.                                                         |
| type             | `"number"` \| `"text"` \| `"password"` \| `"email"` \| `"tel"` \| `"url"`                                          |               | Defines the type of the input element.                                                        |
| value            | `string`                                                                                                           |               | Defines the value (controlled) of the current element, used when submitting a form.           |
| variant          | `"default"` \| `"bordered"` \| `"underlined"`                                                                      |               | Defines the variant of the component.                                                         |
