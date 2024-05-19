import React, { createContext, useState, useEffect } from "react";

export const CaloriesContextt = createContext();

export default function CaloriesContext({ children }) {
  const [birthday, setBirthday] = useState("");
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [goal, setGoal] = useState("");
  const [activite, setActivite] = useState("");
  const [addMealPopUp, setAddMealPopUp] = useState(false);
  const [consumedCalories, setConsumedCalories] = useState(0);
  const [age, setAge] = useState(0);
  const [goalCalories, setGoalCalories] = useState(0);
  const [proteinsGoal, setPreoteinsGoal] = useState(0);
  const [consumedProtein, setConsumedProtein] = useState(0);
  const [carbsGoal, setCarbsGoal] = useState(0);
  const [consumedCrabs, setConsumedCarbs] = useState(0);
  const [fatsGoal, setFatsGoal] = useState(0);
  const [ConsumedFats, setConsumedFats] = useState(0);
  const [acheivedGoal, setAchievvedGoal] = useState(false);
  const [activityMultiplier, setActivityMultiplier] = useState(1.2); // Default multiplier for sedentary
  const [goalCaloriesAdjustment, setGoalCaloriesAdjustment] = useState(0); // Adjustment for goal calories
  const [editedMode,setEditMode]=useState(false)

  useEffect(() => {
    if (consumedCalories >= goalCalories) {
      setAchievvedGoal(true);
    } else {
      setAchievvedGoal(false);
    }
  }, [consumedCalories, goalCalories]);

  useEffect(() => {
    let clickCount = 0;

    const handleClick = () => {
      clickCount++;
      if (clickCount === 2) {
        setAchievvedGoal(false);
        clickCount = 0; // Reset click count after double click
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    setPreoteinsGoal(goalCalories * 0.25 / 4);
    setCarbsGoal(goalCalories * 0.50 / 4);
    setFatsGoal(goalCalories * 0.25 / 9);
  }, [goalCalories]);

  useEffect(() => {
    if (birthday) {
      const today = new Date();
      const birthDate = new Date(birthday);
      let ageDiff = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        ageDiff--;
      }
      setAge(ageDiff);
    }
  }, [birthday]);

  useEffect(() => {
    // Calculate activity multiplier based on selected activity level
    switch (activite) {
      case 'Sedentary':
        setActivityMultiplier(1.2);
        break;
      case 'Lightly active':
        setActivityMultiplier(1.375);
        break;
      case 'Moderately active':
        setActivityMultiplier(1.55);
        break;
      case 'Very active':
        setActivityMultiplier(1.725);
        break;
      default:
        setActivityMultiplier(1.2); // Default to sedentary
    }
  }, [activite]);

  useEffect(() => {
    // Calculate the adjustment for goal calories based on the selected goal
    switch (goal) {
      case 'Losing weight':
        setGoalCaloriesAdjustment(-500);
        break;
      case 'Gaining weight':
        setGoalCaloriesAdjustment(500);
        break;
      case 'Maintaining weight':
        setGoalCaloriesAdjustment(0);
        break;
      case 'Build muscle':
        setGoalCaloriesAdjustment(250);
        break;
      default:
        setGoalCaloriesAdjustment(0);
    }
  }, [goal]);

  useEffect(() => {
    const calculatedGoalCalories =
      88.362 +
      (13.397 * parseFloat(weight) || 0) +
      (4.799 * parseFloat(height) || 0) -
      (5.677 * age) * activityMultiplier +
      goalCaloriesAdjustment; // Adjusted for activity multiplier and goal adjustment
    setGoalCalories(parseFloat(calculatedGoalCalories.toFixed(2)));
  }, [height, weight, age, activityMultiplier, goalCaloriesAdjustment]);

  
  return (
    <CaloriesContextt.Provider
      value={{
        birthday,
        setBirthday,
        height,
        setHeight,
        weight,
        setWeight,
        goal,
        editedMode,setEditMode,
        setGoal,
        addMealPopUp,
        setAddMealPopUp,
        age,
        goalCalories,
        consumedCalories,
        setConsumedCalories,
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
        acheivedGoal,
        setAchievvedGoal,
        activite,
        setActivite,
        activityMultiplier,
      }}
    >
      {children}
    </CaloriesContextt.Provider>
  );
}
