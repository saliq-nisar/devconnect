import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css"
import useLocalStorage from "../customHooks/useLocalStorage";
import AuthService from "../services/AuthService";
const Login = () => {
    const [name, setName] = useState("");
    const [token, setToken] = useLocalStorage("token", null);

   
     const navigate = useNavigate();
   
     const handleSubmit = async(e) => {
       e.preventDefault();
       if (name && name !== "") {
        try {
          const response = await AuthService.loginUser({
            name: name
          });
          setToken(response.data.token);
          alert("logged in successfully")
          response.data.message =="Login successful"? navigate("/home"):alert("error logging in")
          console.log("Login successful:", response.data);
        } catch (error) {
          console.error("Login failed:", error);
        }
       }else{
        alert("invalid input")
       }
     };

  return (

    <div className="flex">
      <img className="left-img " src="https://media.istockphoto.com/id/1190200652/photo/the-painter-hands.jpg?s=612x612&w=0&k=20&c=ejXBjL330H0_i7O90UaRnMqP2G-ZQLgI4XBeXxweWss=" alt="loading" />
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              id="username"
              name="username"
              required
            />
          </div>
          <button className="btn" type="submit">Next</button>
          <h6> <a href="/signup"> Already have an account ?</a> </h6>
        </form>
 
      </div>

    </div>

  );
}
export default Login;