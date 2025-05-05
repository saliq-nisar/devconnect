import React from "react";

const Navbar = () => {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#333", color: "#fff" }}>
      <a href="/home" style={{ color: "#fff" }}>Home</a>
      <a href="/upload" style={{ color: "#fff" }}>Upload</a>
      <a href="/message" style={{ color: "#fff" }}>Message</a>
      <a href="/settings" style={{ color: "#fff" }}>Settings</a>
    </nav>
  );
};
 

export default Navbar;
