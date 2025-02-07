import React, { useState, useEffect } from "react"; // Import React and Hooks
import { Bar } from "react-chartjs-2"; // Import Bar chart component
import {
  Chart as ChartJS,
  BarElement, // Handles bar chart elements
  CategoryScale, // Manages X-axis labels
  LinearScale, // Manages Y-axis numbers
  Tooltip, // Shows tooltips on hover
  Legend, // Displays dataset labels
} from "chart.js";

// Register required Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = () => {
  // State to store chart data (Initially null)
  const [chartData, setChartData] = useState(null);

  // useEffect runs once when the component mounts
  useEffect(() => {
    // Simulating an API call with a 2-second delay
    setTimeout(() => {
      setChartData({
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], // X-axis labels
        datasets: [
          {
            label: "Revenue", // Dataset label
            data: [500, 700, 800, 600, 900, 1000], // Y-axis values (Revenue)
            backgroundColor: "yellow", // Bar color
            borderColor: "darkblue", // Border color of bars
            borderWidth: 1, // Thickness of border
          },
        ],
      });
    }, 2000); // Delay to simulate fetching data
  }, []); // Empty dependency array means it runs **only once**

  // Chart options (Customization)
  const options = {
    responsive: true, // Make the chart responsive
    plugins: {
      legend: { display: true }, // Show dataset label
      tooltip: { enabled: true }, // Show tooltips when hovering
    },
    scales: {
      y: { beginAtZero: true }, // Y-axis starts from 0
    },
  };

  return (
    <div style={{ width: "600px", margin: "auto", textAlign: "center" }}>
      <h2>Monthly Revenue</h2>
      {/* Show the chart if data is available, otherwise show loading text */}
      {chartData ? (
        <Bar data={chartData} options={options} />
      ) : (
        <p>Loading chart...</p>
      )}
    </div>
  );
};

export default BarChart;

/*
 * A bar chart provides a way of showing data values represented as vertical bars. It is sometimes used to show trend data, and the comparison of multiple data sets side by side.
 ✅ Doughnut Chart → Like a Pie Chart but with a hole in the middle.
 ✅ Pie Chart → A full-circle chart with slices.
 */
