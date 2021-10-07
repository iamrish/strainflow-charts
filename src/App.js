import React, { useState } from "react";
import { HashRouter, Route } from "react-router-dom";
import Dropdown from "./components/Dropdown";
import Cases from "./components/Cases";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar.js";
import Socials from "./components/Socials";
import Paper from "./components/Paper";

import countries from "./dummyData/countries";
import EntropyToggler from "./components/EntropyToggler";
import entropies from "./dummyData/entropies";

const App = () => {
  const [countrySelection, onCountrySelect] = useState({
    country: countries[0].country,
    cases: [...countries[0].cases],
    min: [...countries[0].min],
    max: [...countries[0].max],
    mean: [...countries[0].mean],
    preds: [...countries[0].preds],
  });
  const [clicked, setClicked] = useState(false);
  // const [monthSelection, onMonthSelect] = useState(months[0]);

  return (
    <div>
      <HashRouter>
        <Navbar clicked={clicked} setClicked={setClicked} />
        <div style={{ textAlign: "right", fontSize: "13px" }}>
          Last updated on 08-10-2021
        </div>
        <div className="ui grid stackable" style={{ opacity: clicked ? 0 : 1 }}>
          <Route path="/" exact>
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
          </Route>
          <Route path="/entropy-plots" exact>
            <EntropyToggler entropies={entropies} />
          </Route>
          <Route path="/paper" exact>
            <Paper />
          </Route>
        </div>
        <Socials clicked={clicked} />
        <Footer clicked={clicked} />
      </HashRouter>
    </div>
  );
};

export default App;
