import { Fragment } from "react";
import './contentHome.css';
import { Link, useNavigate } from "react-router-dom";

export default function ContentHome(){



    return (
        <Fragment>
            <div className="parentContentHome">
                <div className="leftContent" >
                    <div className="textContentHome">
                        <h1>Hey, Username <img src="/assets/references/handHi.png" className="handHi" /></h1>
                        <p>Evolution is a  fitness web site with a passion for helping people achieve their health and wellness goals. You can provide workout routines, nutrition tips, and exercise techniques.</p>
                    </div>
                    <div className="linkContentHome">
                        <div className="rowHome">
                            <div className="colHome">
                                <div>
                                    <h3>Exercices</h3>
                                    <i className='bx bx-swim'></i>
                                </div>
                                <div>
                                    <button>
                                        <Link to='/exercices' className="LinkComposant">
                                        <span>
                                            See more
                                        </span>
                                        </Link>
                                        <i className='bx bx-right-arrow-alt' ></i></button>
                                </div>
                            </div>
                            <div className="colHome">
                                <div>
                                    <h3>Calculator</h3>
                                    <i className='bx bxs-calculator' ></i>
                                </div>
                                <div>
                                    <button>
                                    <Link to='/calculator' className="LinkComposant">
                                        <span>See more</span> 
                                    </Link>
                                    <i className='bx bx-right-arrow-alt' ></i></button>
                                </div>
                            </div>
                        </div>
                        <div className="rowHome">
                            <div className="colHome">
                                <div>
                                    <h3>Community</h3>
                                    <i className='bx bx-podcast'></i>
                                </div>
                                <div>
                                    <button>
                                    <Link to='/community' className="LinkComposant">
                                        <span>See more</span>
                                    </Link>
                                        <i className='bx bx-right-arrow-alt' ></i></button>
                                </div>
                            </div>
                            <div className="colHome">
                                <div>
                                    <h3>Store</h3>
                                    <i className='bx bxs-store-alt'></i>
                                </div>
                                <div>
                                    <button>
                                    <Link to='/store' className="LinkComposant">
                                        <span>See more</span>
                                    </Link>
                                    <i className='bx bx-right-arrow-alt' ></i></button>
                                </div>
                            </div>
                        </div>
                        </div>
                </div>
                <div className="rightParent">
                    <img src="/assets/homePages/man.png" alt="" />
                </div>
            </div>
        </Fragment>
    )
}