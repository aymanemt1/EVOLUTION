import React, { useState } from "react";
import "./Login.css";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Login() {
  const [type, setType] = useState("password");
  return (
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
              className="icon2"
              onClick={() => setType(type === "password" ? "text" : "password")}
            >
              {type === "password" ? <FaEye /> :<FaEyeSlash /> }
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
          <div className="register-link">
            <p>
              D'ont have an account? <Link to="/signup">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
