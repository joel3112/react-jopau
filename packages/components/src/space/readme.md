### Space

Component flexbox-based spacing.

#### Props

| Name                  | Type                                                           | Default value | Description                                               |
| --------------------- | -------------------------------------------------------------- | ------------- | --------------------------------------------------------- |
| align                 | `AlignSpace`                                                   |               | Defines the align-items style property.                   |
| children _(required)_ | `ReactNode`                                                    |               | Defines the children of the component.                    |
| className             | `string`                                                       |               | Classnames applied to root element                        |
| direction             | `"row"` \| `"column"` \| `"row-reverse"` \| `"column-reverse"` | `row`         | Defines the direction of the flex container.              |
| gap                   | `number` \| `number[]`                                         |               | Defines the gap between the flex container\x27s children. |
| justify               | `JustifySpace`                                                 |               | Defines the justify-content style property.               |
| style                 | `CSSProperties`                                                |               | Styles applied to root element                            |
| wrap                  | `boolean`                                                      |               | Defines if the flex container is wrapped or not.          |
