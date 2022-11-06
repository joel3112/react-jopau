<h1 align="center">@react-jopau/styles 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/@react-jopau/styles" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@react-jopau/styles.svg">
  </a>
</p>

> Common styles and themes for React projects

## Install

```sh
yarn install @react-jopau/styles
```

## Usage

### createBreakpoints

Function to create a breakpoints helper from rules.

```tsx
import { createBreakpoints } from '@react-jopau/styles/breakpoint';

...
const rules = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};
const config = createBreakpoints(rules);

// Custom theme key
console.log(config.current); // 'xs' | 'sm' | 'md' | 'lg' | 'xl'
// Check if current theme is down to 'sm'
console.log(config.down('sm')); // true | false
// Check if current theme is up to 'sm'
console.log(config.up('sm')); // true | false
// Check if current theme is between 'sm' and 'xl'
console.log(config.between('sm', 'xl')); // true | false
...
```

### ThemeBuilder

Class to create a theme builder from theme keys or configuration.

1. Available keys:

- [`default`](https://github.com/joel3112/react-jopau/blob/main/packages/styles/src/themes/default.ts)
- [`purple`](https://github.com/joel3112/react-jopau/blob/main/packages/styles/src/themes/purple.ts)

```tsx
import { ThemeBuilder } from '@react-jopau/styles/ThemeBuilder';

...
const builder = new ThemeBuilder();

builder.createTheme('default');
...
```

2. Custom configuration:

You can create a custom theme with the following [configuration](https://github.com/joel3112/react-jopau/blob/main/packages/styles/src/themes/types.d.ts).

```tsx
import { ThemeBuilder } from '@react-jopau/styles/ThemeBuilder';

...
const builder = new ThemeBuilder();

builder.createTheme({
  theme: {
    colors: {
      light: {
        primary: '#20232a',
        secondary: '#04cffa',
        text: '#000',
        background: '#fcfcfc',
      },
      dark: {
        primary: '#20232a',
        secondary: '#04cffa',
        text: '#fff',
        background: '#1d1f20',
      }
    },
  },
  media: {
    xs: 650,
    sm: 960,
    md: 1280,
    lg: 1400,
    xl: 1920
  },
});

// Breakpoints rules
console.log(builder.breakpoints);

// Styled your components
const ButtonStyled = builder.styledTheme('button', {
  boder: '1px solid #000',
  height: 58,
});

const Button = () => <ButtonStyled>Click me</ButtonStyled>;
...
```

### ThemeProvider

Component to provide a theme to the application. You can pass a theme key or a custom theme configuration.  
The dark mode is passed as a prop to the component.

```tsx
...
import { ThemeProvider } from '@react-jopau/styles/ThemeProvider';

<ThemeProvider config={config} darkMode>
  <App />
</ThemeProvider>
...
```

## Author

- Github: [@joel3112](https://github.com/joel3112)
