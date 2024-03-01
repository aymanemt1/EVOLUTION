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
                <img src="./AnimationIcons/first.gif" alt="" />
                <h3>Learn. Follow. Progress.</h3>
                <p>Keeping a food diary allows you to better understand your habits and increases your chances of achieving your goals.</p>
              </div>
              <div className="bar">
                <img src="./AnimationIcons/second.gif" alt="" />
                <h3>Record more easily.</h3>
                <p>Scan barcodes, log meals and recipes, and use Quick Tools for quick and easy food tracking.</p>
              </div>
              <div className="community">
                <img src="./AnimationIcons/thirdICon.gif" alt="" />
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
