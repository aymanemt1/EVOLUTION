import { Fragment } from "react";
import "./toolsSection.css";
import { Link } from "react-router-dom";

export default function ToolsSection() {

  // const button = document.querySelector(".parentSubscribe button");
  // const image = document.querySelector(".parentSubscribe .clickPNG");

  // button.addEventListener("mouseover", function () {
  //   image.style.mixBlendMode = "darken";
  // });

  // button.addEventListener("mouseout", function () {
  //   image.style.mixBlendMode = "normal";
  // });

  return (
    <Fragment>
      <div className="parentToolsSection">
        <div className="headerTools">
          <h1>Tools for your goals</h1>
          <p>
            Are you trying to lose weight, tone up, lower your BMI or improve
            your overall health? We give you the right features to achieve this.
          </p>
        </div>
        <div className="parentArrow">
          <img src="/assets/toolsPNGS/Arrow.png" className="arrowTools" />
          <div className="parentSubscribe">
            <h1 id="titleSubscribeTools">Welcome to our community</h1>
            <Link to="/">
              <button>Subscribe</button>
              <img src="/assets/toolsPNGS/click.png" className="clickPNG" />
            </Link>
          </div>
        </div>
        <div className="contentTools">
          <div className="rowTool">
            <div className="sectionIMGtool">
              <div>
                <div className="patternImgsTools">
                  <img
                    src="/assets/toolsPNGS/pattern1.png"
                    className="patternTool1"
                  />
                </div>
                <img src="/assets/toolsPNGS/img1.png" className="toolsImg1" />
              </div>
            </div>
            <div className="sectionTEXTtool textTool1">
              <h2>Learn. Follow. Progress.</h2>
              <p>
                Keeping a food diary allows you to better understand your habits
                and increases your chances of achieving your goals.
              </p>
              <img src="/assets/toolsPNGS/illustrator1.png" className="illustrator1Tool"/>
            </div>
          </div>
          <div className="rowTool tool2">
            <div className="sectionIMGtool2">
              <div>
                <div className="patternImgsTools2">
                  <img
                    src="/assets/toolsPNGS/pattern2.png"
                    className="patternTool2"
                  />
                </div>
                <img src="/assets/toolsPNGS/img2.png" className="toolsImg2" />
              </div>
            </div>
            <div className="sectionTEXTtool textTool2">
              <h2>Record more easily.</h2>
              <p>
                Scan barcodes, log meals and recipes, and use Quick Tools for
                quick and easy food tracking.
              </p>
              <img src="/assets/toolsPNGS/illustrator2.png" className="illustrator2Tool"/>
            </div>
          </div>
          <div className="rowTool tool3">
            <div className="sectionIMGtool">
              <div>
                <div className="patternImgsTools">
                  <img
                    src="/assets/toolsPNGS/pattern3.png"
                    className="patternTool1"
                  />
                </div>
                <img src="/assets/toolsPNGS/img3.png" className="toolsImg1" />
              </div>
            </div>
            <div className="sectionTEXTtool textTool2">
              <h2>Community Hub.</h2>
              <p>
                Join our vibrant fitness community to share your journey, post
                updates, and engage with fellow enthusiasts. Together, we
                celebrate progress and inspire each other.
              </p>
              <img src="/assets/toolsPNGS/illustrator3.png" className="illustrator3Tool"/>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
