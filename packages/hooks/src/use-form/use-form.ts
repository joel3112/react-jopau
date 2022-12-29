import {
  Control,
  DefaultValues,
  FieldValues,
  FormState,
  Mode,
  UseControllerProps,
  useForm as useReactHookForm,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
  UseFormSetValue
} from 'react-hook-form';
import {
  ControlValidators,
  controlWithMessage,
  registerWithMessage,
  validationErrors
} from './use-form-validators';

/**
 * @template T Type of the form control values
 */
/**
 * @callback RegisterCallback
 * @param   {string} name
 * @returns {Object} Register the form control with the given name
 */
/**
 * @callback ControlCallback
 * @param   {string} name
 * @returns {Object} The name of the control, the control object and the validation rules
 */
/**
 * @callback SetValueCallback
 * @param   {string} name
 * @param   {*} value
 * @returns {void}
 */
/**
 * @callback HandleSubmitCallback
 * @param   {Function} onValid - Callback to execute when the form is valid
 * @param   {Function} [onInvalid] - Callback to execute when the form is invalid
 * @returns {void}
 */
/**
 * @template T
 * @callback ResetCallback
 * @param   {T} [values] - Values to reset the form to
 * @returns {void}
 */
/**
 * @template T
 * @typedef  {Object} UseForm
 * @property {RegisterCallback} register - Callback to register a control
 * @property {ControlCallback} control - Callback to control a custom form component
 * @property {T} values - Current values of the controls
 * @property {Object} formState - Form state object containing information about the form and validation
 * @property {T} formState.defaultValues - Default values of the form
 * @property {T} formState.touchedFields - List of fields that have been touched
 * @property {T} formState.dirtyFields - List of fields that have been modified
 * @property {Object} formState.errors - Object containing the errors of the form
 * @property {boolean} formState.isValid - Flag to indicate if the form is valid
 * @property {boolean} formState.isValidating - Flag to indicate if the form is being validated
 * @property {boolean} formState.isSubmitted - Flag to indicate if the form has been submitted
 * @property {boolean} formState.isSubmitting - Flag to indicate if the form is submitting
 * @property {boolean} formState.isSubmitSuccessful - Flag to indicate if the form has been submitted successfully
 * @property {boolean} formState.isDirty - Flag to indicate if the form has been modified
 * @property {SetValueCallback} setValue - Method to set the value of a control
 * @property {HandleSubmitCallback} handleSubmit - Method to handle the form submission
 * @property {ResetCallback} reset - Method to reset the form to default values
 */
