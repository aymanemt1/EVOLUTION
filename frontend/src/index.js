import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CaloriesContext from './CaloriesCalCulator/CaloriesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CaloriesContext>
    <App />
  </CaloriesContext>
);


reportWebVitals();
