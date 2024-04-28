import React from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import FrontPageNavbar from "../components/FrontpageNavbar";



const Frontpage = () => {
  const navigate = useNavigate();

  const FrontPageHeader = () => {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-7xl">Unlimited Movies, TV Shows, and more</h1>
        <h3 className="text-4xl mt-[1rem] ">watch anywhere, cancel anytime</h3>
        <button
      className="mb[10rem] mt-[1rem] bg-red-700 hover:bg-red-600  font-semibold py-[2rem] px-[4rem] text-3xl rounded"
          onClick={() => {
            navigate("/Register");
          }}
        >
          Get Started
        </button>
      </div>
    );
  };

  return (
    <div
      style={{
        backgroundImage:
          'url("https://flexsub.shop/content/images/size/w1200/2021/11/1_5lyavS59mazOFnb55Z6znQ.png")',
      }}
      className="text-white bg-cover  bg-no-repeat"
    >
      <FrontPageNavbar />
      <FrontPageHeader />
    </div>
  );
};

export default Frontpage;