/**
 * Control form values, custom validation rules for each field and form submission or reset handlers.<br />
 * This hook is a wrapper around&nbsp;<a href="https://react-hook-form.com/api#useForm" target="_blank" rel="noreferrer">react-hook-form.</a>
 *
 * @template T
 * @param   {Object} [formConfig] - Form configuration options
 * @param   {T} [formConfig.defaultValues] - Default values for the controls
 * @param   {Object} [formConfig.validators] - Custom validation rules for each control
 * @param   {("onBlur"|"onChange"|"onSubmit"|"onTouched"|"all")} [formConfig.mode="onSubmit"] - Form mode validation strategy
 * @returns {UseForm} The form control values, the form state and the form handlers
 *
 * @imports import { useForm } from '@react-jopau/hooks';
 * @example
 * const { register, values } = useForm<{ username: string; password: string; }>();
 *
 * console.log(values); // { username: '', password: '' }
 *
 * return (
 *  <form>
 *    <input {...register('username')} />
 *    <input {...register('password')} />
 *  </form>
 * );
 * @example
 * // Control custom form components
 * const { control, values } = useForm();
 *
 * return (
 *  <form>
 *    <MyInput {...control('username')} />
 *    <MyInput {...control('password')} />
 *  </form>
 * );
 * @example
 * // With handleSubmit and reset handlers
 * const { register, handleSubmit, reset } = useForm();
 *
 * const onSubmit = (values) => alert(JSON.stringify(values));
 *
 * return (
 *  <form onSubmit={handleSubmit(onSubmit)}>
 *    <input {...register('username')} />
 *    <input {...register('password')} />
 *    <button type="submit">Submit</button>
 *    <button type="button" onClick={() => reset()}>Reset</button>
 *  </form>
 * );
 * @example
 * // With default values
 * const { control, values } = useForm({
 *  defaultValues: {
 *    name: 'John Doe',
 *    country: 'spain',
 *    preferences: ['football'],
 *    terms: true
 *  }
 * });
 *
 * // values = { name: 'John Doe', country: 'spain', preferences: ['football'], terms: true }
 * console.log(values);
 *
 * return (
 *  <form>
 *    <Input {...control('username')} />
 *    <Select {...control('country')}>
 *      <Select.Option value="spain">Spain</Select.Option>
 *      <Select.Option value="france">France</Select.Option>
 *      <Select.Option value="germany">Germany</Select.Option>
 *    </Select>
 *    <Checkbox.Group {...control('preferences')}>
 *      <Checkbox value="football">Football</Checkbox>
 *      <Checkbox value="basketball">Basketball</Checkbox>
 *      <Checkbox value="baseball">Baseball</Checkbox>
 *    </Checkbox.Group>
 *    <Switch {...control('terms')} />
 *  </form>
 * );
 * @example
 * // With custom validation rules and mode validation strategy
 * const { formState } = useForm({
 *  validators: {
 *    // Required and minimum length of 6 characters
 *    username: { required: true, minLength: 6 },
 *    // Validators with custom message
 *    password: { required: [true, 'Password is required'], minLength: [6, 'Password must be at least 6 characters long'] },
 *    // Custom validator function
 *    country: { validate: [(value: string) => value === 'ES', 'You must select Spain'] },
 *  },
 *  mode: 'onBlur'  // 'onBlur' | 'onChange' | 'onSubmit' | 'onTouched' | 'all'
 * });
 *
 * console.log(formState.defaultValues); // { username: '', password: '', country: '' }
 * console.log(formState.errors); // Errors object with the messages of the validation rules that failed
 * console.log(formState.isValid); // false
 * console.log(formState.isDirty); // false
 * console.log(formState.isSubmitted); // false
 * console.log(formState.isSubmitting); // false
 * console.log(formState.isSubmitSuccessful); // false
 * console.log(formState.isValidating); // false
 * console.log(formState.touchFields); // {}
 * console.log(formState.dirtyFields); // {}
 * @example
 * // With set value handler
 * const { register, setValue } = useForm();
 *
 * return (
 *  <form>
 *    <input {...register('username')} />
 *    <button onClick={() => setValue('username', 'John Doe')}>Set username</button>
 *  </form>
 * );
 */
export const useForm = <T extends FieldValues = FieldValues>(formConfig?: {
  defaultValues?: T;
  validators?: Partial<ControlValidators<T>>;
  mode?: string | 'onBlur' | 'onChange' | 'onSubmit' | 'onTouched' | 'all';
}): {
  register: UseFormRegister<T>;
  control: (name: string) => {
    name: string;
    control: Control<T>;
    rules: UseControllerProps['rules'];
  };
  values: T;
  formState: Partial<FormState<T>>;
  setValue: UseFormSetValue<T>;
  handleSubmit: UseFormHandleSubmit<T>;
  reset: UseFormReset<T>;
} => {
  const { defaultValues = {}, validators, mode = 'onSubmit' } = formConfig || {};

  const {
    register,
    control: controlReactHookForm,
    formState,
    watch,
    setValue,
    handleSubmit,
    reset
  } = useReactHookForm<T>({
    defaultValues: defaultValues as DefaultValues<T>,
    mode: mode as Mode
  });

  return {
    register: registerWithMessage<T>(register, validators),
    control: controlWithMessage<T>(controlReactHookForm, validators),
    values: watch() as T,
    formState: {
      defaultValues: formState.defaultValues,
      touchedFields: formState.touchedFields,
      dirtyFields: formState.dirtyFields,
      errors: validationErrors<T>(formState.errors),
      isValid: formState.isValid,
      isValidating: formState.isValidating,
      isSubmitted: formState.isSubmitted,
      isSubmitting: formState.isSubmitting,
      isSubmitSuccessful: formState.isSubmitSuccessful,
      isDirty: formState.isDirty
    },
    setValue,
    handleSubmit,
    reset
  };
};
