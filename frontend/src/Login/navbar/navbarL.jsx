import { Fragment } from "react";
import { Link } from "react-router-dom";
import './navbarL.css';

export default function Navbar(){
    return(
        <Fragment>
            <div className="parentNavbarL">
                <div className="parentBrandLogoL">
                    <Link to='/'>
                        <img src="./EvolutionSimple.svg" alt="Evolution"  title="Evolution" />
                    </Link>
                </div>
                <div className="parentLinks">
                    <Link to='/signup'>
                        <button className="signupBtnL">Sign up</button>
                    </Link>
                    
                </div>
            </div>
        </Fragment>
    )
}