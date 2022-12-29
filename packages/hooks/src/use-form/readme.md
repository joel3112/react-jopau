### useForm

Control form values, custom validation rules for each field and form submission or reset handlers.<br />
This hook is a wrapper around <a href="https://react-hook-form.com/api#useForm" target="_blank" rel="noreferrer">react-hook-form.</a>

#### Import

```tsx
import { useForm } from '@react-jopau/hooks';
```

#### Examples

```tsx
const { register, values } = useForm<{ username: string; password: string }>();

console.log(values); // { username: '', password: '' }

return (
  <form>
    <input {...register('username')} />
    <input {...register('password')} />
  </form>
);
```

```tsx
// Control custom form components
const { control, values } = useForm();

return (
  <form>
    <MyInput {...control('username')} />
    <MyInput {...control('password')} />
  </form>
);
```

```tsx
// With handleSubmit and reset handlers
const { register, handleSubmit, reset } = useForm();

const onSubmit = (values) => alert(JSON.stringify(values));

return (
  <form onSubmit={handleSubmit(onSubmit)}>
    <input {...register('username')} />
    <input {...register('password')} />
    <button type="submit">Submit</button>
    <button type="button" onClick={() => reset()}>
      Reset
    </button>
  </form>
);
```

```tsx
// With default values
const { control, values } = useForm({
  defaultValues: {
    name: 'John Doe',
    country: 'spain',
    preferences: ['football'],
    terms: true
  }
});

// values = { name: 'John Doe', country: 'spain', preferences: ['football'], terms: true }
console.log(values);

return (
  <form>
    <Input {...control('username')} />
    <Select {...control('country')}>
      <Select.Option value="spain">Spain</Select.Option>
      <Select.Option value="france">France</Select.Option>
      <Select.Option value="germany">Germany</Select.Option>
    </Select>
    <Checkbox.Group {...control('preferences')}>
      <Checkbox value="football">Football</Checkbox>
      <Checkbox value="basketball">Basketball</Checkbox>
      <Checkbox value="baseball">Baseball</Checkbox>
    </Checkbox.Group>
    <Switch {...control('terms')} />
  </form>
);
```

```tsx
// With custom validation rules and mode validation strategy
const { formState } = useForm({
  validators: {
    // Required and minimum length of 6 characters
    username: { required: true, minLength: 6 },
    // Validators with custom message
    password: {
      required: [true, 'Password is required'],
      minLength: [6, 'Password must be at least 6 characters long']
    },
    // Custom validator function
    country: { validate: [(value: string) => value === 'ES', 'You must select Spain'] }
  },
  mode: 'onBlur' // 'onBlur' | 'onChange' | 'onSubmit' | 'onTouched' | 'all'
});

console.log(formState.defaultValues); // { username: '', password: '', country: '' }
console.log(formState.errors); // Errors object with the messages of the validation rules that failed
console.log(formState.isValid); // false
console.log(formState.isDirty); // false
console.log(formState.isSubmitted); // false
console.log(formState.isSubmitting); // false
console.log(formState.isSubmitSuccessful); // false
console.log(formState.isValidating); // false
console.log(formState.touchFields); // {}
console.log(formState.dirtyFields); // {}
```

```tsx
// With set value handler
const { register, setValue } = useForm();

return (
  <form>
    <input {...register('username')} />
    <button onClick={() => setValue('username', 'John Doe')}>Set username</button>
  </form>
);
```

#### Params

| Name                     | Type                                                           | Default value      | Description                              |
| ------------------------ | -------------------------------------------------------------- | ------------------ | ---------------------------------------- |
| formConfig               | `Object`                                                       |                    | Form configuration options               |
| formConfig.defaultValues | `T`                                                            |                    | Default values for the controls          |
| formConfig.mode          | `"onBlur" \| "onChange" \| "onSubmit" \| "onTouched" \| "all"` | `\x22onSubmit\x22` | Form mode validation strategy            |
| formConfig.validators    | `Object`                                                       |                    | Custom validation rules for each control |

#### Returns

| Name                                | Type                                              | Description                                                            |
| ----------------------------------- | ------------------------------------------------- | ---------------------------------------------------------------------- |
| result.control                      | `(name: string) => Object`                        | Callback to control a custom form component                            |
| result.formState                    | `Object`                                          | Form state object containing information about the form and validation |
| result.formState.defaultValues      | `T`                                               | Default values of the form                                             |
| result.formState.dirtyFields        | `T`                                               | List of fields that have been modified                                 |
| result.formState.errors             | `Object`                                          | Object containing the errors of the form                               |
| result.formState.isDirty            | `boolean`                                         | Flag to indicate if the form has been modified                         |
| result.formState.isSubmitSuccessful | `boolean`                                         | Flag to indicate if the form has been submitted successfully           |
| result.formState.isSubmitted        | `boolean`                                         | Flag to indicate if the form has been submitted                        |
| result.formState.isSubmitting       | `boolean`                                         | Flag to indicate if the form is submitting                             |
| result.formState.isValid            | `boolean`                                         | Flag to indicate if the form is valid                                  |
| result.formState.isValidating       | `boolean`                                         | Flag to indicate if the form is being validated                        |
| result.formState.touchedFields      | `T`                                               | List of fields that have been touched                                  |
| result.handleSubmit                 | `(onValid: function,onInvalid: function) => void` | Method to handle the form submission                                   |
| result.register                     | `(name: string) => Object`                        | Callback to register a control                                         |
| result.reset                        | `(values: T) => void`                             | Method to reset the form to default values                             |
| result.setValue                     | `(name: string,value: *) => void`                 | Method to set the value of a control                                   |
| result.values                       | `T`                                               | Current values of the controls                                         |
