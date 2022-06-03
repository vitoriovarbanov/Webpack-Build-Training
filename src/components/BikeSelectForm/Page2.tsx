import React from 'react';
import {
    Field,
    ErrorMessage,
} from 'formik';

export const Page2 = () => {

    return (
        <>
            <div id="my-radio-group">Where are you most likely to ride your bicycle?</div>
            <div role="group" aria-labelledby="my-radio-group">
                <label>
                    <Field type="radio" name="rideOptions" value="City" checked />
                    City
                </label>
                <label>
                    <Field type="radio" name="rideOptions" value="Mountain" />
                    Mountain
                </label>
                <label>
                    <Field type="radio" name="rideOptions" value="Road" />
                    Road
                </label>
                <label>
                    <Field type="radio" name="rideOptions" value="NotSure" />
                    Not sure
                </label>
            </div>
        </>
    )

}