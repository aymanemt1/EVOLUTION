import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
<<<<<<< HEAD
import reportWebVitals from './reportWebVitals';
import { MenuContext, MenuProvider } from './Context/MenuContext';


import CaloriesContext from './CaloriesCalCulator/CaloriesContext';
import {  MenuProvider } from './Context/MenuContext';
import { StepsProvider } from './Context/StepCheckoutcontext';
import { CartProvider } from './Context/CartContext';
import { WishlistProvider } from './Context/WishlistContext';
import { GoogleOAuthProvider } from "@react-oauth/google"
import { AuthProvider } from './Context/AuthContext';
import { OrderProvider } from './Context/OrderContext';
import { SellerProvider } from './Context/Sellercontext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CaloriesContext>
  <GoogleOAuthProvider clientId='1009282809407-sh8h2kgmot2q295a503sl5530pldnaj9.apps.googleusercontent.com'>
  <AuthProvider>
  <OrderProvider>
  <MenuProvider>

  <StepsProvider>
  <CartProvider>
  <WishlistProvider>
  <SellerProvider>
    <App />
  </SellerProvider>
  </WishlistProvider>
  </CartProvider>
  </StepsProvider>
  </MenuProvider>
  </CaloriesContext>

  </OrderProvider>
  </AuthProvider>
  </GoogleOAuthProvider>
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
