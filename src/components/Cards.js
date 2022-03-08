import React from "react";
import CasesLeftGraph from "./CasesLeftGraph";

const Cards = (country) => {
  console.log(country.country);
  const history = country.country.map((c) => {
    return (
      <div className="centered seven wide column">
        <CasesLeftGraph country={c} labels={c.predDates} />
      </div>
    );
  });
  return <>{history}</>;
};

export default Cards;
