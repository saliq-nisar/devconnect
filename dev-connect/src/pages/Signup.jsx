import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && name !== "") {
      navigate("/second");
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}> 
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
        <button type="submit">Login</button> 
      </form>
    </div>
  );
};

export default SignUp;
