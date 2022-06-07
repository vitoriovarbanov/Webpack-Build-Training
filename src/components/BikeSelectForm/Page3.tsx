import React from 'react';
import {
    Field,
    ErrorMessage,
} from 'formik';
import { FormValues, FormValuesTouched } from '../../App'

export const Page3 = ({ values, touched }: { values: FormValues, touched: FormValuesTouched }) : JSX.Element => {
    const radioGroupDefinition = [
        { value: "No" },
        { value: "Yes" },
    ]

    return (
        <>
            <div className="form-section-page-container" id="my-radio-group-ebike">
                <label htmlFor="height" className='form-label-header'>Do you consider buying an e-bike?</label>
                <div role="group" aria-labelledby="my-radio-group-ebike" className='radio-container-page3'>
                    {
                        radioGroupDefinition.map(x => (
                            <label className={`radio-label ${values.electricalBike === x.value ? 'is-selected' : ''}`}>
                                <Field type="radio" name="electricalBike" className='radio-input' value={x.value} />
                                <div className='radio-design'></div>
                                <div className='radio-text'>{x.value}</div>
                            </label>
                        ))
                    }
                </div>
                {
                    touched.rideOptions &&
                    <ErrorMessage name="electricalBike">{msg => <div className='form-error-bottom'>{msg}</div>}</ErrorMessage>
                }
            </div>
        </>
    )

}