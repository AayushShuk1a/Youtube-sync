import React from "react";
import NavBar1 from "./components/NavBar1";
import "../src/styles/App.css";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/navbar1" element={<NavBar1 />} />
      </Routes>
    </div>
  );
};

export default App;
