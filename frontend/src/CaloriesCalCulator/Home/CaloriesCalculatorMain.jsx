import React, { useContext } from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import { MenuContext } from "../../Context/MenuContext";
import CaloriesHome from "./CaloriesHome";
import { Menu } from "../../Components/Menu/Menu";
export default function CaloriesCalculatorMain() {
  const { isactive, setisactive } = useContext(MenuContext);
  return (
    <div>
      <Navbar />
      <div className="Calories-Home">
        {isactive && <Menu /> }
        
        <CaloriesHome />
      </div>
    </div>
  );
}
