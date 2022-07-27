import React from "react";
import { Link } from "react-router-dom";
import ham from "../../assets/01_hamburger.svg";
import profile from "../../assets/02_profile.svg";
import "./Navbar.css";

const Navbar = ({ data }) => {
  return (
    <div>
      <div className="top-Nav">
        <div className="img_1">
          <img src={ham} alt="Hamburger" />
        </div>

        <div className="img_2">
          <img src={profile} alt="profile" />
        </div>
      </div>

      <div className="nav">
        {data.map((link) => (
          <Link to={link.path}>{link.pathName} &nbsp; </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
