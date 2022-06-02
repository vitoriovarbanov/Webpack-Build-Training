import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/index.scss';
// import mainLogo from './assets/img/logo-main.png';
import { useFormik } from 'formik';

function SignupForm() {
  // Note that we have to initialize ALL of fields with values. These
  // could come from props, but since we don’t want to prefill this form,
  // we just use an empty string. If we don’t do this, React will yell
  // at us.
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: ''
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <form onSubmit={formik.handleSubmit} className='header--form'>
      <label htmlFor='firstName'>
        <input
          id='firstName'
          name='firstName'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        First Name
      </label>

      <label htmlFor='lastName'>
        <input
          id='lastName'
          name='lastName'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        Last Name
      </label>

      <label htmlFor='email'>
        <input
          id='email'
          name='email'
          type='email'
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        Email Address
      </label>

      <button type='submit'>Submit</button>
    </form>
  );
}

function App() {
  return (
    <div className='App'>
      <header className='header'>
        <div className='header--shadow' />
        <SignupForm />
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
}

export default App;
