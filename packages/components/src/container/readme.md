### Container

Containers are used to constrain a content\x27s width to the current breakpoint.

#### Props

| Name                  | Type                   | Default value | Description                                                   |
| --------------------- | ---------------------- | ------------- | ------------------------------------------------------------- |
| centered              | `boolean`              | `false`       | Centered horizontally the container.                          |
| children _(required)_ | `ReactNode`            |               | Defines the children of the component.                        |
| className             | `string`               |               | Classnames applied to root element                            |
| gap                   | `number` \| `number[]` |               | Defines the gap horizontally and vertically in the container. |
| maxWidth              | `number`               | `1500`        | Maximum width of the container.                               |
| style                 | `CSSProperties`        |               | Styles applied to root element                                |