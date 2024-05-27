import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
<<<<<<< HEAD
import reportWebVitals from './reportWebVitals';
import { MenuContext, MenuProvider } from './Context/MenuContext';


import CaloriesContext from './CaloriesCalCulator/CaloriesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CaloriesContext>
  <MenuProvider>

    <App />
  </MenuProvider>
  </CaloriesContext>

);


reportWebVitals();
=======
import { MenuProvider } from './Context/MenuContext';
import CaloriesContext from './Context/CaloriesContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MenuProvider>
    <CaloriesContext>
    <App />
    </CaloriesContext>
  </MenuProvider>)
>>>>>>> a06c60eaf17ff86a8ac4f04aaa7e06396050765b
