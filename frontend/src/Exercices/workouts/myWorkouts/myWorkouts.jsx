import React, { Fragment, useState } from "react";
import "./myWorkouts.css";
import { DataCategories } from "../../categories/categoriesData";

export default function MyWorkouts() {
  // Function of workouts
  function groupByDate(workouts) {
    const grouped = {};
    workouts.forEach((workout) => {
      if (!grouped[workout.date]) {
        grouped[workout.date] = [];
      }
      grouped[workout.date].push(workout);
    });
    return Object.entries(grouped).map(([date, workouts]) => ({
      date,
      workouts,
    }));
  }

  function totalDuration(workouts) {
    return (
      workouts.reduce((total, workout) => total + parseInt(workout.duree), 0) +
      "min"
    );
  }

  function filterTodayWorkouts() {
    const today = new Date().toLocaleDateString("en-GB"); 
    const formattedToday = today.split("/").reverse().join("-"); 
    return groupedWorkouts
      .map(({ date, workouts }) => ({
        date,
        workouts: workouts.map((workout) => ({
          ...workout,
          isPast: date < formattedToday,
        })),
      }))
      .filter(({ date }) => date === formattedToday);
  }

  const groupedWorkouts = groupByDate(DataCategories.workouts);

  const [toggleWorkout, setToggleWorkout] = useState({});
  const [showToday, setShowToday] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const workoutsPerPage = 3; 

  function handleToggleWorkout(date, workoutIndex, exerciseIndex) {
    setToggleWorkout((prevState) => {
      const newToggleState = { ...prevState };
      if (!newToggleState[date]) {
        newToggleState[date] = {};
      }
      if (!newToggleState[date][workoutIndex]) {
        newToggleState[date][workoutIndex] = {};
      }
      newToggleState[date][workoutIndex][exerciseIndex] = !(
        newToggleState[date][workoutIndex][exerciseIndex] ?? false
      );
      return newToggleState;
    });
  }

  const indexOfLastWorkout = currentPage * workoutsPerPage;
  const indexOfFirstWorkout = indexOfLastWorkout - workoutsPerPage;
  const currentWorkouts = showToday
    ? filterTodayWorkouts()
    : groupedWorkouts.slice(indexOfFirstWorkout, indexOfLastWorkout);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Fragment>
      <div className="parentComposantPersonalTraining">
        <div>
          <h3>My workouts</h3>
          {/* <button title="Add workout">
            <i className="bx bx-book-add"></i>
          </button> */}
          <div  id="ulHeaderWorkoutsCategories">
        <ul>
          <li>
            <button
              id="clearAllBtn"
              onClick={() => {
                setShowToday(false);
                setCurrentPage(1); 
              }}
              className={!showToday ? "activeBtnPersonalTraining" : ""}
              >
              History
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setShowToday(true);
                setCurrentPage(1); 
              }}
              id={showToday ? "activeBtnPersonalTraining" : ""}
            >
              Today
            </button>
          </li>
        </ul>
        </div>
        <div className="parentMappingWorkouts">
          {currentWorkouts.map(({ date, workouts }) => (
            <div key={date} className="rowWorkouts">
              <header>
                <span>{date}</span>
                <span>
                  {workouts.length} workouts, {totalDuration(workouts)}
                </span>
              </header>
              <div className="workoutGroup">
                {workouts.map((workout, workoutIndex) => (
                  <div key={workoutIndex} className="workout">
                    {workout.exercises.map((exercise, exerciseIndex) => (
                      <div key={exerciseIndex}>
                        <span className="parentImgInfoWorkout">
                          <img src={exercise.thumbnail} alt={exercise.title} />
                          <span>
                            <h6>{exercise.title}</h6>
                            <h4>
                              {exercise.time[0]} - {exercise.time[1]}
                            </h4>
                          </span>
                        </span>
                        <span className="parentCheckRadioWorkout">
                          <label
                            className="circleRadioLabelWorkout"
                            onClick={() =>
                              handleToggleWorkout(
                                date,
                                workoutIndex,
                                exerciseIndex
                              )
                            }
                          >
                            {toggleWorkout[date]?.[workoutIndex]?.[
                              exerciseIndex
                            ] ? (
                              <i
                                className="bx bx-check"
                                id="checkRadioIcon"
                              ></i>
                            ) : null}
                          </label>
                          {exercise.isPast ? (
                            <i
                            className="bx bx-x-circle"
                            id="exerciseDisabledIcon"
                            ></i>
                          ) : null}
                          <input
                            type="radio"
                            name="workoutRadio"
                            disabled={exercise.isPast}
                            />
                        </span>
                      </div>
                    ))}
                  </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
        {showToday && filterTodayWorkouts().length === 0 && (
          <button className="addWorkoutIfheDidntHaveBtn">
            <i className="bx bxs-book-add"></i>
            <span>Add Workout</span>
          </button>
        )}
          </div>
        <div className="pagination">
          {showToday ? null : (
            <Fragment>
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
              >
                {"<"}
              </button>
              <div className="currentPage">{currentPage} of {workoutsPerPage-1}</div>
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={
                  currentPage ===
                  Math.ceil(groupedWorkouts.length / workoutsPerPage)
                }
              >
                {">"}
              </button>
            </Fragment>
          )}
        </div>
      </div>
    </Fragment>
  );
}
