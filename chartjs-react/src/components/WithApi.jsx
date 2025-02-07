/* 
step1 -> Chart as ChartJs,ArcElement,(Point,Line,Bar)Element,Tooltip,Legend,CategoryScale(x-axis),LinearScale(Y axis).
step2 -> ChartJS.register(options).
steps3 -> {
  -> Either create state and setData with data ,
  -> const data = {labels:[],[{label:"",data:[],backgroundColor:[],borderColor:[],borderWidth:1}]}
}
step4 ->  options : {
  responsive: true,
  plugins:{
      legend:{display:true, position:"bottom"},
      tooltip: {enabled : true},
  },
};
*/

/*
 * If your data is coming from an API, you need to:
1️⃣ Fetch the data using fetch (or axios).
2️⃣ Store it in state using useState.
3️⃣ Wait for the data to load (useEffect).
4️⃣ Pass it to the chart. 
 */

import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutApiChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Fetch data from API
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        // Extract relevant data (example: picking first 4 products)
        const labels = data.products.slice(0, 4).map((item) => item.title);
        const values = data.products.slice(0, 4).map((item) => item.stock);

        // Set state with API data
        setChartData({
          labels: labels,
          datasets: [
            {
              label: "Stock Availability",
              data: values,
              backgroundColor: ["red", "blue", "yellow", "green"],
              borderColor: ["black", "black", "black", "black"],
              borderWidth: 1,
            },
          ],
        });
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true, position: "bottom" },
      tooltip: { enabled: true },
    },
  };

  return (
    <div style={{ width: "400px", margin: "auto" }}>
      <h2>Doughnut Chart (API Data)</h2>
      {chartData ? (
        <Doughnut data={chartData} options={options} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DoughnutApiChart;
