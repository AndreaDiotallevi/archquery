import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <div className="component-header">
      <div className="container-header">
        <Link to="/">ARCHquery</Link>
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
