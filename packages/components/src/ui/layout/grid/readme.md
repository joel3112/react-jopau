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

| Name                  | Type                                                                                                                                                                       | Default value | Description                                      |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ------------------------------------------------ |
| children _(required)_ | `ReactElement<GridItemProps, string` \| `JSXElementConstructor<any>>` \| `ReactElement<GridItemProps, string` \| `JSXElementConstructor<...>>[]`                           |               | Defines the children of the component.           |
| align                 | `"start"` \| `"center"` \| `"end"` \| `"baseline"` \| `"stretch"`                                                                                                          |               | Defines the align-items style property.          |
| as                    | `keyof HTMLElementTagNameMap`                                                                                                                                              |               | Changes which tag component outputs              |
| className             | `string`                                                                                                                                                                   |               | Classnames applied to root element               |
| columns               | `number`                                                                                                                                                                   |               | Defines the number of columns of the grid        |
| direction             | `"row"` \| `"column"` \| `"row-reverse"` \| `"column-reverse"`                                                                                                             |               | Defines the direction of the flex container.     |
| gap                   | `number` \| `number[]` \| `Partial<{ xs: number` \| `number[]; sm: number` \| `number[]; md: number` \| `number[]; lg: number` \| `number[]; xl: number` \| `number[]; }>` |               | Defines the spacing between the items.           |
| justify               | `"start"` \| `"center"` \| `"end"` \| `"between"` \| `"around"` \| `"evenly"`                                                                                              |               | Defines the justify-content style property.      |
| style                 | `CSSProperties`                                                                                                                                                            |               | Styles applied to root element                   |
| wrap                  | `Wrap`                                                                                                                                                                     |               | Defines if the flex container is wrapped or not. |
