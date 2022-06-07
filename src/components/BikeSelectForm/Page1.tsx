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
    <>
      <div className="form-section-page-container">
        <label htmlFor="height" className='form-label-header'>Enter your height</label>
        <div className='form-input-container'>
          <Field name="height" type="number" className="form-input"
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
          <span className='end-label-cm'>cm</span>
        </div>
      <ErrorMessage name="height">{msg => <div className='form-error-center'>{msg}</div>}</ErrorMessage>
      </div>
    </>
  )
}
