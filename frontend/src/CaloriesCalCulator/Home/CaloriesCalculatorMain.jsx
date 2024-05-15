import React, { useContext, useState } from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import { FaSquarePlus } from "react-icons/fa6";
import { MenuContext } from "../../Context/MenuContext";
import { GiCupcake } from "react-icons/gi";
import CaloriesHome from "./CaloriesHome";
import { Menu } from "../../Components/Menu/Menu";
import AddMeal from "./AddMeal";
export default function CaloriesCalculatorMain() {
  const { isactive, setisactive } = useContext(MenuContext);
  const [addMeal, setAddMeal] = useState(false);
  const [mealTitle, setMealTitle] = useState("");
  console.log(mealTitle)
  return (
    <div style={{height: addMeal && '100vh',overflow: addMeal && 'hidden'}}>
      {addMeal && <AddMeal title={mealTitle} />}

      <Navbar />
      <div className="Calories-Home" >
        {isactive && <Menu />}
        <CaloriesHome />
      </div>
      <div className="addMeals">
        <div className="addMealLeftSide">
          <div
            className="addBreakfast addMeal"
            onClick={() => {
              setMealTitle("BreakFast");
              setAddMeal(true)
            }}
          >
            <FaSquarePlus className="addMealIcon" />
            <span>Breakfast</span>
          </div>
          <div
            className="addLunch addMeal"
            onClick={() => {
              setMealTitle("Lunch");
              setAddMeal(true)
            }}
          >
            <FaSquarePlus className="addMealIcon" />
            <span>Lunch</span>
          </div>
          <div
            className="addDinner addMeal"
            onClick={() => {
              setMealTitle("Dinner");
              setAddMeal(true)
            }}
          >
            <FaSquarePlus className="addMealIcon" />
            <span>Dinner</span>
          </div>
        </div>
        <div className="addMealsRightSide">
          <div
            className="addSnack"
            onClick={() => {
              setMealTitle("Snack");
              setAddMeal(true)
            }}
          >
            <span className="snack">Snack</span>
            <GiCupcake className="snackIcon" />
          </div>
          <div
            className="addSnack"
            onClick={() => {
              setMealTitle("Snack");
              setAddMeal(true)
            }}

          >
            <span className="snack">Snack</span>
            <GiCupcake className="snackIcon" />
          </div>
          <div
            className="addSnack"
            onClick={() => {
              setMealTitle("Snack");
              setAddMeal(true)
            }}
          >
            <span className="snack">Snack</span>
            <GiCupcake className="snackIcon" />
          </div>
        </div>
      </div>
    </div>
  );
}
