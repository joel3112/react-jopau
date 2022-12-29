import {
  Control,
  FieldErrors,
  FieldPath,
  FieldValues,
  UseControllerProps,
  UseFormRegister
} from 'react-hook-form';

export type ControlValidators<T extends FieldValues> = Record<keyof T, ControlValidatorRules>;
export type ControlValidatorRules = {
  required?: boolean | [boolean, string];
  minLength?: number | [number, string];
  maxLength?: number | [number, string];
  min?: number | [number, string];
  max?: number | [number, string];
  pattern?: RegExp | [RegExp, string];
  validate?:
    | ((value: never) => boolean | Promise<boolean>)
    | [(value: never) => boolean | Promise<boolean>, string];
};

const rulesWithMessage = <T extends FieldValues>(rules: ControlValidatorRules) => {
  if (!rules) return undefined;

  return Object.entries(rules || {}).reduce((acc, [rule, ruleValue]) => {
    const [value, message] = Array.isArray(ruleValue) ? ruleValue : [ruleValue, ''];
    return {
      ...acc,
      [rule]:
        rule === 'validate'
          ? (v: never) => (typeof value === 'function' && !value(v) ? message : undefined)
          : { value, message }
    };
  }, {} as UseControllerProps<T>['rules']);
};

export const registerWithMessage = <T extends FieldValues>(
  register: UseFormRegister<T>,
  validators?: Partial<ControlValidators<T>>
) => {
  return ((name: string) =>
    register(
      name as FieldPath<T>,
      rulesWithMessage<T>(validators?.[name] || {})
    )) as UseFormRegister<T>;
};

export const controlWithMessage = <T extends FieldValues>(
  control: Control<T>,
  validators?: Partial<ControlValidators<T>>
) => {
  return (name: string) => ({
    control,
    rules: rulesWithMessage<T>(validators?.[name] || {}),
    name
  });
};

export const validationErrors = <T extends FieldValues>(errors: FieldErrors<T>) => {
  return Object.entries(errors).reduce((acc, [key, { type, message }]) => {
    return {
      ...acc,
      [key]: { type, message }
    };
  }, {} as FieldErrors<T>);
};
