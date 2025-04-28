import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar name = "Home" />
      <main style={{ flex: 1, padding: "1rem" }}>
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
