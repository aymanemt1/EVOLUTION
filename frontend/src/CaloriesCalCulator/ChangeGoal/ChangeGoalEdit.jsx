import React, { useContext, useState } from 'react';
import './ChangeGoal.css';

import { FaTimes } from "react-icons/fa";
import { CaloriesContextt } from '../../Context/CaloriesContext';

export default function ChangeGoalEdit() {
  const { setEditMode, weight, setWeight, height, setHeight, goal, setGoal, activite, setActivite } = useContext(CaloriesContextt);
  const [editedWeight, setEditedWeight] = useState(weight);
  const [editedHeight, setEditedHeight] = useState(height);
  const [editedGoal, setEditedGoal] = useState(goal);
  const [editedActivity, setEditedActivity] = useState(activite);

  const handleEditGoal = () => {
    // Here you should start your calculations based on the edited values
    // You can access editedWeight, editedHeight, editedGoal, and editedActivity here
    setWeight(editedWeight);
    setHeight(editedHeight);
    setGoal(editedGoal);
    setActivite(editedActivity);

    setEditMode(false);
  }

  const handleCancelEdit = () => {
    // Reset the edited values to the original ones
    setEditedWeight(weight);
    setEditedHeight(height);
    setEditedGoal(goal);
    setEditedActivity(activite);

    setEditMode(false);
  }

  return (
    <div className='editModeBackground'>
      <div className="editedModeContainer">
        <div className="editHeader">
          <h2 className='editModeTitle'> Info & Goals</h2>
          <FaTimes onClick={handleCancelEdit} className="addMealClosePopUp" />
        </div>
        <div className="editForm">
          <label>Weight (kg):</label>
          <input
            className="editInput"
            type="number"
            value={editedWeight}
            onChange={(e) => setEditedWeight(e.target.value)}
          />
          <label>Height (cm):</label>
          <input
            className="editInput"
            type="number"
            value={editedHeight}
            onChange={(e) => setEditedHeight(e.target.value)}
          />
          <label>Goal:</label>
          <select
            className="editSelect"
            value={editedGoal}
            onChange={(e) => setEditedGoal(e.target.value)}
          >
            <option value="Losing weight">Losing weight</option>
            <option value="Maintaining weight">Maintaining weight</option>
            <option value="Gaining weight">Gaining weight</option>
            <option value="Build muscle">Build muscle</option>
          </select>
          <label>Activity Level:</label>
          <select
            className="editSelect"
            value={editedActivity}
            onChange={(e) => setEditedActivity(e.target.value)}
          >
            <option value="Sedentary">Sedentary</option>
            <option value="Lightly active">Lightly active</option>
            <option value="Moderately active">Moderately active</option>
            <option value="Very active">Very active</option>
          </select>
        </div>
        <div className="editButtons">
          <button className="editButton" onClick={handleEditGoal}>Save</button>
          <button className="editButton" onClick={handleCancelEdit}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
