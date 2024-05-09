import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
import { MenuContext, MenuProvider } from './Context/MenuContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MenuProvider>
    <App />
  </MenuProvider>
=======
import CaloriesContext from './CaloriesCalCulator/CaloriesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CaloriesContext>
    <App />
  </CaloriesContext>
>>>>>>> b81111bfcdb5f23ee0cadae4f96e03dc8a2ef847
);


reportWebVitals();
