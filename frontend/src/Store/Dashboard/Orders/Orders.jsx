import React, { useContext, useEffect, useState } from 'react'
import './Orders.css'
import axios from 'axios';
import { CartContext } from '../../../Context/CartContext';
import { WishlistContext } from '../../../Context/WishlistContext';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { OrderContext } from '../../../Context/OrderContext';
export const Orders = () => {
    const {setorderssCount,orderssCount,orderss} = useContext(OrderContext)

    const [Showorderss,setShoworderss] =useState(true)
 
  const handleShoworderss = (orderId) =>{
    setShoworderss(Showorderss === orderId ? !Showorderss : !Showorderss)
  }
  const createdAtDate = new Date();

  console.log(orderss)
  const deliveryTime = "2-3 business days";
  const deliveryDaysRange = deliveryTime.split("-").map(day => parseInt(day));
  const minDeliveryDays = deliveryDaysRange[0];
  const maxDeliveryDays = deliveryDaysRange[1];

  const minExpectedDeliveryDate = new Date(createdAtDate);
  minExpectedDeliveryDate.setDate(minExpectedDeliveryDate.getDate() + minDeliveryDays);
  const maxExpectedDeliveryDate = new Date(createdAtDate);
  maxExpectedDeliveryDate.setDate(maxExpectedDeliveryDate.getDate() + maxDeliveryDays);

  const formattedMinExpectedDeliveryDate = minExpectedDeliveryDate.toLocaleDateString('en-US', { 
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  const formattedMaxExpectedDeliveryDate = maxExpectedDeliveryDate.toLocaleDateString('en-US', { 
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  console.log(formattedMaxExpectedDeliveryDate)
  let targetDate = new Date(`${formattedMaxExpectedDeliveryDate} ${new Date().getFullYear()}`);
  if (new Date() > targetDate) {
    // If the date has already passed this year, consider it as the next year
    targetDate.setFullYear(targetDate.getFullYear() + 1);
  }
  
  // Get the current date
  let currentDate = new Date();
  
  // Calculate the difference in milliseconds
  let diffInMilliseconds = targetDate - currentDate;
  
  // Convert the difference from milliseconds to days
  let diffInDays = diffInMilliseconds / (1000 * 60 * 60 * 24);
  
  // Get the total days in a year (365 or 366 for a leap year)
  let totalDaysInYear = (currentDate.getFullYear() % 4 === 0 && currentDate.getFullYear() % 100 !== 0) || (currentDate.getFullYear() % 400 === 0) ? 366 : 365;
  
  // Calculate the percentage difference
  let percentageDiff = (diffInDays / totalDaysInYear) * 100;
  
  console.log(`Percentage difference: ${percentageDiff.toFixed(2) * 100}%`);
  
  
  const ticketBtn = async (orderId) => {
    try {
      const response = await axios.post(`http://127.0.0.1:8000/api/ticket/${orderId}`, orderss, {
        responseType: 'blob'
      });
  
      // Create URL for the blob
      const url = window.URL.createObjectURL(response.data);
  
      // Create a link element to trigger download
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `ticket_${orderId}.pdf`);
  
      // Append link to the body and trigger click event
      document.body.appendChild(link);
      link.click();
  
      // Cleanup: Remove link element
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error during request:', error);
    }
  };
  
  return (
    <div>
    {orderssCount > 0 ? (
      <div className='titledashboard'>
        <h2 className='titledashboard'>
          <i id='shopingCart' className='bx bx-shopping-bag'></i> My Orders
        </h2>
      </div>
    ) : (
      <div className='emptyorder'>
        <img src="/store/emptyorder.png" alt="" />
        <div className='orderempty-text'>
          <h4>No orders yet</h4>
          <p>Looks like you haven't made a choice yet!</p>
          <Link to='/store/shop'>
          <button className='viewcartbtn-order'>Start shopping</button>
          </Link>
        </div>
      </div>
    )}
  
    {orderss.map((ord) => (
      <div key={ord.id} className='review-items-parent'>
        <div className="reviweitem">
          <p>#Order{ord.id}</p>
          <div className="statu">

            {/* <span>{ord.status}</span> */}
          <button className='ticketBtn' onClick={()=>ticketBtn(ord.id)}>telecharger</button>
          </div>
          <div className="date">
            <span>{ord.created_at}</span>
          </div>
          
          <div className="collapse-order">
            <IconButton onClick={() => handleShoworderss(ord.id)}>
              {Showorderss ? (
                <i className='bx bx-collapse-vertical'></i>
              ) : (
                <i className='bx bx-collapse-horizontal'></i>
              )}
            </IconButton>
          </div>
        </div>
        <div class="dateExp">
        <div class="range">
        <div className="fill" style={{ width: `${percentageDiff.toFixed(2) * 100}%` }}>
            </div>
        </div>
    </div>

  
        {Showorderss && (
          <div className='itemsOrder'>
            {ord.items.map((item, index) => (
              <div key={index} className='order-item'>
                <Link to={`/store/productdetail/${item.product.id}`}>
                  <div className="image">
                    <img src={`/store/Collections/${item.product.image}`} alt='' />
                  </div>
                </Link>
                <div className='order-content'>
                  <div className="detail-order-item">
                    <p><span>Product:</span> {item.product.title}</p>
                    <p><span>Category:</span> {item.product.category}</p>
                    
                    <p><span>Price:</span> {item.product.price}</p>
                    <p><span>Quantity:</span> {item.quantity}</p>
                  </div>
                  <div className="price">${item.price}</div>
                </div>
              </div>
            ))}
            <div className='totalPrice'>
              <div className="">
                <p>Shipping:</p>
                Total:
                </div>
              <div className="price">
                <p>${ord.delivery.price}</p>
                <span>${ord.total_amount}</span>
                </div>
            </div>
          </div>
        )}
      </div>
    ))}
  </div>
  
  )
}
