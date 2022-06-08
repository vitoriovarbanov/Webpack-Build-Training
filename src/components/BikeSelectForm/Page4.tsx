import React from 'react';
import {
    Field,
    ErrorMessage,
} from 'formik';

export const Page4 = ({ setFieldValue }: { setFieldValue: (field: string, value: string | number) => void }) => {

    return (
        <>
            <div id="budget-container" className="form-section--page-container">
                <label htmlFor="budget" className='form-label-header'>Set your maximum available budget</label>
                <div className='form-input-container'>
                    <Field name="budget" type="number" className="form-input"
                        onFocus={(e: Event & { target: HTMLInputElement }) => {
                            if (parseFloat(e.target.value) === 0) {
                                setFieldValue("budget", '')
                            }
                        }}
                    />
                    <span className='end-label-eu'>(€)</span>
                </div>
                <ErrorMessage name="budget">{msg => <div className='form-error-bottom'>{msg}</div>}</ErrorMessage>
            </div>

        </>
    )

}