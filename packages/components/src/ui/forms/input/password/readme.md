### Input.Password

Input component is a component that is used to get user password input in a text field.

#### Import

```jsx
import { Input } from '@react-jopau/components';
```

#### Examples

```jsx
<Input.Password label="Password" placeholder="Your password" />
```

#### Props

| Name             | Type                                                                   | Default value | Description                                                                                                                                                  |
| ---------------- | ---------------------------------------------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| as               | `"input"` \| `"textarea"`                                              |               | Changes which tag component outputs                                                                                                                          |
| autoComplete     | `"off"` \| `"on"`                                                      |               | Defines if the input has autocomplete enabled.                                                                                                               |
| autoFocus        | `boolean`                                                              |               | Defines the element should receive focus on render.                                                                                                          |
| className        | `string`                                                               |               | Classnames applied to root element                                                                                                                           |
| clearable        | `boolean`                                                              |               | Defines if the input element can be cleared by clicking the clear button.                                                                                    |
| color            | `SimpleColor`                                                          |               | Defines the color of input text, border and label.                                                                                                           |
| defaultValue     | `string`                                                               |               | Defines the default value (uncontrolled) of the current element, used when submitting a form.                                                                |
| disabled         | `boolean`                                                              |               | Defines if the element is disabled and not available for interaction.                                                                                        |
| fullWidth        | `boolean`                                                              |               | Defines if the button takes the full width of its parent.                                                                                                    |
| helperText       | `string`                                                               |               | Defines the helper text of the input element.                                                                                                                |
| hiddenIcon       | `ReactNode`                                                            |               | Custom icon for the hidden password. See <a href=\x22https://react-icons.github.io/react-icons/\x22 target=\x22_blank\x22>react-icons</a> for more details.  |
| hideToggle       | `boolean`                                                              |               | Defines if the toggle icon is visible.                                                                                                                       |
| hotKey           | `string`                                                               |               | Defines the hot keybinding to focus the input element.                                                                                                       |
| id               | `string`                                                               |               | Identifies the element that labels the current element.                                                                                                      |
| label            | `string`                                                               |               | Defines the label of the current element.                                                                                                                    |
| labelLeft        | `string`                                                               |               | Defines the text label at left of the input                                                                                                                  |
| labelPlaceholder | `string`                                                               |               | Defines the placeholder, it becomes a label element when the input is focused.                                                                               |
| labelRight       | `string`                                                               |               | Defines the text label at right of the input                                                                                                                 |
| mask             | `false` \| `(string` \| `RegExp)[]`                                    |               | Defines the input mask array pattern to be used.                                                                                                             |
| name             | `string`                                                               |               | Define the name for the current element (used for form submission).                                                                                          |
| onBlur           | `((e: FocusEvent<HTMLInputElement, Element>) => void)`                 |               | Function to be called when the element is blurred.                                                                                                           |
| onChange         | `((e: ChangeEvent<HTMLInputElement>) => void)`                         |               | Function to be called when the element value is changed.                                                                                                     |
| onClearClick     | `((e: MouseEvent<Element, MouseEvent>) => void)`                       |               | Function to be called when the clear button is clicked.                                                                                                      |
| onFocus          | `((e: FocusEvent<HTMLInputElement, Element>) => void)`                 |               | Function to be called when the element is focused.                                                                                                           |
| onIconClick      | `((key: ContentPosition, e: MouseEvent<Element, MouseEvent>) => void)` |               | Function to be called when the content is clicked.                                                                                                           |
| placeholder      | `string`                                                               |               | Defines the placeholder of the input element.                                                                                                                |
| readOnly         | `boolean`                                                              |               | Defines if the element is read-only.                                                                                                                         |
| required         | `boolean`                                                              |               | Defines if the element is required.                                                                                                                          |
| shape            | `Shape`                                                                |               | Defines the shape of the component.                                                                                                                          |
| size             | `NormalSize`                                                           |               | Defines the size of the component.                                                                                                                           |
| status           | `SimpleColor`                                                          |               | Defines the status of the element and determines the color of the border.                                                                                    |
| style            | `CSSProperties`                                                        |               | Styles applied to root element                                                                                                                               |
| tabIndex         | `number`                                                               |               | Defines the tab order of the element.                                                                                                                        |
| value            | `string`                                                               |               | Defines the value (controlled) of the current element, used when submitting a form.                                                                          |
| variant          | `"default"` \| `"bordered"` \| `"underlined"`                          |               | Defines the variant of the component.                                                                                                                        |
| visibleIcon      | `ReactNode`                                                            |               | Custom icon for the visible password. See <a href=\x22https://react-icons.github.io/react-icons/\x22 target=\x22_blank\x22>react-icons</a> for more details. |
