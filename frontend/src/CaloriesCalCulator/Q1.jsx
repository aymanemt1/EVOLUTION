import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Q1 = ({ onAnswered1 }) => {
  const [birthday, setBirthday] = useState("");
  const navigation = useNavigate();

  const handleChange = (e) => {
    setBirthday(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (new Date(birthday) > new Date()) {
      alert("Birthday cannot be in the future.");
    } else {
      onAnswered1(birthday);
      navigation("/CaloriesCalculator/Q2");
    }
  };

  return (
    <div className="caloriesCalculatorQ1">
      <div className="caloriesCalculatorQ1Form">
        <div className="caloriesCalculatorText">
          <h1>Calorie Calculator - Daily Caloric <br /> Needs</h1>
          <div className="caloriesCalculatorContent">
            <div className="progress-bar">
              <div className="progress" style={{ width: "25%" }}></div>
            </div>
            <h2 className="caloriesCalculatorContentHeader" >What is your birth day?</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="date"
                value={birthday}
                onChange={handleChange}
                
                required
              />
              <button type="submit">Next</button>
            </form>
            <div className="erreorCalculator2"> *required field</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Q1;
