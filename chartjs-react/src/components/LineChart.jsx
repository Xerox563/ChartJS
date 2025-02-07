import React, { useState, useEffect } from "react"; // Import React and hooks
import { Line } from "react-chartjs-2"; // Import the Line chart component
import {
  Chart as ChartJS,
  LineElement, // Draws the line on the chart
  CategoryScale, // Handles X-axis labels (months)
  LinearScale, // Handles Y-axis values (sales)
  PointElement, // Draws dots on the line
  Tooltip, // Shows a tooltip when hovering over points
  Legend, // Displays the label of the dataset
} from "chart.js";

// Register the necessary chart components (Chart.js is modular)
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const LineChart = () => {
  // State to hold the chart data (Initially null)
  const [chartData, setChartData] = useState(null);

  // useEffect runs when the component mounts (empty dependency array [])
  useEffect(() => {
    // Simulating an API call with a 2-second delay
    setTimeout(() => {
      setChartData({
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], // X-axis labels (Months)
        datasets: [
          {
            label: "Sales", // The name displayed in the chart legend
            data: [10, 40, 30, 70, 50, 90], // Y-axis data points (Sales numbers)
            borderColor: "red", // Line color
            backgroundColor: "rgba(255, 0, 0, 0.2)", // Light red fill under the line
            tension: 0.4, // Makes the line smooth (0 = sharp, 1 = very smooth)
          },
        ],
      });
    }, 2000); // Delay of 2 seconds to simulate fetching data from API
  }, []); // Empty dependency array means it runs **only once** when the component mounts

  // Define chart options (Styling and settings)
  const options = {
    responsive: true, // Makes the chart adjust to different screen sizes
    plugins: {
      legend: { display: true }, // Show legend (Sales label)
    },
    scales: {
      y: { beginAtZero: true }, // Start Y-axis from 0 instead of auto-scaling
    },
  };

  return (
    <div style={{ width: "600px", margin: "auto", textAlign: "center" }}>
      <h2>Sales Data</h2>
      {/* If chartData is available, show the chart. Otherwise, show a loading message */}
      {chartData ? (
        <Line data={chartData} options={options} />
      ) : (
        <p>Loading chart...</p>
      )}
    </div>
  );
};

export default LineChart;

/*
 * Line Chart is a way of plotting data points on a line . Often used to show trend data , or the comparison of two data sets.
 * A line chart is used to show how things change over time (like sales per month).
 */
