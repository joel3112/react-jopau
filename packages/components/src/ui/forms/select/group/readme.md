### Select.Group

Component that is used as an option group in a Select component.

#### Import

```jsx
import { Select } from '@react-jopau/components/ui';
```

#### Examples

```jsx
<Select value="A">
  <Select.Group label="Group 1">
    <Select.Option value="A">A</Select.Option>
    <Select.Option value="B">B</Select.Option>
  </Select.Group>
</Select>
```

#### Props

| Name                  | Type                                                                                                                                                     | Default value | Description                                                           |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | --------------------------------------------------------------------- |
| children _(required)_ | `ReactElement<SelectOptionProps, string` \| `JSXElementConstructor<any>>` \| `ReactElement<SelectOptionProps, string` \| `JSXElementConstructor<...>>[]` |               | Defines the children of the component.                                |
| disabled              | `boolean`                                                                                                                                                |               | Defines if the element is disabled and not available for interaction. |
| label                 | `string`                                                                                                                                                 |               | Defines the label of the current element.                             |
