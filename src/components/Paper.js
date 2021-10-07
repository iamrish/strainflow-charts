import React from "react";
import graphicalAbstarct from "../images/graphical_abstract.PNG";

const Paper = () => {
  return (
    <div className="ui row">
      <div className="sixteen wide column" style={{ textAlign: "center" }}>
        <h1>Graphical Abstract</h1>
        <img
          src={graphicalAbstarct}
          alt="Graphical Abstract"
          onClick={() =>
            window.open(
              "https://www.biorxiv.org/content/10.1101/2021.05.25.445601v3.full.pdf"
            )
          }
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default Paper;
