### useFetch

Fetch data from an API endpoint, with optional success and error handlers.

#### Import

```tsx
import { useFetch } from '@react-jopau/hooks';
```

#### Examples

```tsx
// Without options
type Data = { id: number; title: string };
type Error = { message: string };

const { data, loading, error } = useFetch<Data, Error>(
  'https://jsonplaceholder.typicode.com/todos/1'
);

console.log(loading); // true | false
console.log(data); // { id: 1, title: 'delectus aut autem' }
console.log(error); // null | { message: '...' }
```

```tsx
// With options
const { data } = useFetch('https://jsonplaceholder.typicode.com/todos', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  params: { userId: 1 },
  body: { title: 'foo', body: 'bar' }
});
```

```tsx
// With success and error handlers
const { data, error } = useFetch<{}, Error>('https://jsonplaceholder.typicode.com/todos/1', {
  onSuccess: (res) => res.data,
  onError: (error) => {
    throw { message: error.message };
  }
});
```

#### Params

| Name              | Type                                              | Default value                | Description                |
| ----------------- | ------------------------------------------------- | ---------------------------- | -------------------------- |
| path _(required)_ | `string`                                          |                              | API endpoint               |
| options           | `Object`                                          |                              | Fetch options and handlers |
| options.body      | `Object`                                          |                              | Request body               |
| options.headers   | `Object`                                          |                              | Request headers            |
| options.method    | `"GET" \| "POST" \| "PUT" \| "PATCH" \| "DELETE"` | `GET`                        | HTTP method                |
| options.onError   | `(data: Object) => { throw U \| null }`           | `(error) => { throw error }` | Error handler              |
| options.onSuccess | `(data: Object) => T \| null`                     | `(res) => res.data`          | Success handler            |
| options.params    | `Object`                                          |                              | Query params               |

#### Returns

| Name           | Type        | Description                              |
| -------------- | ----------- | ---------------------------------------- |
| result.data    | `T \| null` | Data returned by the fetch               |
| result.error   | `U \| null` | Error returned by the fetch              |
| result.loading | `boolean`   | Flag to indicate if the fetch is loading |
