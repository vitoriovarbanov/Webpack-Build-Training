import React from 'react';
import {
    Field,
    ErrorMessage,
} from 'formik';

export const Page2 = () => {

    return (
        <>
            <div id="my-radio-group" className='header--form-page2'>
                <label htmlFor="height" className='form-label-header-sm'>
                    Where are you most likely to ride your bicycle?
                </label>
                <div role="group" aria-labelledby="my-radio-group" className='radio-group-container'>
                    <label className='radio-label'>
                        <Field type="radio" name="rideOptions" value="City" checked className='radio-input'/>
                        <div className='radio-design'></div>
                        <div className='radio-text'>City</div>
                    </label>
                    <label className='radio-label'>
                        <Field type="radio" name="rideOptions" value="Mountain" />
                        Mountain
                    </label>
                    <label className='radio-label'>
                        <Field type="radio" name="rideOptions" value="Road" />
                        Road
                    </label>
                    <label className='radio-label'>
                        <Field type="radio" name="rideOptions" value="NotSure" />
                        Not sure
                    </label>
                </div>
            </div>
        </>
    )

}