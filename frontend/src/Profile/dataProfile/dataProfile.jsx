import { Fragment } from "react";
import "./dataProfile.css";
import { Link } from "react-router-dom";

export default function DataProfile() {
  return (
    <Fragment>
      <div className="parentDataProfile">
        <div className="dataProfile">
          <div className="headerDataProfile">
            <div>
              <img src="/assets/toolsPNGS/img3.png" />
              <div className="namesProfile">
                <h5>Youssef Talibi</h5>
                <p>@youceEtalibi</p>
              </div>
            </div>
            <div>
                <Link to='/'>
                    <button>
                        <i className='bx bxs-cog' ></i>
                    </button>
                </Link>
            </div>
          </div>
          <div className="bodyDataProfile">
            <ul>
                <li>
                    <span>Name</span>
                    <span>Youssef Talibi</span>
                </li>
                <li>
                    <span>Weight</span>
                    <span>96kg</span>
                </li>
                <li>
                    <span>Height</span>
                    <span>184cm</span>
                </li>
                <li>
                    <span>Fat</span>
                    <span>23.02%</span>
                </li>
            </ul>
          </div>
        </div>
        <div className="SendEmailForTeam">
            <h4>Subscribe to our Newsletter</h4>
            <p>Subscribe to our Newsletter for the last updates Subscribe to our Newsletter for the last updates</p>
            <div className="parentInputParent">
                <i className='bx bx-envelope' ></i>
                <input type="text" placeholder="Email Adress"/>
            </div>
            <div className="parentbtnSubscribe">
              <button>Subscribe<i className='bx bxl-telegram' ></i></button>
            </div>
        </div>
      </div>
    </Fragment>
  );
}
