import React from "react";

const FrontpageNavbar = () => {
  return (
    <div className="flex justify-between items-center">
      <img
        className="p-[2rem] h-[8rem] "
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
      ></img>
      <button className="bg-red-700 hover:bg-red-600  font-semibold py-[2rem] px-[4rem] text-3xl rounded mr-[2rem]">
        Sign In
      </button>
    </div>
  );
};

export default FrontpageNavbar;
