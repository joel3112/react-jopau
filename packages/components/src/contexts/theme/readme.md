### ThemeProvider

Theme provider component that allows to define the theme and the scheme to use.

#### Import

```jsx
import { ThemeProvider } from '@react-jopau/components/contexts/theme';
```

#### Examples

```jsx
<ThemeProvider config={customConfig} darkMode={false}>
  <div>Content</div>
</ThemeProvider>
```

#### Props

| Name                  | Type          | Default value | Description                             |
| --------------------- | ------------- | ------------- | --------------------------------------- |
| children _(required)_ | `ReactNode`   |               | Defines the children of the component.  |
| config                | `ThemeConfig` |               | Defines configuration or the theme key. |
| darkMode              | `boolean`     | `false`       | Flag to enable dark mode.               |
