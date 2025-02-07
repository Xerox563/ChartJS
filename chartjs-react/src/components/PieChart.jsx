import React from "react";
import { Chart, Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register component
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ["Apple", "Banana", "Mango", "Gauva", "Grapes"],
    datasets: [
      {
        label: "Fruit Consumption",
        data: [10, 15, 20, 5],
        backgroundColor: ["red", "yellow", "orange", "purple"],
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
      <h2>Pie Chart</h2>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
