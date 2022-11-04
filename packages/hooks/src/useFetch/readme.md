### useFetch

Fetch data from an API endpoint, with optional success and error handlers.

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

| Name              | Type                                              | Default value                   | Description                |
| ----------------- | ------------------------------------------------- | ------------------------------- | -------------------------- |
| options           | `Object`                                          |                                 | Fetch options and handlers |
| options.body      | `Object`                                          |                                 | Request body               |
| options.headers   | `Object`                                          |                                 | Request headers            |
| options.method    | `"GET" \| "POST" \| "PUT" \| "PATCH" \| "DELETE"` | `GET`                           | HTTP method                |
| options.onError   | `function`                                        | `(error) =\x3E { throw error }` | Error handler              |
| options.onSuccess | `function`                                        | `(res) =\x3E res.data`          | Success handler            |
| options.params    | `Object`                                          |                                 | Query params               |
| path _(required)_ | `string`                                          |                                 | API endpoint               |

#### Returns

| Name           | Type      | Description                              |
| -------------- | --------- | ---------------------------------------- |
| result         | `Object`  |                                          |
| result.data    | `Object`  | Data returned by the fetch               |
| result.error   | `Object`  | Error returned by the fetch              |
| result.loading | `boolean` | Flag to indicate if the fetch is loading |
