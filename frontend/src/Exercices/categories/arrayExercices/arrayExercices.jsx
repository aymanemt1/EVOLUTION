import React, { Fragment, useState, useEffect } from "react";
import axios from 'axios';
import './arrayExercices.css';

export default function ArrayExercices() {
  const muscles = ['abdominals', 'shoulders', 'glutes', 'quadriceps', 'biceps', 'forearms', 'triceps', 'chest', 'lower back', 'traps', 'lats', 'middle back', 'calves'];
  const [exercises, setExercises] = useState([]);
  const [selectedMuscle, setSelectedMuscle] = useState('All');
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 7;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/dist/exercises.json');
        setExercises(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleFilterClick = () => {
    setFilterMenuOpen(!filterMenuOpen);
  };

  const handleMuscleClick = (muscle) => {
    setSelectedMuscle(muscle);
    setFilterMenuOpen(false);
    setCurrentPage(1); // Reset to the first page whenever a new muscle group is selected
  };

  const handlePageChange = (direction) => {
    setCurrentPage(prevPage => prevPage + direction);
  };

  const filteredExercises = selectedMuscle === 'All' 
    ? exercises 
    : exercises.filter(exercise => exercise.primaryMuscles.includes(selectedMuscle));

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = filteredExercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const totalPages = Math.ceil(filteredExercises.length / exercisesPerPage);

  return (
    <Fragment>
      <div className="parentComposantPersonalTraining">
        <h3>Exercises</h3>
        <ul id="ulExercicesCategories">
          <li>
            <button onClick={() => setSelectedMuscle('All')}>All Exercises</button>
          </li>
          <li>
            <button onClick={handleFilterClick}><i className='bx bx-filter'></i> Filter</button>
          </li>
          <div className="menuOfFilter" style={{ display: filterMenuOpen ? 'block' : 'none' }}>
            <ul>
              {muscles.map((muscle, index) => (
                <li key={index}>
                  <button onClick={() => handleMuscleClick(muscle)}>{muscle}</button>
                </li>
              ))}
            </ul>
          </div>
        </ul>
        <div>
          <h6>{selectedMuscle}</h6>
          <ul className="ulArrayExercices">
            {currentExercises.map((exercise, index) => (
              <li key={index}>
                <div className="infoExercicesCategories">
                  <img src={`https://ik.imagekit.io/yuhonas/${exercise.images[0]}`} className="imgExercicesCategories" alt={exercise.name} />
                  <span>
                    <p>{exercise.name}</p>
                    <h4>{exercise.equipment}</h4>
                  </span>
                </div>
                <div>
                  <ul id="buttonsExercicesCategories">
                    <li>
                      <button><i className='bx bx-heart'></i></button>
                      <button><i className='bx bx-info-circle'></i></button>
                    </li>
                  </ul>
                </div>
              </li>
            ))}
          </ul>
          <div className="pagination">
            <button 
              onClick={() => handlePageChange(-1)} 
              disabled={currentPage === 1}
            >
              &lt;
            </button>
            <span>{currentPage} of {totalPages}</span>
            <button 
              onClick={() => handlePageChange(1)} 
              disabled={currentPage === totalPages}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
