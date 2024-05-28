import React, { useContext, useState, useEffect } from "react";
import { MenuContext } from "../../Context/MenuContext";
import { FaMinus } from "react-icons/fa";
import { TiEquals } from "react-icons/ti";
import { CaloriesContext } from "../../Context/CaloriesContext";

export default function CaloriesHome() {
  const { isactive, setisactive } = useContext(MenuContext);
  const {
    goalCalories,
    consumedCalories,
    proteinsGoal,
    setPreoteinsGoal,
    consumedProtein,
    setConsumedProtein,
    carbsGoal,
    setCarbsGoal,
    consumedCrabs,
    setConsumedCarbs,
    fatsGoal,
    setFatsGoal,
    ConsumedFats,
    setConsumedFats,
  } = useContext(CaloriesContext);
  const [selectedMenu, setSelectedMenu] = useState("macros");

  return (
    <div className={isactive ? "caloriesHome-active" : "caloriesHome-inActive"}>
      <div className="menu-calories">
        <button
          onClick={() => setSelectedMenu("macros")}
          className={selectedMenu === "macros" ? "active" : ""}
        >
          Macros
        </button>
        <button
          onClick={() => setSelectedMenu("calories")}
          className={selectedMenu === "calories" ? "active" : ""}
        >
          Calories
        </button>
      </div>
      <div className="content-calories">
        {selectedMenu === "macros" && <MacrosContent />}
        {selectedMenu === "calories" && <CaloriesContent />}
      </div>
    </div>
  );
}

function MacrosContent() {
  const {
    goalCalories,
    consumedCalories,
    proteinsGoal,
    setPreoteinsGoal,
    consumedProtein,
    setConsumedProtein,
    carbsGoal,
    setCarbsGoal,
    consumedCrabs,
    setConsumedCarbs,
    fatsGoal,
    setFatsGoal,
    ConsumedFats,
    setConsumedFats,
  } = useContext(CaloriesContext);
  const proteinPercentage = (consumedProtein / proteinsGoal) * 100;
  const fatPercentage = (ConsumedFats / fatsGoal) * 100;
  const carbsPercentage = (consumedCrabs / carbsGoal) * 100;

  return (
    <div className="MacrosContent">
      <div className="macro-content">
        <div className="prot-rectangle"></div>
        <span className="macro-text" style={{ color: "#007bff" }}>
          PROTEIN
        </span>
        <div className="prot-progress-bar">
          <div
            className="prot-bar"
            style={{
              width: `${proteinPercentage}%`,
              backgroundColor: "#007bff",
              color: "white",
              textAlign: "center",
            }}
          >
            {`${proteinPercentage.toFixed(2)}%`}
          </div>
        </div>
      </div>
      <div className="macro-content">
        <div className="fat-rectangle"></div>
        <span className="macro-text" style={{ color: "#ffc93f" }}>
          FAT
        </span>
        <div className="fat-progress-bar">
          <div
            className="fat-bar"
            style={{
              width: `${fatPercentage}%`,
              backgroundColor: "#ffc93f",
              color: "white",
              textAlign: "center",
            }}
          >
            {`${fatPercentage.toFixed(2)}%`}
          </div>
        </div>
      </div>
      <div className="macro-content">
        <div className="carbs-rectangle"></div>
        <span className="macro-text" style={{ color: "#ff3f9b" }}>
          CARBS
        </span>
        <div className="carbs-progress-bar">
          <div
            className="carbs-bar"
            style={{
              width: `${carbsPercentage}%`,
              backgroundColor: "#ff3f9b",
              color: "white",
              textAlign: "center",
            }}
          >
            {`${carbsPercentage.toFixed(2)}%`}
          </div>
        </div>
      </div>
    </div>
  );
}

function CaloriesContent() {
  const { goalCalories, consumedCalories } = useContext(CaloriesContext);
  const netCalories = goalCalories - consumedCalories;
  const [positiveNet, setPositiveNet] = useState(true);
  const [warningMessage, setWarningMessage] = useState("");

  useEffect(() => {
    if (consumedCalories > goalCalories) {
      setWarningMessage(
        "Warning! You've exceeded your target calories. Time to reassess your intake."
      );
      setPositiveNet(false);
    } else {
      setWarningMessage(
        "Congratulations! You're staying below your target calories. Keep going!"
      );
    }
  }, [consumedCalories, goalCalories]);

  const progressPercentage = (consumedCalories / goalCalories) * 100;

  return (
    <div className="caloriesContentSection">
      <div className="caloriesFormule">
        <div className="CaloriesGoal" style={{textAlign:"center"}}>
          <div className="caloriesGoalNumber">{goalCalories}</div>
          <span className="caloriesGoalText">Goal</span>
        </div>
        <FaMinus className="caloriesFormuuleMinus" />
        <div className="caloriesFood" style={{textAlign:"center"}}>
          <div className="caloriesFoodNumber">{consumedCalories.toFixed(2)}</div>
          <span className="caloriesFoodText">Consumed</span>
        </div>
        <TiEquals className="caloriesFormuuleEqual" />
        <div className="caloriesNet" style={{textAlign:"center"}}>
          <div
            className="caloriesNetNumber"
            style={{ color: !positiveNet && "red" }}
          >
            {netCalories.toFixed(2)}
          </div>
          <span className="caloriesNetText">Net</span>
        </div>
      </div>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${progressPercentage}%` }}
          aria-valuenow={progressPercentage}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {progressPercentage.toFixed(2)}%
        </div>
      </div>
      <div
        className="CaloriesWarningMessage"
        style={{ color: positiveNet ? "green" : "red" }}
      >
        {warningMessage}
      </div>
    </div>
  );
}
