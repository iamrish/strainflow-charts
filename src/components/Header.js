import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui pointing large menu">
      <Link to="/">
        <img
          src={logo}
          alt="STRAINFLOW"
          style={{
            paddingLeft: "20px",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        />
      </Link>
      <div className="right menu">
        <Link to="/" className="item" style={{ paddingTop: "10px important" }}>
          Cases Plots
        </Link>
        <Link to="/entropy-plots" className="item">
          Entropy Plots
        </Link>
      </div>
    </div>
  );
};

export default Header;
