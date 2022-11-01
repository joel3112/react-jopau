### useBreakpoint

Current breakpoint key and boolean values for each breakpoint

#### Import

```jsx
import { useBreakpoint } from '@react-jopau/hooks';
```

#### Examples

```jsx
// Default breakpoint rules
// By default will use the default values: { xs: 650, sm: 960, md: 1280, lg: 1400, xl: 1920 }
const { key, isMobile, isTablet, isSmallDesktop, isDesktop, isLargeDesktop } = useBreakpoint();

console.log(key); // 'xs' | 'sm' | 'md' | 'lg' | 'xl'
console.log(isMobile); // true | false
console.log(isTablet); // true | false
console.log(isSmallDesktop); // true | false
console.log(isDesktop); // true | false
console.log(isLargeDesktop); // true | false
```

```jsx
// With custom breakpoint rules
// This rules will be merged with the default rules
const rules = { xs: 650, sm: 960 };
const { key } = useBreakpoint(rules);
```

#### Params

| Name  | Type               | Default value | Description              |
| ----- | ------------------ | ------------- | ------------------------ |
| rules | `BreakpointsRules` |               | Custom breakpoints rules |
