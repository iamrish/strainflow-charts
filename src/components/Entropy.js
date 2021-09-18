import React from "react";
import { Line } from "react-chartjs-2";

const options = {
  scales: {
    yAxes: [
      {
        position: "left",
        id: "Entropy",
        scaleLabel: {
          display: true,
          labelString: "Sum of Entropies",
          fontSize: 12,
          padding: 10,
        },
      },
    ],
  },
};

const Entropy = ({ entropies }) => {
  const datasets = [];

  const labels = [];

  for (let i = 0; i < 10; i++)
    datasets.push({
      label: entropies[i].country,
      fill: false,
      lineTension: 0.1,
      data: entropies[i].dimensionSum,
      backgroundColor: entropies[i].colour,
      borderColor: entropies[i].colour,
    });
  for (let i = 1; i <= 36; i++) labels.push(i);

  const state = {
    labels: labels,
    datasets: datasets,
  };
  console.log(entropies);

  return (
    <div className="ui row" style={{ paddingTop: "50px" }}>
      <div className="centered twelve wide column">
        <div className="ui segment">
          <Line data={state} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Entropy;
