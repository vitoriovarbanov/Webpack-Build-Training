import React from 'react';
import {
    Field
} from 'formik';
import { FormValues } from '../../App';

export const Page5 = ({ values }: { values: FormValues }) => {
    const checkboxGroupDefinition = [
        { value: "Cube" },
        { value: "Cross" },
        { value: "Specialized" },
        { value: "Giant" },
        { value: "Trek" },
        { value: "Kona" },
        { value: "Scott" },
        { value: "Santa Cruz" },
        { value: "Canyon" },
        { value: "Ultra" },
    ]

    const isBrandSelected = (valueSelected: string) : boolean => {
        const brandIncluded = values.brandPreferences.find(x=>x === valueSelected)
        if(brandIncluded){
            return true
        }
        return false
    }

    return (
        <>
            <div className="form-section--page-container">
                <label htmlFor="height" className='form-label-header' id="my-checkbox-group">
                    Do you have any brand preferences?
                </label>
                <div role="group" aria-labelledby="my-checkbox-group" className='radio-container-page5'>
                    {
                        checkboxGroupDefinition.map(x => (
                            <label className={`radio-label ${isBrandSelected(x.value) ? 'is-selected' : ''}`}>
                                <Field type="checkbox" name="brandPreferences" className='radio-input' value={x.value} />
                                <div className='radio-design'></div>
                                <div className='radio-text'>{x.value}</div>
                            </label>
                        ))
                    }
                </div>
            </div>
        </>
    )

}


