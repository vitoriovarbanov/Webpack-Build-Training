import React from 'react';
import logo from './assets/img/logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/index.scss';

function App() {
  return (
    <div className='App'>
      <h1>Hello from webpack</h1>
      <h1 style={{ fontSize: '64px' }}>Goodbye from webpack</h1>
      <img
        src={logo}
        className='App-logo'
        alt='logo'
        width={100}
        height={100}
      />
      <button type='button' className='btn btn-primary'>
        Primary
      </button>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
