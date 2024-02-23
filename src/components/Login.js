import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegistrationClick = () => {
    navigate('/registration');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Login</h2>
      <form onSubmit={handleSubmit} className="w-75 mx-auto my-4 p-4 shadow-lg">
        <div className="form-group mt-2">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="d-flex justify-content-between my-2">
          <div className="">
            <a className="mt-3">Forgot Password?</a>
            <br></br>

            <a className="mt-3" onClick={handleRegistrationClick}>Create Account</a>
          </div>

          <button type="submit" className="btn btn-primary mt-2">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
