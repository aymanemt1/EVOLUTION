import React, { useState } from "react";
import "../auth.css";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../../LandingPage/navbar/navbar";
export default function Login() {
  const [type, setType] = useState("password");
  return (
    <>
      <Navbar />
    <div className="Wrapper-Parent">
      <div className="Wrapper">
        <form action="">
          <h1>Member Access</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              required
              name="loginUsername"
            />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input
              type={type}
              placeholder="Password"
              required
              name="loginPassword"
            />
            <div
              className="icon"
              onClick={() => setType(type === "password" ? "text" : "password")}
            >
              {type === "password" ? <FaEyeSlash /> :<FaEye /> }
            </div>
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" name="Remember" />
              Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>
          <button type="submit">Login</button>
          <div className="link">
            <p>
              D'ont have an account? <Link to="/signup">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
    </>

  );
}
