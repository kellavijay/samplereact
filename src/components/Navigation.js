// Navigation.js
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../spsoft.svg";

const Navigation = () => {
  return (
    <div className="d-flex justify-content-between">
      <img src={logo} className="App-logo" alt="logo" />
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link text-white" href="/">
                  Login
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="/registration">
                  Registration
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
