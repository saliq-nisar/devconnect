import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#333", color: "#fff" }}>
      <a href="/home" style={{ color: "#fff" }}>{props.name}</a>
      <Link to="/" > Login</Link>
    </nav>
  );
};
 

export default React.memo(Navbar);
