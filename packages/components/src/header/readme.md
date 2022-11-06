### Header

Header component with logo, title and actions area.

#### Props

| Name       | Type              | Default value | Description                            |
| ---------- | ----------------- | ------------- | -------------------------------------- |
| children   | `ReactNode`       |               | Defines the children of the component. |
| className  | `string`          |               | Classnames applied to root element     |
| href       | `string`          | `/`           | Defines the logo href of the header.   |
| renderLogo | `() => ReactNode` |               | Defines the render of the logo.        |
| style      | `CSSProperties`   |               | Styles applied to root element         |
| title      | `string`          |               | Title of the header.                   |
