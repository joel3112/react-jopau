### Avatar.Group

If you need to make a group of avatars you can use the compound component Avatar.Group and inside the avatars you want to group.

#### Import

```jsx
import { AvatarGroup } from '@react-jopau/components';
```

#### Examples

```jsx
<AvatarGroup>
  <Avatar>Jun</Avatar>
  <Avatar>Jane</Avatar>
  <Avatar>John</Avatar>
  <Avatar>JR</Avatar>
</AvatarGroup>
```

#### Props

| Name      | Type                                                                                                                                         | Default value | Description                            |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | -------------------------------------- |
| animated  | `boolean`                                                                                                                                    |               | Display animation on hover.            |
| children  | `ReactElement<AvatarProps, string` \| `JSXElementConstructor<any>>` \| `ReactElement<AvatarProps, string` \| `JSXElementConstructor<any>>[]` |               | Defines the children of the component. |
| className | `string`                                                                                                                                     |               | Classnames applied to root element     |
| count     | `number`                                                                                                                                     |               | Total count of avatars.                |
| style     | `CSSProperties`                                                                                                                              |               | Styles applied to root element         |
