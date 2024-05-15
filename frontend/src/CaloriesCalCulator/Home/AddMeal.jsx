import React, { useState } from 'react';

export default function AddMeal({ title }) {
  const [nutritionName, setNutritionName] = useState('');
  const [nutritionQuantity, setNutritionQuantity] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [calories, setCalories] = useState(null);

  const handleNutritionNameChange = (e) => {
    setNutritionName(e.target.value);
  };

  const handleNutritionQuantityChange = (e) => {
    setNutritionQuantity(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://api.api-ninjas.com/v1/nutrition?query=${nutritionName}`, {
        method: 'GET',
        headers: {
          'X-Api-Key': 'vvBq2s9HqMkoDLa2vkp0jg==eUhiy9FYL9smUkga',
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        const data = await response.json();
        setResult(data);
        setError(null);
        // Check if both nutritionQuantity and data.calories are valid numbers
        console.log(data)
        const quantity = parseFloat(nutritionQuantity);
        const cal = parseFloat(data[0 ].calories);
        if (!isNaN(quantity) && !isNaN(cal)) {
          const calculatedCalories = (quantity / 100) * cal;
          setCalories(calculatedCalories);
        } else {
          setCalories(null); 
        }
      } else {
        const errorData = await response.json();
        setError(errorData);
        setResult(null);
        setCalories(null);
      }
    } catch (error) {
      setError('An error occurred while fetching data');
      setResult(null);
      setCalories(null);
    }
  };

  return (
    <div className='AddMeal'>
      <div className="AddMealContent">
        <h2>{title}</h2>
        <div>
          <label htmlFor="nutritionName">Nutrition Name:</label>
          <input
            type="text"
            id="nutritionName"
            value={nutritionName}
            onChange={handleNutritionNameChange}
          />
        </div>
        <div>
          <label htmlFor="nutritionQuantity">Nutrition Quantity:</label>
          <input
            type="text"
            id="nutritionQuantity"
            value={nutritionQuantity}
            onChange={handleNutritionQuantityChange}
          />
        </div>
        <button onClick={handleSearch}>Search</button>
        {result && (
          <div>
            <p>Calories: {calories}</p>
            {/* Render other nutrition information as needed */}
          </div>
        )}
        {error && <p style={{ color: 'red' }}>{error.message}</p>}
      </div>
    </div>
  );
}
