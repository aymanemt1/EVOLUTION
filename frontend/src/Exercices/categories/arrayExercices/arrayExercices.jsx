import React, { Fragment, useState, useEffect } from "react";
import { fetchData } from "../../../utils/fetchData";
import "./arrayExercices.css";

export default function ArrayExercices() {
  const [exercisesByMuscle, setExercisesByMuscle] = useState({
    AllExercises: [],
    Cardio: [],
    Back: [],
    Chest: [],
    LowerArms: [],
    LowerLegs: [],
    Neck: [],
    Shoulders: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMuscle, setSelectedMuscle] = useState(""); 
  const itemsPerPage = 7;

  useEffect(() => {
    const fetchDataForMuscleGroup = async (muscle, url, retryCount = 3) => {
      try {
        const exerciseOptions = {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "e59d572bd7msh4ecde0daaf45a95p1f2e4ajsn7f8cab59bd7b",
            "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
          },
        };

        const data = await fetchData(url, exerciseOptions);
        setExercisesByMuscle((prevState) => ({
          ...prevState,
          [muscle]: data,
        }));
      } catch (error) {
        if (retryCount > 0 && error.message === "Too many requests") {
          // Retry after 1 second
          setTimeout(() => {
            fetchDataForMuscleGroup(muscle, url, retryCount - 1);
          }, 1000);
        } else {
          setError(error);
          setLoading(false);
        }
      }
    };

    const muscleEndpoints = {
      Cardio: "https://exercisedb.p.rapidapi.com/exercises/bodyPart/cardio",
      Back: "https://exercisedb.p.rapidapi.com/exercises/bodyPart/back",
      Chest: "https://exercisedb.p.rapidapi.com/exercises/bodyPart/chest",
      LowerArms: "https://exercisedb.p.rapidapi.com/exercises/bodyPart/lower%20arms",
      LowerLegs: "https://exercisedb.p.rapidapi.com/exercises/bodyPart/lower%20legs",
      Neck: "https://exercisedb.p.rapidapi.com/exercises/bodyPart/neck",
      Shoulders: "https://exercisedb.p.rapidapi.com/exercises/bodyPart/shoulders",
    };

    const muscleGroups = Object.keys(muscleEndpoints);
    const fetchDataPromises = muscleGroups.map((muscle) =>
      fetchDataForMuscleGroup(muscle, muscleEndpoints[muscle])
    );

    Promise.all(fetchDataPromises)
      .then(() => setLoading(false))
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="parentLoader"><div className="loader"></div></div>;
  }

  const totalExercises = exercisesByMuscle.AllExercises.length;
  const totalPages = Math.ceil(totalExercises / itemsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastExercise = currentPage * itemsPerPage;
  const indexOfFirstExercise = indexOfLastExercise - itemsPerPage;
  const currentExercises = exercisesByMuscle.AllExercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const handleMuscleClick = (muscle) => {
    setCurrentPage(1);
    const selectedExercises = exercisesByMuscle[muscle];
    const totalSelectedExercises = selectedExercises.length;
    const selectedTotalPages = Math.ceil(totalSelectedExercises / itemsPerPage);
    paginate(selectedTotalPages > 0 ? 1 : 0);
    setSelectedMuscle(muscle);  
  };

  return (
    <Fragment>
      <div className="parentComposantPersonalTraining">
        <div>
          <h3>Exercises</h3>
          <ul id="ulExercicesCategories">
            {Object.keys(exercisesByMuscle).map((muscle) => (
              <li key={muscle}>
                <button
                  onClick={() => handleMuscleClick(muscle)}
                  id={muscle === selectedMuscle ? "activeBtnPersonalTraining" : null}
                >
                  {muscle}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="parentArrayExercices">
          {currentExercises.map((item, index) => (
            <div key={index} className="arrowArrayExercices">
              <div>
                <img src={item.gifUrl} alt="" />
                <span>
                  <h6>{item.bodyPart}</h6>
                  <p>{item.target}</p>
                </span>
              </div>
              <div>
                <button>
                  <i className="bx bx-heart"></i>
                </button>
                <button>
                  <i className="bx bx-info-circle"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            {"<"}
          </button>
          <div className="currentPage">{currentPage}</div>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            {">"}
          </button>
        </div>
      </div>
    </Fragment>
  );
}
