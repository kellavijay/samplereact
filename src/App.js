import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Navigation from "./components/Navigation";
import NotFound from "./components/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="*" element={<NotFound />} /> {/* 404 Not Found route */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
