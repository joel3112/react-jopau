### Header

Header component with logo, title and actions area.

#### Import

```jsx
import { Header } from '@react-jopau/components';
```

#### Examples

```jsx
<Header title="Title" logo={() => <img src="./images/logo.png" alt="Logo" />}>
  <div>Action 1</div>
</Header>
```

#### Props

| Name      | Type                                                       | Default value | Description                                   |
| --------- | ---------------------------------------------------------- | ------------- | --------------------------------------------- |
| children  | `ReactNode`                                                |               | Defines the children of the component.        |
| className | `string`                                                   |               | Classnames applied to root element            |
| logo      | `ReactNode`                                                |               | Defines the render of the logo.               |
| maxWidth  | `number` \| `"xs"` \| `"sm"` \| `"md"` \| `"lg"` \| `"xl"` |               | Maximum width of the container or breakpoint. |
| style     | `CSSProperties`                                            |               | Styles applied to root element                |
| title     | `string`                                                   |               | Title of the header.                          |
