import React from "react";

const Navbar = (props) => {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#333", color: "#fff" }}>
      <a href="/home" style={{ color: "#fff" }}>{props.name}</a>
    </nav>
  );
};

export default React.memo(Navbar);
