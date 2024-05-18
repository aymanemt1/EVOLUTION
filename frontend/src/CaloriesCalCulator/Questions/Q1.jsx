import React, { useContext } from "react";
import  { CaloriesContextt } from "../../Context/CaloriesContext";

const Q1 = ({ NextQ1 }) => {
  const {birthday,setBirthday}=useContext(CaloriesContextt)

  const handleChange = (e) => {
    setBirthday(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (new Date(birthday) > new Date()) {
      alert("Birthday cannot be in the future.");
    } else {
      NextQ1()
    }
  };

  return (
    <div className="caloriesCalculatorQ1">
      <div className="caloriesCalculatorQ1Form">
        <div className="caloriesCalculatorText">
          <h1>Calorie Calculator - Daily Caloric <br /> Needs</h1>
          <div className="caloriesCalculatorContent">
            <div className="progress-bar">
              <div className="progress" style={{ width: "20%" }}></div>
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
