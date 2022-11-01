### useFetch

Fetch data from an API endpoint, with optional success and error handlers

#### Import

```jsx
import { useFetch } from '@react-jopau/hooks';
```

#### Examples

```jsx
// Without options
const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/todos/1');

console.log(data); // { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
console.log(loading); // true | false
console.log(error); // null
```

```jsx
// With options
const { data } = useFetch('https://jsonplaceholder.typicode.com/todos', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  params: { userId: 1 },
  body: { title: 'foo', body: 'bar' }
});
```

```jsx
// With success and error handlers
const { data, error } = useFetch('https://jsonplaceholder.typicode.com/todos/1', {
  onSuccess: (res) => res.data,
  onError: (error) => throw { message: error.message }
});
```

#### Params

| Name              | Type              | Default value | Description                |
| ----------------- | ----------------- | ------------- | -------------------------- |
| options           | `UseFetchOptions` |               | Fetch options and handlers |
| path _(required)_ | `string`          |               | API endpoint               |
