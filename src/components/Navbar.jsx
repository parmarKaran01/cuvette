import React from "react";
import "./Navbar.css";
import MainLogo from "../assets/cuvette.svg";
import Avatar from "../assets/avatar.jpeg"

const Navbar = () => {
  return (
    <div className="Navbar-container">
      <img className="cuvetteLogo" src={MainLogo} />

      <div className="userInfoWrapper">
        <img src={Avatar} className="avatar"/>
        <h3 className="userName">Siddharth Jain</h3>
      </div>
    </div>
  );
};

export default Navbar;
