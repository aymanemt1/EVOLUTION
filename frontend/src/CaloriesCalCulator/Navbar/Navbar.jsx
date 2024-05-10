import React, { useContext, useState, useRef, useEffect } from "react";
import "./Navbar.css";
import { MenuContext } from "../../Context/MenuContext";
import { Link } from "react-router-dom";

const DropdownMenu = () => {
  return (
    <div className="dropdown-menu">
      <ul>
        <li>Option 1</li>
        <li>Option 2</li>
        <li>Option 3</li>
      </ul>
    </div>
  );
};

export default function Navbar() {
  const [userMenuActive, setUserMenuActive] = useState(false);
  const { isactive, setisactive } = useContext(MenuContext);
  const userMenuRef = useRef(null);

  const handleMenu = () => {
    setisactive(!isactive);
  };

  const handleUserClick = () => {
    setUserMenuActive(!userMenuActive);
  };

  const handleClickOutside = (event) => {
    if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
      setUserMenuActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="Calories-navbar">
      <div className="leftCalories-navbar">
        <div>
          <i className="bx bx-menu-alt-left" onClick={handleMenu}></i>
        </div>
        <div className="storelogo">
          <Link to="/store">
            <img src="/logo.svg" alt="Evolution" title="Evolution" />
          </Link>
        </div>
      </div>
      <div
        className="rightCalories-navbar"
        onClick={handleUserClick}
        ref={userMenuRef}
      >
        <div className="userName">Talibi</div>
        <img src="imageProfileExample.png" alt="" className="user-image" />
        {userMenuActive && <DropdownMenu />}
      </div>
    </div>
  );
}
