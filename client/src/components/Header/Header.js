import React from "react";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <div className="component-header">
      <div className="container-header">
        <div>
          <h1>ArchQuery</h1>
        </div>
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
