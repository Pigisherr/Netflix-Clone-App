import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Frontpage from './files/Frontpage.jsx'; 
import SignUp1 from './files/signUpFiles/SignUp1.jsx'

function App() {
  return (
      <Routes>
        <Route path="/" element={<Frontpage />} />
        <Route path="/Register" element={<SignUp1/>}/>
      </Routes>
  );
}

export default App;
