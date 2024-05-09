import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Q3 = ({ onAnswered3}) => {
  const [weight, setWeight] = useState("");

  const handleChange = (e) => {
    setWeight(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(weight) < 1) {
      alert("Weight cannot be negative or neutral.");
    }else {
    onAnswered3(weight);
    navigation("/CaloriesCalculator/Q4")}
  };
  const navigation=useNavigate()
  const Back=()=>{
    navigation('/CaloriesCalculator/Q2')
  }

  return (
    <div className="caloriesCalculatorQ2">
      <div className="caloriesCalculatorQ2Form">
        <div className="caloriesCalculatorText">
          <h1>Calorie Calculator - Daily Caloric <br /> Needs</h1>
          <div className="caloriesCalculatorContent2">
            <div className="progress-bar">
              <div className="progress" style={{ width: "75%" }}></div>
            </div>
            <h2 className="caloriesCalculatorContentHeader" >What is your weight?</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="number"
                value={weight}
                placeholder="kg"
                className="inputQ2"
                onChange={handleChange}
                required
              />
              <div className="caloriesCalculatorActions"><button onClick={Back} className="Back">Back</button><button type="submit" className="Next">Next</button> </div>
              
            </form>
            <div className="erreorCalculator2 "> *required field</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Q3;
