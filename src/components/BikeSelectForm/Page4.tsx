import React from 'react';
import {
    Field,
    ErrorMessage,
} from 'formik';

export const Page4 = () => {

    return (
        <>
            <div id="budget-container">
                <label htmlFor="budget">Set your maximum available budget</label>
                <Field name="budget" type="number" />
                <ErrorMessage name="budget" />
            </div>

        </>
    )

}