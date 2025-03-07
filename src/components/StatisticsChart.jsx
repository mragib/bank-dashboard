import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const ExpenseStatisticsChart = ({ data }) => {
  const pieData = {
    labels: data.labels || [],
    datasets: [
      {
        data: data.values || [],
        backgroundColor: data.colors || [],
        borderWidth: 8,
        borderColor: "#ffffff",
      },
    ],
  };

  const options = {
    rotation: 180,
    hover: { mode: null },
    interaction: { mode: null },
    plugins: {
      datalabels: {
        color: "#fff",
        font: {
          family: "Inter",
          weight: "bold",
        },
        textAlign: "center",
        formatter: (value, context) => {
          return [`${value}%`, context.chart.data.labels[context.dataIndex]];
        },
      },
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },
    },
  };

  return (
    <div style={{ maxHeight: "260px", margin: "0 auto" }}>
      <Pie data={pieData} options={options} />
    </div>
  );
};

export default ExpenseStatisticsChart;
