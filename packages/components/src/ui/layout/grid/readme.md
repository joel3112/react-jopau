### Grid

The layout Grid adapts to screen size and orientation, ensuring consistency across layouts.

#### Import

```jsx
import { Grid } from '@react-jopau/components';
```

#### Examples

```jsx
<Grid gap={2}>
  <Grid.Item>1 of 2</Grid.Item>
  <Grid.Item>2 of 2</Grid.Item>
</Grid>
```

#### Props

| Name                  | Type                                                                                                                                                                                                                                                              | Default value | Description                                      |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ------------------------------------------------ |
| children _(required)_ | `ReactElement<GridItemProps, string` \| `JSXElementConstructor<any>>` \| `ReactElement<GridItemProps, string` \| `JSXElementConstructor<...>>[]`                                                                                                                  |               | Defines the children of the component.           |
| align                 | `"start"` \| `"center"` \| `"end"` \| `"baseline"` \| `"stretch"`                                                                                                                                                                                                 |               | Defines the align-items style property.          |
| as                    | `"object"` \| `"div"` \| `"a"` \| `"abbr"` \| `"address"` \| `"area"` \| `"article"` \| `"aside"` \| `"audio"` \| `"b"` \| `"base"` \| `"bdi"` \| `"bdo"` \| `"blockquote"` \| `"body"` \| `"br"` \| `"button"` \| `"canvas"` \| `"caption"` \| `... 92 more ...` |               | Changes which tag component outputs              |
| className             | `string`                                                                                                                                                                                                                                                          |               | Classnames applied to root element               |
| columns               | `number`                                                                                                                                                                                                                                                          |               | Defines the number of columns of the grid        |
| direction             | `"row"` \| `"column"` \| `"row-reverse"` \| `"column-reverse"`                                                                                                                                                                                                    |               | Defines the direction of the flex container.     |
| gap                   | `number` \| `number[]` \| `{ xs?: number` \| `number[]; sm?: number` \| `number[]; md?: number` \| `number[]` \| `undefined; lg?: number` \| `number[]` \| `undefined; xl?: number` \| `number[]` \| `undefined; }` \| `undefined`                                |               | Defines the spacing between the items.           |
| justify               | `"start"` \| `"center"` \| `"end"` \| `"between"` \| `"around"` \| `"evenly"`                                                                                                                                                                                     |               | Defines the justify-content style property.      |
| style                 | `CSSProperties`                                                                                                                                                                                                                                                   |               | Styles applied to root element                   |
| wrap                  | `"wrap"` \| `"nowrap"` \| `"wrap-reverse"`                                                                                                                                                                                                                        |               | Defines if the flex container is wrapped or not. |
