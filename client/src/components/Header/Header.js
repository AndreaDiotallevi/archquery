import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <header data-test="component-header">
      <div className="container-header">
        <Link id="website-name" to="/">
          ARCHQUERY
          <p id="website-description">The Q&A Site For Architects</p>
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
