import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Q4 = ({ onAnswered4 }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const navigation = useNavigate();

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(selectedOption !== '') {
      onAnswered4(selectedOption);
      navigation("/CaloriesCalculator/Q4");
    } else {
      alert("Please select an option.");
    }
  };

  const Back = () => {
    navigation('/CaloriesCalculator/Q3');
  };

  return (
    <div className="caloriesCalculatorQ2">
      <div className="caloriesCalculatorQ4Form">
        <div className="caloriesCalculatorText">
          <h1>Calorie Calculator - Daily Caloric <br /> Needs</h1>
          <div className="caloriesCalculatorContent4">
            <div className="progress-bar">
              <div className="progress" style={{ width: "100%" }}></div>
            </div>
            <h2 className="caloriesCalculatorContentHeader4" >What is your goal?</h2>
            <div className="options">
              <div className={`optionQ4 ${selectedOption === 'Losing weight' ? 'selectedQ4' : ''}`} onClick={() => handleOptionClick('Losing weight')}>
                Losing weight
              </div>
              <div className={`optionQ4 ${selectedOption === 'Maintaining weight' ? 'selectedQ4' : ''}`} onClick={() => handleOptionClick('Maintaining weight')}>
                Maintaining weight
              </div>
              <div className={`optionQ4 ${selectedOption === 'Gaining weight' ? 'selectedQ4' : ''}`} onClick={() => handleOptionClick('Gaining weight')}>
                Gaining weight
              </div>
              <div className={`optionQ4 ${selectedOption === 'Build muscle' ? 'selectedQ4' : ''}`} onClick={() => handleOptionClick('Build muscle')}>
                Build muscle
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="caloriesCalculatorActions">
                <button onClick={Back} className="Back">Back</button>
                <button type="submit" className="Next">Next</button>
              </div>
            </form>
            <div className="erreorCalculator4   "> *required field</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Q4;
