import React from "react";
import "../styles/home.css"
const Home = () => {

  return <>
    <div className="root-grid">
      <div className="divv">
        <img className="pic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7oTLMnpSDcKph70hbrAvNMsqO7eSosWLnyg&s" alt="img" />
          <h4 style={{margin:"0px"}}>artist name is this</h4>
          <h5 style={{margin:"0px"}}>₹ : 600</h5>
          <div className="btn-container">
          <button className="btnn ">Add Cart</button>
          <button className="btnn">Buy Now</button>
          </div>
      </div>
      
    </div>
  </>
};

export default Home;
