import { Fragment } from "react";
import { Link } from "react-router-dom";
import './navbar.css';

export default function Navbar(){
    return(
        <Fragment>
            <div className="parentNavbar">
                <div className="parentBrandLogo">
                    <Link to='/'>
                        <img src="./EvolutionSimple.svg" alt="Evolution"  title="Evolution" />
                    </Link>
                </div>
                <div className="parentLinks">
                    <Link to='/register'>
                        <button className="signupBtn">Sign up</button>
                    </Link>
                    <Link to='/login'>
                        <button className="loginBtn">Login</button>
                    </Link>
                </div>
            </div>
        </Fragment>
    )
}