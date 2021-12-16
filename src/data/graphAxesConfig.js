export const options1 = {
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
export const options2 = {
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

export const labels1 = [
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
  "Jul '21",
  "Aug '21",
  "Sep' 21",
  "Oct '21",
  "Nov '21",
];

export const labels2 = [...labels1, "Dec '21", "Jan '22"];