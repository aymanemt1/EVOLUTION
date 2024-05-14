import React, { Fragment, useState } from "react";
import "./categories.css";
import { DataCategories } from "./categoriesData";

export default function Categories() {
  const { personalTraining } = DataCategories;
  const [currentPage, setCurrentPage] = useState(1);
  const [currentLevel, setCurrentLevel] = useState(""); 
  const itemsPerPage = 6;

  const filteredData = currentLevel
    ? personalTraining.filter((item) => item.level === currentLevel)
    : personalTraining;

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
      <div className="parentCategoriresExercices">
        <div className="parentComposantPersonalTraining">
          <h3>Personal Training</h3>
          <ul>
            <li>
              <button onClick={handleClearAll} id="clearAllBtn">Clear All</button>
            </li>
            <li>
              <button
                onClick={() => handleLevelClick("beginner")}
                id={currentLevel === "beginner" ? "activeBtnPersonalTraining" : ""}
              >
                Beginner
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLevelClick("medium")}
                id={currentLevel === "medium" ? "activeBtnPersonalTraining" : ""}
              >
                Medium
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLevelClick("advanced")}
                id={currentLevel === "advanced" ? "activeBtnPersonalTraining" : ""}
              >
                Advanced
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
                          <img
                            src={item.thumbnail}
                            alt={item.title}
                            className="imgThubmnailExercicesPT"
                          />
                          <h6>{item.title}</h6>
                          <p>
                            <span>{item.level}</span>, {item.duree}min
                          </p>
                        </div>
                      </td>
                      {currentItems[index + 1] && (
                        <td>
                          <div>
                            <img
                              src={currentItems[index + 1].thumbnail}
                              alt={currentItems[index + 1].title}
                              className="imgThubmnailExercicesPT"
                            />
                            <h6>{currentItems[index + 1].title}</h6>
                            <p>
                              <span>{currentItems[index + 1].level}</span>,{" "}
                              {currentItems[index + 1].duree}min
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
          <ul className="paginationPersonalTraining">
            <li>
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                id="btnPaginate"
              >
                {"<"}
              </button>
            </li>
            <li
              key={currentPage}
              onClick={() => paginate(currentPage)}
              className="active"
            >
              {currentPage}
            </li>
            <li>
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                id="btnPaginate"
              >
                {">"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
}
