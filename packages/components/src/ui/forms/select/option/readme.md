### Select.Option

Component that is used as an option in a Select component.

#### Import

```jsx
import { Select } from '@react-jopau/components';
```

#### Examples

```jsx
<Select.Option value="A">A</Select.Option>
```

#### Props

| Name                  | Type      | Default value | Description                                                           |
| --------------------- | --------- | ------------- | --------------------------------------------------------------------- |
| children _(required)_ | `string`  |               | Defines the children of the component.                                |
| value _(required)_    | `string`  |               | Value of the option.                                                  |
| disabled              | `boolean` |               | Defines if the element is disabled and not available for interaction. |
| label                 | `string`  |               | Defines the label of the current element.                             |
