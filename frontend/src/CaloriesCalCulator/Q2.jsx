import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Q2 = ({ onAnswered2 }) => {
  const [height, setHeight] = useState("");
  const navigation = useNavigate();

  const handleChange = (e) => {
    setHeight(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(height) < 1) {
      alert("Height cannot be negative or neutral.");
    }else {
      onAnswered2(height);
      navigation("/CaloriesCalculator/Q3");
    }
  };

  const Back = () => {
    navigation('/CaloriesCalculator/Q1');
  };

  return (
    <div className="caloriesCalculatorQ2">
      <div className="caloriesCalculatorQ2Form">
        <div className="caloriesCalculatorText">
          <h1>Calorie Calculator - Daily Caloric <br /> Needs</h1>
          <div className="caloriesCalculatorContent2">
            <div className="progress-bar">
              <div className="progress" style={{ width: "50%" }}></div>
            </div>
            <h2 className="caloriesCalculatorContentHeader" >What is your height?</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="number"
                value={height}
                placeholder="cm"
                className="inputQ2"
                onChange={handleChange}
                required
              />
              <div className="caloriesCalculatorActions">
                <button onClick={Back} className="Back">Back</button>
                <button type="submit" className="Next">Next</button>
              </div>
            </form>
            <div className="erreorCalculator2 "> *required field</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Q2;
