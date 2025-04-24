import React from "react";

const Navbar = () => {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#333", color: "#fff" }}>
      <a href="/" style={{ marginRight: "1rem", color: "#fff" }}>Home</a>
      <a href="/about" style={{ color: "#fff" }}>About</a>
    </nav>
  );
};

export default Navbar;
