import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Overview.css";

const data = [{ path: "/Dashboard/Overview", pathName: "Overview" }];

export const Overview = () => {
  return (
    <div className="main-container">
      <Sidebar />
      <div className="container">
        <Navbar data={data} />
      </div>
    </div>
  );
};
