import React, { useState, useEffect } from "react";
import { Bubble } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary components
ChartJS.register(CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const BubbleChart = () => {
  // State to hold chart data
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Simulating an API call (can replace this with fetch)
    setTimeout(() => {
      setChartData({
        datasets: [
          {
            label: "Product Sales",
            data: [
              { x: 10, y: 20, r: 15 }, // x = units sold, y = revenue, r = bubble size
              { x: 30, y: 40, r: 10 },
              { x: 50, y: 80, r: 25 },
              { x: 70, y: 50, r: 20 },
            ],
            backgroundColor: "rgba(255, 99, 132, 0.6)", // Bubble color
            borderColor: "rgba(255, 99, 132, 1)",
          },
        ],
      });
    }, 1000); // Simulate a delay
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true, position: "top" },
      tooltip: { enabled: true },
    },
    scales: {
      x: { beginAtZero: true },
      y: { beginAtZero: true },
    },
  };

  return (
    <div style={{ width: "500px", margin: "auto" }}>
      <h2>Bubble Chart </h2>
      {chartData ? (
        <Bubble data={chartData} options={options} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BubbleChart;
