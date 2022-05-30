import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App';

const element = document.getElementById('root') as HTMLElement;
const root = createRoot(element)
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>, root);

