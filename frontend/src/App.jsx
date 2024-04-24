import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Frontpage from './files/Frontpage.jsx'; 

function App() {
  return (
      <Routes>
        <Route path="/" element={<Frontpage />} /> 
      </Routes>
  );
}

export default App;
