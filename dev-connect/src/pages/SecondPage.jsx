import React, { useState } from "react";

const SecondPage = () => {
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password && password !== "") {
    }
  };

  return (
    <>
     <form onSubmit={handleSubmit}> 
      <div>
        <label htmlFor="password">Password:</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          id="password"
          name="password"
          required
        />
      </div>
      <button type="submit"> 
        Login
      </button>
      </form>
    </>
  );
};

export default SecondPage;
