import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <Link to="/Dashboard/Overview">Dashboard</Link>
      <br></br>
      <Link to="/PersonnelStats">Personal Stats</Link>
      <br></br>
      <Link to="/PersonnelManagement/company">Personnel Management</Link>
      <br></br>
      <Link to="/ProjectManagement">Project Management</Link>
    </div>
  );
};

export default Sidebar;
