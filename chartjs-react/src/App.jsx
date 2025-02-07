import React from "react";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";
import DoughnutChart from "./components/DoughnutChart";

const App = () => {
  return (
    <div>
      <LineChart />
      <BarChart />
      <PieChart />
      <DoughnutChart />
    </div>
  );
};

export default App;
