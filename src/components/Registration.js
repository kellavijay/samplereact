import React, { useState } from "react";

const Registration = () => {
  // State variables for form fields
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    if (!username || !email || !password || !confirmPassword) {
      alert("Please fill in all fields");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // If form is valid, you can submit the data to your backend or handle it as needed
    console.log("Form submitted:", { username, email, password });
    // Clear form fields
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="row justify-content-center">
    <div className="col-md-3">
      <h2>Registration</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group text-start ">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group text-start">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group text-start">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group text-start">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            className="form-control"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Register
        </button>
      </form>
    </div>
    </div>
  );
};

export default Registration;
