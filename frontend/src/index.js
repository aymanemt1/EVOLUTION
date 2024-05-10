import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MenuProvider } from './Context/MenuContext';
import CaloriesContext from './Context/CaloriesContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MenuProvider>
    <CaloriesContext>
    <App />
    </CaloriesContext>
  </MenuProvider>)
