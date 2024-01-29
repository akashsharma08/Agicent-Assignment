import React, { useState } from "react";
import arrow from "../assets/arrow.svg";
import ProductList from "./productList";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const [tabClick, setTabClick] = useState("home");

  const handleTabClick = (tab) => {
    console.log("Clicked!!!");
    setTabClick(tab);
    setClick(!click);
  };
  return (
    <>
      {/* Others */}
      <div className=" hidden md:flex items-center pb-2 justify-center gap-14">
        <div
          className={`cursor-pointer flex font-poppine font-semibold transition-all duration-500  ${
            tabClick === "home" ? "text-pink-500" : "text-purple-900"
          } `}
          onClick={() => {
            handleTabClick("home");
          }}
        >
          <Link to="/">Home</Link>
        </div>
        <div
          className={` relative cursor-pointer flex font-poppine font-semibold transition-all duration-300 ${
            tabClick === "products" ? "text-pink-500" : "text-purple-900"
          } `}
          onClick={() => {
            handleTabClick("products");
            

          }}
        >
          Products &nbsp; <img src={arrow} alt="" />
          {tabClick === "products" && click ? (
            <ProductList click={click} setClick={setClick} />
          ) : (
            ""
          )}
        </div>
        <div className=" cursor-pointer flex font-poppine font-semibold text-purple-900">
          Services&nbsp; <img src={arrow} alt="" />
        </div>
        <div className=" cursor-pointer font-poppine font-semibold text-purple-900">
          Courses
        </div>
        <div className=" cursor-pointer font-poppine font-semibold text-purple-900">
          Blogs
        </div>
        <div className=" cursor-pointer font-poppine font-semibold text-purple-900">
          Videos
        </div>
        <div className=" cursor-pointer font-poppine font-semibold text-purple-900">
          Contact us
        </div>
      </div>
      
      
    </>
  );
};

export default Navbar;
