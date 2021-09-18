import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
import countries from "./dummyData/countries";
import Cases from "./components/Cases";
import logo from "./images/logo.png";

const App = () => {
  const [countrySelection, onCountrySelect] = useState({
    country: countries[0].country,
    cases: [...countries[0].cases],
    min: [...countries[0].min],
    max: [...countries[0].max],
    mean: [...countries[0].mean],
    preds: [...countries[0].preds],
  });
  // const [monthSelection, onMonthSelect] = useState(months[0]);

  return (
    <div className="ui grid stackable">
      <div className="ui row">
        <img
          src={logo}
          alt="STRAINFLOW"
          style={{ paddingLeft: "20px", paddingTop: "10px" }}
        />
      </div>
      <div className="ui row">
        <div
          className="centered twelve wide column"
          style={{ paddingTop: "20px" }}
        >
          <Dropdown
            selection={countrySelection}
            label={"Country"}
            onSelect={onCountrySelect}
            options={countries}
          />
        </div>
      </div>
      <Cases country={countrySelection} />
    </div>
  );
};

export default App;
