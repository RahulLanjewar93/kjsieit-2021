import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ProductProvider} from './Components/Dashboard/context';

ReactDOM.render(
  <ProductProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode></ProductProvider>,
  document.getElementById('root')

);
