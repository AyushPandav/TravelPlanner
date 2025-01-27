import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Plans from "./Pages/Plans";
import Destination from "./Pages/Destination";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Plans" element={<Plans />} />
        <Route path="/destinations" element={<Destination />} />
      </Routes>
    </Router>
  );
};

export default App;

