import React, { createContext, useState, useEffect } from "react";

export const CaloriesContextt = createContext();

export default function CaloriesContext({ children }) {
  const [birthday, setBirthday] = useState("");
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [goal, setGoal] = useState("");
  const [addMealPopUp, setAddMealPopUp] = useState(false);
  const [consumedCalories, setConsumedCalories] = useState(0);
  const [age, setAge] = useState(0);
  const [goalCalories, setGoalCalories] = useState(0); 
  const [proteinsGoal,setPreoteinsGoal]=useState(0);
  const [consumedProtein,setConsumedProtein]=useState(0);
  const [carbsGoal,setCarbsGoal]=useState(0);
  const [consumedCrabs,setConsumedCarbs]=useState(0)
  const [fatsGoal,setFatsGoal]=useState(0);
  const [ConsumedFats,setConsumedFats]=useState(0)
  const [acheivedGoal,setAchievvedGoal]=useState(false)
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
  
  
  useEffect(()=>{
    setPreoteinsGoal(goalCalories*0.25/4);
    setCarbsGoal(goalCalories*0.50/4);
    setFatsGoal(goalCalories*0.25/9)
  },[goalCalories])

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
    const calculatedGoalCalories =
      88.362 +
      13.397 * parseFloat(weight) +
      4.799 * parseFloat(height) -
      5.677 * age * 1.55;
    setGoalCalories(calculatedGoalCalories.toFixed(2));
  }, [height, weight, age]);

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
        setGoal,
        addMealPopUp,
        setAddMealPopUp,
        age,
        goalCalories,
        consumedCalories,
        setConsumedCalories,
        proteinsGoal,setPreoteinsGoal,
        consumedProtein,setConsumedProtein,
        carbsGoal,setCarbsGoal,
        consumedCrabs,setConsumedCarbs,
        fatsGoal,setFatsGoal,
        ConsumedFats,setConsumedFats,
        acheivedGoal,setAchievvedGoal
      }}
    >
      {children}
    </CaloriesContextt.Provider>
  );
}
