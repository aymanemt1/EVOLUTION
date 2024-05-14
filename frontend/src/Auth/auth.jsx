import { Fragment, useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function Auth() {
  const location = useLocation();

  return (
    <Fragment>
      <div className="parentNavbar">
        <div className="leftNavbar">
          <Link to='/'>
            <span>
              <img src="/assets/logos/logoRM.png" alt="Evolution" title="Evolution"/>
            </span>
          </Link>
        </div>
        <div className="RightNavbar">
          <ul className="parentULnavbar">
            {location.pathname !== '/auth/sign-up' && (
              <li>
                <Link to='/auth/sign-up'>
                  <button className="btnSignup">Sign up</button>
                </Link>
              </li>
            )}
            {location.pathname !== '/auth/log-in' && (
              <li>
                <Link to='/auth/log-in'>
                  <button className="btnLogin">Log in</button>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
      <Outlet/>
    </Fragment>
  );
}
