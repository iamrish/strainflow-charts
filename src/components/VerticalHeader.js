import React from "react";
import { Line } from "react-chartjs-2";

const options1 = {
  scales: {
    yAxes: [
      {
        position: "left",
        id: "Cases",
        scaleLabel: {
          display: true,
          labelString: "CASES",
          fontSize: 12,
          padding: 10,
        },
      },
      {
        position: "right",
        id: "Entropy",
        scaleLabel: {
          display: true,
          labelString: "ENTROPY",
          fontSize: 12,
          padding: 10,
        },
      },
    ],
  },
};
const options2 = {
  scales: {
    yAxes: [
      {
        position: "left",
        id: "Cases",
        scaleLabel: {
          display: true,
          labelString: "CASES",
          fontSize: 12,
          padding: 10,
        },
      },
    ],
  },
};

const labels1 = [
  "Mar '20",
  "Apr '20",
  "May '20",
  "Jun '20",
  "Jul '20",
  "Aug '20",
  "Sep '20",
  "Oct '20",
  "Nov '20",
  "Dec '20",
  "Jan '21",
  "Feb '21",
  "Mar '21",
  "Apr '21",
  "May '21",
  "Jun '21",
];

const labels2 = [...labels1, "Jul' 21", "Aug '21"];

const VerticalHeader = ({ country }) => {
  // console.log(country);
  const state1 = {
    labels: labels1,
    datasets: [
      {
        label: "Cases",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: country.cases,
        yAxisID: "Cases",
      },
      {
        label: "Min Ent",
        fill: "+1",
        lineTension: 0.1,
        backgroundColor: "rgb(204, 239, 255)",
        borderColor: "rgb(77, 198, 255)",
        data: country.min,
        yAxisID: "Entropy",
      },
      {
        label: "Max Ent",
        fill: "-1",
        lineTension: 0.1,
        backgroundColor: "rgb(204, 239, 255)",
        borderColor: "rgb(77, 198, 255)",
        data: country.max,
        yAxisID: "Entropy",
      },
      {
        label: "Mean Ent",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgb(0, 51, 77)",
        borderColor: "rgb(0, 51, 77)",
        data: country.mean,
        yAxisID: "Entropy",
      },
    ],
  };

  const state2 = {
    labels: labels2,
    datasets: [
      {
        label: "Cases",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: country.cases,
      },
      {
        label: "Predictions",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgb(204, 239, 255)",
        borderColor: "rgb(77, 198, 255)",
        data: country.preds,
      },
    ],
  };
  return (
    <div className="ui row">
      <div className="eight wide column">
        <div className="ui segment">
          <Line
            data={state1}
            options={options1}
            style={{ paddingLeft: "20px" }}
          />
        </div>
      </div>
      <div className="eight wide column">
        <div className="ui segment">
          <Line
            data={state2}
            options={options2}
            style={{ paddingRight: "20px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default VerticalHeader;
