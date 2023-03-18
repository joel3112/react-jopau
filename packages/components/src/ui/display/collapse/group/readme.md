### Collapse.Group

Group of collapse components that can be expanded/collapsed to reveal more information.

#### Import

```jsx
import { CollapseGroup } from '@react-jopau/components';
```

#### Examples

```jsx
<CollapseGroup divider>
  <Collapse title="Title 1">lorem ipsum dolor sit amet, consectetur adipiscing elit</Collapse>
  <Collapse title="Title 2">lorem ipsum dolor sit amet, consectetur adipiscing elit</Collapse>
</CollapseGroup>
```

#### Props

| Name      | Type                                                                                                                                             | Default value | Description                                      |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------- | ------------------------------------------------ |
| accordion | `boolean`                                                                                                                                        |               | Expand children collapse like an accordion.      |
| bordered  | `boolean`                                                                                                                                        |               | Defines if the group is bordered or not.         |
| children  | `ReactElement<CollapseProps, string` \| `JSXElementConstructor<any>>` \| `ReactElement<CollapseProps, string` \| `JSXElementConstructor<...>>[]` |               | Defines the children of the component.           |
| className | `string`                                                                                                                                         |               | Classnames applied to root element               |
| divider   | `boolean`                                                                                                                                        |               | Show or hide the divider of the component.       |
| onChange  | `((index: number, value: boolean) => void)`                                                                                                      |               | Function to be called when the value is changed. |
| shadow    | `boolean`                                                                                                                                        |               | Defines if the group is shadowed or not.         |
| splitted  | `boolean`                                                                                                                                        |               | Defines if the group is splitted or not.         |
| style     | `CSSProperties`                                                                                                                                  |               | Styles applied to root element                   |
