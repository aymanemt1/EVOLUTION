import React, { Fragment, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import "./weightTracking.css";
import { DataCategories } from "../../categories/categoriesData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function WeightTracking() {
  const [goal, setGoal] = useState('Maintaining weight');
  const weight = 95;

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const totalItems = DataCategories.weightTracking.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = DataCategories.weightTracking.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const lastWeight = DataCategories.weightTracking[DataCategories.weightTracking.length - 1].weight;
  let mainLineColor = 'white'; 

  if (goal === 'Losing weight') {
    mainLineColor = lastWeight > weight ? 'red' : 'rgb(94, 255, 54)';
  } else if (goal === 'Gaining weight') {
    mainLineColor = lastWeight < weight ? 'red' : 'rgb(94, 255, 54)';
  } else if (goal === 'Maintaining weight') {
    mainLineColor = Math.abs(lastWeight - weight) <= 2 ? 'rgb(94, 255, 54)' : 'red'; 
  } else if (goal === 'Build muscle') {
    mainLineColor = lastWeight >= weight ? 'rgb(94, 255, 54)' : 'red';
  }

  const chartData = {
    labels: DataCategories.weightTracking.map(item => {
      const [day, month, year] = item.date.split('-');
      return `${day}/${month}`;
    }),
    datasets: [
      {
        label: 'Weight Over Time',
        data: DataCategories.weightTracking.map(item => item.weight),
        fill: false,
        borderColor: mainLineColor,
        backgroundColor: mainLineColor,
        tension: 0.5,
      },
      {
        label: 'Target Weight',
        data: Array(DataCategories.weightTracking.length).fill(weight),
        borderColor: 'black',
        borderDash: [12, 0.5],
        fill: false,
        pointRadius: 2,
      },
    ],
  };

  const yearTitle = DataCategories.weightTracking.length > 0 ? DataCategories.weightTracking[DataCategories.weightTracking.length - 1].date.split('-')[2] : '';

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: 'white',
        },
        position: 'top',
      },
      title: {
        display: true,
        text: `Weight Tracking Chart (${yearTitle})`,
        color: 'white',
      },
    },
    scales: {
      x: {
        ticks: {
          color: 'white',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)',
        },
      },
      y: {
        ticks: {
          color: 'white',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)',
        },
      },
    },
  };

  return (
    <Fragment>
      <div className="parentWeightComposant">
        <div className="parentWeightTracking">
          <div className="headerWeightTracking">
            <h3>Weight Tracking</h3>
            <button>
              <i className="bx bx-calendar-plus"></i>
            </button>
          </div>
          <div className="contentWeightTracking">
            {currentItems.map((item, index) => (
              <div className="rowWeightTracking" key={index}>
                <div className="headerRowWeightTracking">
                  <span>{item.date}</span>
                  <span>{item.time}</span>
                </div>
                <div className="contentRowTracking">
                  <h3>{item.weight} kg</h3>
                  <h5>
                    -0.2kg <i className="bx bxs-up-arrow-circle"></i>
                  </h5>
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
            <div className="currentPage">
              {currentPage} of {totalPages}
            </div>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              {">"}
            </button>
          </div>
        </div>
        
        <div className="parentWeightChart">
          <Line data={chartData} options={chartOptions} className='chartWeightTracking'/>
        </div>
      </div>
    </Fragment>
  );
}
