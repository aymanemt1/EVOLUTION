import React, { useContext } from 'react'
import './Home.css'
import { MenuContext } from '../../Context/MenuContext'
import { Menu } from '../../Components/Menu/Menu'

export const Home = () => {
  const {isactive,setisactive} = useContext(MenuContext)

  return (
    <div className='storehome' id={isactive && "storehomeparent"}>
      <div className='menu-store'>
       <Menu />
      </div>
            <div className='left-store-home' id={isactive && "leftstorehome"}>
           <div className='homecontent'>
           <h1>
            FIND THE BEST FOR YOU.
            </h1>
            <p>ILorem ipsum is a placeholder text commonly
 used to demonstrate the visual form of a documen</p>
 <button className='btnStorehome'>
 EXPLORE OUR CATEGORIES
 </button>
           </div>
         </div>
         <div className='storeCover' >
          <img src="/store/Storehome/cover.png" alt="" />
            </div>
    </div>
  )
}
