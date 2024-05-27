import React, { useContext, useState } from 'react';
import './ChangeGoal.css';
import axios from 'axios'; // Import Axios library

import { FaTimes } from "react-icons/fa";
import { CaloriesProvider } from '../../Context/CaloriesContext';

export default function ChangeGoalEdit() {
  const { setEditMode, weight, setWeight, height, setHeight, goal, setGoal, activity, setActivity } = useContext(CaloriesProvider);
  const [editedWeight, setEditedWeight] = useState(weight);
  const [editedHeight, setEditedHeight] = useState(height);
  const [editedGoal, setEditedGoal] = useState(goal);
  const [editedActivity, setEditedActivity] = useState(activity);

  const handleEditGoal = () => {
    // Make a PUT request to update user info
    axios.put('/api/calories_users', {
      weight: editedWeight,
      height: editedHeight,
      goal: editedGoal,
      activity: editedActivity
    })
    .then(response => {
      // Update context state with new values
      setWeight(editedWeight);
      setHeight(editedHeight);
      setGoal(editedGoal);
      setActivity(editedActivity);

      // Exit edit mode
      setEditMode(false);
    })
    .catch(error => {
      console.error('Error updating user info:', error);
      // Handle error if needed
    });
  }

  const handleCancelEdit = () => {
    // Reset edited values to original ones
    setEditedWeight(weight);
    setEditedHeight(height);
    setEditedGoal(goal);
    setEditedActivity(activity);

    // Exit edit mode
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
