import React from "react";
import "./SeellerHome.css";
import { ImFire } from "react-icons/im";
import { FaArrowRight } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { FaRegFile } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { FaCircleInfo } from "react-icons/fa6";
import { SiFireship } from "react-icons/si";
export default function SellerHome() {
  return (
    <div className="seller">
      <div className="topSection">
        <header className="sellerHeader">
          <div className="sellerLogoo">
            <img src="/logo.svg" alt="Evolution" title="Evolution" />
          </div>
        </header>
        <div className="topSectionContent">
          <div className="topSectionPicture">
            <img src="/store/dashSeller.jpg" alt="" className="imm" />
            <img src="/store/moneyyy.png" alt="" className="moooney" />
            <img src="/store/jewerly.png" alt="" className="jewerly" />
            <img src="/line 8.svg" alt="" className="shoppingCart-seller" />
          </div>
          <div className="TopSectionTitle">
            <div className="TitleText">
              MANAGE YOUR SHOPPING ORDERS EASILY .
            </div>
            <button className="titleAction">
              GET STARTED <FaArrowRight className="arrowIcon" />
            </button>
          </div>
        </div>
      </div>
      <div className="SecondSection">
        <div className="stats">
          <div className="firstline">
            {" "}
            <div className="firstStat">
              <ImFire style={{ backgroundColor: "var(--cityE)",marginRight:"15px" }} /> 43,10K+{" "}
              <br />
              <span className="desss">Revenue</span>
            </div>
            <div className="secondStat">
              <FaRegFile style={{ backgroundColor: "var(--cityE)" ,marginRight:"15px"}} />
              2,323K+ <br />
              <span className="desss" >Happy sellers</span>
            </div>
          </div>
          <div className="secondLine">
            <div className="thirdStat">
              <IoSettings style={{ backgroundColor: "var(--cityE)" ,marginRight:"15px"}} />
              9,301K+ <br />
              <span className="desss">Orders created</span>
            </div>
            <div className="fourthStat">
              <GiProgression style={{ backgroundColor: "var(--cityE)",marginRight:"15px" }} />
              286,3K+ <br />
              <span className="desss">Items sold</span>
            </div>
          </div>
        </div>
        <img
          src="/store/buisinessWoman.png"
          alt=""
          className="buisinessWoman"
        />
      </div>
      <div className="thirdSection">
        <div className="textt">
          <div className="textTitle">TOTAL REVENUE, <br />AT A GLANCE</div>
          <div className="textDesc">See your total revenue right on the front , <br /> you need to open the app and voila!</div>
          <button className="titleAction">
              GET STARTED <FaArrowRight className="arrowIcon" />
            </button>
        </div>
        <div className="chartt">
          <img src="/store/dashhimm.png" alt="" className="dashhimm"/>
          <div className="dashAdd">
          <SiFireship style={{backgroundColor:"white" ,color:'var(--cityE)',width:"35px" ,height:"35px",marginTop:"10px"}}/>
          <div className="dashhText">
            <div className="dashtextDesc">Totak Revenue</div>
            <div className="dashtextTitle">$3,368.92</div>
          </div>
          </div>
        </div>
      </div>
      <div className="fourthSection">
      <div className="fourthLeft">
        <div className="fourthCadre">
          <div className="cadreContent">
            <div className="cadreImg">
              <img src="/store/vans.png" alt="" className="vans" />
            </div>
            <div className="cadreTextt">
              <div className="cadreTextTitle">Vans old School casual/sport</div>
              <div className="cadreTextState">+1 other item(s)</div>
              <div className="cadrfeTextPrice">$92.50</div>
            </div>
          </div>
          <div className="cadreAlert"><FaCircleInfo/> Ship orders before jul,19th 2024</div>
        </div>
        <div className="fourthCadre">
        <div className="cadreContent">
            <div className="cadreImg">
              <img src="/store/whey.png" alt="" className="whey"/>
            </div>
            <div className="cadreTextt">
              <div className="cadreTextTitle"> Proteinni.sii 100% Natural Whey</div>
              <div className="cadreTextState">+1 other item(s)</div>
              <div className="cadrfeTextPrice">$49,99</div>
            </div>
          </div>
          <div className="cadreAlert"><FaCircleInfo/> Ship orders before jul,19th 2024</div>
        </div>
      </div>
        <div className="fourthRight">
          <div className="fourthTitle">YOUR ORDER LIST <br /> ON FINGERTIPS</div>
          <div className="fourthDesc">Manage your order list never been this easier, experience <br /> the best way to manage  them just by tap of your little <br /> fingertips , imagine it all.</div>
          <button className="titleAction">
              GET STARTED <FaArrowRight className="arrowIcon" />
            </button>
        </div>
        
      </div>
    </div>
  );
}
