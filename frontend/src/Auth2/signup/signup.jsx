import React, { Fragment, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './signup.css'


export default function Signup() {
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // console.log("Username:", username, "Email:", email, "Password:", password);

    navigate("/auth/login");
  }

  function ShowHidePassword() {
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
      const input = document.getElementById("password");
      if (input) {
        toggle ? (input.type = "text") : (input.type = "password");
      }
    }, [toggle]);

    return (
      <>
        <button
          className="showBtn"
          type="button"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {toggle ? (
            <i className="bx bx-hide"></i>
          ) : (
            <i className="bx bx-show-alt"></i>
          )}
        </button>
      </>
    );
  }

  return (
    <Fragment>
      <div className="parentLogin">
      <div className="parentImage">
          <div className="parentChild">
            <div className="parentCicleImages">
              <img
                src={require("../assests/LoginImages/Gym__Fits_for_Mens_-_Green_and_Black-removebg-preview.png")}
                className="LoginImg1"
                alt=""
              />
              <img
                src={require("../assests/LoginImages/Man_Runner_Training_Fitness_Dress_Shoes_PNG-removebg-preview (1).png")}
                className="LoginImg2"
                alt=""
              />
              <img
                src={require("../assests/LoginImages/Evolution.png")}
                className="LoginImg3"
                alt=""
              />
              <h1 id="signupH1">Sign up Interface</h1>
            </div>
          </div></div>
        <div className="parentForm">
          <form action="" className="formLogin" onSubmit={handleSubmit}>
            <h1>Member Access</h1>
            <div className="box">
              <div className="input-box">
                <label htmlFor="username">
                  Username <i className="bx bxs-user-circle"></i>
                </label>
                <input
                  type="text"
                  name="signupUsername"
                  id="username"
                  placeholder="example_123"
                  ref={usernameRef}
                  value={formData.username}
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                />
                <br />
                <label htmlFor="email">
                  Email <i className="bx bxs-envelope"></i>
                </label>
                <input
                  type="email"
                  name="signupEmail"
                  id="email"
                  placeholder="example@example.com"
                  ref={emailRef}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <br />
                <label htmlFor="password">
                  Password <i className="bx bxs-lock-alt"></i>
                </label>
                <input
                  type="password"
                  name="signupPassword"
                  id="password"
                  placeholder="password..."
                  ref={passwordRef}
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                <ShowHidePassword />
                <br />
              </div>
              <div className="submit-box">
                <br />
                <button type="submit" className="submitBtn">
                  Sign Up
                </button>
              </div>
              <div className="submit-box">
                <button type="button" className="googleBtn">
                  <i className="bx bxl-google"></i> Sign up with Google
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}
