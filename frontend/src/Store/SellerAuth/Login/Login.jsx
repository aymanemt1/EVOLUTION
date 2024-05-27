import React, { useContext, useState } from 'react'
import { Outlet, useNavigate } from 'react-router';
import axios from 'axios';
import '../SellerAuth.css'
import { Link } from 'react-router-dom';
import { SellerContext } from '../../../Context/Sellercontext';

export const LoginSeller = () => {
    const userId = localStorage.getItem('id_active');
   const {seller}= useContext(SellerContext)
  
    const nav = useNavigate()
      const [formData,setformData] = useState({
        nameseller: '',
        emailseller: '',
       })
      const [Errors,setErrors] = useState({})
      
      const handleChange = (e) => {
        setformData({...formData,[e.target.name] : e.target.value})
        setErrors({ ...Errors, [e.target.name]: '' });
    
    }
    
    const validateForm = () => {
      const validationErrors = {};
    
      if (formData.nameseller.trim() === '') {
          validationErrors.nameseller = "nameseller required";
      }else if (/\d/.test(formData.nameseller)) {
        validationErrors.nameseller = "invalide";
      }
      if (formData.emailseller.trim() === '') {
          validationErrors.emailseller = "emailseller required";
      } else if (!/\S+@\S+\.\S+/.test(formData.emailseller)) {
      validationErrors.emailseller = "invalid";
      }
    
      setErrors(validationErrors);
    
      return Object.keys(validationErrors).length === 0;
    };
    
    const LoginSeller = (e) => {
    e.preventDefault()
     
    if (!validateForm()) {
          
        return; 
    }
    const isFormValid = validateForm();
    
      const SellerData = {
        nameseller: formData.nameseller,
        emailseller: formData.emailseller,
        usr_id: userId,
    };
      axios.post('http://127.0.0.1:8000/api/LoginSeller', SellerData)
          .then(response => {
              console.log(response);
              const  sellerid = response.data.seller_id;
              console.log(response.data.seller)
              localStorage.setItem('seller_id', sellerid);
              localStorage.setItem('isSeller', true);
              nav('/store/seller')
  
          })
          .catch(error => {
              console.error(error);
          });
    };
   
  return (
    <form onSubmit={LoginSeller} className='formseller'>
      <h2>Login into your seller account</h2>
      <input onChange={handleChange} className="input" name='nameseller' type='text' placeholder="Name" />
      {Errors.nameseller && <span className='errorMessage'>{Errors.nameseller} <i className='bx bxs-error'></i></span>} 
      <input   onChange={handleChange} className="input"  name='emailseller' type='text' placeholder="Email" />
      {Errors.emailseller && <span className='errorMessage'>{Errors.emailseller} <i className='bx bxs-error'></i></span>} 
   <div>
   <button type='submit' className='btn-authseller'>submit</button>
    <Link to='/store/seller-auth/register'><span></span> register</Link>
   </div>
</form>
  )
}