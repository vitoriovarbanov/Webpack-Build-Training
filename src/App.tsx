import React, { FormEventHandler, useEffect, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/index.scss';
import * as Yup from 'yup';
import {
  Formik,
  Field,
  Form,
  ErrorMessage,
  useField,
  FieldHookConfig,
  useFormikContext,
  FieldProps
} from 'formik';
import { Page1 } from './components/BikeSelectForm/Page1';
import { Page2 } from './components/BikeSelectForm/Page2';
import { Page3 } from './components/BikeSelectForm/Page3';
import { Page4 } from './components/BikeSelectForm/Page4';
import { Page5 } from './components/BikeSelectForm/Page5';


enum RideOptions {
  City = "City",
  Mountain = "Mountain",
  Road = "Road",
  NotSure = "NotSure"
}

enum ElectricalBikeEnum {
  No = "No",
  Yes = "Yes",
}

interface FormValues {
  height: number;
  rideOptions: RideOptions;
  electricalBike: ElectricalBikeEnum;
  budget: number;
  brandPreferences: string[]
}

const FormObserver = (): null => {
  const { values } = useFormikContext();
  useEffect(() => {
    console.log("FormObserver::values", values);
  }, [values]);
  return null;
};

const formPages = [Page1, Page2, Page3, Page4, Page5]

const BikeSelectionForm = (): JSX.Element => {
  const [page, setPage] = useState<number>(0) 

  return (
    <Formik<FormValues, {}>
      initialValues={{ height: 0, rideOptions: RideOptions.City, electricalBike: ElectricalBikeEnum.No, budget: 0, brandPreferences: [] }}
      validationSchema={Yup.object({
        height: Yup.number()
          .max(300, 'Enter a value less than 300')
          .required('Required'),
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required')
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          //await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {
        ({ values, setFieldValue, handleChange }) => (
          <Form className='header--form'>
            <FormObserver />
            {
              formPages.map((Component,i)=>{
                return (
                  <React.Fragment key={i}>
                    {
                      i === page && <Component onChangeFn={handleChange} setFieldValue={setFieldValue}/>
                    }                   
                  </React.Fragment>
                )
              })
            }
            {
              page !== formPages.length - 1
                ? <button type='submit' className='btn-primary btn-md floated-right' onClick={() => setPage(page + 1)}>Proceed</button>
                : <button type='submit' className='btn-primary btn-md'>Submit</button>
            }
          </Form>
        )
      }
    </Formik>
  );
};

const App = () => {
  return (
    <div className='App'>
      <header className='header'>
        <div className='header--shadow' />
        <BikeSelectionForm />
        {/* <img
          src={mainLogo}
          alt='website logo'
          height={200}
          width={200}
          className='header--logo'
        />
        <div className='header--container-heading'>
          <h1 className='heading-primary'>
            <span>Bike Matcher</span>
          </h1>
          <h3 className='heading-tertiary'>
            <span>Find the perfect bicycle for you</span>
          </h3>
          <button className='btn-primary mt-2' type='button'>
            Make a match
          </button>
        </div> */}
      </header>
    </div>
  );
};

export default App;
