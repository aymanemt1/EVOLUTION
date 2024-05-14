import { Fragment } from "react";
import './sidebar.css'
import { Link, useLocation } from "react-router-dom";

export default function Sidebar(){


    const location = useLocation();


    return (
        <Fragment>
            <div className="parentSideBarExercices">
                <ul>
                    <li>
                        <Link to='/exercices/categories' className="Link">
                            <button id={location.pathname == '/exercices/categories' ? "btnSideBarActive" : null}>
                                <span>
                                <i className='bx bxs-category-alt' ></i> <span>Categories</span>
                                </span>
                            <i className='bx bx-right-arrow-alt' id="arrowSideBarExercices"></i>
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to='/exercices/profile' className="Link">
                            <button>
                                <span>
                                <i className='bx bxs-user-detail'></i> <span>Profile</span>
                                </span>
                            <i className='bx bx-right-arrow-alt' id="arrowSideBarExercices"></i>
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to='/exercices/exercices' className="Link">
                            <button>
                                <span>
                                <i className='bx bx-dumbbell'></i> <span>Exercices</span>
                                </span>
                                <i className='bx bx-right-arrow-alt' id="arrowSideBarExercices"></i>
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to='/exercices/my-workouts' className="Link">
                            <button>
                                <span>
                                    <i className='bx bxs-timer'></i> <span>My workouts</span>
                                </span>
                                <i className='bx bx-right-arrow-alt' id="arrowSideBarExercices"></i>
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
        </Fragment>
    )
}