import React from 'react';
import {
    Field
} from 'formik';

export const Page5 = () => {

    return (
        <>
            <div id="my-checkbox-group">Do you have any brand preferences?</div>
            <div role="group" aria-labelledby="my-checkbox-group">
                <label>
                    <Field type="checkbox" name="brandPreferences" value="Cube" />
                    Cube
                </label>
                <label>
                    <Field type="checkbox" name="brandPreferences" value="Cross" />
                    Cross
                </label>
                <label>
                    <Field type="checkbox" name="brandPreferences" value="Specialized" />
                    Specialized
                </label>
                <label>
                    <Field type="checkbox" name="brandPreferences" value="Giant" />
                    Giant
                </label>
            </div>
        </>
    )

}


