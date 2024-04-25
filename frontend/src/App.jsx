import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
<<<<<<< HEAD
import Frontpage from './files/Frontpage.jsx'; 
import SignUp1 from './files/signUpFiles/SignUp1.jsx'

function App() {
  return (
      <Routes>
        <Route path="/" element={<Frontpage />} />
        <Route path="/Register" element={<SignUp1/>}/>
      </Routes>
=======
import Frontpage from "./files/Frontpage.jsx";
import SignUp1 from "./files/signUpFiles/SignUp1.jsx";
import Login from "./files/Login.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Frontpage />} />
      <Route path="/Register" element={<SignUp1 />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
>>>>>>> 0938e3202bf28a80f482058edd61f97b653f5d30
  );
}

export default App;
