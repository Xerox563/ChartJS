import React from "react";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";
import DoughnutChart from "./components/DoughnutChart";
import DoughnutApiChart from "./components/WithApi";
import BubbleChart from "./components/BubbleChart";

const App = () => {
  return (
    <div>
      <LineChart />
      <BarChart />
      <PieChart />
      <DoughnutChart />
      <DoughnutApiChart />
      <BubbleChart />
    </div>
  );
};

export default App;
