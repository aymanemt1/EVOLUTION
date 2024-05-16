import React, { Fragment, useState, useEffect } from "react";
import axios from 'axios';
import './personalTraining.css';

export default function PersonalTraining() {
  const [exercises, setExercises] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentLevel, setCurrentLevel] = useState("");
  const itemsPerPage = 8;

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

  const filteredData = currentLevel
    ? exercises.filter((item) => item.level === currentLevel)
    : exercises;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleLevelClick = (level) => {
    setCurrentLevel(level);
    setCurrentPage(1);
  };

  const handleClearAll = () => {
    setCurrentLevel("");
    setCurrentPage(1);
  };

  return (
    <Fragment>
      <div className="parentComposantPersonalTraining">
        <div>

        <h3>Personal Training</h3>
        <ul>
          <li>
            <button onClick={handleClearAll} id="clearAllBtn">
              All
            </button>
          </li>
          <li>
            <button
              onClick={() => handleLevelClick("beginner")}
              id={
                currentLevel === "beginner" ? "activeBtnPersonalTraining" : ""
              }
              >
              Beginner
            </button>
          </li>
          <li>
            <button
              onClick={() => handleLevelClick("intermediate")}
              id={currentLevel === "intermediate" ? "activeBtnPersonalTraining" : ""}
              >
              Intermediate
            </button>
          </li>
          <li>
            <button
              onClick={() => handleLevelClick("expert")}
              id={currentLevel === "expert" ? "activeBtnPersonalTraining" : ""}
            >
              Expert
            </button>
          </li>
        </ul>
        <div className="parentExercicesPersonalTrainngMap">
          <table cellSpacing="7">
            <tbody>
              {currentItems.map((item, index) =>
                index % 2 === 0 ? (
                  <tr key={index}>
                    <td>
                      <div>
                        <div className="parentImageExercicesPersonalT">
                        <img
                          src={`https://ik.imagekit.io/yuhonas/${item.images[0]}`}
                          alt={item.name}
                          className="imgThubmnailExercicesPT"
                          />
                          </div>
                        <h6>{item.name}</h6>
                        <p>
                          <span>{item.level}</span>, {item.category}
                        </p>
                      </div>
                    </td>
                    {currentItems[index + 1] && (
                      <td>
                        <div>
                        <div className="parentImageExercicesPersonalT">
                          <img
                            src={`https://ik.imagekit.io/yuhonas/${currentItems[index + 1].images[0]}`}
                            alt={currentItems[index + 1].name}
                            className="imgThubmnailExercicesPT"
                            />
                          </div>
                          <h6>{currentItems[index + 1].name}</h6>
                          <p>
                            <span>{currentItems[index + 1].level}</span>, {currentItems[index + 1].category}
                          </p>
                        </div>
                      </td>
                    )}
                  </tr>
                  ) : null
              )}
            </tbody>
          </table>
        </div>
          </div>
        <div className="pagination">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            >
            {"<"}
          </button>
          <div className="currentPage">{currentPage} of {totalPages}</div>
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
