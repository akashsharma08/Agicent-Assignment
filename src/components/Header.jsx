import React, { useState } from "react";
import flamingo from "../assets/flamingo.svg";
import cart from "../assets/cart.svg";
import profile from "../assets/profile.svg";
// import menu from "../assets/menu.svg";
import location from "../assets/location.svg";
import Sidebar from "./Sidebar";

const Header = ({isSidebarOpen ,handleSidebarClose ,  handleSidebarToggle}) => {

  return (
    <>
      {/* other */}
      <div className="md:flex items-center hidden flex-col xl:flex-row justify-center gap-[10px] md:gap-4 px-6 py-7">
        <div className="flex ">
          <img src={flamingo} className="px-2" alt="" />
          <div className="">
            <div className="w-[134px] h-[23px] relative ">
              <p className="absolute top-0 left-0 font-normal font-righteous  text-lg leading-normal tracking-normal">
                <span className="text-[#fa5c98]">PINK</span>
                <span className="text-purple-900">FLAMINGO</span>
              </p>
            </div>
            <div className="w-[135px] h-[11px] relative">
              <div className="absolute top-0 left-0 font-righteous font-normal text-pink-500 text-[10px] text-center tracking-wide leading-normal">
                TAGLINE GOES HERE
              </div>
            </div>
          </div>
        </div>
        <div className="flex relative items-center justify-evenly border border-orange-500 rounded-md">
          <div className="w-[110px] items-center justify-evenly flex h-12 bg-[#fa5c98] text-white rounded-s">
            <div className="">
              <img src={location} alt="" />
            </div>
            <div className="">
              <div className="font-medium leading-none text-xs">Deliver to</div>
              <div className="font-medium leading-none text-[11px]">110094</div>
            </div>
          </div>
          <input
            type="text"
            placeholder="Search for medication & Wellness products."
            className=" placeholder:font-poppinereg placeholder:text-[12px] placeholder:pl-3 placeholder: placeholder:font-medium rounded-md h-12 w-[135px] md:w-[510px]"
          />
        </div>

        <div className="flex gap-4 items-center justify-center">
          <div className="w-[25px] h-[25px] relative">
            <img src={cart} alt="" className="absolute top-0 left-0 w-6 h-6" />
          </div>
          <div className="flex  justify-center gap-2">
            <div className=" w-8 h-8 ">
              <img className=" w-8 h-8 " src={profile} alt="" />
            </div>

            <div className="  font-poppine text-purple-900 font-semibold text-[13px] ">
              SIGN IN <span className="text-lg font-bold">|</span> SIGN UP
            </div>
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="flex md:hidden items-center flex-col xl:flex-row justify-center gap-[10px] md:gap-[40px]  px-6 py-7">
        <div className="flex items-center justify-between w-full">
          <div className="flex ">
            <img src={flamingo} className="px-2" alt="" />
            <div className="">
              <div className="w-[134px] h-[23px] relative ">
                <p className="absolute top-0 left-0 font-normal font-righteous  text-lg leading-normal tracking-normal">
                  <span className="text-[#fa5c98]">PINK</span>
                  <span className="text-purple-900">FLAMINGO</span>
                </p>
              </div>
              <div className="w-[135px] h-[11px] relative">
                <div className="absolute top-0 left-0 font-righteous font-normal text-pink-500 text-[10px] text-center tracking-wide leading-normal">
                  TAGLINE GOES HERE
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4 items-center justify-center">
            <div className="w-[25px] h-[25px] relative">
              <img
                src={cart}
                alt=""
                className="absolute top-0 left-0 w-6 h-6"
              />
            </div>
            <button onClick={handleSidebarToggle} ><img className="w-5" src="/menu.png" alt=""   /></button>
            
            <Sidebar isOpen={isSidebarOpen} onClose={handleSidebarClose}/>
          </div>
        </div>
        <div className="flex relative items-center justify-evenly border   border-orange-500 rounded-md">
          <div className="w-[110px] items-center justify-evenly flex h-12 bg-[#fa5c98] text-white rounded-s">
            <div className="">
              <img src={location} alt="" />
            </div>
            <div className="">
              <div className="font-medium leading-none text-xs">Deliver to</div>
              <div className="font-medium leading-none text-[11px]">110094</div>
            </div>
          </div>
          <input
            type="text"
            placeholder="Search for medication & Wellness products."
            className=" placeholder:font-poppinereg placeholder:text-[12px] placeholder:pl-3 placeholder: placeholder:font-medium rounded-md h-12 w-[135px] sm:w-[510px]"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
