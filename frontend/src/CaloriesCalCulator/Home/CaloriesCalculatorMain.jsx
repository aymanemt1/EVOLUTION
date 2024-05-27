import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import { FaSquarePlus } from "react-icons/fa6";
import { MenuContext } from "../../Context/MenuContext";
import { GiCupcake } from "react-icons/gi";
import CaloriesHome from "./CaloriesHome";
import { Menu } from "../../Components/Menu/Menu";
import AddMeal from "./AddMeal";
import { CaloriesProvider } from "../../Context/CaloriesContext";
import AchivedGoal from "./AchivedGoal";
import Footer from "../../LandingPage/footer/footer";

export default function CaloriesCalculatorMain() {
  const { isactive} = useContext(MenuContext);
  const { addMealPopUp, setAddMealPopUp, acheivedGoal, birthday } = useContext(CaloriesProvider);
  const [mealTitle, setMealTitle] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (birthday === "") {
      navigate("/CaloriesCalculator");
    }
  }, [birthday, navigate]);

  return (
    <div style={{ height: (addMealPopUp || acheivedGoal) ? '100vh' : 'auto', overflow: (addMealPopUp || acheivedGoal) && 'hidden' }}>
      {addMealPopUp && <AddMeal title={mealTitle} />}
      {acheivedGoal && <AchivedGoal />}
      <Navbar />
      <div className="Calories-Home">
        {isactive && <Menu className="caloriesMenu" />}
        <CaloriesHome />
      </div>
      <div className="addMeals">
        <div className="addMealLeftSide">
          <div
            className="addBreakfast addMeal"
            onClick={() => {
              setMealTitle("BreakFast");
              setAddMealPopUp(true);
            }}
          >
            <FaSquarePlus className="addMealIcon" />
            <span>Breakfast</span>
          </div>
          <div
            className="addLunch addMeal"
            onClick={() => {
              setMealTitle("Lunch");
              setAddMealPopUp(true);
            }}
          >
            <FaSquarePlus className="addMealIcon" />
            <span>Lunch</span>
          </div>
          <div
            className="addDinner addMeal"
            onClick={() => {
              setMealTitle("Dinner");
              setAddMealPopUp(true);
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
              setAddMealPopUp(true);
            }}
          >
            <span className="snack">Snack</span>
            <GiCupcake className="snackIcon" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
