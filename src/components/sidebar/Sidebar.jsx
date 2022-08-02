import React from "react";
import { Link } from "react-router-dom";
import {
  Dashboard,
  PersonnelStats,
  PersonnelManagement,
  ProjectMgmt,
  Sblogo,
} from "../../assets/logo";
//import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div>
        <Sblogo className="logo" />
      </div>
      <br></br>
      <Link to="/dashboard/overview">
        <Dashboard className="link-img" />
      </Link>
      <br></br>
      <Link to="/PersonnelStats">
        <PersonnelStats className="link-img" />
      </Link>
      <br></br>
      <Link to="/PersonnelManagement/company">
        <PersonnelManagement className="link-img" />
      </Link>
      <br></br>
      <Link to="/ProjectManagement">
        <ProjectMgmt className="link-img" />
      </Link>
      <br></br>
    </div>
  );
};

export default Sidebar;
