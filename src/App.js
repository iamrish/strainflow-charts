import React, { useState } from "react";
import { HashRouter, Route } from "react-router-dom";
import Dropdown from "./components/Dropdown";
import Cases from "./components/Cases";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar.js";
import Socials from "./components/Socials";
import Paper from "./components/Paper";
import Cards from "./components/Cards";

import countries from "./data/countries";
import countries_old from "./data/countries_old";
import EntropyToggler from "./components/EntropyToggler";
import entropies from "./data/entropies";

const App = () => {
  const [countrySelection, onCountrySelect] = useState({
    country: countries[3].country,
    cases: [...countries[3].cases],
    min: [...countries[3].min],
    max: [...countries[3].max],
    mean: [...countries[3].mean],
    preds: [...countries[3].preds],
  });

  let cardCountry = {
    country: countries_old[3].country,
    cases: [...countries_old[3].cases],
    min: [...countries_old[3].min],
    max: [...countries_old[3].max],
    mean: [...countries_old[3].mean],
    preds: [...countries_old[3].preds],
  };
  const [clicked, setClicked] = useState(false);

  for (const c of countries_old) {
    if (c.country === countrySelection.country) {
      cardCountry = { ...c };
    }
  }

  return (
    <div>
      <HashRouter>
        <Navbar clicked={clicked} setClicked={setClicked} />
        <div style={{ textAlign: "right", fontSize: "13px" }}>
          Last updated on 23-12-2021
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
            <div className="ui row">
              <div className="centered three wide column">
                <div style={{ textAlign: "center" }}>
                  <h2>Previous Prediction</h2>
                </div>
              </div>
            </div>
            <Cards country={cardCountry} />
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
