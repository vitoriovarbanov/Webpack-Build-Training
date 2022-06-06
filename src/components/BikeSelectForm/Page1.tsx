import React from 'react';
import {
  Field,
  ErrorMessage,
  useFormikContext
} from 'formik';

interface FormikActions<Values> {
  setFieldValue<Field extends keyof Values>(
    field: Field,
    value: Values[Field],
    shouldValidate?: boolean
  ): void;
}

export const Page1 = ({ onChangeFn, setFieldValue }:
  { onChangeFn: (value: Event & { target: HTMLInputElement }) => void, setFieldValue: (field: string, value: string | number) => void }) => {
  return (
    <div className="header--form-page1">
      <label htmlFor="height" className='form-label-header'>Enter your height</label>
      <div className='form-input-container'>
        <Field name="height" type="number" className="form-input" min="10" max="250"
          onFocus={(e: Event & { target: HTMLInputElement }) => {
            if (parseFloat(e.target.value) === 0) {
              setFieldValue("height", '')
            }
          }}
          onChange={(e: Event & { target: HTMLInputElement }) => {
            if (parseFloat(e.target.value) > 999) {
              return
            }
            onChangeFn(e)
          }} />
        <span>cm</span>
      </div>
      <ErrorMessage name="height" />
    </div>
  )

}

/* export const Checkbox = ({ id, name, className, label, value }: Props): JSX.Element => (
  <Field
    name={name}
    value={value}
    render={({ field }: FieldProps) => {
      console.log(field)
      return (
        <>
          <input
            id={id}
            {...field}
            type="checkbox"
            className={className}
          />
          <label>{label}</label>
        </>
      )
    }}
  />
); */

/* interface ComponentProps<T> {
  config: FieldHookConfig<T>;
  label: string;
  name: string;
}

interface OtherProps {
  label: string
}

const MyTextInput = (props: OtherProps & FieldHookConfig<string>) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        className='text-input'
        {...field}
        placeholder={props.placeholder}
        type={props.type}
      />
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </>
  );
};

type CheckboxProps = {
  props: FieldHookConfig<string>;
  children?: React.ReactNode;
};

const MyCheckbox = ({ children, ...props } : CheckboxProps) => {
  console.log(props)
  // React treats radios and checkbox inputs differently other input types, select, and textarea.
  // Formik does this too! When you specify `type` to useField(), it will
  // return the correct bag of props for you -- a `checked` prop will be included
  // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <div>
      <label className="checkbox-input">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MySelect = (props: OtherProps & FieldHookConfig<string>) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{props.label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
}; */


/* SELECT 
          <Field name="colors" as="select" className="my-select">
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </Field> */

/* TEXT INPUT
          <label htmlFor="email">Email Address</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" /> */