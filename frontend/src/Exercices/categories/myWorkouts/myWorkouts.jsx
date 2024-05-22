import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import "./myWorkouts.css";

export default function MyWorkouts() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [exercises, setExercises] = useState([]);
  const [filtredExercises, setFiltredExercises] = useState([]);

  useEffect(() => {
    async function fetchWorkouts() {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/my-workouts/1"
        );
        setWorkouts(response.data);
        setLoading(false);

        const idsArray = response.data.map((workout) =>
          JSON.parse(workout.ids_exercises)
        );
        const filteredExercises = filterExercisesByIds(idsArray.flat());
        setFiltredExercises(filteredExercises);
      } catch (error) {
        console.error("Error fetching workouts:", error);
        setLoading(false);
      }
    }

    async function fetchExercises() {
      try {
        const response = await axios.get(
          "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/dist/exercises.json"
        );
        setExercises(response.data);
      } catch (error) {
        console.error("Error fetching exercises:", error);
      }
    }

    fetchWorkouts();
    fetchExercises();
  }, []);

  useEffect(() => {
    const idsArray = workouts.map((workout) =>
      JSON.parse(workout.ids_exercises)
    );
    const filteredExercises = filterExercisesByIds(idsArray.flat());
    setFiltredExercises(filteredExercises);
  }, [exercises, workouts]);

  function filterExercisesByIds(ids) {
    const filteredExercises = exercises.filter((exercise) =>
      ids.includes(exercise.id)
    );
    return filteredExercises;
  }

  function totalDuration(workouts) {
    return (
      workouts.reduce((total, workout) => total + parseInt(workout.duree), 0) +
      "min"
    );
  }

  function formatDate(dateString) {
    const today = new Date();
    const workoutDate = new Date(dateString);
    if (
      today.getDate() === workoutDate.getDate() &&
      today.getMonth() === workoutDate.getMonth() &&
      today.getFullYear() === workoutDate.getFullYear()
    ) {
      return "Today";
    } else {
      return workoutDate.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }
  }

  function formatTime(timeString) {
    const timeParts = timeString.split(":");
    const hours = parseInt(timeParts[0]);
    const minutes = parseInt(timeParts[1]);
    const period = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    return `${formattedHours}:${minutes < 10 ? "0" + minutes : minutes} ${period}`;
  }

  function groupByDate(workouts) {
    const grouped = {};
    workouts.forEach((workout) => {
      const formattedDate = formatDate(workout.date);
      if (!grouped[formattedDate]) {
        grouped[formattedDate] = [];
      }
      grouped[formattedDate].push(workout);
    });
    return Object.entries(grouped).map(([date, workouts]) => ({
      date,
      workouts,
    }));
  }

  const groupedWorkouts = groupByDate(workouts);

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

  function filterTodayWorkouts() {
    const today = new Date().toLocaleDateString("en-GB");
    const formattedToday = today.split("/").reverse().join("-");
    return groupedWorkouts
      .map(({ date, workouts }) => ({
        date,
        workouts: workouts.map((workout) => ({
          ...workout,
          isPast: date < formattedToday,
          alarm: formatTime(workout.alarm),
        })),
      }))
      .filter(({ date }) => date === formattedToday);
  }

  // Function to calculate time remaining until a deadline
  function calculateTimeRemaining(deadline) {
    const now = new Date();
    const deadlineTime = new Date(deadline);
    const timeRemaining = deadlineTime - now;

    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor
    ((timeRemaining % (1000 * 60)) / 1000);

    return `${hours}:${minutes}:${seconds}`;
  }

  return (
    <Fragment>
      <div className="parentComposantPersonalTraining">
        <div>
          <h3>My workouts</h3>
          <div id="ulHeaderWorkoutsCategories">
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
                    {workouts.length} workouts, {" "}
                    {workouts.map((workout) => (
                      <Fragment key={workout.id}>
                        {formatTime(workout.alarm)}
                      </Fragment>
                    ))}
                  </span>
                </header>
                <div className="workoutGroup">
                  {workouts.map((workout, workoutIndex) => (
                    <div key={workoutIndex} className="workout">
                      {filtredExercises
                        .filter((exercise) =>
                          workout.ids_exercises.includes(exercise.id)
                        )
                        .map((exercise, exerciseIndex) => (
                          <div key={exerciseIndex}>
                            <span className="parentImgInfoWorkout">
                              <img
                                src={`https://ik.imagekit.io/yuhonas/${exercise.images[1]}`}
                                alt={exercise.name}
                              />
                              <span>
                                <h4>{exercise.name}</h4>
                                <h6></h6>
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
              <div className="currentPage">
                {currentPage} of {workoutsPerPage - 1}
              </div>
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
