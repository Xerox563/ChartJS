import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register components for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    labels: ["Red", "Blue", "Yellow", "Green"],
    datasets: [
      {
        label: "Votes",
        data: [12, 19, 3, 5],
        backgroundColor: ["red", "blue", "yellow", "green"],
        borderColor: ["black", "black", "black", "black"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true, position: "bottom" },
      tooltip: { enabled: true },
    },
  };

  return (
    <div style={{ width: "400px", margin: "auto" }}>
      <h2>Doughnut Chart</h2>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
