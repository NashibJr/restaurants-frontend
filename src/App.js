import React from "react";
import Login from "./pages/login.js";
import Dashboard from "./pages/dashboard.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SingleRestaurant from "./pages/singlepage.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/singlerestaurants/:id" element={<SingleRestaurant />} />
      </Routes>
    </Router>
  );
}

export default App;
