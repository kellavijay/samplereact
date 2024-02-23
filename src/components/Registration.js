import React, { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password_hash: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("User registered successfully");
        // Clear form fields or redirect to another page
      } else {
        const errorData = await response.json();
        alert(errorData.error || "Failed to register user");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred, please try again later");
    }
  };

  return (
    // <form onSubmit={handleSubmit}>
    //   <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
    //   <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
    //   <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
    //   <button type="submit">Register</button>
    // </form>

    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4 ">
          <h2 className="text-center">Register</h2>
          <form onSubmit={handleSubmit} className="mx-auto my-4 p-4 shadow-lg">
            <div className="form-group mt-2 text-start">
              <label htmlFor="username ">Username:</label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                placeholder="Enter username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group text-start">
              <label htmlFor="password pt-1">Email:</label>
              <input
                type="pasemailsword"
                className="form-control"
                name="email"
                id="password"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group text-start">
              <label htmlFor="password pt-1">Password:</label>
              <input
                type="password"
                className="form-control"
                name="password"
                id="password"
                placeholder="Enter email"
                value={formData.password} 
                onChange={handleChange}
                required
              />
            </div>


              <button type="submit" className="btn btn-primary mt-2">
                Register
              </button>
           
          </form>
        </div>
      </div>
    </div>
    
  );
}

export default RegistrationForm;
