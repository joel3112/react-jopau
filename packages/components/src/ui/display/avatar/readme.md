### Avatar

The Avatar component is used to represent a user, and displays the profile picture, initials or fallback icon.

#### Import

```jsx
import { Avatar } from '@react-jopau/components';
```

#### Examples

```jsx
<Avatar size="xl" src="https://via.placeholder.com/150" />
```

#### Props

| Name      | Type                                                                                                                                     | Default value | Description                                             |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ------------------------------------------------------- |
| bordered  | `boolean`                                                                                                                                |               | Defines if the avatar is bordered. Only works with src. |
| children  | `string`                                                                                                                                 |               | Defines the children of the component.                  |
| className | `string`                                                                                                                                 |               | Classnames applied to root element                      |
| color     | `"default"` \| `"primary"` \| `"secondary"` \| `"tertiary"` \| `"info"` \| `"error"` \| `"success"` \| `"warning"`                       |               | Defines the color of avatar.                            |
| icon      | `ReactNode`                                                                                                                              |               | Shows an icon in the avatar.                            |
| pointer   | `boolean`                                                                                                                                |               | Display pointer cursor on hover.                        |
| size      | `number` \| `"xs"` \| `"sm"` \| `"md"` \| `"lg"` \| `"xl"` \| `Partial<{ xs: number; sm: number; md: number; lg: number; xl: number; }>` |               | Defines the size of the component.                      |
| squared   | `boolean`                                                                                                                                |               | Defines the square shape of the component.              |
| src       | `string`                                                                                                                                 |               | Defines the image source of the component.              |
| style     | `CSSProperties`                                                                                                                          |               | Styles applied to root element                          |
| zoomed    | `boolean`                                                                                                                                |               | Defines if the avatar is zoomed. Only works with src.   |
