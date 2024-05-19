import React, { useContext } from "react";
import "./ChangeGoal.css";
import ChangeGoalEdit from "./ChangeGoalEdit";
import { Link } from "react-router-dom";

import Footer from "../../LandingPage/footer/footer";
import { CaloriesContextt } from "../../Context/CaloriesContext";

export default function ChangeGoal() {
  const { goalCalories, proteinsGoal, carbsGoal, fatsGoal ,
    weight,height,goal,activite , editedMode ,setEditMode
  } = useContext(CaloriesContextt);


  const handleEditedMode=()=>{
    setEditMode(true)
  }

  // Helper function to handle potential non-numeric values
  const formatValue = (value) => {
    if (typeof value === 'number' && !isNaN(value)) {
      return value.toFixed(2);
    } else {
      return "N/A";
    }
  };

  return (
    <div className="change-goal" style={{height:editedMode && '100vh',overflow:editedMode &&  'hidden' ,width:editedMode && "100vw"}}>
      {editedMode && <ChangeGoalEdit/>}
      <header className="chage-goal-header">
        <div className="storelogo">
          <Link to="/CaloriesCalculator">
            <img src="/logo.svg" alt="Evolution" title="Evolution" />
          </Link>
        </div>
        <div className="chage-goal-user">
          <img src="/imageProfileExample.png" alt="" className="user-image" />
        </div>
      </header>
      <div className="change-goal-main">
        <div className="change-goal-image-container">
          <img
            src="/caloriesCalculator/image.png"
            alt=""
            className="change-goal-main-picture"
          />
        </div> <h1 className="chage-goal-title">Your Fitness Goals</h1>
        <div className="change-goal-content">
          <div className="nutrition-goals">
           
            <h3 className="Daily-goals-title">Daily Nutrition Goals</h3>
            <p className="">
              This table outlines the recommended daily intake goals for
              essential nutrients to help guide balanced and healthy eating
              habits.
            </p>
            <div className="nutrition-goals-table">
              <div className="nutrition-goals-ligne">
                <div className="nutrition-namme">Calories</div>
                <div className="nutrition-Value">{formatValue(goalCalories)}</div>
              </div>
              <div className="nutrition-goals-ligne">
                <div className="nutrition-namme">Carbohydrates</div>
                <div className="nutrition-Value">{formatValue(carbsGoal)}</div>
              </div>
              <div className="nutrition-goals-ligne">
                <div className="nutrition-namme">Fat</div>
                <div className="nutrition-Value">{formatValue(fatsGoal)}</div>
              </div>
              <div className="nutrition-goals-ligne">
                <div className="nutrition-namme">Protein</div>
                <div className="nutrition-Value">{formatValue(proteinsGoal)}</div>
              </div>
            </div>
          </div>

          <div className="Objective-goals">
          <h3 className="Daily-goals-title">Informations & Goals</h3>
          <p className="">
           This will help us tailor your calorie intake and macronutrient goals according to your specific needs.
            </p>
            <div className="change-goal-edit-container"> 
            <div className="change-goal-edit--button" onClick={handleEditedMode}>EDIT</div>
            </div>
            <div className="nutrition-goals-table">
              <div className="nutrition-goals-ligne">
                <div className="nutrition-namme">Weight</div>
                <div className="nutrition-Value">{weight}</div>
              </div>
              <div className="nutrition-goals-ligne">
                <div className="nutrition-namme">Height</div>
                <div className="nutrition-Value">{height}</div>
              </div>
              <div className="nutrition-goals-ligne">
                <div className="nutrition-namme">Physical Activity</div>
                <div className="nutrition-Value">{activite}</div>
              </div>
              <div className="nutrition-goals-ligne">
                <div className="nutrition-namme">Goal</div>
                <div className="nutrition-Value">{ goal}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}




