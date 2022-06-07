import React from 'react';
import {
    Field,
    ErrorMessage,
} from 'formik';
import { FormValues, FormValuesTouched } from '../../App'

export const Page2 = ({ values, touched }: { values: FormValues, touched: FormValuesTouched }) => {
    const radioGroupDefinition = [
        { value: "City" },
        { value: "Mountain" },
        { value: "Road" },
        { value: "NotSure", stringRef: "Not Sure" }
    ]

    return (
        <>
            <div id="my-radio-group" className="form-section-page-container">
                <label htmlFor="height" className='form-label-header'>
                    Where are you most likely to ride your bicycle?
                </label>
                <div role="group" aria-labelledby="my-radio-group" className='radio-container-page2'>
                    {
                        radioGroupDefinition.map(x => (
                            <label className={`radio-label ${values.rideOptions === x.value ? 'is-selected' : ''}`}>
                                <Field type="radio" name="rideOptions" className='radio-input' value={x.value} />
                                <div className='radio-design'></div>
                                <div className='radio-text'>{x.stringRef || x.value}</div>
                            </label>
                        ))
                    }
                </div>
                {
                    touched.rideOptions &&
                    <ErrorMessage name="rideOptions">{msg => <div className='form-error-bottom'>{msg}</div>}</ErrorMessage>
                }
            </div>
        </>
    )

}