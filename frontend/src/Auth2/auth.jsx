import { Fragment, useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function Auth() {
  const [showLoginButton, setShowLoginButton] = useState(true);
  const [showSignupButton, setShowSignupButton] = useState(true);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/auth/signup") {
      setShowSignupButton(false);
      setShowLoginButton(true);
    } else if (location.pathname === "/auth/login") {
      setShowLoginButton(false);
      setShowSignupButton(true);
    } else {
      setShowLoginButton(true);
      setShowSignupButton(true);
    }
  }, [location]);

  return (
    <Fragment>
      <div className="parentNavbar">
        <div className="parentBrandLogo">
          <Link to="/">
            <img
              src="/EvolutionRemoveBg.png"
              alt="Evolution"
              title="Evolution"
            />
          </Link>
        </div>
        <div className="parentLinks">
          {showSignupButton ? (
            <Link to="/auth/signup">
              <button className="signupBtn">Sign up</button>
            </Link>
          ) : null}
          {showLoginButton ? (
            <Link to="/auth/login">
              <button className="loginBtn">Login</button>
            </Link>
          ) : null}
        </div>
      </div>
      <div className="parentContent">
        <Outlet />
      </div>
    </Fragment>
  );
}
