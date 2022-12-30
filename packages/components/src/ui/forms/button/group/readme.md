### Button.Group

If you need to make a group of buttons you can use the compound component Button.Group and inside the buttons you want to group.

#### Import

```jsx
import { Button } from '@react-jopau/components/ui';
```

#### Examples

```jsx
<Button.Group>
  <Button>Button A</Button>
  <Button>Button B</Button>
</Button.Group>
```

#### Props

| Name                  | Type                                                                                                                                         | Default value | Description                                               |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | --------------------------------------------------------- |
| children _(required)_ | `ReactElement<ButtonProps, string` \| `JSXElementConstructor<any>>` \| `ReactElement<ButtonProps, string` \| `JSXElementConstructor<any>>[]` |               | Defines the children of the component.                    |
| className             | `string`                                                                                                                                     |               | Classnames applied to root element                        |
| color                 | `"primary"` \| `"secondary"` \| `"tertiary"` \| `"info"` \| `"error"` \| `"success"` \| `"warning"` \| `"light"` \| `"dark"`                 |               | Defines the color of button.                              |
| disabled              | `boolean`                                                                                                                                    |               | Defines if the button is disabled and not clickable.      |
| fullWidth             | `boolean`                                                                                                                                    |               | Defines if the button takes the full width of its parent. |
| orientation           | `"horizontal"` \| `"vertical"`                                                                                                               |               | Defines the axis radio group is aligned.                  |
| shape                 | `"default"` \| `"round"` \| `"square"`                                                                                                       |               | Defines the shape of the component.                       |
| size                  | `"md"` \| `"xs"` \| `"sm"` \| `"lg"` \| `"xl"`                                                                                               |               | Defines the size of the component.                        |
| style                 | `CSSProperties`                                                                                                                              |               | Styles applied to root element                            |
| variant               | `"solid"` \| `"bordered"` \| `"ghost"` \| `"flat"` \| `"clear"`                                                                              |               | Defines the variant of the component.                     |
