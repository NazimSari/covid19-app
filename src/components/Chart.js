import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

function ChartComponent({ countryData }) {
  const data = {
    labels: ["Ölüm", "Enfekte Olan", "İyileşen", "Aktif Hasta"],
    datasets: [
      {
        label: "COVID-19 Verileri",
        data: [
          countryData.deaths,
          countryData.cases,
          countryData.recovered,
          countryData.active,
        ],
        backgroundColor: [
          "#E97777", // Ölüm
          "#CDE990", // Enfekte Olan
          "#B4E4FF", // İyileşen
          "#FFD495", // Aktif Hasta
        ],
        borderColor: "#000",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Bar data={data} />
    </div>
  );
}

export default ChartComponent;
