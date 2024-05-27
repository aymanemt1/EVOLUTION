import React, { useContext, useEffect, useState } from 'react'
import './CartTable.css'
import '../Cartparent.css'

import { CartContext } from '../../../Context/CartContext'
import { StepCheckoutcontent } from '../../../Context/StepCheckoutcontext'
import axios from 'axios';
import { useNavigate } from 'react-router';
import { Steper } from '../Steper';
import { IconButton } from '@mui/material'

export const CartTable = () => {
   
    const { setinterface } = useContext(StepCheckoutcontent)
    const { addedtocart, setdeletedItem, deletedItem ,settotalCartPrice,totalCartPrice,setCart,Cart} = useContext(CartContext)
   
    useEffect(()=>{
        setinterface('carttable')
      },[])

    useEffect(() => {
        updateCartBackend();
    }, [addedtocart, deletedItem]);

    function deleteFromCart(id) {
        const response = axios.delete(`http://127.0.0.1:8000/api/DeleteCart/${id}`).then(response => {
            console.log('Item deleted:', response.data);
            setdeletedItem(!deletedItem)
            console.log(response.data)
        })
            .catch(error => {
                console.error('Error deleting item:', error);
            });

    };

    const nav = useNavigate()
    const handleclick = () => {
        nav('/store/checkout-2')
    }

    const increment = (index) => {
        const updatedCart = [...Cart];
        updatedCart[index].quantity++;
        updatedCart[index].total_price = updatedCart[index].price * updatedCart[index].quantity;
        const newTotalCartPrice = updatedCart.reduce((total, item) => total + item.total_price, 0);
        settotalCartPrice(newTotalCartPrice);
        setCart(updatedCart);
    };

    const decrement = (index) => {
        const updatedCart = [...Cart];
        if (updatedCart[index].quantity > 1) {
            updatedCart[index].quantity--;
            updatedCart[index].total_price = updatedCart[index].price * updatedCart[index].quantity;
            const newTotalCartPrice = updatedCart.reduce((total, item) => total + item.total_price, 0);
            settotalCartPrice(newTotalCartPrice);
            setCart(updatedCart);
        }
    };
 
    const updateCartBackend = async () => {
        try {
            const response = await axios.put(`http://127.0.0.1:8000/api/updateCart`, { Cart: Cart });
            console.log(response.data);

        } catch (error) {
            console.error('Error updating cart:', error);
        }

    };

    console.log(Cart)
  return (
    <>
  {Cart.length > 0 ? (
    <>

    <Steper />
      <div className='checkout'>

      <div className='cart-table'>
  
      <div className='headercart'>
        <p>product detail</p>
        <p>Quantity</p>
        <p>price</p>
        <p>Total</p>
      </div>
      <div className="shopping-cart">
  
         {Cart.map((cart,index)=>(
            <div className="item">
            <div className="image">
            {cart.seller_id ? 
                   <img src={`http://127.0.0.1:8000/storage/store/collections/${cart.image}`} />
                  :
                  <img src={`/store/Collections/${cart.image}`} alt />
              }
            </div>
            <div className="description">
                <span>{cart.title}</span>
                {/* <span>{cart.ProdItems.map((prod)=>(
                            <p>{prod.size.name} - {prod.color.name}  </p>
                            
                        ))}</span> */}
            </div>
            <div className='quantity'>
            <span className='quantityetext'> Quantity:</span>
                    <span className="span moin-btn" onClick={() => decrement(index)}>-</span>
                <span className='quantitynumber'>{cart.quantity}</span>
                    <span className="span plus-btn"  onClick={() => increment(index)}>+</span>
            </div>
            <div className="price">${cart.price}</div>
  
            <div className="total-price">${cart.total_price}
            <span className='pricetext'>Price total:</span>
            </div>
            <IconButton className='supprimericon' aria-label="delete">
            <i id='supprimer'  onClick={() => deleteFromCart(cart.cart_id)} className='bx bx-x'></i>
      </IconButton>
        </div>
         ))}
       
      </div>
      </div>
      <div className='cart-total-1'>
                                  <div className='cart-total-head'>
                                      <h3>Total :</h3>
                                      <p>${totalCartPrice}</p>
  
                                  </div>
                                  <button onClick={handleclick} className="btn-checkout">
                                      <span className="span">Check Out</span>
                                  </button>
                              </div>
      </div>
  </>
  ):''}

    </>
  )
}
