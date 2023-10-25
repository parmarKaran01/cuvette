import React, { useState } from "react";
import "./Menubar.css";
import DashboardIcon from "../assets/dashboard.svg";
import InternshipIcon from "../assets/internship.svg";
import SkillIcon from "../assets/skill.svg";

const MenuItem = ({ name, img, idx, selectedNavLink, setSelectedNavLink }) => {
  return (
    <div
      className={`MenuItem-container ${
        idx === selectedNavLink ? "selected" : ""
      }`}
      onClick={() => setSelectedNavLink(idx)}
    >
      <img src={img} className="navbarImage" />
      <p className="nav-name">{name}</p>
    </div>
  );
};

const Menubar = () => {
  const [selectedNavLink, setSelectedNavLink] = useState(1);
  const navItems = [
    {
      idx: 0,
      name: "Dashboard",
      img: DashboardIcon,
    },
    {
      idx: 1,
      name: "Skill Test",
      img: SkillIcon,
    },
    {
      idx: 2,
      name: "Internships",
      img: InternshipIcon,
    },
  ];
  return (
    <div className="Menubar-container">
      {navItems.map((item) => {
        return (
          <MenuItem
            name={item.name}
            img={item.img}
            key={item.idx}
            idx={item.idx}
            selectedNavLink={selectedNavLink}
            setSelectedNavLink={setSelectedNavLink}
          />
        );
      })}
    </div>
  );
};

export default Menubar;
