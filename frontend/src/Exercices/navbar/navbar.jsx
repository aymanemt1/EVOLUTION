import { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import './navbar.css'

export default function Navbar(){

    const location = useLocation();

    return (
        <Fragment>
            <div className="parentNavbar">
                <div className="leftNavbar">
                    <Link to='/home'>
                        <span>
                            <img src="/assets/logos/logoRM.png" alt="Evolution" title="Evolution"/>
                        </span>
                    </Link>
                </div>
                <div className="RightNavbar">
                    <ul className="parentULnavbar">
                        <li>
                            <Link to='/overview' className="Link">
                                <button className={location.pathname == 'overview' ? "btnNavbarExercicesOverview" : "btnNavbarExercices"}><i className='bx bxs-binoculars'></i> <span>Overview</span></button>
                            </Link>
                        </li>
                        <li>
                            <Link to='/activity' className="Link">
                                <button className={location.pathname == 'activity' ? "btnNavbarExercicesActivity" : "btnNavbarExercices"}>
                                    <i className='bx bx-street-view'></i> <span>Activity</span>
                                </button>
                            </Link>
                        </li>
                        <li>
                            <div className="parentSearchBarExercices">
                                <i className='bx bx-search-alt'></i>
                                <input type="text" />
                            </div>
                        </li>
                        <li>
                            <button className="btnNotification">
                                <i className='bx bxs-bell' ></i>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </Fragment>
    )
}