import React from "react";
import { useNavigate } from 'react-router-dom'; // Correct import statement

const FrontpageNavbar = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex justify-between items-center">
      <img
        className="p-[2rem] h-[8rem] "
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="Netflix Logo" // Added alt attribute for accessibility
      />
      <button onClick={() => navigate("/Login")} className="bg-red-700 hover:bg-red-600  font-semibold py-[2rem] px-[4rem] text-3xl rounded mr-[2rem]">
        Sign In
      </button>
    </div>
  );
};

export default FrontpageNavbar;

