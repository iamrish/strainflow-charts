import React from "react";
import CasesLeftGraph from "./CasesLeftGraph";
import { labels1 } from "../data/graphAxesConfig";

// const labels = [];
// for (let i = 0; i < labels1.length - 2; i++) {
//   labels.push(labels1[i]);
// }

const Cards = ({ country }) => {
  return (
    <div className="centered seven wide column">
      <CasesLeftGraph country={country} labels={labels1} />
    </div>
  );
};

export default Cards;
