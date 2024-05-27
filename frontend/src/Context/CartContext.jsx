import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
export const CartContext = createContext()

 export const CartProvider = ({children}) => {
  const [deletedItem,setdeletedItem]=useState(false)
  const [addedtocart,setaddedtocart]=useState(false)
  const [Isaddedtocart,setIsaddedtocart]=useState(false)
  const [addedreview,setaddedreview]=useState(false)
  const [count,setcount]=useState(0)
  const [totalCartPrice, settotalCartPrice] = useState(0)
  const [Cart, setCart] = useState([])
  const [isTrue, setisTrue] = useState(false)
  const id = localStorage.getItem('id_active');
  useEffect(() => {

    fetchCart();
}, [addedtocart, deletedItem,Isaddedtocart]);


const fetchCart = () => {
  axios.get(`http://127.0.0.1:8000/api/getCartItem?id=${id}`)
  .then(response => {
            setCart(response.data.cartItems)
            console.log(response.data)
            setcount(response.data.cartCount)
            settotalCartPrice(response.data.totalCartPrice)
        })
        .catch(error => {
            console.error(error);
        });
};

  return (

    <CartContext.Provider value={{
      deletedItem,
    setdeletedItem,
    addedtocart,
    setaddedtocart,
    count,
    totalCartPrice,
    settotalCartPrice,
    setcount,
    Cart,setCart,
    isTrue,setisTrue,
    addedreview,setaddedreview,
    Isaddedtocart,setIsaddedtocart
    }}>
     {children}
    </CartContext.Provider>
    
  )
}
