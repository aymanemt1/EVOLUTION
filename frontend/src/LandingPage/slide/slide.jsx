import React, { Fragment } from "react";
import "./slide.css";

export default function Slide() {
  return (
    <Fragment>
      <div className="parentSlide" >
        <div className="parentItem1">
          <div className="textItem1">
            <h1>Log what you eat with over 14 million foods.</h1>
            <p>
              View calorie and nutrient analysis, compare serving sizes, and
              discover how the foods you eat support your goals.
            </p>
          </div>
          <div className="imageItem1">
            <img src="./ImagesSlide/image1.webp" alt="" />
          </div>
        </div>
        <div className="parentItem2">
          <div className="textItem2">
            <h1>Tools for your goals</h1>
            <p>
              Are you trying to lose weight, tone up, lower your BMI or improve
              your overall health? We give you the right features to achieve
              this.
            </p>
            <div className="arrayIcons">
              <div className="calories">
                <svg
                  width="128"
                  height="128"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <g
                    fill="none"
                    stroke="#199df5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2">
                    <path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4M2 6h4m-4 4h4m-4 4h4m-4 4h4" />
                    <path d="M18.4 2.6a2.17 2.17 0 0 1 3 3L16 11l-4 1l1-4Z" />
                  </g>
                </svg>
                <h3>Learn. Follow. Progress.</h3>
                <p>Keeping a food diary allows you to better understand your habits and increases your chances of achieving your goals.</p>
              </div>
              <div className="bar">
                <svg
                  width="128"
                  height="128"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#199df5"
                    fill-rule="evenodd"
                    d="M1.5 2h13l.5.5v10l-.5.5h-13l-.5-.5v-10zM2 3v9h12V3zm2 2h8v1H4zm6 2H4v1h6zM4 9h4v1H4z"
                    clip-rule="evenodd"/>
                </svg>
                <h3>Record more easily.</h3>
                <p>Scan barcodes, log meals and recipes, and use Quick Tools for quick and easy food tracking.</p>
              </div>
              <div className="community">
                <svg
                  width="128"
                  height="128"
                  viewBox="0 0 432 432"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#199df5"
                    d="M384 3q18 0 30.5 12.5T427 45v256q0 18-12.5 30.5T384 344H85L0 429V45q0-17 12.5-29.5T43 3zM128 259v-43H85v43zm0-64v-43H85v43zm0-64V88H85v43zm149 128v-43H171v43zm64-64v-43H171v43zm0-64V88H171v43z"/>
                </svg>
                <h3>Community Hub</h3>
                <p>Join our vibrant fitness community to share your journey, post updates, and engage with fellow enthusiasts. Together, we celebrate progress and inspire each other.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
