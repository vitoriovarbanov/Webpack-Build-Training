import React from 'react';
import {
    Field,
    ErrorMessage,
} from 'formik';

export const Page3 = () => {

    return (
        <>
            <div id="my-radio-group-ebike">Do you consider choosing an electical bike?</div>
            <div role="group" aria-labelledby="my-radio-group-ebike">
                <label>
                    <Field type="radio" name="electricalBike" value="No" />
                    No
                </label>
                <label>
                    <Field type="radio" name="electricalBike" value="Yes" />
                    Yes
                </label>
            </div>
        </>
    )

}