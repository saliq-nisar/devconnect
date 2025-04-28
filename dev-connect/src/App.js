import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import redBorder from "./hocs/redBorder";

const App = () => {
  const EnhancedComponent = redBorder(Home);
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        
        <Route element={<Layout />}>
          <Route path="/home" element={<EnhancedComponent naa="sese" />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
