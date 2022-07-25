import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Overview.css";

const data = [{ path: "/Dashboard/Overview", pathName: "Overview" }];

export const Overview = () => {
  return (
    <div className="main-container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="navbar">
        <Navbar data={data} />
      </div>
    </div>
  );
};
