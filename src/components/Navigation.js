// Navigation.js
import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../spsoft.svg';

const Navigation = () => {
  return (
    <div className="d-flex">
      <img src={logo} className="App-logo" alt="logo" />
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container-fluid">
          <ul class="navbar-nav">
            <li class="nav-item text-white">
              <NavLink to="/">Login</NavLink>
            </li>
            <li class="nav-item text-white">
              <NavLink to="/registration">Registration</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
