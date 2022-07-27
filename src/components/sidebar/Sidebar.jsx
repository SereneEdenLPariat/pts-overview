import React from "react";
import { Link } from "react-router-dom";
import {
  Dashboard,
  Personnel_Stats,
  Personnel_Management,
  ptslogo,
} from "../../assets/logo";

import ps from "../../assets/02_personnelstats.svg";
import pm from "../../assets/03_personnelmgmt.svg";
import pr from "../../assets/04_projectmgmt.svg";
import pts from "../../assets/00_ptslogo.svg";
import sblogo from "../../assets/05_sblogo.svg";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img id="i_1" src={pts} alt="PTS" />
      </div>
      <br></br>
      <Link to="/Dashboard/Overview">
        <Dashboard />
      </Link>
      <br></br>
      <Link to="/PersonnelStats">
        <img className="link-img" id="i_3" src={ps} alt="Personnel Stats" />
      </Link>
      <br></br>
      <Link to="/PersonnelManagement/company">
        <img
          className="link-img"
          id="i_4"
          src={pm}
          alt="Personnel Management"
        />
      </Link>
      <br></br>
      <Link to="/ProjectManagement">
        <img className="link-img" id="i_5" src={pr} alt="Project Management" />
      </Link>
      <br></br>
      <div className="sblogo">
        <img id="i_6" src={sblogo} alt="sb logo" />
      </div>
    </div>
  );
};

export default Sidebar;
