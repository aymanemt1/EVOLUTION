import React from 'react'
import "./SeellerHome.css"
export default function SellerHome() {
  return (
    <div className='seller'>
        <div className="topSection">
      <header className='sellerHeader'>
        <div className='sellerLogoo'>
        <img src="/logo.svg" alt="Evolution" title="Evolution" />
        </div>
      </header>
      <div className="topSectionContent">
        <div className='topSectionPicture'>
            <img src="/store/seller-firstPic.png" alt=""  className='imm'/>
            <img src="/store/moneyyy.png" alt="" className='moooney'/>
            <img src="/store/jewerly.png" alt="" className='jewerly'/>
        </div>
        <div className='TopSectionTitle'></div>
      </div>
      </div>
    </div>
  )
}
