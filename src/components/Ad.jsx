import React from "react";
import a from "../../src/assets/add.png";
import c from "../assets/cut.svg";
const Ad = () => {
  return (
    <div className=" relative z-10 w-[100vw]">
      <div className="absolute  w-[100vw] h-[40px]  top-0 left-0">
        <img
          className="fixed opacity-75 w-full h-[40px]   top-0 left-0"
          alt="Add"
          src={a}
        />
      </div>
      <div className="fixed w-full  flex items-center  top-0 left-0 font-manrope text-purple-900 text-sm font-bold text-center tracking-normal leading-normal   ">
        <p className="mt-4 sm:mt-2 w-full h-full  font-manrope   text-purple-900 text-[8px] sm:text-sm font-bold text-center tracking-normal leading-normal  ">
          QUICK BUY! Get up to 25% off on All Stones
        </p>
      </div>
      <div className="w-4 h-4 fixed  left-4">
        <img src={c} alt="cart" className="sm:w-4 w-3  fixed top-3  right-9 sm:right-[50px] md:right-[130px] lg:right-[200px] " />
      </div>
    </div>
  );
};

export default Ad;



