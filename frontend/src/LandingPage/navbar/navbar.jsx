import { Fragment } from "react";
import { Link } from "react-router-dom";
import './navbar.css';

export default function Navbar(){
    return(
        <Fragment>
            <div className="parentNavbar">
                <div className="parentBrandLogo">
                    <Link to='/'>
                        <img src="./EvolutionRemoveBg.png" alt="Evolution"  title="Evolution" />
                    </Link>
                </div>
                <div className="parentLinks">
                    <Link to='/auth/signup'>
                        <button className="signupBtn">
                            Sign up
                        </button>
                    </Link>
                    <Link to='/auth/login'>
                        <button className="loginBtn">
                            Login
                        </button>
                    </Link>
                </div>
            </div>
        </Fragment>
    )
}