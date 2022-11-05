### useBreakpoint

Get current breakpoint key and boolean values for each breakpoint.

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

| Name     | Type     | Default value | Description                 |
| -------- | -------- | ------------- | --------------------------- |
| rules    | `Object` |               | Custom breakpoints rules    |
| rules.lg | `number` |               | Large breakpoint size       |
| rules.md | `number` |               | Medium breakpoint size      |
| rules.sm | `number` |               | Small breakpoint size       |
| rules.xl | `number` |               | Extra large breakpoint size |
| rules.xs | `number` |               | Extra small breakpoint      |

#### Returns

| Name                  | Type                                   | Description                                                   |
| --------------------- | -------------------------------------- | ------------------------------------------------------------- |
| result                | `Object`                               | Current breakpoint key and boolean values for each breakpoint |
| result.isDesktop      | `boolean`                              | true if the viewport is desktop                               |
| result.isLargeDesktop | `boolean`                              | true if the viewport is large desktop                         |
| result.isMobile       | `boolean`                              | true if the viewport is mobile                                |
| result.isSmallDesktop | `boolean`                              | true if the viewport is small desktop                         |
| result.isTablet       | `boolean`                              | true if the viewport is tablet                                |
| result.key            | `"xs" \| "sm" \| "md" \| "lg" \| "xl"` | Current breakpoint key                                        |