import React, { Fragment, useEffect, useState } from "react";
import "./section.css";

export default function Section() {
  const [rotatedText, setRotatedText] = useState("");

  useEffect(() => {
    const originalText = "JOIN TO COMMUNITY";
    const rotatedText = originalText
      .split("")
      .map((letter, index) => (
        <span key={index} style={{ transform: `rotate(${index * 20}deg)` }}>
          {letter}
        </span>
      ));

    setRotatedText(rotatedText);
  }, []);

  return (
    <Fragment>
    <div className="parentSection">
      <div className="parentText">
        <p>
          <span className="Title">
            Start your fitness journey with us today.
          </span>
          <span className="paragraphe">
            At Evolution, we believe that every step counts on the path to a
            healthier, stronger you. Join us in shaping a community committed
            to evolution, empowerment, and excellence.
          </span>
        </p>
      </div>
      <div className="parentImages">
        <div className="parentLeftImg">
          <img src="./ImagesSection/image2.jpg" alt="IMG1" className="IMG1"/>
          <img src="./ImagesSection/image4.jpg" alt="IMG2" className="IMG2"/>
        </div>
        <div className="parentCicle">
          <div className="textCicle">
            <p>{rotatedText}</p>
          </div>
          <i className="bx bxs-universal-access"></i>
        </div>
        <div className="parentRightImg">
          <img src="./ImagesSection/image1.jpg" alt="IMG4" className="IMG4"/>
          <img src="./ImagesSection/image3.jpg" alt="IMG3" className="IMG3"/>
        </div>
      </div>
    </div>   
    </Fragment>
  );
}
