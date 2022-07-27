import React from "react";
import { Link } from "react-router-dom";
import {
  Dashboard,
  Personnel_Stats,
  Personnel_Management,
  Project_Mgmt,
  Sblogo
} from "../../assets/logo";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div>
        <Sblogo className="logo" />
        {/* <img id="i_1" src={pts} alt="PTS" /> */}
      </div>
      <br></br>
      <Link to="/Dashboard/Overview">
        <Dashboard className="link-img" />
      </Link>
      <br></br>
      <Link to="/PersonnelStats">
        <Personnel_Stats className="link-img"/>
        {/* <img className="link-img" id="i_3" src={ps} alt="Personnel Stats" /> */}
      </Link>
      <br></br>
      <Link to="/PersonnelManagement/company">
        <Personnel_Management className="link-img"/>
        {/* <img
          className="link-img"
          id="i_4"
          src={pm}
          alt="Personnel Management"
        /> */}
      </Link>
      <br></br>
      <Link to="/ProjectManagement">
        {/* <img className="link-img" id="i_5" src={pr} alt="Project Management" /> */}
 <Project_Mgmt className="link-img"/>
      </Link>
      <br></br>
    </div>
  );
};

export default Sidebar;
