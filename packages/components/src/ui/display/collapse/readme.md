### Collapse

Collapse display a list of high-level options that can expand/collapse to reveal more information.

#### Import

```jsx
import { Collapse } from '@react-jopau/components';
```

#### Examples

```jsx
<Collapse title="Title">lorem ipsum dolor sit amet, consectetur adipiscing elit</Collapse>
```

#### Props

| Name                  | Type                                                                 | Default value | Description                                                                                            |
| --------------------- | -------------------------------------------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------ |
| children _(required)_ | `ReactNode`                                                          |               | Defines the children of the component.                                                                 |
| title _(required)_    | `ReactNode`                                                          |               | Title of the component.                                                                                |
| arrowIcon             | `ReactNode`                                                          |               | Collapse arrow icon.                                                                                   |
| bordered              | `boolean`                                                            |               | Defines if the component is bordered or not.                                                           |
| className             | `string`                                                             |               | Classnames applied to root element                                                                     |
| contentLeft           | `ReactNode`                                                          |               | Left content of the component.                                                                         |
| disableArrowAnimation | `boolean`                                                            |               | Disable the arrow animation, it won\x27t rotate the arrow when the component is expanded or collapsed. |
| disabled              | `boolean`                                                            |               | Defines if the component is disabled or not.                                                           |
| divider               | `boolean`                                                            |               | Show or hide the divider of the component.                                                             |
| expanded              | `boolean`                                                            |               | Defines if the component is expanded or not by default.                                                |
| hideArrow             | `boolean`                                                            |               | Defines if hide the arrow or not.                                                                      |
| index                 | `number`                                                             |               | Collapse index, the value it\x27s autogenerated if not provided.                                       |
| onChange              | `((e: ChangeEvent<Element>, index: number, value: boolean) => void)` |               | Function to be called when the value is changed.                                                       |
| shadow                | `boolean`                                                            |               | Defines if the component is shadowed or not.                                                           |
| style                 | `CSSProperties`                                                      |               | Styles applied to root element                                                                         |
| subtitle              | `ReactNode`                                                          |               | Subtitle of the component.                                                                             |