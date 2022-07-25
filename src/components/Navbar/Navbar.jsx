import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ data }) => {
  return (
    <div>
      {data.map((link) => (
        <Link to={link.path}>{link.pathName}</Link>
      ))}
    </div>
  );
};

export default Navbar;
