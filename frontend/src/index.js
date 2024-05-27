import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
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
  </OrderProvider>
  </AuthProvider>
  </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
